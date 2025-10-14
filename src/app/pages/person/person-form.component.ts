import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { debounceTime, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {Person} from "./person.model";
import {PersonService} from "../../core/services/person.service";
import {GisService} from "../../core/services/gis.service";
import {LocationDropdownComponent} from "./location-dropdown.component";
import {TextboxComponent} from "../../shared/components/textbox/textbox.component";
import {SmartDropdownComponent} from "../../shared/components/smart-dropdown/smart-dropdown.component";
import {DatePickerComponent} from "../../shared/components/date-picker/date-picker.component";
import {FileUploadComponent} from "../../shared/components/file-upload/file-upload.component";


@Component({
    selector: 'app-person-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, HttpClientModule, LocationDropdownComponent, TextboxComponent, SmartDropdownComponent, DatePickerComponent, FileUploadComponent],
    templateUrl: './person-form.component.html',
    // styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent {
    @Input() personData?: Person;
    @Output() saved = new EventEmitter<void>();


    form!: FormGroup;
    photoPreview: string | ArrayBuffer | null = null;
    selectedFile: File | null = null;

    // Dropdown options
    bloodGroups = [
        {label:'A+',value:'A+'},
        {label:'A-',value:'A-'},
        {label:'B+',value:'B+'},
        {label:'B-',value:'B-'},
        {label:'AB+',value:'AB+'},
        {label:'AB-',value:'AB-'},
        {label:'O+',value:'O+'},
        {label:'O-',value:'O'},
        ];
    relations = ['Father', 'Mother', 'Brother', 'Sister', 'Friend', 'Other'];
    educationLevels = ['SSC', 'HSC', 'Diploma', 'Bachelor', 'Master', 'PhD'];
    passingYears = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i);
    genderList = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' }
    ]
    // Location search
    currentLocationResults: any[] = [];
    permanentLocationResults: any[] = [];

    constructor(
        private fb: FormBuilder,
        private service: PersonService,
        private http: HttpClient,
        private gisService: GisService,
    ) {
        this.form = this.fb.group({
            id: [],
            username: ['', Validators.required],
            mobileNumber: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            firstName: [''],
            lastName: [''],
            dateOfBirth: [''],
            gender: [''],
            nationalId: [''],
            bloodGroup: [''],
            photo: [''],

            fatherName: [''],
            fatherMobileNumber: [''],
            motherName: [''],
            motherMobileNumber: [''],
            emergencyContactPerson: [''],
            emergencyContactPersonRelation: [''],
            emergencyContactNumber: [''],

            educationLevel: [''],
            institutionName: [''],
            passingYear: [''],

            currentLocationId: [''],
            currentAddress: [''],
            sameAddress: [false],
            permanentLocationId: [''],
            permanentAddress: ['']
        });
    }

    ngOnInit() {


        // Load existing data (edit)
        if (this.personData) {
            this.form.patchValue(this.personData);
            this.photoPreview = this.personData.photoUrl || null;
        }

        // Watch checkbox "sameAddress"
        this.form.controls.sameAddress.valueChanges.subscribe((checked) => {
            if (checked) {
                this.form.patchValue({
                    permanentAddress: this.form.value.currentAddress,
                    permanentLocationId: this.form.value.currentLocationId,
                });
            } else {
                this.form.patchValue({
                    permanentAddress: '',
                    permanentLocationId: null,
                });
            }
        });


        // Debounced search for current/permanent locations
        this.setupLocationSearch('currentLocationId', 'currentLocationResults');
        this.setupLocationSearch('permanentLocationId', 'permanentLocationResults');
    }
    // onLocationSelected(controlName: string, location: any) {
    //     this.form.patchValue({ [controlName]: location.id });
    // }

    onLocationSelected(controlName: string, location: any) {
        this.form.patchValue({ [controlName]: location?.id || null });
    }


    private setupLocationSearch(controlName: string, resultKey: string) {
        // this.form.controls[controlName]?.valueChanges.pipe(
        //     debounceTime(400),
        //     switchMap((val) => {
        //         if (typeof val === 'string' && val.length > 1) {
        //             return this.gisService.searchLocation(val,0,10)
        //         }
        //         return of([]);
        //     })
        // ).subscribe((results:any) => (this[resultKey] = results));

        this.form.controls[controlName]?.valueChanges.pipe(
            debounceTime(400),
            switchMap((val) => {
                if (typeof val === 'string' && val.length > 1) {
                    return this.gisService.searchLocation(val, 0, 10);
                }
                return of([]);
            })
        ).subscribe((results: any) => {
            (this as any)[resultKey] = results.content;
           // console.log(this.currentLocationResults);
        });
    }

    onFileSelected(event: any) {
        const file = event.target.files[0];
        if (file) {
            this.selectedFile = file;
            const reader = new FileReader();
            reader.onload = e => (this.photoPreview = (e.target as FileReader).result);
            reader.readAsDataURL(file);
        }
    }

    selectLocation(type: 'current' | 'permanent', location: any) {
        if (type === 'current') {
            this.form.patchValue({ currentLocationId: location.id });
            this.currentLocationResults = [];
        } else {
            this.form.patchValue({ permanentLocationId: location.id });
            this.permanentLocationResults = [];
        }
    }

    submit() {
        const formData = new FormData();
        Object.entries(this.form.value).forEach(([key, val]) => {
            if (val !== null && val !== undefined && key !== 'sameAddress')
                formData.append(key, val.toString());
        });

        if (this.selectedFile) {
            formData.append('photo', this.selectedFile);
        }

        this.service.createPerson(formData).subscribe({
            next: () => this.saved.emit(),
        });
    }
}
