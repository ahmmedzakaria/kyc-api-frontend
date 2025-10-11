import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {ButtonComponent} from "../../shared/components/button/button.component";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {TextboxComponent} from "../../shared/components/textbox/textbox.component";
import {ValidationMessageService} from "../../shared/services/validation-message.service";
import {PasswordGroupComponent} from "../../shared/components/password-group/password-group.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, RouterLink, ButtonComponent, ReactiveFormsModule, TextboxComponent, PasswordGroupComponent],
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

    constructor(private fb: FormBuilder,private validationMessages: ValidationMessageService) {
        this.form = this.fb.group({
            username: [''],
            email: [''],
            password: [''],
            mobile: ['']
        });

        // to override default validation message
        this.validationMessages.setMessages({
            required: 'You must fill out this field.',
            passwordWeak: 'Your password is not strong enough.'
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
