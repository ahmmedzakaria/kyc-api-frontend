import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import {ApiService} from "../api/api.service";
import {ApiEndpoints} from "../api/api-endpoints";
import {Observable} from "rxjs";
import {AuthResponse} from "../api/model/auth-response";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,private apiService: ApiService) { }

    login(username: string, password: string): Observable<AuthResponse> {
        return this.apiService.post<AuthResponse>(ApiEndpoints.KYC_LOGIN, { username, password })
            .pipe(
                tap((res: AuthResponse) => {
                    console.log(res)
                    if (res?.accessToken) {
                        localStorage.setItem('token', res.accessToken);
                    }
                    if (res?.refreshToken) {
                        localStorage.setItem('refreshToken', res.refreshToken);
                    }
                    console.log('✅ Login successful, tokens stored', res);
                })
            );
    }

  logout() {
    localStorage.removeItem('token');
  }

  public getToken() {
    return localStorage.getItem('token');
  }
}
