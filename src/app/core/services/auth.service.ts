import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { API } from '../config/api.config';
import {ApiService} from "../api/api.service";
import {ApiEndpoints} from "../api/api-endpoints";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,private apiService: ApiService) { }

    login(username: string, password: string): Observable<AuthResponse> {
        return this.apiService.post<AuthResponse>(ApiEndpoints.LOGIN, { username, password })
            .pipe(
                tap((res: AuthResponse) => {
                    if (res?.data?.accessToken) {
                        localStorage.setItem('token', res.data.accessToken);
                    }
                    if (res?.data?.refreshToken) {
                        localStorage.setItem('refreshToken', res.data.refreshToken);
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


export interface AuthResponse {
    data: {
        accessToken: string;
        refreshToken?: string;
    };
}