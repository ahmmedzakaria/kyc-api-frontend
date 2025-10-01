import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    imports: [
        ReactiveFormsModule,
        NgIf
    ],
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({ username: ['', Validators.required], password: ['', Validators.required] });
  }

  login() {
    if (this.form.invalid) return;
    const { username, password } = this.form.value;
    this.authService.login(username, password).subscribe({
      next: () => this.router.navigate(['/kyc']),
      error: err => this.errorMessage = err?.error || 'Login failed'
    });
  }
}
