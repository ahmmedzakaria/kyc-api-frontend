import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ControlValueAccessor,
    FormBuilder,
    FormGroup,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    ValidationErrors,
    Validators,
    AbstractControl
} from '@angular/forms';
import { TextboxComponent } from '../textbox/textbox.component';
import { ValidationMessageService } from '../../services/validation-message.service';

@Component({
    selector: 'app-password-group',
    standalone: true,
    imports: [CommonModule, TextboxComponent],
    templateUrl: './password-group.component.html',
    styleUrls: ['./password-group.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PasswordGroupComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => PasswordGroupComponent),
            multi: true
        }
    ]
})
export class PasswordGroupComponent implements ControlValueAccessor, OnInit {
    @Input() label = 'Password';
    @Input() confirmLabel = 'Confirm Password';
    @Input() required = true;
    @Input() floating = true;
    @Input() disabled = false;
    @Input() showStrength = true;
    @Output() valueChange = new EventEmitter<string>();

    form!: FormGroup;

    private onChange = (value: any) => {};
    private onTouched = () => {};

    constructor(private fb: FormBuilder, private msg: ValidationMessageService) {}

    ngOnInit(): void {
        this.form = this.fb.group(
            {
                password: [
                    '',
                    [
                        this.required ? Validators.required : Validators.nullValidator,
                        this.passwordStrengthValidator()
                    ]
                ],
                confirmPassword: [
                    '',
                    this.required ? Validators.required : Validators.nullValidator
                ]
            },
            { validators: [this.matchPasswordsValidator()] }
        );

        this.form.valueChanges.subscribe(val => {
            if (this.form.valid) {
                this.onChange(val.password);
                this.valueChange.emit(val.password);
            } else {
                this.onChange(null);
            }
        });
    }

    writeValue(value: any): void {
        if (value) {
            this.form.patchValue({ password: value, confirmPassword: value }, { emitEvent: false });
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
        isDisabled ? this.form.disable() : this.form.enable();
    }

    validate(): ValidationErrors | null {
        return this.form.valid ? null : { invalid: true };
    }

    // ✅ Password must contain uppercase, lowercase, number, special char
    private passwordStrengthValidator() {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return (control: AbstractControl) => {
            if (!control.value) return null;
            return regex.test(control.value) ? null : { passwordWeak: true };
        };
    }

    // ✅ Confirm password must match
    private matchPasswordsValidator() {
        return (group: AbstractControl): ValidationErrors | null => {
            const pass = group.get('password')?.value;
            const confirm = group.get('confirmPassword')?.value;
            return pass && confirm && pass !== confirm ? { mismatch: true } : null;
        };
    }

    get passwordControl() {
        return this.form.get('password');
    }

    get confirmControl() {
        return this.form.get('confirmPassword');
    }

    get showMismatchError(): boolean {
        return this.form.hasError('mismatch') && this.confirmControl?.touched!;
    }

    get passwordStrengthClass(): string {
        const val = this.passwordControl?.value || '';
        if (val.length < 8) return 'weak';
        const hasUpper = /[A-Z]/.test(val);
        const hasLower = /[a-z]/.test(val);
        const hasNumber = /\d/.test(val);
        const hasSpecial = /[@$!%*?&]/.test(val);
        const score = [hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;

        if (score <= 2) return 'weak';
        if (score === 3) return 'medium';
        return 'strong';
    }
}
