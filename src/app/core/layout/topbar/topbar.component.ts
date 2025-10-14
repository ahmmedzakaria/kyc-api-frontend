import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LayoutConfig, LayoutService } from '../../services/layout.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
    @Input() theme: 'light' | 'dark' = 'light';
    @Input() user: any;
    @Output() logout = new EventEmitter<void>();

    constructor(
        protected layoutService: LayoutService
    ) {}

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.theme = newTheme;
        this.layoutService.setTheme(newTheme);
        document.body.setAttribute('data-bs-theme', newTheme); // Optional for Bootstrap 5.3+
    }
}
