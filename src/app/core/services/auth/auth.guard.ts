import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    const token = authService.getToken();

    if (token) {
        return true; // ✅ allow access
    }

    // 🚪 no token → go to login
    router.navigate(['/login']);
    return false;
};
