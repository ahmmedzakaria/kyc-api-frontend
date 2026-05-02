import {
  AuthService
} from "./chunk-7PRRKU4A.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-34VX2KBB.js";
import {
  ApiEndpoints,
  ApiService,
  RouterLink
} from "./chunk-RP4NV6HK.js";
import "./chunk-NEC4XMZM.js";
import {
  Component,
  EventEmitter,
  Injectable,
  Input,
  NgForOf,
  NgIf,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5Z4ZU7MS.js";

// src/app/shared/components/kyc-table/kyc-table.component.ts
function KycTableComponent_tr_15_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 13);
  }
  if (rf & 2) {
    const kyc_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r2.getPhotoUrl(kyc_r2), \u0275\u0275sanitizeUrl);
  }
}
function KycTableComponent_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275template(2, KycTableComponent_tr_15_img_2_Template, 1, 1, "img", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 8)(10, "button", 9);
    \u0275\u0275listener("click", function KycTableComponent_tr_15_Template_button_click_10_listener() {
      const kyc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit.emit(kyc_r2));
    });
    \u0275\u0275element(11, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 11);
    \u0275\u0275listener("click", function KycTableComponent_tr_15_Template_button_click_12_listener() {
      const kyc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete.emit(kyc_r2));
    });
    \u0275\u0275element(13, "i", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const kyc_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", kyc_r2.photoString);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(kyc_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(kyc_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(kyc_r2.phone);
  }
}
var KycTableComponent = class _KycTableComponent {
  kycList = [];
  edit = new EventEmitter();
  delete = new EventEmitter();
  getPhotoUrl(kyc) {
    if (!kyc.photoString)
      return null;
    return `data:image/jpeg;base64,${kyc.photoString}`;
  }
  static \u0275fac = function KycTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KycTableComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KycTableComponent, selectors: [["app-kyc-table"]], inputs: { kycList: "kycList" }, outputs: { edit: "edit", delete: "delete" }, decls: 16, vars: 1, consts: [[1, "table-responsive"], [1, "table", "table-hover", "align-middle", "shadow-sm", "rounded", "bg-white"], [1, "table-light"], ["scope", "col"], ["scope", "col", 1, "text-center"], [4, "ngFor", "ngForOf"], ["alt", "Photo", "class", "rounded-circle border", "width", "45", "height", "45", 3, "src", 4, "ngIf"], [1, "fw-semibold"], [1, "text-center"], [1, "btn", "btn-sm", "btn-outline-primary", "me-2", 3, "click"], [1, "fa-solid", "fa-pen"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "fa-solid", "fa-trash"], ["alt", "Photo", "width", "45", "height", "45", 1, "rounded-circle", "border", 3, "src"]], template: function KycTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "table", 1)(2, "thead", 2)(3, "tr")(4, "th", 3);
      \u0275\u0275text(5, "Photo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "th", 3);
      \u0275\u0275text(7, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "th", 3);
      \u0275\u0275text(9, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "th", 3);
      \u0275\u0275text(11, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "th", 4);
      \u0275\u0275text(13, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "tbody");
      \u0275\u0275template(15, KycTableComponent_tr_15_Template, 14, 4, "tr", 5);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275property("ngForOf", ctx.kycList);
    }
  }, dependencies: [
    NgForOf,
    NgIf
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KycTableComponent, [{
    type: Component,
    args: [{ selector: "app-kyc-table", imports: [
      NgForOf,
      NgIf
    ], template: '<div class="table-responsive">\n    <table class="table table-hover align-middle shadow-sm rounded bg-white">\n        <thead class="table-light">\n        <tr>\n            <th scope="col">Photo</th>\n            <th scope="col">Name</th>\n            <th scope="col">Email</th>\n            <th scope="col">Phone</th>\n            <th scope="col" class="text-center">Actions</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor="let kyc of kycList">\n            <td>\n                <img\n                        *ngIf="kyc.photoString"\n                        [src]="getPhotoUrl(kyc)"\n                        alt="Photo"\n                        class="rounded-circle border"\n                        width="45" height="45">\n            </td>\n            <td class="fw-semibold">{{ kyc.name }}</td>\n            <td>{{ kyc.email }}</td>\n            <td>{{ kyc.phone }}</td>\n            <td class="text-center">\n                <button class="btn btn-sm btn-outline-primary me-2" (click)="edit.emit(kyc)">\n                    <i class="fa-solid fa-pen"></i>\n                </button>\n                <button class="btn btn-sm btn-outline-danger" (click)="delete.emit(kyc)">\n                    <i class="fa-solid fa-trash"></i>\n                </button>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n' }]
  }], null, { kycList: [{
    type: Input
  }], edit: [{
    type: Output
  }], delete: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KycTableComponent, { className: "KycTableComponent", filePath: "src/app/shared/components/kyc-table/kyc-table.component.ts", lineNumber: 13 });
})();

// src/app/core/services/kyc.service.ts
var KycService = class _KycService {
  authService;
  apiService;
  constructor(authService, apiService) {
    this.authService = authService;
    this.apiService = apiService;
  }
  createKyc(data) {
    return this.apiService.post(ApiEndpoints.KYC_CREATE, data);
  }
  updateKyc(data) {
    return this.apiService.post(ApiEndpoints.KYC_UPDATE, data);
  }
  deleteKyc(id) {
    return this.apiService.post(ApiEndpoints.KYC_DELETE, { id });
  }
  searchKyc(searchText, page = 0, size = 10) {
    return this.apiService.post(ApiEndpoints.KYC_SEARCH, { page, size, searchText });
  }
  static \u0275fac = function KycService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KycService)(\u0275\u0275inject(AuthService), \u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _KycService, factory: _KycService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KycService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: AuthService }, { type: ApiService }], null);
})();

// src/app/shared/components/kyc-form/kyc-form.component.ts
function KycFormComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, " Name is required. ");
    \u0275\u0275elementEnd();
  }
}
function KycFormComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, " Valid email is required. ");
    \u0275\u0275elementEnd();
  }
}
function KycFormComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, " Phone is required. ");
    \u0275\u0275elementEnd();
  }
}
var KycFormComponent = class _KycFormComponent {
  fb;
  kycService;
  kycData;
  saved = new EventEmitter();
  form;
  constructor(fb, kycService) {
    this.fb = fb;
    this.kycService = kycService;
    this.form = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required],
      photo: [null]
    });
  }
  ngOnInit() {
    if (this.kycData)
      this.form.patchValue(this.kycData);
  }
  onFileSelected(event) {
    const target = event.target;
    const file = target.files?.[0] ?? null;
    this.form.patchValue({ photo: file });
    this.form.get("photo")?.markAsDirty();
  }
  submit() {
    let formData = new FormData();
    formData.append("firstName", this.form.value.name);
    formData.append("email", this.form.value.email);
    formData.append("phone", this.form.value.phone);
    formData.append("lastName", "");
    formData.append("nationalId", this.form.value.name + "-NID");
    const selectedFile = this.form.value.photo;
    if (selectedFile) {
      formData.append("photo", selectedFile);
    }
    if (this.kycData?.id) {
      formData.append("id", this.kycData?.id?.toString());
      this.kycService.updateKyc(formData).subscribe((res) => this.saved.emit(res));
    } else {
      this.kycService.createKyc(formData).subscribe((res) => this.saved.emit(res));
    }
  }
  static \u0275fac = function KycFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KycFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(KycService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KycFormComponent, selectors: [["app-kyc-form"]], inputs: { kycData: "kycData" }, outputs: { saved: "saved" }, decls: 24, vars: 5, consts: [[1, "p-4", "shadow-sm", "rounded", "bg-white", 3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "name", 1, "form-label", "fw-semibold"], ["id", "name", "type", "text", "formControlName", "name", "placeholder", "Enter full name", 1, "form-control"], ["class", "text-danger small", 4, "ngIf"], ["for", "email", 1, "form-label", "fw-semibold"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "Enter email address", 1, "form-control"], ["for", "phone", 1, "form-label", "fw-semibold"], ["id", "phone", "type", "tel", "formControlName", "phone", "placeholder", "Enter phone number", 1, "form-control"], ["for", "photo", 1, "form-label", "fw-semibold"], ["id", "photo", "type", "file", 1, "form-control", 3, "change"], [1, "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-primary", "px-4", 3, "disabled"], [1, "fa-solid", "fa-save", "me-2"], [1, "text-danger", "small"]], template: function KycFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0);
      \u0275\u0275listener("ngSubmit", function KycFormComponent_Template_form_ngSubmit_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "label", 2);
      \u0275\u0275text(3, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "input", 3);
      \u0275\u0275template(5, KycFormComponent_div_5_Template, 2, 0, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 1)(7, "label", 5);
      \u0275\u0275text(8, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "input", 6);
      \u0275\u0275template(10, KycFormComponent_div_10_Template, 2, 0, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 1)(12, "label", 7);
      \u0275\u0275text(13, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 8);
      \u0275\u0275template(15, KycFormComponent_div_15_Template, 2, 0, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 1)(17, "label", 9);
      \u0275\u0275text(18, "Photo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "input", 10);
      \u0275\u0275listener("change", function KycFormComponent_Template_input_change_19_listener($event) {
        return ctx.onFileSelected($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 11)(21, "button", 12);
      \u0275\u0275element(22, "i", 13);
      \u0275\u0275text(23, " Save ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ((tmp_1_0 = ctx.form.get("name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.form.get("name")) == null ? null : tmp_1_0.touched));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.touched));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.form.get("phone")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("phone")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.form.invalid);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KycFormComponent, [{
    type: Component,
    args: [{ selector: "app-kyc-form", imports: [
      ReactiveFormsModule,
      NgIf
    ], template: `<form [formGroup]="form" (ngSubmit)="submit()" class="p-4 shadow-sm rounded bg-white">
    <div class="mb-3">
        <label for="name" class="form-label fw-semibold">Name</label>
        <input
                id="name"
                type="text"
                class="form-control"
                formControlName="name"
                placeholder="Enter full name" />
        <div class="text-danger small" *ngIf="form.get('name')?.invalid && form.get('name')?.touched">
            Name is required.
        </div>
    </div>

    <div class="mb-3">
        <label for="email" class="form-label fw-semibold">Email</label>
        <input
                id="email"
                type="email"
                class="form-control"
                formControlName="email"
                placeholder="Enter email address" />
        <div class="text-danger small" *ngIf="form.get('email')?.invalid && form.get('email')?.touched">
            Valid email is required.
        </div>
    </div>

    <div class="mb-3">
        <label for="phone" class="form-label fw-semibold">Phone</label>
        <input
                id="phone"
                type="tel"
                class="form-control"
                formControlName="phone"
                placeholder="Enter phone number" />
        <div class="text-danger small" *ngIf="form.get('phone')?.invalid && form.get('phone')?.touched">
            Phone is required.
        </div>
    </div>

    <div class="mb-3">
        <label for="photo" class="form-label fw-semibold">Photo</label>
        <input
                id="photo"
                type="file"
                class="form-control"
                (change)="onFileSelected($event)" />
    </div>

    <div class="d-flex justify-content-end">
        <button
                type="submit"
                class="btn btn-primary px-4"
                [disabled]="form.invalid">
            <i class="fa-solid fa-save me-2"></i> Save
        </button>
    </div>
</form>
` }]
  }], () => [{ type: FormBuilder }, { type: KycService }], { kycData: [{
    type: Input
  }], saved: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KycFormComponent, { className: "KycFormComponent", filePath: "src/app/shared/components/kyc-form/kyc-form.component.ts", lineNumber: 14 });
})();

// src/app/pages/kyc-list/kyc-list.component.ts
function KycListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 7)(2, "h5", 8);
    \u0275\u0275element(3, "i", 13);
    \u0275\u0275text(4, " Edit KYC");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 14)(6, "app-kyc-form", 15);
    \u0275\u0275listener("saved", function KycListComponent_div_7_Template_app_kyc_form_saved_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSaved($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("kycData", ctx_r1.editingKyc);
  }
}
var KycListComponent = class _KycListComponent {
  kycService;
  kycList = [];
  editingKyc;
  constructor(kycService) {
    this.kycService = kycService;
  }
  ngOnInit() {
    this.loadKyc();
  }
  loadKyc() {
    this.kycService.searchKyc().subscribe((res) => {
      this.kycList = res.content ? res.content.map((it) => ({ id: it.id, name: it.firstName, email: it.email, phone: it.phone, photoString: it.photoString })) : res;
    });
  }
  onEdit(kyc) {
    this.editingKyc = kyc;
  }
  onDelete(kyc) {
    if (!confirm("Delete?"))
      return;
    this.kycService.deleteKyc(kyc.id).subscribe(() => this.loadKyc());
  }
  onSaved(kyc) {
    this.editingKyc = void 0;
    this.loadKyc();
  }
  static \u0275fac = function KycListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KycListComponent)(\u0275\u0275directiveInject(KycService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KycListComponent, selectors: [["app-kyc-list"]], decls: 15, vars: 2, consts: [[1, "container-fluid", "py-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "fw-bold", "mb-0"], ["routerLink", "/kyc/create", 1, "btn", "btn-primary"], [1, "fa-solid", "fa-plus", "me-2"], ["class", "card shadow-sm mb-4", 4, "ngIf"], [1, "card", "shadow-sm"], [1, "card-header", "bg-light"], [1, "mb-0"], [1, "fa-solid", "fa-table", "me-2"], [1, "card-body", "p-0"], [3, "edit", "delete", "kycList"], [1, "card", "shadow-sm", "mb-4"], [1, "fa-solid", "fa-pen-to-square", "me-2"], [1, "card-body"], [3, "saved", "kycData"]], template: function KycListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3, "KYC Records");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275element(5, "i", 4);
      \u0275\u0275text(6, " Create New ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, KycListComponent_div_7_Template, 7, 1, "div", 5);
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "h5", 8);
      \u0275\u0275element(11, "i", 9);
      \u0275\u0275text(12, " KYC List");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 10)(14, "app-kyc-table", 11);
      \u0275\u0275listener("edit", function KycListComponent_Template_app_kyc_table_edit_14_listener($event) {
        return ctx.onEdit($event);
      })("delete", function KycListComponent_Template_app_kyc_table_delete_14_listener($event) {
        return ctx.onDelete($event);
      });
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.editingKyc);
      \u0275\u0275advance(7);
      \u0275\u0275property("kycList", ctx.kycList);
    }
  }, dependencies: [
    NgIf,
    KycTableComponent,
    KycFormComponent,
    RouterLink
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KycListComponent, [{
    type: Component,
    args: [{ selector: "app-kyc-list", imports: [
      NgIf,
      KycTableComponent,
      KycFormComponent,
      RouterLink
    ], template: '<div class="container-fluid py-3">\n    <!-- Action Bar -->\n    <div class="d-flex justify-content-between align-items-center mb-3">\n        <h2 class="fw-bold mb-0">KYC Records</h2>\n        <button routerLink="/kyc/create" class="btn btn-primary">\n            <i class="fa-solid fa-plus me-2"></i> Create New\n        </button>\n    </div>\n\n    <!-- Edit Section -->\n    <div *ngIf="editingKyc" class="card shadow-sm mb-4">\n        <div class="card-header bg-light">\n            <h5 class="mb-0"><i class="fa-solid fa-pen-to-square me-2"></i> Edit KYC</h5>\n        </div>\n        <div class="card-body">\n            <app-kyc-form\n                    [kycData]="editingKyc"\n                    (saved)="onSaved($event)">\n            </app-kyc-form>\n        </div>\n    </div>\n\n    <!-- Table Section -->\n    <div class="card shadow-sm">\n        <div class="card-header bg-light">\n            <h5 class="mb-0"><i class="fa-solid fa-table me-2"></i> KYC List</h5>\n        </div>\n        <div class="card-body p-0">\n            <app-kyc-table\n                    [kycList]="kycList"\n                    (edit)="onEdit($event)"\n                    (delete)="onDelete($event)">\n            </app-kyc-table>\n        </div>\n    </div>\n</div>\n' }]
  }], () => [{ type: KycService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KycListComponent, { className: "KycListComponent", filePath: "src/app/pages/kyc-list/kyc-list.component.ts", lineNumber: 18 });
})();
export {
  KycListComponent
};
//# sourceMappingURL=chunk-5XVRA7UJ.js.map
