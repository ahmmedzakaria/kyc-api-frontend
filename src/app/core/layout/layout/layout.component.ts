import { Component, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LayoutService } from '../../services/layout.service';
import { AuthService } from '../../services/auth.service';
import { TopbarComponent } from '../topbar/topbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [AsyncPipe, NgIf, RouterOutlet, TopbarComponent, SidebarComponent],
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
    layoutService = inject(LayoutService);
    authService = inject(AuthService);

    layout$ = this.layoutService.layout$;

    onLogout() {
        this.authService.logout();
    }
}
