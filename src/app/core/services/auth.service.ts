import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, BehaviorSubject } from 'rxjs';
import {ApiService} from "../api/api.service";
import {AuthResponse} from "../api/model/auth-response";
import {ApiEndpoints} from "../api/api-endpoints";
import {jwtDecode} from "jwt-decode";
import {LayoutService} from "./layout.service";



interface DecodedToken {
    roles: string[];
    sub: string;
    exp: number;
    iat: number;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject = new BehaviorSubject<DecodedToken | null>(null);
    currentUser$ = this.currentUserSubject.asObservable();

    constructor(private http: HttpClient, private apiService: ApiService,private layoutService: LayoutService) {
        const token = this.getToken();
        if (token) this.decodeAndSetUser(token);
    }

    login(username: string, password: string) {
        return this.apiService.post<AuthResponse>(ApiEndpoints.KYC_LOGIN, { username, password })
            .pipe(
                tap(res => {
                    if (res?.accessToken) {
                        localStorage.setItem('token', res.accessToken);
                        localStorage.setItem('refreshToken', res.refreshToken || '');
                        this.decodeAndSetUser(res.accessToken);
                    }
                })
            );
    }

    logout() {
        localStorage.removeItem('token');
        this.currentUserSubject.next(null);
        this.layoutService.setPublicLayout();
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    private decodeAndSetUser(token: string) {
        try {
            const decoded: DecodedToken = jwtDecode(token);
            this.currentUserSubject.next(decoded);
        } catch (err) {
            console.error('JWT Decode failed', err);
        }
    }

    hasRole(role: string): boolean {
        return this.currentUserSubject.value?.roles?.includes(role) ?? false;
    }
}
