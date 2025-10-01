import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { KycListComponent } from './pages/kyc-list/kyc-list.component';
import { KycCreateComponent } from './pages/kyc-create/kyc-create.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'kyc', component: KycListComponent },
  { path: 'kyc/create', component: KycCreateComponent },
  { path: 'kyc/edit/:id', component: KycCreateComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
