import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { KycService, Kyc } from '../../../core/services/kyc.service';

@Component({
    selector: 'app-kyc-form',
    imports: [
        ReactiveFormsModule
    ],
    templateUrl: './kyc-form.component.html'
})
export class KycFormComponent {
  @Input() kycData?: Kyc;
  @Output() saved = new EventEmitter<Kyc>();

  form: FormGroup;
  selectedFile?: File;

  constructor(private fb: FormBuilder, private kycService: KycService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      photo: [null]
    });
  }

  ngOnInit() { if (this.kycData) this.form.patchValue(this.kycData); }

  onFileSelected(event: any) { this.selectedFile = event.target.files[0]; }

  submit() {
    let formData = new FormData();
    formData.append('firstName', this.form.value.name);
    formData.append('email', this.form.value.email);
    formData.append('phone', this.form.value.phone);
    formData.append('lastName', '');
    formData.append('nationalId', this.form.value.name + '-NID');
    if (this.selectedFile) formData.append('photo', this.selectedFile);

    if (this.kycData?.id) {

        formData.append('id', this.kycData?.id?.toString());
      this.kycService.updateKyc(this.kycData.id, formData).subscribe(res => this.saved.emit(res));
    } else {
      this.kycService.createKyc(formData).subscribe(res => this.saved.emit(res));
    }
  }
}
