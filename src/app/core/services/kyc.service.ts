import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {API} from '../config/api.config';
import {switchMap} from "rxjs/operators";
import {AuthService} from "./auth.service";
import {ApiService} from "../api/api.service";
import {ApiEndpoints} from "../api/api-endpoints";

export interface Kyc {
    id?: number;
    name: string;
    email: string;
    phone: string;
    photoUrl?: string;
    photoString?: any
}

@Injectable({providedIn: 'root'})
export class KycService {
    private apiUrl = `${API.BASE_URL}${API.KYC.CREATE}`;

    constructor(private http: HttpClient, private authService: AuthService, private apiService: ApiService) {
    }
/*
    createKyc(data: FormData): Observable<Kyc> { return this.http.post<Kyc>(this.apiUrl, data,{headers:this.getAuthHeaders(true)}); }
    updateKyc(id: number, data: FormData): Observable<Kyc> { return this.http.post<Kyc>(`${API.BASE_URL}${API.KYC.UPDATE}`, data,{headers:this.getAuthHeaders(true)}); }

*/

    createKyc(data: FormData): Observable<Kyc> {
        return this.apiService.post<Kyc>(ApiEndpoints.KYC_CREATE, data);
    }

    updateKyc(id: number, data: FormData): Observable<Kyc> {
        return this.apiService.post<Kyc>(ApiEndpoints.KYC_UPDATE, data);
    }

    deleteKyc(id: number): Observable<Kyc> {
        return this.apiService.post<Kyc>(ApiEndpoints.KYC_DELETE, { id });
    }

    searchKyc(searchText?: string, page: number = 0, size: number = 10): Observable<any> {
        return this.apiService.post<Kyc>(ApiEndpoints.KYC_SEARCH, { page,size,searchText });
     }

    // searchKyc(name?: string, page: number = 0, size: number = 10): Observable<any> {
    //     let params = new HttpParams().set('page', `${page}`).set('size', `${size}`);
    //     if (name) params = params.set('name', name);
    //     let headers = this.getAuthHeaders(false);
    //
    //     return this.http.get<any>(`${API.BASE_URL}${API.KYC.SEARCH}`, {params, headers});
    // }

    getPhoto(photoPath: string) {
        return `${API.BASE_URL}${API.KYC.PHOTO(photoPath)}`;
    }


    // private getAuthHeaders(isFileUpload: boolean): HttpHeaders {
    //
    //     return isFileUpload ?
    //         new HttpHeaders({
    //             'Authorization': `Bearer ${this.authService.getToken()}`
    //         }) :
    //         new HttpHeaders({
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${this.authService.getToken()}`
    //         })
    // }
}
