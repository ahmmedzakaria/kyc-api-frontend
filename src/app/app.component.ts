import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './core/services/auth.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'KYC Management';
    sidebarOpen = false;
    collapsed = false;

    constructor(private authService: AuthService, private router: Router) {}

    toggleMobileSidebar() {
        this.sidebarOpen = !this.sidebarOpen;
    }

    toggleCollapse() {
        this.collapsed = !this.collapsed;
        // also close mobile overlay if open
        if (this.sidebarOpen) this.sidebarOpen = false;
        // add class to body or manage main-content via binding (we use binding in template)
    }

  logout(){ this.authService.logout(); this.router.navigate(['/login']); }
  isLoggedIn(){ return !!this.authService.getToken(); }
}
