import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgIf, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [ NgFor, RouterLink, RouterLinkActive],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    private auth = inject(AuthService);

    menuItems = [
        { label: 'Dashboard', path: '/dashboard', icon: 'fa fa-home', roles: ['ROLE_ADMIN', 'ROLE_USER'] },
        { label: 'Person', path: '/person', icon: 'fa fa-users', roles: ['ROLE_ADMIN'] },
        { label: 'Profile', path: '/profile', icon: 'fa fa-user', roles: ['ROLE_ADMIN', 'ROLE_USER'] },
        { label: 'Records', path: '/kyc', icon: 'fa fa-list', roles: ['ROLE_ADMIN', 'ROLE_USER'] },
        { label: 'Create', path: '/kyc/create', icon: 'fa fa-plus', roles: ['ROLE_ADMIN', 'ROLE_USER'] },
    ];

    get visibleItems() {
        return this.menuItems.filter(item =>
            item.roles.some(r => this.auth.hasRole(r))
        );
    }
}
