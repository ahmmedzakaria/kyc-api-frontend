import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { ValidationMessageService } from '../../services/validation-message.service';

@Component({
    selector: 'app-date-picker',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DatePickerComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => DatePickerComponent),
            multi: true
        }
    ]
})
export class DatePickerComponent implements ControlValueAccessor, Validator, OnInit {

    @Input() label = 'Select Date';
    @Input() required = false;
    @Input() floating = true;
    @Input() minDate?: string;
    @Input() maxDate?: string;
    @Input() disableFuture = false;
    @Input() disablePast = false;
    @Input() showIcon = true;

    @Output() dateChange = new EventEmitter<string>();

    value: string | null = null;
    disabled = false;
    touched = false;
    errorMessage: string | null = null;

    private onChange = (value: string | null) => {};
    protected onTouched = () => {};

    constructor(private msg: ValidationMessageService) {}

    ngOnInit(): void {
        if (this.disablePast) this.minDate = new Date().toISOString().split('T')[0];
        if (this.disableFuture) this.maxDate = new Date().toISOString().split('T')[0];
    }

    writeValue(value: string | null): void {
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

    onDateInput(event: any): void {
        this.value = event.target.value;
        this.onChange(this.value);
        this.dateChange.emit(this.value || '');
    }

    validate(): ValidationErrors | null {
        if (this.required && !this.value) {
            this.errorMessage = this.msg.get('required', this.label);
            return { required: true };
        }

        this.errorMessage = null;
        return null;
    }
}
