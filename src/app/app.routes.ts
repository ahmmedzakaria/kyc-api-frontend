import { Routes } from '@angular/router';
import { AUTH_ROUTES, authGuard } from '@nexacore/auth';


export const routes: Routes = [
    ...AUTH_ROUTES,
    {
        path: '',
        loadComponent: () =>
            import('@nexacore/layout').then(m => m.LayoutComponent),
        canActivate: [authGuard],
        children: [
            {
                path: 'dashboard',
                data: { title: 'Dashboard', breadcrumb: 'Dashboard' },
                loadComponent: () =>
                    import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
            },
            {
                path: 'component-demo',
                data: { title: 'Component Demo', breadcrumb: 'Component Demo' },
                loadComponent: () =>
                    import('./pages/component-demo/component-demo.component').then(m => m.ComponentDemoComponent),
            },
            {
                path: 'person',
                data: { title: 'Customers', breadcrumb: 'Customers' },
                loadComponent: () =>
                    import('./pages/person/person-list/person-list.component').then(m => m.PersonListComponent),
            },
            {
                path: 'person/create',
                data: { title: 'New Customer', breadcrumb: 'New Customer' },
                loadComponent: () =>
                    import('./pages/person/person-editor.component').then(m => m.PersonEditorComponent),
            },
            {
                path: 'person/:id/edit',
                data: { title: 'Edit Customer', breadcrumb: 'Edit Customer' },
                loadComponent: () =>
                    import('./pages/person/person-editor.component').then(m => m.PersonEditorComponent),
            },
            {
                path: 'person/:id/preview',
                data: { title: 'Customer Details', breadcrumb: 'Customer Details' },
                loadComponent: () =>
                    import('./pages/person/person-preview.component').then(m => m.PersonPreviewComponent),
            },
            {
                path: 'kyc',
                data: { title: 'KYC Cases', breadcrumb: 'KYC Cases' },
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
