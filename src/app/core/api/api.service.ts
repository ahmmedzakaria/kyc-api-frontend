import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, from, map, catchError, throwError, of} from 'rxjs';

import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiBaseUrl

  constructor(private http: HttpClient, private notification: NotificationService) {}

  // ✅ Function to get token dynamically
  private getAuthHeaders(isFileUpload: boolean): Observable<HttpHeaders> {
    return from(keycloak.updateToken(30)) // ✅ Refresh token if needed (30 sec buffer)
      .pipe(
        switchMap(() => {
          const token = keycloak.token;
          // console.log('Keycloak Token:', token);
          return from(
            Promise.resolve(
              isFileUpload ?
              new HttpHeaders({
                'Authorization': `Bearer ${token}`
              }) :
              new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              })
            )
          );
        })
      );
  }

  // ✅ POST Request with Dynamic Token Handling
  // post(endpoint: string, body: any): Observable<any> {
  //   return this.getAuthHeaders(false).pipe(
  //     switchMap(headers =>
  //       this.http.post(`${this.baseUrl}/${endpoint}`, body, { headers })
  //     )
  //   );
  // }

  post(endpoint: string, body: any, options: { headers?: HttpHeaders, responseType?: any } = {}): Observable<any> {
    return this.getAuthHeaders(false).pipe(
      switchMap(headers => {
        // Merge custom headers with any additional options
        const requestOptions = {
          ...options,
          headers: options.headers || headers
        };
        return this.http.post(`${this.baseUrl}/${endpoint}`, body, requestOptions);
      })
    );
  }

  postNew(endpoint: string, body: any, options: { headers?: HttpHeaders, responseType?: any, observe?: any } = {}): Observable<any> {
    return this.getAuthHeaders(false).pipe(
      switchMap(headers => {
        // Merge custom headers with any additional options
        const requestOptions = {
          ...options,
          headers: options.headers || headers
        };
        //console.log('options',options,'requestOptions', requestOptions)
        return this.http.post(`${this.baseUrl}/${endpoint}`, body, requestOptions);
      })
    );
  }

  fetchBinaryData(apiInfo: any, payload: any = {}, options: { headers?: HttpHeaders, responseType?: any, observe?: any} = {}): any{
    if(!apiInfo) return throwError(() => new Error("Api information is missing"));
    this.updatePayload(apiInfo, payload)
    //console.log("======apiMap", apiInfo)
    //console.log("=======payload", payload)
    return this.postNew(apiInfo['apiPath'], payload, options).pipe(
      map((response: HttpResponse<ArrayBuffer>) => {
        //console.log('fetchBinaryDataNew response', response);
        const contentType = response.headers.get('Content-Type');
        const contentDisposition = response.headers.get('Content-Disposition');
        let filename = 'download';

        if (contentDisposition) {
          const match = contentDisposition.match(/filename="?(.+)"?/);
          if (match) {
            filename = match[1];
          }
        }

        filename = filename.toLowerCase();
        const blob = new Blob([response.body!], { type: contentType || 'application/octet-stream' });

        return { blob, filename, contentType };

      }),
      catchError(error => this.handleError(error))
    );
  }


  get(endpoint: string, options: { headers?: HttpHeaders, responseType?: any } = {}): Observable<any> {
    return this.getAuthHeaders(false).pipe(
      switchMap(headers => {
        // Merge custom headers with any additional options
        const requestOptions = {
          ...options,
          headers: options.headers || headers
        };
        return this.http.get(`${this.baseUrl}/${endpoint}`, requestOptions);
      })
    );
  }


  fetchApiData(payload:any, path:string): Observable<any[]> {
    return this.post(path, payload).pipe(
      map(response => {
        if (response && response.code === "000" && Array.isArray(response.data)) {
          // console.warn("⚠️ Api Success:", response);
          return response.data
        } else {
          console.warn("⚠️ Invalid Response Format:", response);
          return response.code;
        }
      }),
      catchError(error => {
        console.error("❌ Error fetching :", error);
        return error;
      })
    );
  }

  postHandler(apiInfo: any, payload: any = {}): Observable<any> {
    if (!apiInfo) return throwError(() => new Error("Api information is missing"));
    this.updatePayload(apiInfo, payload);
    return this.post(apiInfo['apiPath'], payload).pipe(
      switchMap(response => this.handleApiResponse(response)),
      catchError(error => this.handleError(error))
    );
  }
  keywords = [ 'duplicate key value violates unique constraint'];
  private handleApiResponse(response: any): Observable<any> {
    if (!response) {
      console.warn("⚠️ Empty response received");
      this.notification.showError("Empty response from server!");
      return throwError(() => new Error("Empty response from server"));
    }

    if (response.code === "000") {
      // console.warn("✅ API Success:", response);
      return of(response); // ✅ wrap in Observable
    }else if (response.code === '999') {
      let msg = response.msg
      const match = msg.match(/Detail: Key \(["']?([\w]+)["']?\)=\((.*?)\) already exists\./);
      if (match) {
        msg = `${match[2]} already exists`;
        console.warn(msg);
        this.notification.showWarning(msg);
      }
      return throwError(() => new Error(msg || "Unknown API error"));
    } else {
      console.warn("⚠️ API Error Response:", response);
      this.notification.showError(response.msg || "Unknown API error");
      return throwError(() => new Error(response.msg || "Unknown API error"));
    }
  }

  /**
   * New Method for Fetching Binary Data (PDF)
   */
  // fetchBinaryData(apiInfo: any, payload: any = {}): Observable<ArrayBuffer> {
  //   if(!apiInfo) return throwError(() => new Error("Api information is missing"));
  //   this.updatePayload(apiInfo, payload)
  //   console.log("======apiMap", apiInfo)
  //   console.log("=======payload", payload)
  //   return this.post(apiInfo['apiPath'], payload, { responseType: 'blob' }).pipe(
  //     switchMap((blob: Blob) => {
  //       return new Observable<ArrayBuffer>(observer => {
  //         const reader = new FileReader();
  //
  //         reader.onload = () => {
  //           observer.next(reader.result as ArrayBuffer);
  //           observer.complete();
  //         };
  //
  //         reader.onerror = error => {
  //           observer.error(error);
  //         };
  //
  //         reader.readAsArrayBuffer(blob);
  //       });
  //     }),
  //     catchError(error => this.handleError(error))
  //   );
  // }

  /**
   * Common Error Handler for Both Methods
   */
  private handleError(error: any): Observable<never> {
    console.error("HTTP Error:", error);
    let errorMessage = "An error occurred.";

    // Handle HTTP status codes
    switch (error.status) {
      case 0:
        errorMessage = "0 - Network error or the application might be down. ";
        break;
      case 400:
        errorMessage = "400 - Bad request. Please check your input.";
        break;
      case 401:
        errorMessage = "401 - Unauthorized access. Please log in.";
        break;
      case 403:
        errorMessage = "403 - Access denied.";
        break;
      case 404:
        errorMessage = "404 - Requested resource not found.";
        break;
      case 409:
        errorMessage = "409 - Conflict detected.";
        break;
      case 413:
        errorMessage = "413 - Request Entity Too Large.";
        break;
      case 500:
        errorMessage = "500 - Internal server error.";
        break;
      case 502:
        errorMessage = "502 - Bad gateway.";
        break;
      case 503:
        errorMessage = "503 - Service unavailable.";
        break;
      case 504:
        errorMessage = "504 - Gateway timeout.";
        break;
      default:
        errorMessage = `Unexpected Error: ${error.status}`;
    }

    // Handle backend-specific error messages
    if (error.error) {
      if (error.error.errors && error.error.errors.length > 0) {
        errorMessage = error.error.errors[0].message || errorMessage;
      } else if (error.error.message) {
        errorMessage = error.error.message;
      }
    } else if (error.message) {
      errorMessage = error.message;
    }

    // Show the error message
    this.notification.showError(errorMessage);

    // Return observable error with the message
    return throwError(() => new Error(errorMessage));
  }



  private updatePayload(apiMap: any, payload: any) {
    payload = payload || {};
    payload['service'] = apiMap['service'];
    payload['actionType'] = apiMap['actionType'];
    if (apiMap['filters']) {
      payload['filters'] = payload['filters'] ?? apiMap['filters'];
      payload['pagination'] = payload['pagination'] ?? false;
      payload['pageNo'] = payload['pageNo'] ?? 0;
      payload['rowCount'] = payload['rowCount'] ?? 0;
    }
  }

  uploadFile(files: File[], isStockIn: boolean): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    const uploadConfig:any = ApiEndpoints.UPLOAD_IMAGE;

    files.forEach((file, index) => {
      formData.append('files', file, file.name);
    });

    formData.append('stockTxnType', isStockIn ? '1' : '2');
    formData.append('actionType', uploadConfig.actionType);
    formData.append('service', uploadConfig.service);

    return this.getAuthHeaders(true).pipe(
      switchMap(headers => {
        const req = new HttpRequest('POST',`${this.baseUrl}/${uploadConfig.apiPath}`, formData, {
          headers: headers,
          reportProgress: true,
          responseType: 'json'
        });
        return this.http.request(req);
      }),
      switchMap(event => {
        if (event instanceof HttpResponse) {
          return this.handleApiResponse(event.body).pipe(
            map(data => event.clone({ body: data }))
          );
        }
        return of(event); // For progress or other events
      }),
      catchError(error => this.handleError(error))
    );
  }



}



