import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '@kyc/shared';
import { TextboxComponent } from '@kyc/shared';
import { PasswordGroupComponent } from '@kyc/shared';
import { DatePickerComponent } from '@kyc/shared';
import { RadioGroupComponent } from '@kyc/shared';
import { CardSelectorComponent } from '@kyc/shared';
import { CheckboxComponent } from '@kyc/shared';
import { TextareaComponent } from '@kyc/shared';
import { DropdownComponent } from '@kyc/shared';
import { SmartDropdownComponent } from '@kyc/shared';
import { FileUploadComponent } from '@kyc/shared';

@Component({
    selector: 'app-component-demo',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ButtonComponent,
        TextboxComponent,
        PasswordGroupComponent,
        DatePickerComponent,
        RadioGroupComponent,
        CardSelectorComponent,
        CheckboxComponent,
        TextareaComponent,
        DropdownComponent,
        SmartDropdownComponent,
        FileUploadComponent
    ],
    templateUrl: './component-demo.component.html'
})
export class ComponentDemoComponent {
    form: FormGroup;

    countries = [
        { label: 'Bangladesh', value: 'BD', icon: 'fa-solid fa-flag' },
        { label: 'India', value: 'IN', icon: 'fa-solid fa-flag' },
        { label: 'United States', value: 'US', icon: 'fa-solid fa-flag' },
        { label: 'Germany', value: 'DE', icon: 'fa-solid fa-flag' },
    ];

    plans = [
        { label: 'Basic', value: 'BASIC', icon: 'fa-solid fa-leaf', description: 'For individuals starting out', badge: 'Free' },
        { label: 'Pro', value: 'PRO', icon: 'fa-solid fa-bolt', description: 'For professionals and teams', badge: 'Popular' },
    ];

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            username: [''],
            email: [''],
            password: [''],
            mobile: [''],
            dateOfBirth: [''],
            country: ['', Validators.required],
            travelPeriod: [''],
            genderDropDown: [''],
            district: [''],
            village: [''],
            gender: ['M', Validators.required],
            plan: ['', Validators.required],
            agreeTerms: [false, Validators.requiredTrue],
            notifications: [true],
            marketing: [false],
            notes: ['', [Validators.required, Validators.maxLength(250)]],
            photo: [null],
        });
    }

    submit() {
        if (this.form.valid) {
            console.log(this.form.value);
        } else {
            this.form.markAllAsTouched();
        }
    }
}
