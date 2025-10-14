import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './core/services/auth.service';
import {LayoutService} from "./core/services/layout.service";
import {filter} from "rxjs/operators";
import {map} from "rxjs";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'KYC Management';
    sidebarOpen = false;
    collapsed = false;
    loading = false;
    // constructor(private authService: AuthService, private router: Router) {}

    // constructor(private authService: AuthService,private router: Router, private route: ActivatedRoute, private layout: LayoutService) {}
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        protected layoutService: LayoutService
    ) {}
    ngOnInit() {
        // 🔄 Dynamic layout switching based on route data
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                map(() => {
                    let child = this.route.firstChild;
                    while (child?.firstChild) child = child.firstChild;
                    return child?.snapshot.data['layout'] ?? 'default';
                })
            )
            .subscribe(layoutType => {
                this.layoutService.setLayoutType(layoutType);
            });

        // Optional global loading indicator
        this.router.events.subscribe(event => {
            if (event.constructor.name === 'NavigationStart') this.loading = true;
            if (event.constructor.name === 'NavigationEnd' || event.constructor.name === 'NavigationCancel') this.loading = false;
        });
    }

   toggleMobileSidebar() {
        this.sidebarOpen = !this.sidebarOpen;
    }

    toggleCollapse() {
        this.collapsed = !this.collapsed;
        // also close mobile overlay if open
        if (this.sidebarOpen) this.sidebarOpen = false;
        // add class to body or manage main-content via binding (we use binding in template)
    }

    // logout(){ this.authService.logout(); this.router.navigate(['/login']); }
    // isLoggedIn(){ return !!this.authService.getToken(); }
}

