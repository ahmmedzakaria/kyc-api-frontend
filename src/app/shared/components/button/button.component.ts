import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    /** Button label text */
    @Input() label: string = 'Button';

    /** Optional icon class (e.g., 'fa fa-plus') */
    @Input() icon?: string;

    /** Type of button: primary, secondary, danger, success */
    @Input() variant: 'primary' | 'secondary' | 'danger' | 'success' = 'primary';

    /** Size of the button */
    @Input() size: 'sm' | 'md' | 'lg' = 'md';

    /** Whether the button is disabled */
    @Input() disabled: boolean = false;

    /** Show spinner while loading */
    @Input() loading: boolean = false;

    /** Emits click event */
    @Output() clicked = new EventEmitter<void>();

    onClick() {
        if (!this.disabled && !this.loading) {
            this.clicked.emit();
        }
    }

    get classes() {
        return [
            'btn',
            `btn-${this.variant}`,
            `btn-${this.size}`,
            this.disabled ? 'btn-disabled' : ''
        ].join(' ');
    }
}
