import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AuthService} from "../services/auth.service";
import {ActionTypes} from "./api-endpoints";
import {Environment} from "./environment";
import {ApiEndpoint} from "./model/endpoint";


@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl = Environment.apiBaseUrl;
    private loginUrl = Environment.loginUrl;

    public getToken() {
        return localStorage.getItem('token');
    }

    constructor(private http: HttpClient) {}

    /**
     * Build headers (Auth + JSON/multipart)
     */
    private buildHeaders(isMultiPart: boolean = false): HttpHeaders {
        const token = this.getToken();
        let headers = new HttpHeaders();

        if (token) {
            headers = headers.set('Authorization', `Bearer ${token}`);
        }

        if (!isMultiPart) {
            headers = headers.set('Content-Type', 'application/json');
        }

        return headers;
    }

    /**
     * Generalized POST for all actions (create, update, delete, search, login)
     */
    post<T>(apiInfo: ApiEndpoint, body: any = {}): Observable<T> {
        // Inject standard "source" property
        body.source = "KYC_APP";

        // Decide base path: login requests go to loginUrl
        const basePath = (apiInfo.actionType === ActionTypes.LOGIN) ? this.loginUrl : this.baseUrl;

        const headers = this.buildHeaders(apiInfo.isMultiPart);
        const requestOptions = { headers };

        return this.http.post<T>(`${basePath}/${apiInfo.apiPath}`, body, requestOptions).pipe(
            catchError(this.handleError)
        );
    }

    /**
     * Error handler
     */
    private handleError(error: HttpErrorResponse) {
        console.error('API Error:', error);
        let errorMsg = 'An unknown error occurred';
        if (error.error instanceof ErrorEvent) {
            errorMsg = `Client error: ${error.error.message}`;
        } else {
            errorMsg = `Server error (${error.status}): ${error.message}`;
        }
        return throwError(() => new Error(errorMsg));
    }
}
