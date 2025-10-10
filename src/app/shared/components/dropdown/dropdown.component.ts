import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface DropdownOption {
    label: string;
    value: any;
}

@Component({
    selector: 'app-dropdown',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
    /** Label shown above the dropdown */
    @Input() label = '';

    /** List of dropdown options */
    @Input() options: DropdownOption[] = [];

    /** Selected value */
    @Input() selected: any;

    /** Disable dropdown */
    @Input() disabled = false;

    /** Placeholder text */
    @Input() placeholder = 'Select an option';

    /** Emits when selection changes */
    @Output() selectionChange = new EventEmitter<any>();

    onSelect(value: any) {
        this.selected = value;
        this.selectionChange.emit(value);
    }
}
