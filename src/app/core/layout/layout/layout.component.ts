import { Component } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from '../topbar/topbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import {LayoutService} from "../../services/layout.service";
import {AuthService} from "../../services/auth.service";


@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [TopbarComponent, SidebarComponent, RouterOutlet, AsyncPipe],
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
    constructor(
        public layoutService: LayoutService,
        public authService: AuthService
    ) {}

    onLogout(): void {
        this.authService.logout();
        this.layoutService.setPublicLayout();
    }
}
