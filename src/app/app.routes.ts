import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { KycListComponent } from './pages/kyc-list/kyc-list.component';
import { KycCreateComponent } from './pages/kyc-create/kyc-create.component';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {PersonListComponent} from "./pages/person/person-list/person-list.component";
import {LayoutComponent} from "./core/layout/layout/layout.component";


export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        data: { layout: 'default' },
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'login', component: LoginComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'kyc', component: KycListComponent },
            { path: 'kyc/create', component: KycCreateComponent },
            { path: 'kyc/edit/:id', component: KycCreateComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'person', component: PersonListComponent }
        ],
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { layout: 'auth' },
    },
];

/*export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'kyc', component: KycListComponent },
  { path: 'kyc/create', component: KycCreateComponent },
  { path: 'kyc/edit/:id', component: KycCreateComponent },
  { path: 'profile', component: ProfileComponent },
    // { path: '', redirectTo: 'person', pathMatch: 'full' },
    { path: 'person', component: PersonListComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];*/
