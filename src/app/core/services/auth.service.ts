import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { API } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<{ data: any }>(`${API.AUTH_BASE_URL}${API.AUTH.LOGIN}`, { username:username,password:password,"source": "KYC_APP" })
      .pipe(tap(res => {
          console.log(res);
          localStorage.setItem('token', res.data.accessToken)
      }));
  }

  logout() {
    localStorage.removeItem('token');
  }

  public getToken() {
    return localStorage.getItem('token');
  }
}
