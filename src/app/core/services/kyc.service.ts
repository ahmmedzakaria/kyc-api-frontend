import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import { API } from '../config/api.config';
import {switchMap} from "rxjs/operators";
import {AuthService} from "./auth.service";

export interface Kyc { id?: number; name: string; email: string; phone: string; photoUrl?: string; photo?: any}

@Injectable({ providedIn: 'root' })
export class KycService {
  private apiUrl = `${API.BASE_URL}${API.KYC.CREATE}`;

  constructor(private http: HttpClient, private authService: AuthService) { }

  createKyc(data: FormData): Observable<Kyc> { return this.http.post<Kyc>(this.apiUrl, data,{headers:this.getAuthHeaders(true)}); }
  updateKyc(id: number, data: FormData): Observable<Kyc> { return this.http.post<Kyc>(`${API.BASE_URL}${API.KYC.UPDATE}`, data,{headers:this.getAuthHeaders(true)}); }
  deleteKyc(id: number): Observable<void> { return this.http.post<void>(`${API.BASE_URL}${API.KYC.DELETE}/${id}`,{headers:this.getAuthHeaders(false)});}
  searchKyc(name?: string, page: number = 0, size: number = 10): Observable<any> {
    let params = new HttpParams().set('page', `${page}`).set('size', `${size}`);
    if (name) params = params.set('name', name);
    let headers = this.getAuthHeaders(false);

    return this.http.get<any>(`${API.BASE_URL}${API.KYC.SEARCH}`, { params, headers });
  }
  getPhoto(photoPath: string) { return `${API.BASE_URL}${API.KYC.PHOTO(photoPath)}`; }


    private getAuthHeaders(isFileUpload: boolean): HttpHeaders {

        return isFileUpload ?
            new HttpHeaders({
                'Authorization': `Bearer ${this.authService.getToken()}`
            }) :
            new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.authService.getToken()}`
            })
    }
}
