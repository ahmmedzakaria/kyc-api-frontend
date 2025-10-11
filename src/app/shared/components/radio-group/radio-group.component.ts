import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
    NG_VALIDATORS,
    Validator,
    ValidationErrors,
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

@Component({
    selector: 'app-radio-group',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './radio-group.component.html',
    styleUrls: ['./radio-group.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RadioGroupComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => RadioGroupComponent),
            multi: true
        }
    ]
})
export class RadioGroupComponent implements ControlValueAccessor, Validator {
    /** Group label */
    @Input() label = '';

    /** Array of radio options (each { label, value }) */
    @Input() options: { label: string; value: any }[] = [];

    /** Layout orientation: horizontal | vertical */
    @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';

    /** Required flag for validation */
    @Input() required = false;

    /** Optional help / hint text */
    @Input() helpText?: string;

    /** Optional custom class */
    @Input() customClass = '';

    /** Current value */
    value: any = null;

    /** Track touched/disabled */
    disabled = false;
    touched = false;

    /** Internal error message */
    errorMessage: string | null = null;

    private onChange = (value: any) => {};
    private onTouched = () => {};

    // ControlValueAccessor
    writeValue(value: any): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    // Validation
    validate(): ValidationErrors | null {
        if (this.required && (this.value === null || this.value === undefined || this.value === '')) {
            this.errorMessage = `${this.label || 'Field'} is required`;
            return { required: true };
        }
        this.errorMessage = null;
        return null;
    }

    onSelect(optionValue: any) {
        if (this.disabled) return;
        this.value = optionValue;
        this.onChange(this.value);
        this.onTouched();
    }

    trackByValue(_: number, item: any) {
        return item.value;
    }
}
