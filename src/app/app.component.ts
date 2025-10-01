import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KYC Management';
  constructor(private authService: AuthService, private router: Router) {}
  logout(){ this.authService.logout(); this.router.navigate(['/login']); }
  isLoggedIn(){ return !!this.authService.getToken(); }
}
