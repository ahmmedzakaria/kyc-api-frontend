import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { TextboxComponent } from '../../shared/components/textbox/textbox.component';
import { PasswordGroupComponent } from '../../shared/components/password-group/password-group.component';
import { DatePickerComponent } from '../../shared/components/date-picker/date-picker.component';
import { RadioGroupComponent } from '../../shared/components/radio-group/radio-group.component';
import { CardSelectorComponent } from '../../shared/components/card-selector/card-selector.component';
import { CheckboxComponent } from '../../shared/components/checkbox/checkbox.component';
import { TextareaComponent } from '../../shared/components/textarea/textarea.component';
import { DropdownComponent } from '../../shared/components/dropdown/dropdown.component';
import { SmartDropdownComponent } from '../../shared/components/smart-dropdown/smart-dropdown.component';
import { FileUploadComponent } from '../../shared/components/file-upload/file-upload.component';

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
