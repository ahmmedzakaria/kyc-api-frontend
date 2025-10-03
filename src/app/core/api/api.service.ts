import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import {environment} from "./environment";
import {ActionTypes} from "./api-endpoints";


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private baseUrl = environment.apiBaseUrl
    private loginUrl = environment.loginUrl

    constructor(private http: HttpClient) {}

    /**
     * Get Token from local storage
     */
    public getToken() {
        console.log(localStorage.getItem('token'))
        return localStorage.getItem('token');
    }

    /**
     * Get JWT auth headers as observable
     */
    private getAuthHeaders(apiInfo: any): Observable<HttpHeaders> {
        return from(
            Promise.resolve(
                apiInfo.isMultiPart ?
                    new HttpHeaders({
                        'Authorization': `Bearer ${this.getToken()}`
                    }) :
                    new HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.getToken()}`
                    })
            )
        );
    }

    /**
     * Generalized POST method
     * @param apiInfo - API detail information
     * @param body - request body
     * @param options - extra request options (headers, responseType, etc.)
     */
    post<T>(
        apiInfo: any,
        body: any,
        options: { headers?: HttpHeaders; responseType?: any; observe?: any } = {}
    ): Observable<T> {
        return this.getAuthHeaders(apiInfo).pipe(
            switchMap(headers => {
                const requestOptions = {
                    ...options,
                    headers: options.headers || headers
                };
                body.source = "KYC_APP"
                console.log(body);
                let basePath = (apiInfo.actionType = ActionTypes.LOGIN)?this.loginUrl : this.baseUrl;
                return this.http.post<T>(`${basePath}/${apiInfo.apiPath}`, body, requestOptions);
            }),
            catchError(this.handleError)
        );
    }

    /**
     * Example helper to wrap API info object usage
     */
    postHandler<T>(apiInfo: any, payload: any = {}): Observable<T> {
        if (!apiInfo) {
            return throwError(() => new Error('API information is missing'));
        }
        return this.post<T>(apiInfo.apiPath, payload);
    }

    /**
     * Error handler
     */
    private handleError(error: HttpErrorResponse) {
        console.error('API error occurred:', error);
        let errorMsg = 'An unknown error occurred';
        if (error.error instanceof ErrorEvent) {
            errorMsg = `Client error: ${error.error.message}`;
        } else if (error.status) {
            errorMsg = `Server error (${error.status}): ${error.message}`;
        }
        return throwError(() => new Error(errorMsg));
    }
}
