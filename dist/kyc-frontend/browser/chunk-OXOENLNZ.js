import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  ReactiveFormsModule,
  Validators
} from "./chunk-34VX2KBB.js";
import {
  ImagePreviewComponent
} from "./chunk-NOEZV2AX.js";
import {
  HttpClient,
  HttpEventType
} from "./chunk-NEC4XMZM.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DatePipe,
  ElementRef,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  Output,
  Subject,
  ViewChild,
  __spreadValues,
  debounceTime,
  finalize,
  forwardRef,
  of,
  setClassMetadata,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-5Z4ZU7MS.js";

// src/app/shared/services/validation-message.service.ts
var ValidationMessageService = class _ValidationMessageService {
  /** Default validation messages */
  defaultMessages = {
    required: "This field is required.",
    email: "Please enter a valid email address.",
    minlength: "The value is too short.",
    maxlength: "The value is too long.",
    pattern: "The value format is invalid.",
    passwordWeak: "Password must include uppercase, lowercase, number & special character."
  };
  /** Override or extend messages */
  setMessages(custom) {
    this.defaultMessages = __spreadValues(__spreadValues({}, this.defaultMessages), custom);
  }
  /** Resolve message for an error key */
  getMessage(errorKey, errorVal) {
    const msg = this.defaultMessages[errorKey];
    if (msg)
      return msg;
    if (errorKey === "minlength")
      return `Minimum ${errorVal?.requiredLength} characters required.`;
    if (errorKey === "maxlength")
      return `Maximum ${errorVal?.requiredLength} characters allowed.`;
    if (errorKey === "pattern")
      return `Invalid format.`;
    return "Invalid value.";
  }
  /** Build messages from error object */
  buildMessages(errors) {
    if (!errors)
      return [];
    return Object.keys(errors).map((key) => this.getMessage(key, errors[key]));
  }
  messages = {
    required: "{label} is required"
  };
  get(key, label) {
    const msg = this.messages[key] || "Invalid value";
    return msg.replace("{label}", label ?? "");
  }
  setCustomMessage(key, message) {
    this.messages[key] = message;
  }
  static \u0275fac = function ValidationMessageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ValidationMessageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ValidationMessageService, factory: _ValidationMessageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValidationMessageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/components/textbox/textbox.component.ts
var _c0 = (a0) => ({ "is-invalid": a0 });
function TextboxComponent_div_1_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function TextboxComponent_div_1_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePassword());
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye");
  }
}
function TextboxComponent_div_1_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(msg_r4);
  }
}
function TextboxComponent_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, TextboxComponent_div_1_div_5_div_1_Template, 2, 1, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.errorMessages);
  }
}
function TextboxComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "input", 4);
    \u0275\u0275listener("blur", function TextboxComponent_div_1_Template_input_blur_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTouched());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TextboxComponent_div_1_button_4_Template, 2, 2, "button", 6)(5, TextboxComponent_div_1_div_5_Template, 2, 1, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r1.displayType)("formControl", ctx_r1.control)("id", ctx_r1.label)("placeholder", ctx_r1.placeholder || ctx_r1.label)("disabled", ctx_r1.disabled)("readOnly", ctx_r1.readonly)("ngClass", \u0275\u0275pureFunction1(11, _c0, ctx_r1.hasError));
    \u0275\u0275advance();
    \u0275\u0275property("for", ctx_r1.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.type === "password" && ctx_r1.toggleVisibility);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasError);
  }
}
function TextboxComponent_ng_template_2_label_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label);
  }
}
function TextboxComponent_ng_template_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.icon);
  }
}
function TextboxComponent_ng_template_2_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function TextboxComponent_ng_template_2_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePassword());
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye");
  }
}
function TextboxComponent_ng_template_2_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(msg_r7);
  }
}
function TextboxComponent_ng_template_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, TextboxComponent_ng_template_2_div_5_div_1_Template, 2, 1, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.errorMessages);
  }
}
function TextboxComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, TextboxComponent_ng_template_2_label_0_Template, 2, 1, "label", 11);
    \u0275\u0275elementStart(1, "div", 12);
    \u0275\u0275template(2, TextboxComponent_ng_template_2_span_2_Template, 2, 2, "span", 13);
    \u0275\u0275elementStart(3, "input", 14);
    \u0275\u0275listener("blur", function TextboxComponent_ng_template_2_Template_input_blur_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTouched());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TextboxComponent_ng_template_2_button_4_Template, 2, 2, "button", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, TextboxComponent_ng_template_2_div_5_Template, 2, 1, "div", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r1.displayType)("formControl", ctx_r1.control)("placeholder", ctx_r1.placeholder)("disabled", ctx_r1.disabled)("readOnly", ctx_r1.readonly)("ngClass", \u0275\u0275pureFunction1(10, _c0, ctx_r1.hasError));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.type === "password" && ctx_r1.toggleVisibility);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasError);
  }
}
var TextboxComponent = class _TextboxComponent {
  messages;
  label = "";
  placeholder = "";
  type = "text";
  required = false;
  minLength;
  maxLength;
  pattern;
  icon;
  serverErrors = [];
  floating = false;
  onlyNumber = false;
  noSpecialChars = false;
  disabled = false;
  readonly = false;
  toggleVisibility = false;
  // 👁️ NEW FEATURE
  valueChange = new EventEmitter();
  control = new FormControl("");
  showPassword = false;
  // 👁️ track toggle state
  onChange = () => {
  };
  onTouched = () => {
  };
  constructor(messages) {
    this.messages = messages;
  }
  ngOnInit() {
    const validators = [];
    if (this.required)
      validators.push(Validators.required);
    if (this.minLength)
      validators.push(Validators.minLength(this.minLength));
    if (this.maxLength)
      validators.push(Validators.maxLength(this.maxLength));
    if (this.pattern)
      validators.push(Validators.pattern(this.pattern));
    if (this.type === "email")
      validators.push(Validators.email);
    if (this.type === "password")
      validators.push(this.passwordValidator());
    this.control.setValidators(validators);
    this.control.valueChanges.subscribe((val) => {
      this.onChange(val);
      this.valueChange.emit(val ?? void 0);
    });
  }
  // password strength validation
  passwordValidator() {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return (control) => {
      if (!control.value)
        return null;
      return regex.test(control.value) ? null : { passwordWeak: true };
    };
  }
  writeValue(obj) {
    this.control.setValue(obj, { emitEvent: false });
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  validate() {
    return this.control.errors;
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  get displayType() {
    if (this.type !== "password")
      return this.type;
    return this.showPassword ? "text" : "password";
  }
  get hasError() {
    return this.control.invalid && (this.control.touched || this.serverErrors.length > 0);
  }
  get errorMessages() {
    const msgs = this.messages.buildMessages(this.control.errors);
    return [...msgs, ...this.serverErrors];
  }
  static \u0275fac = function TextboxComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextboxComponent)(\u0275\u0275directiveInject(ValidationMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TextboxComponent, selectors: [["app-textbox"]], inputs: { label: "label", placeholder: "placeholder", type: "type", required: "required", minLength: "minLength", maxLength: "maxLength", pattern: "pattern", icon: "icon", serverErrors: "serverErrors", floating: "floating", onlyNumber: "onlyNumber", noSpecialChars: "noSpecialChars", disabled: "disabled", readonly: "readonly", toggleVisibility: "toggleVisibility" }, outputs: { valueChange: "valueChange" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _TextboxComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => _TextboxComponent),
      multi: true
    }
  ])], decls: 4, vars: 2, consts: [["normalInput", ""], [1, "form-group", "mb-3", "textbox-component"], ["class", "form-floating position-relative", 4, "ngIf", "ngIfElse"], [1, "form-floating", "position-relative"], [1, "form-control", 3, "blur", "type", "formControl", "id", "placeholder", "disabled", "readOnly", "ngClass"], [3, "for"], ["type", "button", "class", "btn-eye", "tabindex", "-1", 3, "click", 4, "ngIf"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["type", "button", "tabindex", "-1", 1, "btn-eye", 3, "click"], [1, "invalid-feedback", "d-block"], [4, "ngFor", "ngForOf"], ["class", "form-label", 4, "ngIf"], [1, "input-group", "position-relative"], ["class", "input-group-text", 4, "ngIf"], [1, "form-control", 3, "blur", "type", "formControl", "placeholder", "disabled", "readOnly", "ngClass"], [1, "form-label"], [1, "input-group-text"]], template: function TextboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, TextboxComponent_div_1_Template, 6, 13, "div", 2)(2, TextboxComponent_ng_template_2_Template, 6, 12, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const normalInput_r8 = \u0275\u0275reference(3);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.floating)("ngIfElse", normalInput_r8);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormControlDirective], styles: ["\n\n.textbox-component[_ngcontent-%COMP%] {\n  position: relative;\n}\n.textbox-component[_ngcontent-%COMP%]   .btn-eye[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 0.75rem;\n  transform: translateY(-50%);\n  border: none;\n  background: transparent;\n  color: #6c757d;\n  cursor: pointer;\n  font-size: 1rem;\n  z-index: 5;\n}\n.textbox-component[_ngcontent-%COMP%]   .btn-eye[_ngcontent-%COMP%]:hover {\n  color: #0d6efd;\n}\n.textbox-component[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]   .btn-eye[_ngcontent-%COMP%] {\n  top: 1rem;\n}\n.textbox-component[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.15rem rgba(13, 110, 253, 0.25);\n}\n.textbox-component[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #dc3545;\n}\n/*# sourceMappingURL=textbox.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextboxComponent, [{
    type: Component,
    args: [{ selector: "app-textbox", standalone: true, imports: [CommonModule, ReactiveFormsModule], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TextboxComponent),
        multi: true
      },
      {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => TextboxComponent),
        multi: true
      }
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="form-group mb-3 textbox-component">
    <div *ngIf="floating; else normalInput" class="form-floating position-relative">
        <input
                [type]="displayType"
                [formControl]="control"
                [id]="label"
                class="form-control"
                [placeholder]="placeholder || label"
                [disabled]="disabled"
                [readOnly]="readonly"
                (blur)="onTouched()"
                [ngClass]="{'is-invalid': hasError}"
        />
        <label [for]="label">{{ label }}</label>

        <!-- \u{1F441}\uFE0F Show/Hide icon -->
        <button *ngIf="type === 'password' && toggleVisibility"
                type="button"
                class="btn-eye"
                (click)="togglePassword()"
                tabindex="-1">
            <i [class]="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"></i>
        </button>

        <div *ngIf="hasError" class="invalid-feedback d-block">
            <div *ngFor="let msg of errorMessages">{{ msg }}</div>
        </div>
    </div>

    <ng-template #normalInput>
        <label *ngIf="label" class="form-label">{{ label }}</label>
        <div class="input-group position-relative">
            <span *ngIf="icon" class="input-group-text"><i [class]="icon"></i></span>
            <input
                    [type]="displayType"
                    [formControl]="control"
                    class="form-control"
                    [placeholder]="placeholder"
                    [disabled]="disabled"
                    [readOnly]="readonly"
                    (blur)="onTouched()"
                    [ngClass]="{'is-invalid': hasError}"
            />
            <button *ngIf="type === 'password' && toggleVisibility"
                    type="button"
                    class="btn-eye"
                    (click)="togglePassword()"
                    tabindex="-1">
                <i [class]="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"></i>
            </button>
        </div>

        <div *ngIf="hasError" class="invalid-feedback d-block">
            <div *ngFor="let msg of errorMessages">{{ msg }}</div>
        </div>
    </ng-template>
</div>
`, styles: ["/* src/app/shared/components/textbox/textbox.component.scss */\n.textbox-component {\n  position: relative;\n}\n.textbox-component .btn-eye {\n  position: absolute;\n  top: 50%;\n  right: 0.75rem;\n  transform: translateY(-50%);\n  border: none;\n  background: transparent;\n  color: #6c757d;\n  cursor: pointer;\n  font-size: 1rem;\n  z-index: 5;\n}\n.textbox-component .btn-eye:hover {\n  color: #0d6efd;\n}\n.textbox-component .form-floating .btn-eye {\n  top: 1rem;\n}\n.textbox-component .form-control:focus {\n  box-shadow: 0 0 0 0.15rem rgba(13, 110, 253, 0.25);\n}\n.textbox-component .invalid-feedback {\n  font-size: 0.875rem;\n  color: #dc3545;\n}\n/*# sourceMappingURL=textbox.component.css.map */\n"] }]
  }], () => [{ type: ValidationMessageService }], { label: [{
    type: Input
  }], placeholder: [{
    type: Input
  }], type: [{
    type: Input
  }], required: [{
    type: Input
  }], minLength: [{
    type: Input
  }], maxLength: [{
    type: Input
  }], pattern: [{
    type: Input
  }], icon: [{
    type: Input
  }], serverErrors: [{
    type: Input
  }], floating: [{
    type: Input
  }], onlyNumber: [{
    type: Input
  }], noSpecialChars: [{
    type: Input
  }], disabled: [{
    type: Input
  }], readonly: [{
    type: Input
  }], toggleVisibility: [{
    type: Input
  }], valueChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TextboxComponent, { className: "TextboxComponent", filePath: "src/app/shared/components/textbox/textbox.component.ts", lineNumber: 42 });
})();

// src/app/shared/components/date-picker/date-picker.component.ts
var _c02 = (a0, a1, a2, a3) => ({ "selected": a0, "in-range": a1, "range-start": a2, "range-end": a3 });
function DatePickerComponent_i_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 5);
    \u0275\u0275listener("click", function DatePickerComponent_i_5_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCalendar());
    });
    \u0275\u0275elementEnd();
  }
}
function DatePickerComponent_div_6_div_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("mouseenter", function DatePickerComponent_div_6_div_10_div_4_Template_div_mouseenter_0_listener() {
      const day_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onHover(day_r5));
    })("mouseleave", function DatePickerComponent_div_6_div_10_div_4_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onHover(null));
    })("click", function DatePickerComponent_div_6_div_10_div_4_Template_div_click_0_listener() {
      const day_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectDate(day_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(2, _c02, ctx_r1.isSelected(day_r5), ctx_r1.isInRange(day_r5), ctx_r1.isStart(day_r5), ctx_r1.isEnd(day_r5)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r5.getDate(), " ");
  }
}
function DatePickerComponent_div_6_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275template(4, DatePickerComponent_div_6_div_10_div_4_Template, 2, 7, "div", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const month_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(month_r6.label);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", month_r6.days);
  }
}
function DatePickerComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "button", 8);
    \u0275\u0275listener("click", function DatePickerComponent_div_6_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevMonth());
    });
    \u0275\u0275element(3, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 8);
    \u0275\u0275listener("click", function DatePickerComponent_div_6_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextMonth());
    });
    \u0275\u0275element(8, "i", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 11);
    \u0275\u0275template(10, DatePickerComponent_div_6_div_10_Template, 5, 2, "div", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 2, ctx_r1.baseMonth, "MMMM yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.monthMatrix);
  }
}
var DatePickerComponent = class _DatePickerComponent {
  eRef;
  label = "Select Date";
  rangeMode = false;
  monthsToShow = 2;
  disablePast = false;
  disableFuture = false;
  showIcon = true;
  dateChange = new EventEmitter();
  control = new FormControl(null);
  range = { start: null, end: null };
  hoverDate = null;
  baseMonth = /* @__PURE__ */ new Date();
  monthMatrix = [];
  isOpen = false;
  onChange = (_) => {
  };
  onTouched = () => {
  };
  constructor(eRef) {
    this.eRef = eRef;
  }
  ngOnInit() {
    this.generateMonths();
  }
  generateMonths() {
    this.monthMatrix = [];
    for (let i = 0; i < this.monthsToShow; i++) {
      const monthDate = new Date(this.baseMonth.getFullYear(), this.baseMonth.getMonth() + i);
      const days = this.generateDays(monthDate);
      this.monthMatrix.push({
        label: monthDate.toLocaleString("default", { month: "long", year: "numeric" }),
        days
      });
    }
  }
  generateDays(base) {
    const start = new Date(base.getFullYear(), base.getMonth(), 1);
    const end = new Date(base.getFullYear(), base.getMonth() + 1, 0);
    const days = [];
    for (let i = 1; i <= end.getDate(); i++) {
      days.push(new Date(base.getFullYear(), base.getMonth(), i));
    }
    return days;
  }
  toggleCalendar() {
    this.isOpen = !this.isOpen;
  }
  nextMonth() {
    this.baseMonth = new Date(this.baseMonth.getFullYear(), this.baseMonth.getMonth() + 1);
    this.generateMonths();
  }
  prevMonth() {
    this.baseMonth = new Date(this.baseMonth.getFullYear(), this.baseMonth.getMonth() - 1);
    this.generateMonths();
  }
  selectDate(date) {
    const iso = date.toISOString().split("T")[0];
    if (!this.rangeMode) {
      this.control.setValue(iso);
      this.onChange(iso);
      this.dateChange.emit(iso);
      this.isOpen = false;
    } else {
      if (!this.range.start || this.range.start && this.range.end) {
        this.range = { start: iso, end: null };
      } else if (!this.range.end) {
        if (new Date(iso) < new Date(this.range.start)) {
          this.range = { start: iso, end: this.range.start };
        } else {
          this.range.end = iso;
        }
        this.onChange(this.range);
        this.dateChange.emit(this.range);
        this.isOpen = false;
      }
    }
  }
  onHover(date) {
    this.hoverDate = date ? date.toISOString().split("T")[0] : null;
  }
  isSelected(date) {
    return !this.rangeMode && this.control.value === date.toISOString().split("T")[0];
  }
  isInRange(date) {
    if (!this.range.start || !this.range.end && !this.hoverDate)
      return false;
    const d = date.toISOString().split("T")[0];
    const start = this.range.start;
    const end = this.range.end ?? this.hoverDate;
    return d >= start && d <= end;
  }
  isStart(date) {
    return this.range.start === date.toISOString().split("T")[0];
  }
  isEnd(date) {
    return this.range.end === date.toISOString().split("T")[0];
  }
  handleOutsideClick(e) {
    if (!this.eRef.nativeElement.contains(e.target))
      this.isOpen = false;
  }
  writeValue(value) {
    if (this.rangeMode && value && typeof value === "object")
      this.range = value;
    else
      this.control.setValue(value);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  static \u0275fac = function DatePickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DatePickerComponent)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DatePickerComponent, selectors: [["app-date-picker"]], hostBindings: function DatePickerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function DatePickerComponent_click_HostBindingHandler($event) {
        return ctx.handleOutsideClick($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, inputs: { label: "label", rangeMode: "rangeMode", monthsToShow: "monthsToShow", disablePast: "disablePast", disableFuture: "disableFuture", showIcon: "showIcon" }, outputs: { dateChange: "dateChange" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: _DatePickerComponent,
      multi: true
    }
  ])], decls: 7, vars: 4, consts: [[1, "date-picker", "mb-3"], [1, "form-floating", "position-relative"], ["readonly", "", 1, "form-control", 3, "click", "value"], ["class", "fa-solid fa-calendar-days calendar-icon", 3, "click", 4, "ngIf"], ["class", "calendar-popover", 4, "ngIf"], [1, "fa-solid", "fa-calendar-days", "calendar-icon", 3, "click"], [1, "calendar-popover"], [1, "calendar-header"], [1, "btn", "btn-sm", 3, "click"], [1, "fa-solid", "fa-chevron-left"], [1, "fa-solid", "fa-chevron-right"], [1, "calendar-body"], ["class", "month-container", 4, "ngFor", "ngForOf"], [1, "month-container"], [1, "month-label"], [1, "calendar-row"], ["class", "calendar-day", 3, "ngClass", "mouseenter", "mouseleave", "click", 4, "ngFor", "ngForOf"], [1, "calendar-day", 3, "mouseenter", "mouseleave", "click", "ngClass"]], template: function DatePickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "input", 2);
      \u0275\u0275listener("click", function DatePickerComponent_Template_input_click_2_listener() {
        return ctx.toggleCalendar();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "label");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, DatePickerComponent_i_5_Template, 1, 0, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, DatePickerComponent_div_6_Template, 11, 5, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.rangeMode ? ctx.range.start && ctx.range.end ? ctx.range.start + " \u2192 " + ctx.range.end : "" : ctx.control.value || "");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.label);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showIcon);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, ReactiveFormsModule], styles: ["\n\n.date-picker[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n}\n.date-picker[_ngcontent-%COMP%]   .calendar-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  color: #6c757d;\n}\n.date-picker[_ngcontent-%COMP%]   .calendar-popover[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 5px);\n  left: 0;\n  z-index: 1050;\n  background: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.5rem;\n  box-shadow: 0 0.75rem 1rem rgba(0, 0, 0, 0.15);\n  padding: 0.75rem;\n  width: 100%;\n  max-width: 700px;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.date-picker[_ngcontent-%COMP%]   .calendar-popover[_ngcontent-%COMP%]   .calendar-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n  font-weight: 500;\n}\n.date-picker[_ngcontent-%COMP%]   .calendar-popover[_ngcontent-%COMP%]   .calendar-body[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.date-picker[_ngcontent-%COMP%]   .calendar-popover[_ngcontent-%COMP%]   .calendar-body[_ngcontent-%COMP%]   .month-container[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 300px;\n}\n.date-picker[_ngcontent-%COMP%]   .calendar-popover[_ngcontent-%COMP%]   .calendar-body[_ngcontent-%COMP%]   .month-container[_ngcontent-%COMP%]   .month-label[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  margin-bottom: 0.3rem;\n}\n.date-picker[_ngcontent-%COMP%]   .calendar-popover[_ngcontent-%COMP%]   .calendar-body[_ngcontent-%COMP%]   .month-container[_ngcontent-%COMP%]   .calendar-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  justify-content: center;\n}\n.date-picker[_ngcontent-%COMP%]   .calendar-popover[_ngcontent-%COMP%]   .calendar-body[_ngcontent-%COMP%]   .month-container[_ngcontent-%COMP%]   .calendar-row[_ngcontent-%COMP%]   .calendar-day[_ngcontent-%COMP%] {\n  width: 2.2rem;\n  height: 2.2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.9rem;\n}\n.date-picker[_ngcontent-%COMP%]   .calendar-popover[_ngcontent-%COMP%]   .calendar-body[_ngcontent-%COMP%]   .month-container[_ngcontent-%COMP%]   .calendar-row[_ngcontent-%COMP%]   .calendar-day[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n.date-picker[_ngcontent-%COMP%]   .calendar-popover[_ngcontent-%COMP%]   .calendar-body[_ngcontent-%COMP%]   .month-container[_ngcontent-%COMP%]   .calendar-row[_ngcontent-%COMP%]   .calendar-day.selected[_ngcontent-%COMP%] {\n  background-color: #0d6efd;\n  color: #fff;\n}\n.date-picker[_ngcontent-%COMP%]   .calendar-popover[_ngcontent-%COMP%]   .calendar-body[_ngcontent-%COMP%]   .month-container[_ngcontent-%COMP%]   .calendar-row[_ngcontent-%COMP%]   .calendar-day.in-range[_ngcontent-%COMP%] {\n  background-color: #cfe2ff;\n}\n.date-picker[_ngcontent-%COMP%]   .calendar-popover[_ngcontent-%COMP%]   .calendar-body[_ngcontent-%COMP%]   .month-container[_ngcontent-%COMP%]   .calendar-row[_ngcontent-%COMP%]   .calendar-day.range-start[_ngcontent-%COMP%], \n.date-picker[_ngcontent-%COMP%]   .calendar-popover[_ngcontent-%COMP%]   .calendar-body[_ngcontent-%COMP%]   .month-container[_ngcontent-%COMP%]   .calendar-row[_ngcontent-%COMP%]   .calendar-day.range-end[_ngcontent-%COMP%] {\n  background-color: #0d6efd;\n  color: #fff;\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .date-picker[_ngcontent-%COMP%]   .calendar-body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=date-picker.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerComponent, [{
    type: Component,
    args: [{ selector: "app-date-picker", standalone: true, imports: [CommonModule, ReactiveFormsModule], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: DatePickerComponent,
        multi: true
      }
    ], template: `<div class="date-picker mb-3">
    <div class="form-floating position-relative">
        <input
                class="form-control"
                readonly
                [value]="rangeMode
        ? (range.start && range.end ? range.start + ' \u2192 ' + range.end : '')
        : control.value || ''"
                (click)="toggleCalendar()"
        />
        <label>{{ label }}</label>
        <i *ngIf="showIcon" class="fa-solid fa-calendar-days calendar-icon" (click)="toggleCalendar()"></i>
    </div>

    <div class="calendar-popover" *ngIf="isOpen">
        <div class="calendar-header">
            <button class="btn btn-sm" (click)="prevMonth()"><i class="fa-solid fa-chevron-left"></i></button>
            <span>{{ baseMonth | date: 'MMMM yyyy' }}</span>
            <button class="btn btn-sm" (click)="nextMonth()"><i class="fa-solid fa-chevron-right"></i></button>
        </div>

        <div class="calendar-body">
            <div class="month-container" *ngFor="let month of monthMatrix">
                <div class="month-label">{{ month.label }}</div>
                <div class="calendar-row">
                    <div
                            *ngFor="let day of month.days"
                            class="calendar-day"
                            [ngClass]="{
              'selected': isSelected(day),
              'in-range': isInRange(day),
              'range-start': isStart(day),
              'range-end': isEnd(day)
            }"
                            (mouseenter)="onHover(day)"
                            (mouseleave)="onHover(null)"
                            (click)="selectDate(day)"
                    >
                        {{ day.getDate() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`, styles: ["/* src/app/shared/components/date-picker/date-picker.component.scss */\n.date-picker {\n  position: relative;\n  display: block;\n}\n.date-picker .calendar-icon {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  color: #6c757d;\n}\n.date-picker .calendar-popover {\n  position: absolute;\n  top: calc(100% + 5px);\n  left: 0;\n  z-index: 1050;\n  background: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.5rem;\n  box-shadow: 0 0.75rem 1rem rgba(0, 0, 0, 0.15);\n  padding: 0.75rem;\n  width: 100%;\n  max-width: 700px;\n  animation: fadeIn 0.2s ease;\n}\n.date-picker .calendar-popover .calendar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n  font-weight: 500;\n}\n.date-picker .calendar-popover .calendar-body {\n  display: flex;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.date-picker .calendar-popover .calendar-body .month-container {\n  flex: 1;\n  min-width: 300px;\n}\n.date-picker .calendar-popover .calendar-body .month-container .month-label {\n  text-align: center;\n  font-weight: 600;\n  margin-bottom: 0.3rem;\n}\n.date-picker .calendar-popover .calendar-body .month-container .calendar-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  justify-content: center;\n}\n.date-picker .calendar-popover .calendar-body .month-container .calendar-row .calendar-day {\n  width: 2.2rem;\n  height: 2.2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.9rem;\n}\n.date-picker .calendar-popover .calendar-body .month-container .calendar-row .calendar-day:hover {\n  background-color: #e9ecef;\n}\n.date-picker .calendar-popover .calendar-body .month-container .calendar-row .calendar-day.selected {\n  background-color: #0d6efd;\n  color: #fff;\n}\n.date-picker .calendar-popover .calendar-body .month-container .calendar-row .calendar-day.in-range {\n  background-color: #cfe2ff;\n}\n.date-picker .calendar-popover .calendar-body .month-container .calendar-row .calendar-day.range-start,\n.date-picker .calendar-popover .calendar-body .month-container .calendar-row .calendar-day.range-end {\n  background-color: #0d6efd;\n  color: #fff;\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .date-picker .calendar-body {\n    flex-direction: column;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=date-picker.component.css.map */\n"] }]
  }], () => [{ type: ElementRef }], { label: [{
    type: Input
  }], rangeMode: [{
    type: Input
  }], monthsToShow: [{
    type: Input
  }], disablePast: [{
    type: Input
  }], disableFuture: [{
    type: Input
  }], showIcon: [{
    type: Input
  }], dateChange: [{
    type: Output
  }], handleOutsideClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DatePickerComponent, { className: "DatePickerComponent", filePath: "src/app/shared/components/date-picker/date-picker.component.ts", lineNumber: 24 });
})();

// src/app/shared/components/smart-dropdown/smart-dropdown.component.ts
var _c03 = ["searchInput"];
var _c1 = ["scrollContainer"];
var _c2 = (a0, a1) => ({ "fa-chevron-up": a0, "fa-chevron-down": a1 });
function SmartDropdownComponent_label_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function SmartDropdownComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 11);
    \u0275\u0275text(1);
    \u0275\u0275template(2, SmartDropdownComponent_label_1_span_2_Template, 2, 0, "span", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.required);
  }
}
function SmartDropdownComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedLabel, " ");
  }
}
function SmartDropdownComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.placeholder);
  }
}
function SmartDropdownComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "input", 23, 2);
    \u0275\u0275listener("input", function SmartDropdownComponent_div_7_div_1_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.filter($event.target));
    });
    \u0275\u0275elementEnd()();
  }
}
function SmartDropdownComponent_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function SmartDropdownComponent_div_7_div_4_Template_div_click_0_listener() {
      const opt_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectOption(opt_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("focused", i_r7 === ctx_r1.focusedIndex)("selected", opt_r6.value === ctx_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r6.label, " ");
  }
}
function SmartDropdownComponent_div_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275text(2, " Loading... ");
    \u0275\u0275elementEnd();
  }
}
function SmartDropdownComponent_div_7_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, " No results found ");
    \u0275\u0275elementEnd();
  }
}
function SmartDropdownComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, SmartDropdownComponent_div_7_div_1_Template, 3, 0, "div", 17);
    \u0275\u0275elementStart(2, "div", 18, 1);
    \u0275\u0275listener("scroll", function SmartDropdownComponent_div_7_Template_div_scroll_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onScroll());
    });
    \u0275\u0275template(4, SmartDropdownComponent_div_7_div_4_Template, 2, 5, "div", 19)(5, SmartDropdownComponent_div_7_div_5_Template, 3, 0, "div", 20)(6, SmartDropdownComponent_div_7_div_6_Template, 2, 0, "div", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchable);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.filteredOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredOptions.length === 0);
  }
}
function SmartDropdownComponent_small_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.helpText);
  }
}
function SmartDropdownComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
var SmartDropdownComponent = class _SmartDropdownComponent {
  http;
  el;
  /** Inputs */
  label = "";
  placeholder = "Select...";
  required = false;
  mode = "static";
  // 'static' | 'api-simple' | 'api-scroll'
  options = [];
  apiUrl;
  // for api modes
  pageSize = 10;
  reselectable = true;
  searchable = true;
  disabled = false;
  helpText;
  requestBody = {};
  /** Outputs */
  changed = new EventEmitter();
  /** View refs */
  searchInput;
  scrollContainer;
  /** State */
  showDropdown = false;
  filteredOptions = [];
  value = null;
  selectedLabel = "";
  searchTerm = "";
  errorMessage = null;
  focusedIndex = 0;
  /** Pagination (for api-scroll mode) */
  page = 0;
  totalPages = 1;
  loading = false;
  searchSubject = new Subject();
  onChange = (val) => {
  };
  onTouched = () => {
  };
  constructor(http, el) {
    this.http = http;
    this.el = el;
  }
  ngOnInit() {
    if (this.mode === "static") {
      this.filteredOptions = [...this.options];
    } else {
      this.setupSearch();
      this.loadData();
    }
  }
  /** --- Reactive search handling --- */
  setupSearch() {
    this.searchSubject.pipe(debounceTime(400), tap(() => {
      this.page = 0;
      this.filteredOptions = [];
    }), switchMap((term) => this.fetchData(term))).subscribe();
  }
  fetchData(term = "") {
    if (!this.apiUrl)
      return of([]);
    this.loading = true;
    const body = { searchText: term, page: this.page, size: this.pageSize, source: "KYC_APP" };
    return this.http.post(this.apiUrl, body).pipe(tap((res) => {
      const content = res?.content ?? res ?? [];
      this.filteredOptions = [...this.filteredOptions, ...content.map((c) => ({
        label: c.detailLocation ?? c.label ?? "Unnamed",
        value: c.id
      }))];
      this.totalPages = res?.totalPages ?? 1;
      this.loading = false;
    }));
  }
  loadData() {
    if (this.mode === "api-simple") {
      this.fetchData().subscribe();
    } else if (this.mode === "api-scroll") {
      this.fetchData().subscribe();
    }
  }
  /** --- User actions --- */
  toggleDropdown() {
    if (this.showDropdown) {
      this.showDropdown = false;
    } else {
      this.showDropdown = true;
      if (this.mode !== "static")
        this.page = 0;
      setTimeout(() => this.searchInput?.nativeElement.focus(), 100);
    }
  }
  filter(element) {
    const input = element;
    this.searchTerm = input?.value || "";
    if (this.mode === "static") {
      this.filteredOptions = this.options.filter((o) => o.label.toLowerCase().includes(this.searchTerm.toLowerCase()));
    } else {
      this.searchSubject.next(this.searchTerm);
    }
  }
  selectOption(option) {
    if (!this.reselectable && this.value === option.value)
      return;
    this.value = option.value;
    this.selectedLabel = option.label;
    this.onChange(this.value);
    this.changed.emit(this.value);
    this.showDropdown = false;
  }
  onScroll() {
    if (this.mode !== "api-scroll" || this.loading || this.page >= this.totalPages - 1)
      return;
    const el = this.scrollContainer.nativeElement;
    const nearBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 100;
    if (nearBottom) {
      this.page++;
      this.fetchData(this.searchTerm).subscribe();
    }
  }
  /** --- Form control methods --- */
  writeValue(value) {
    this.value = value;
    this.updateSelectedLabel();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  validate() {
    if (this.required && !this.value) {
      this.errorMessage = `${this.label || "This field"} is required`;
      return { required: true };
    }
    this.errorMessage = null;
    return null;
  }
  updateSelectedLabel() {
    const selected = this.options.find((o) => o.value === this.value);
    this.selectedLabel = selected ? selected.label : "";
  }
  onOutsideClick(event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.showDropdown = false;
    }
  }
  static \u0275fac = function SmartDropdownComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SmartDropdownComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SmartDropdownComponent, selectors: [["app-smart-dropdown"]], viewQuery: function SmartDropdownComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollContainer = _t.first);
    }
  }, hostBindings: function SmartDropdownComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function SmartDropdownComponent_click_HostBindingHandler($event) {
        return ctx.onOutsideClick($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, inputs: { label: "label", placeholder: "placeholder", required: "required", mode: "mode", options: "options", apiUrl: "apiUrl", pageSize: "pageSize", reselectable: "reselectable", searchable: "searchable", disabled: "disabled", helpText: "helpText", requestBody: "requestBody" }, outputs: { changed: "changed" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SmartDropdownComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => _SmartDropdownComponent),
      multi: true
    }
  ])], decls: 10, vars: 14, consts: [["placeholderBlock", ""], ["scrollContainer", ""], ["searchInput", ""], [1, "dropdown-wrapper"], ["class", "form-label fw-semibold mb-2", 4, "ngIf"], ["tabindex", "0", 1, "dropdown-control", 3, "click"], ["class", "selected-text", 4, "ngIf", "ngIfElse"], [1, "fa-solid", 3, "ngClass"], ["class", "dropdown-menu shadow-sm", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], ["class", "invalid-feedback d-block mt-1", 4, "ngIf"], [1, "form-label", "fw-semibold", "mb-2"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [1, "selected-text"], [1, "placeholder", "text-muted"], [1, "dropdown-menu", "shadow-sm"], ["class", "search-box", 4, "ngIf"], [1, "options-list", 3, "scroll"], ["class", "dropdown-item", 3, "focused", "selected", "click", 4, "ngFor", "ngForOf"], ["class", "text-center py-2", 4, "ngIf"], ["class", "no-results text-muted", 4, "ngIf"], [1, "search-box"], ["type", "text", "placeholder", "Search...", 1, "form-control", "form-control-sm", 3, "input"], [1, "dropdown-item", 3, "click"], [1, "text-center", "py-2"], [1, "fa", "fa-spinner", "fa-spin"], [1, "no-results", "text-muted"], [1, "text-muted"], [1, "invalid-feedback", "d-block", "mt-1"]], template: function SmartDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3);
      \u0275\u0275template(1, SmartDropdownComponent_label_1_Template, 3, 2, "label", 4);
      \u0275\u0275elementStart(2, "div", 5);
      \u0275\u0275listener("click", function SmartDropdownComponent_Template_div_click_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleDropdown());
      });
      \u0275\u0275template(3, SmartDropdownComponent_span_3_Template, 2, 1, "span", 6)(4, SmartDropdownComponent_ng_template_4_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275element(6, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, SmartDropdownComponent_div_7_Template, 7, 4, "div", 8)(8, SmartDropdownComponent_small_8_Template, 2, 1, "small", 9)(9, SmartDropdownComponent_div_9_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const placeholderBlock_r8 = \u0275\u0275reference(5);
      \u0275\u0275classProp("disabled", ctx.disabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.label);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.showDropdown);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedLabel)("ngIfElse", placeholderBlock_r8);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(11, _c2, ctx.showDropdown, !ctx.showDropdown));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDropdown);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.helpText && !ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule], styles: ["\n\n.dropdown-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.dropdown-wrapper.disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-control[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 2px solid var(--bs-border-color, #dee2e6);\n  border-radius: 8px;\n  padding: 0.6rem 0.75rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.95rem;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-control[_ngcontent-%COMP%]:hover {\n  border-color: var(--bs-primary);\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-control.open[_ngcontent-%COMP%] {\n  border-color: var(--bs-primary);\n  box-shadow: 0 0 0 3px rgba(var(--bs-primary-rgb), 0.15);\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-control[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-control[_ngcontent-%COMP%]   .selected-text[_ngcontent-%COMP%] {\n  color: #212529;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-control[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: #6c757d;\n  background-color: #FFF;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  right: 0;\n  background: #fff;\n  border: 1px solid var(--bs-border-color, #dee2e6);\n  border-radius: 8px;\n  z-index: 10;\n  max-height: 250px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border-bottom: 1px solid #eee;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .options-list[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow-y: auto;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .options-list[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.75rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  display: flex;\n  align-items: center;\n  font-size: 0.9rem;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .options-list[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, \n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .options-list[_ngcontent-%COMP%]   .dropdown-item.focused[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-primary-rgb), 0.08);\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .options-list[_ngcontent-%COMP%]   .dropdown-item.selected[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-primary-rgb), 0.12);\n  font-weight: 600;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .options-list[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem;\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=smart-dropdown.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartDropdownComponent, [{
    type: Component,
    args: [{ selector: "app-smart-dropdown", standalone: true, imports: [CommonModule, FormsModule], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SmartDropdownComponent),
        multi: true
      },
      {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => SmartDropdownComponent),
        multi: true
      }
    ], template: `<div class="dropdown-wrapper" [class.disabled]="disabled">
    <label *ngIf="label" class="form-label fw-semibold mb-2">
        {{ label }}
        <span *ngIf="required" class="text-danger">*</span>
    </label>

    <div
            class="dropdown-control"
            [class.open]="showDropdown"
            (click)="toggleDropdown()"
            tabindex="0"
    >
    <span class="selected-text" *ngIf="selectedLabel; else placeholderBlock">
      {{ selectedLabel }}
    </span>
        <ng-template #placeholderBlock>
            <span class="placeholder text-muted">{{ placeholder }}</span>
        </ng-template>

        <i
                class="fa-solid"
                [ngClass]="{
        'fa-chevron-up': showDropdown,
        'fa-chevron-down': !showDropdown
      }"
        ></i>
    </div>

    <div class="dropdown-menu shadow-sm" *ngIf="showDropdown">
        <div class="search-box" *ngIf="searchable">
            <input
                #searchInput
                type="text"
                class="form-control form-control-sm"
                placeholder="Search..."
                (input)="filter($event.target)"
            />
        </div>

        <div
                class="options-list"
                #scrollContainer
                (scroll)="onScroll()"
        >
            <div
                    *ngFor="let opt of filteredOptions; let i = index"
                    class="dropdown-item"
                    [class.focused]="i === focusedIndex"
                    [class.selected]="opt.value === value"
                    (click)="selectOption(opt)"
            >
                {{ opt.label }}
            </div>
            <div *ngIf="loading" class="text-center py-2">
                <i class="fa fa-spinner fa-spin"></i> Loading...
            </div>
            <div *ngIf="filteredOptions.length === 0" class="no-results text-muted">
                No results found
            </div>
        </div>
    </div>

    <small *ngIf="helpText && !errorMessage" class="text-muted">{{ helpText }}</small>
    <div *ngIf="errorMessage" class="invalid-feedback d-block mt-1">
        {{ errorMessage }}
    </div>
</div>
`, styles: ["/* src/app/shared/components/smart-dropdown/smart-dropdown.component.scss */\n.dropdown-wrapper {\n  position: relative;\n  width: 100%;\n}\n.dropdown-wrapper.disabled {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.dropdown-wrapper .dropdown-control {\n  background: #fff;\n  border: 2px solid var(--bs-border-color, #dee2e6);\n  border-radius: 8px;\n  padding: 0.6rem 0.75rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.95rem;\n}\n.dropdown-wrapper .dropdown-control:hover {\n  border-color: var(--bs-primary);\n}\n.dropdown-wrapper .dropdown-control.open {\n  border-color: var(--bs-primary);\n  box-shadow: 0 0 0 3px rgba(var(--bs-primary-rgb), 0.15);\n}\n.dropdown-wrapper .dropdown-control i {\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n.dropdown-wrapper .dropdown-control .selected-text {\n  color: #212529;\n}\n.dropdown-wrapper .dropdown-control .placeholder {\n  color: #6c757d;\n  background-color: #FFF;\n}\n.dropdown-wrapper .dropdown-menu {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  right: 0;\n  background: #fff;\n  border: 1px solid var(--bs-border-color, #dee2e6);\n  border-radius: 8px;\n  z-index: 10;\n  max-height: 250px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.dropdown-wrapper .dropdown-menu .search-box {\n  padding: 0.5rem;\n  border-bottom: 1px solid #eee;\n}\n.dropdown-wrapper .dropdown-menu .search-box input {\n  font-size: 0.85rem;\n}\n.dropdown-wrapper .dropdown-menu .options-list {\n  max-height: 200px;\n  overflow-y: auto;\n}\n.dropdown-wrapper .dropdown-menu .options-list .dropdown-item {\n  padding: 0.6rem 0.75rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  display: flex;\n  align-items: center;\n  font-size: 0.9rem;\n}\n.dropdown-wrapper .dropdown-menu .options-list .dropdown-item:hover,\n.dropdown-wrapper .dropdown-menu .options-list .dropdown-item.focused {\n  background-color: rgba(var(--bs-primary-rgb), 0.08);\n}\n.dropdown-wrapper .dropdown-menu .options-list .dropdown-item.selected {\n  background-color: rgba(var(--bs-primary-rgb), 0.12);\n  font-weight: 600;\n}\n.dropdown-wrapper .dropdown-menu .options-list .no-results {\n  text-align: center;\n  padding: 1rem;\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=smart-dropdown.component.css.map */\n"] }]
  }], () => [{ type: HttpClient }, { type: ElementRef }], { label: [{
    type: Input
  }], placeholder: [{
    type: Input
  }], required: [{
    type: Input
  }], mode: [{
    type: Input
  }], options: [{
    type: Input
  }], apiUrl: [{
    type: Input
  }], pageSize: [{
    type: Input
  }], reselectable: [{
    type: Input
  }], searchable: [{
    type: Input
  }], disabled: [{
    type: Input
  }], helpText: [{
    type: Input
  }], requestBody: [{
    type: Input
  }], changed: [{
    type: Output
  }], searchInput: [{
    type: ViewChild,
    args: ["searchInput"]
  }], scrollContainer: [{
    type: ViewChild,
    args: ["scrollContainer"]
  }], onOutsideClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SmartDropdownComponent, { className: "SmartDropdownComponent", filePath: "src/app/shared/components/smart-dropdown/smart-dropdown.component.ts", lineNumber: 34 });
})();

// src/app/shared/components/file-upload/file-upload.component.ts
function FileUploadComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function FileUploadComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-image-preview", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.existingPreviewTitle);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.existingPreviewUrl)("subtitle", ctx_r0.existingPreviewTitle)("width", 120)("height", 120);
  }
}
function FileUploadComponent_div_10_div_1_app_image_preview_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-image-preview", 24);
  }
  if (rf & 2) {
    const i_r3 = \u0275\u0275nextContext().index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.previews[i_r3])("width", 48)("height", 48);
  }
}
function FileUploadComponent_div_10_div_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 25);
  }
}
function FileUploadComponent_div_10_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r3 = \u0275\u0275nextContext().index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r0.progress[i_r3], "%");
  }
}
function FileUploadComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, FileUploadComponent_div_10_div_1_app_image_preview_1_Template, 1, 3, "app-image-preview", 17)(2, FileUploadComponent_div_10_div_1_i_2_Template, 1, 0, "i", 18);
    \u0275\u0275elementStart(3, "div", 19)(4, "div", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, FileUploadComponent_div_10_div_1_div_8_Template, 2, 2, "div", 21);
    \u0275\u0275elementStart(9, "button", 22);
    \u0275\u0275listener("click", function FileUploadComponent_div_10_div_1_Template_button_click_9_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeFile(i_r3));
    });
    \u0275\u0275element(10, "i", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", file_r4.type.startsWith("image/"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !file_r4.type.startsWith("image/"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(file_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (file_r4.size / 1024 / 1024).toFixed(2), " MB");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.uploadUrl);
  }
}
function FileUploadComponent_div_10_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function FileUploadComponent_div_10_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.uploadAll());
    });
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2, " Upload All ");
    \u0275\u0275elementEnd();
  }
}
function FileUploadComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, FileUploadComponent_div_10_div_1_Template, 11, 5, "div", 14)(2, FileUploadComponent_div_10_button_2_Template, 3, 0, "button", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.files);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.uploadUrl);
  }
}
var FileUploadComponent = class _FileUploadComponent {
  http;
  label = "Upload Files";
  hint = "Drag & drop files or click to browse";
  accept = "*/*";
  multiple = false;
  maxSizeMB = 10;
  uploadUrl;
  // optional API endpoint
  showPreview = true;
  existingPreviewUrl = "";
  existingPreviewTitle = "Current Photo";
  filesSelected = new EventEmitter();
  uploadComplete = new EventEmitter();
  files = [];
  previews = [];
  progress = [];
  errorMessage = "";
  isDragging = false;
  onChange = () => {
  };
  onTouched = () => {
  };
  constructor(http) {
    this.http = http;
  }
  // === ControlValueAccessor ===
  writeValue(value) {
    this.files = value || [];
    this.progress = this.files.map(() => 0);
    if (this.showPreview) {
      this.generatePreviews();
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  // === File Handling ===
  onFileSelected(event) {
    const target = event.target;
    const selected = target.files ? Array.from(target.files) : [];
    this.handleFiles(selected);
  }
  onDrop(event) {
    event.preventDefault();
    this.isDragging = false;
    const dropped = event.dataTransfer ? Array.from(event.dataTransfer.files) : [];
    this.handleFiles(dropped);
  }
  onDragOver(event) {
    event.preventDefault();
    this.isDragging = true;
  }
  onDragLeave() {
    this.isDragging = false;
  }
  handleFiles(selected) {
    this.errorMessage = "";
    const newFiles = [];
    for (const file of selected) {
      if (file.size > this.maxSizeMB * 1024 * 1024) {
        this.errorMessage = `\u274C ${file.name} exceeds ${this.maxSizeMB}MB`;
        continue;
      }
      if (this.accept !== "*/*" && !file.type.match(this.accept.replace(/\*/g, ".*"))) {
        this.errorMessage = `\u274C Invalid file type: ${file.name}`;
        continue;
      }
      if (this.files.some((f) => f.name === file.name && f.size === file.size)) {
        this.errorMessage = `\u26A0\uFE0F Duplicate file skipped: ${file.name}`;
        continue;
      }
      newFiles.push(file);
    }
    this.files = this.multiple ? [...this.files, ...newFiles] : newFiles.slice(0, 1);
    this.progress = this.files.map(() => 0);
    this.onChange(this.files);
    this.filesSelected.emit(this.files);
    if (this.showPreview)
      this.generatePreviews();
  }
  generatePreviews() {
    this.previews = [];
    for (const file of this.files) {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => this.previews.push(e.target?.result);
        reader.readAsDataURL(file);
      } else {
        this.previews.push("");
      }
    }
  }
  // === Upload ===
  uploadAll() {
    if (!this.uploadUrl) {
      this.errorMessage = "Upload URL is not configured";
      return;
    }
    this.files.forEach((file, index) => {
      const formData = new FormData();
      formData.append("file", file);
      this.http.post(this.uploadUrl ?? "", formData, {
        reportProgress: true,
        observe: "events"
      }).pipe(finalize(() => this.uploadComplete.emit({ file, index }))).subscribe({
        next: (event) => {
          if (event.type === HttpEventType.UploadProgress && event.total) {
            this.progress[index] = Math.round(100 * event.loaded / event.total);
          }
        },
        error: () => this.errorMessage = `Failed to upload ${file.name}`
      });
    });
  }
  removeFile(index) {
    this.files.splice(index, 1);
    this.previews.splice(index, 1);
    this.progress.splice(index, 1);
    this.onChange(this.files);
  }
  get shouldShowExistingPreview() {
    return this.showPreview && this.files.length === 0 && !!this.existingPreviewUrl;
  }
  static \u0275fac = function FileUploadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileUploadComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileUploadComponent, selectors: [["app-file-upload"]], inputs: { label: "label", hint: "hint", accept: "accept", multiple: "multiple", maxSizeMB: "maxSizeMB", uploadUrl: "uploadUrl", showPreview: "showPreview", existingPreviewUrl: "existingPreviewUrl", existingPreviewTitle: "existingPreviewTitle" }, outputs: { filesSelected: "filesSelected", uploadComplete: "uploadComplete" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _FileUploadComponent),
      multi: true
    }
  ])], decls: 11, vars: 9, consts: [[1, "file-upload"], [1, "form-label", "fw-semibold"], [1, "upload-area", 3, "drop", "dragover", "dragleave"], [1, "fa-solid", "fa-cloud-arrow-up", "fa-2x", "text-primary", "mb-2"], [1, "text-muted"], ["type", "file", 3, "change"], ["class", "text-danger mt-2", 4, "ngIf"], ["class", "existing-preview mt-3", 4, "ngIf"], ["class", "preview-list mt-3", 4, "ngIf"], [1, "text-danger", "mt-2"], [1, "existing-preview", "mt-3"], [1, "small", "text-muted", "mb-2"], ["alt", "Current uploaded file", "title", "Person Photo", "thumbnailClass", "rounded-3 shadow-sm object-fit-cover border", "imageClass", "img-fluid rounded-4 shadow-sm", 3, "src", "subtitle", "width", "height"], [1, "preview-list", "mt-3"], ["class", "preview-item", 4, "ngFor", "ngForOf"], ["class", "btn btn-primary mt-3 w-100", 3, "click", 4, "ngIf"], [1, "preview-item"], ["alt", "Selected file preview", "title", "Selected Photo", "subtitle", "Unsaved local preview", "thumbnailClass", "rounded-2 object-fit-cover", "imageClass", "img-fluid rounded-4 shadow-sm", 3, "src", "width", "height", 4, "ngIf"], ["class", "fa-solid fa-file fa-2x text-muted", 4, "ngIf"], [1, "file-info"], [1, "fw-semibold", "text-truncate"], ["class", "progress flex-grow-1 mx-2", 4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "fa", "fa-times"], ["alt", "Selected file preview", "title", "Selected Photo", "subtitle", "Unsaved local preview", "thumbnailClass", "rounded-2 object-fit-cover", "imageClass", "img-fluid rounded-4 shadow-sm", 3, "src", "width", "height"], [1, "fa-solid", "fa-file", "fa-2x", "text-muted"], [1, "progress", "flex-grow-1", "mx-2"], ["role", "progressbar", 1, "progress-bar", "bg-success"], [1, "btn", "btn-primary", "mt-3", "w-100", 3, "click"], [1, "fa-solid", "fa-upload", "me-1"]], template: function FileUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "label", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275listener("drop", function FileUploadComponent_Template_div_drop_3_listener($event) {
        return ctx.onDrop($event);
      })("dragover", function FileUploadComponent_Template_div_dragover_3_listener($event) {
        return ctx.onDragOver($event);
      })("dragleave", function FileUploadComponent_Template_div_dragleave_3_listener() {
        return ctx.onDragLeave();
      });
      \u0275\u0275element(4, "i", 3);
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "input", 5);
      \u0275\u0275listener("change", function FileUploadComponent_Template_input_change_7_listener($event) {
        return ctx.onFileSelected($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, FileUploadComponent_div_8_Template, 2, 1, "div", 6)(9, FileUploadComponent_div_9_Template, 4, 5, "div", 7)(10, FileUploadComponent_div_10_Template, 3, 2, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.label);
      \u0275\u0275advance();
      \u0275\u0275classProp("dragging", ctx.isDragging);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.hint);
      \u0275\u0275advance();
      \u0275\u0275attribute("accept", ctx.accept)("multiple", ctx.multiple ? true : null);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.shouldShowExistingPreview);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.files.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ImagePreviewComponent], styles: ["\n\n.file-upload[_ngcontent-%COMP%]   .existing-preview[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n}\n.file-upload[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%] {\n  position: relative;\n  border: 2px dashed #ccc;\n  border-radius: 0.5rem;\n  padding: 1.5rem;\n  text-align: center;\n  background-color: #f8f9fa;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.file-upload[_ngcontent-%COMP%]   .upload-area.dragging[_ngcontent-%COMP%] {\n  background-color: #e7f3ff;\n  border-color: #0d6efd;\n  box-shadow: 0 0 8px rgba(13, 110, 253, 0.3);\n}\n.file-upload[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  cursor: pointer;\n}\n.file-upload[_ngcontent-%COMP%]   .preview-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.file-upload[_ngcontent-%COMP%]   .preview-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  background: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  transition: background 0.2s;\n}\n.file-upload[_ngcontent-%COMP%]   .preview-item[_ngcontent-%COMP%]:hover {\n  background: #f1f3f5;\n}\n.file-upload[_ngcontent-%COMP%]   .preview-item[_ngcontent-%COMP%]   app-image-preview[_ngcontent-%COMP%] {\n  display: inline-flex;\n  line-height: 0;\n}\n.file-upload[_ngcontent-%COMP%]   .preview-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 0.25rem;\n  object-fit: cover;\n}\n.file-upload[_ngcontent-%COMP%]   .preview-item[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  height: 6px;\n  border-radius: 3px;\n  background-color: #e9ecef;\n}\n/*# sourceMappingURL=file-upload.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadComponent, [{
    type: Component,
    args: [{ selector: "app-file-upload", standalone: true, imports: [CommonModule, ImagePreviewComponent], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => FileUploadComponent),
        multi: true
      }
    ], template: `<div class="file-upload">
    <label class="form-label fw-semibold">{{ label }}</label>

    <div
            class="upload-area"
            [class.dragging]="isDragging"
            (drop)="onDrop($event)"
            (dragover)="onDragOver($event)"
            (dragleave)="onDragLeave()"
    >
        <i class="fa-solid fa-cloud-arrow-up fa-2x text-primary mb-2"></i>
        <p class="text-muted">{{ hint }}</p>

        <input
                type="file"
                [attr.accept]="accept"
                [attr.multiple]="multiple ? true : null"
                (change)="onFileSelected($event)"
        />
    </div>

    <div class="text-danger mt-2" *ngIf="errorMessage">{{ errorMessage }}</div>

    <div *ngIf="shouldShowExistingPreview" class="existing-preview mt-3">
        <div class="small text-muted mb-2">{{ existingPreviewTitle }}</div>
        <app-image-preview
                [src]="existingPreviewUrl"
                alt="Current uploaded file"
                title="Person Photo"
                [subtitle]="existingPreviewTitle"
                [width]="120"
                [height]="120"
                thumbnailClass="rounded-3 shadow-sm object-fit-cover border"
                imageClass="img-fluid rounded-4 shadow-sm">
        </app-image-preview>
    </div>

    <!-- Preview List -->
    <div *ngIf="files.length > 0" class="preview-list mt-3">
        <div *ngFor="let file of files; let i = index" class="preview-item">
            <app-image-preview
                    *ngIf="file.type.startsWith('image/')"
                    [src]="previews[i]"
                    alt="Selected file preview"
                    title="Selected Photo"
                    subtitle="Unsaved local preview"
                    [width]="48"
                    [height]="48"
                    thumbnailClass="rounded-2 object-fit-cover"
                    imageClass="img-fluid rounded-4 shadow-sm">
            </app-image-preview>
            <i *ngIf="!file.type.startsWith('image/')" class="fa-solid fa-file fa-2x text-muted"></i>

            <div class="file-info">
                <div class="fw-semibold text-truncate">{{ file.name }}</div>
                <small>{{ (file.size / 1024 / 1024).toFixed(2) }} MB</small>
            </div>

            <div class="progress flex-grow-1 mx-2" *ngIf="uploadUrl">
                <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        [style.width.%]="progress[i]"
                ></div>
            </div>

            <button
                    type="button"
                    class="btn btn-sm btn-outline-danger"
                    (click)="removeFile(i)"
            >
                <i class="fa fa-times"></i>
            </button>
        </div>

        <button
                *ngIf="uploadUrl"
                class="btn btn-primary mt-3 w-100"
                (click)="uploadAll()"
        >
            <i class="fa-solid fa-upload me-1"></i> Upload All
        </button>
    </div>
</div>
`, styles: ["/* src/app/shared/components/file-upload/file-upload.component.scss */\n.file-upload .existing-preview {\n  display: inline-flex;\n  flex-direction: column;\n}\n.file-upload .upload-area {\n  position: relative;\n  border: 2px dashed #ccc;\n  border-radius: 0.5rem;\n  padding: 1.5rem;\n  text-align: center;\n  background-color: #f8f9fa;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.file-upload .upload-area.dragging {\n  background-color: #e7f3ff;\n  border-color: #0d6efd;\n  box-shadow: 0 0 8px rgba(13, 110, 253, 0.3);\n}\n.file-upload .upload-area input[type=file] {\n  position: absolute;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  cursor: pointer;\n}\n.file-upload .preview-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.file-upload .preview-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  background: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  transition: background 0.2s;\n}\n.file-upload .preview-item:hover {\n  background: #f1f3f5;\n}\n.file-upload .preview-item app-image-preview {\n  display: inline-flex;\n  line-height: 0;\n}\n.file-upload .preview-item img {\n  width: 48px;\n  height: 48px;\n  border-radius: 0.25rem;\n  object-fit: cover;\n}\n.file-upload .preview-item .progress {\n  height: 6px;\n  border-radius: 3px;\n  background-color: #e9ecef;\n}\n/*# sourceMappingURL=file-upload.component.css.map */\n"] }]
  }], () => [{ type: HttpClient }], { label: [{
    type: Input
  }], hint: [{
    type: Input
  }], accept: [{
    type: Input
  }], multiple: [{
    type: Input
  }], maxSizeMB: [{
    type: Input
  }], uploadUrl: [{
    type: Input
  }], showPreview: [{
    type: Input
  }], existingPreviewUrl: [{
    type: Input
  }], existingPreviewTitle: [{
    type: Input
  }], filesSelected: [{
    type: Output
  }], uploadComplete: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileUploadComponent, { className: "FileUploadComponent", filePath: "src/app/shared/components/file-upload/file-upload.component.ts", lineNumber: 31 });
})();

export {
  ValidationMessageService,
  TextboxComponent,
  DatePickerComponent,
  SmartDropdownComponent,
  FileUploadComponent
};
//# sourceMappingURL=chunk-OXOENLNZ.js.map
