import {
    Component,
    forwardRef,
    Input,
    Output,
    EventEmitter,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
    FormsModule,
    ReactiveFormsModule,
    Validators,
    ValidatorFn,
    AbstractControl,
    ValidationErrors,
    FormControl
} from '@angular/forms';

@Component({
    selector: 'app-textbox',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './textbox.component.html',
    styleUrls: ['./textbox.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TextboxComponent),
            multi: true
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextboxComponent implements ControlValueAccessor, OnInit {
    // appearance
    @Input() label?: string;
    @Input() placeholder = '';
    @Input() helpText?: string;
    @Input() icon?: string; // e.g., 'fa-solid fa-user'
    @Input() size: 'sm' | 'md' | 'lg' = 'md';
    @Input() variant: 'default' | 'outline' = 'default';
    @Input() readonly = false;
    @Input() disabled = false;
    @Input() type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'date' = 'text';

    // validators
    @Input() required = false;
    @Input() minLength?: number;
    @Input() maxLength?: number;
    @Input() pattern?: string;
    @Input() email = false;

    // outputs
    @Output() valueChange = new EventEmitter<string>();
    @Output() enterPressed = new EventEmitter<void>();

    // internal control to manage validation & UI
    control = new FormControl('');

    // ControlValueAccessor callbacks
    private onChange: (v: any) => void = () => {};
    private onTouched: () => void = () => {};

    ngOnInit(): void {
        // build validators
        const validators: ValidatorFn[] = [];
        if (this.required) validators.push(Validators.required);
        if (this.email) validators.push(Validators.email);
        if (this.minLength !== undefined) validators.push(Validators.minLength(this.minLength));
        if (this.maxLength !== undefined) validators.push(Validators.maxLength(this.maxLength));
        if (this.pattern) validators.push(Validators.pattern(this.pattern));

        this.control.setValidators(validators);

        // propagate internal changes outwards
        this.control.valueChanges.subscribe((v: any) => {
            // keep value as string for consistent behaviour; for number/date parent can parse
            const value = v === null || v === undefined ? '' : v;
            this.onChange(value);
            this.valueChange.emit(value);
        });
    }

    // ControlValueAccessor implementation
    writeValue(obj: any): void {
        this.control.setValue(obj ?? '', { emitEvent: false });
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
        isDisabled ? this.control.disable({ emitEvent: false }) : this.control.enable({ emitEvent: false });
    }

    // helpers for template
    get hasError(): boolean {
        return this.control.invalid && (this.control.touched || this.control.dirty);
    }

    get errorMessages(): string[] {
        const errs: ValidationErrors | null = this.control.errors;
        if (!errs) return [];
        const messages: string[] = [];
        if (errs['required']) messages.push('This field is required.');
        if (errs['email']) messages.push('Please enter a valid email address.');
        if (errs['minlength']) {
            const r = errs['minlength'];
            messages.push(`Minimum ${r.requiredLength} characters required.`);
        }
        if (errs['maxlength']) {
            const r = errs['maxlength'];
            messages.push(`Maximum ${r.requiredLength} characters allowed.`);
        }
        if (errs['pattern']) messages.push('The value does not match the expected pattern.');
        return messages;
    }

    // UI events
    onBlur() {
        this.onTouched();
        this.control.markAsTouched();
    }

    onKeydown(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            this.enterPressed.emit();
        }
    }
}
