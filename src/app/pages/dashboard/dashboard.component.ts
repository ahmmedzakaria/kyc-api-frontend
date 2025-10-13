import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {ButtonComponent} from "../../shared/components/button/button.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TextboxComponent} from "../../shared/components/textbox/textbox.component";
import {ValidationMessageService} from "../../shared/services/validation-message.service";
import {PasswordGroupComponent} from "../../shared/components/password-group/password-group.component";
import {DatePickerComponent} from "../../shared/components/date-picker/date-picker.component";
import {RadioGroupComponent} from "../../shared/components/radio-group/radio-group.component";
import {CardSelectorComponent} from "../../shared/components/card-selector/card-selector.component";
import {CheckboxComponent} from "../../shared/components/checkbox/checkbox.component";
import {TextareaComponent} from "../../shared/components/textarea/textarea.component";
import {DropdownComponent} from "../../shared/components/dropdown/dropdown.component";
import {SmartDropdownComponent} from "../../shared/components/smart-dropdown/smart-dropdown.component";
import {ScrollableDropdownComponent} from "../../shared/components/scrollable-dropdown/scrollable-dropdown.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, RouterLink, ButtonComponent, ReactiveFormsModule, TextboxComponent, PasswordGroupComponent, DatePickerComponent, RadioGroupComponent, CardSelectorComponent, CheckboxComponent, TextareaComponent, DropdownComponent, SmartDropdownComponent],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    stats = [
        { title: 'Total KYC', value: 128, icon: 'fa-id-card' },
        { title: 'Pending Approvals', value: 12, icon: 'fa-hourglass-half' },
        { title: 'Rejected', value: 5, icon: 'fa-ban' },
        { title: 'Users Online', value: 42, icon: 'fa-users' }
    ];
    form: FormGroup;

    ngOnInit(): void {}

    genderOptions = [
        { label: 'Male', value: 'M', icon: 'fa-solid fa-mars' },
        { label: 'Female', value: 'F', icon: 'fa-solid fa-venus' },
        { label: 'Other', value: 'O', icon: 'fa-solid fa-genderless', description: 'Non-binary or prefer not to say' }
    ];
    countries = [
        { label: 'Bangladesh', value: 'BD', icon: 'fa-solid fa-flag' },
        { label: 'India', value: 'IN', icon: 'fa-solid fa-flag' },
        { label: 'United States', value: 'US', icon: 'fa-solid fa-flag' },
        { label: 'Germany', value: 'DE', icon: 'fa-solid fa-flag' },
    ];

    plans = [
        { label: 'Basic', value: 'BASIC', icon: 'fa-solid fa-leaf', description: 'For individuals starting out', badge: 'Free' },
        { label: 'Pro', value: 'PRO', icon: 'fa-solid fa-bolt', description: 'For professionals and teams', badge: 'Popular' },
        //{ label: 'Enterprise', value: 'ENTERPRISE', icon: 'fa-solid fa-building', description: 'Advanced features & support' }
    ];
    apiUrl = "http://localhost:9100/api/locations/search"

    constructor(private fb: FormBuilder,private validationMessages: ValidationMessageService) {
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
        });

        // to override default validation message
        // this.validationMessages.setMessages({
        //     required: 'You must fill out this field.',
        //     passwordWeak: 'Your password is not strong enough.'
        // });
    }

    submit() {
        if (this.form.valid) {
            console.log(this.form.value);
        } else {
            this.form.markAllAsTouched();
        }
    }
}
