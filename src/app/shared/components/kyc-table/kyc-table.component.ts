import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kyc } from '../../../core/services/kyc.service';
import {NgForOf, NgIf} from "@angular/common";

@Component({
    selector: 'app-kyc-table',
    imports: [
        NgForOf,
        NgIf
    ],
    templateUrl: './kyc-table.component.html'
})
export class KycTableComponent {
  @Input() kycList: Kyc[] = [];
  @Output() edit = new EventEmitter<Kyc>();
  @Output() delete = new EventEmitter<Kyc>();

  public getPhotoUrl(kyc: Kyc): string | null {
      if (!kyc.photo) return null;
      console.log(kyc.photo);
      return `data:image/jpeg;base64,${kyc.photo}`;
  }

}
