import { Routes } from '@angular/router';
import {authGuard} from "./core/services/auth/auth.guard";
import {loginGuard} from "./core/services/auth/login.guard";


export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () =>
            import('./pages/login/login.component').then(m => m.LoginComponent),
        canActivate: [loginGuard],
    },
    {
        path: '',
        loadComponent: () =>
            import('./core/layout/layout/layout.component').then(m => m.LayoutComponent),
        canActivate: [authGuard],
        children: [
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
            },
            {
                path: 'component-demo',
                loadComponent: () =>
                    import('./pages/component-demo/component-demo.component').then(m => m.ComponentDemoComponent),
            },
            {
                path: 'person',
                loadComponent: () =>
                    import('./pages/person/person-list/person-list.component').then(m => m.PersonListComponent),
            },
            {
                path: 'person/create',
                loadComponent: () =>
                    import('./pages/person/person-editor.component').then(m => m.PersonEditorComponent),
            },
            {
                path: 'person/:id/edit',
                loadComponent: () =>
                    import('./pages/person/person-editor.component').then(m => m.PersonEditorComponent),
            },
            {
                path: 'kyc',
                loadComponent: () =>
                    import('./pages/kyc-list/kyc-list.component').then(m => m.KycListComponent),
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            }
        ],
    },
    { path: '**', redirectTo: 'dashboard' },
];
