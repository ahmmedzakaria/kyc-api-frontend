import "./chunk-C53HBVYJ.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-53JHYZBU.js";
import {
  DatePickerComponent,
  FileUploadComponent,
  SmartDropdownComponent,
  TextboxComponent,
  ValidationMessageService
} from "./chunk-OXOENLNZ.js";
import {
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-34VX2KBB.js";
import "./chunk-NOEZV2AX.js";
import "./chunk-NEC4XMZM.js";
import {
  CommonModule,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  Output,
  ViewChild,
  forwardRef,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
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
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-5Z4ZU7MS.js";

// src/app/shared/components/button/button.component.ts
function ButtonComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 3);
  }
}
function ButtonComponent_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.icon);
  }
}
var ButtonComponent = class _ButtonComponent {
  /** Button text */
  label = "";
  /** Icon class e.g. 'fa-solid fa-plus' */
  icon;
  /** Bootstrap variant */
  variant = "primary";
  /** Size sm | md | lg */
  size = "md";
  /** Disabled state */
  disabled = false;
  /** Loading spinner */
  loading = false;
  /** Outline style */
  outline = false;
  /** Full width button */
  block = false;
  /** Rounded corners */
  rounded = true;
  /** Emits click event */
  clicked = new EventEmitter();
  onClick() {
    if (!this.disabled && !this.loading)
      this.clicked.emit();
  }
  get classes() {
    const btnType = this.outline ? `btn-outline-${this.variant}` : `btn-${this.variant}`;
    const sizeClass = this.size !== "md" ? `btn-${this.size}` : "";
    const blockClass = this.block ? "w-100" : "";
    const roundClass = this.rounded ? "rounded-pill" : "";
    return ["btn", btnType, sizeClass, blockClass, roundClass].join(" ").trim();
  }
  static \u0275fac = function ButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ButtonComponent, selectors: [["app-button"]], inputs: { label: "label", icon: "icon", variant: "variant", size: "size", disabled: "disabled", loading: "loading", outline: "outline", block: "block", rounded: "rounded" }, outputs: { clicked: "clicked" }, decls: 5, vars: 5, consts: [[3, "click", "ngClass", "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", 4, "ngIf"], ["class", "me-2", 3, "class", 4, "ngIf"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "me-2"]], template: function ButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function ButtonComponent_Template_button_click_0_listener() {
        return ctx.onClick();
      });
      \u0275\u0275template(1, ButtonComponent_span_1_Template, 1, 0, "span", 1)(2, ButtonComponent_i_2_Template, 1, 2, "i", 2);
      \u0275\u0275elementStart(3, "span");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.classes)("disabled", ctx.disabled || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.icon);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.label);
    }
  }, dependencies: [CommonModule, NgClass, NgIf], styles: ["\n\n.btn[_ngcontent-%COMP%] {\n  font-weight: 500;\n  letter-spacing: 0.3px;\n  transition: all 0.2s ease-in-out;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n}\n.btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\n}\n.btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2) inset;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.btn-light[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n}\n@media (prefers-color-scheme: dark) {\n  .btn.btn-light[_ngcontent-%COMP%] {\n    background-color: #444 !important;\n    color: #f0f0f0 !important;\n    border: none;\n  }\n}\n.spinner-border[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  border-width: 2px;\n}\n/*# sourceMappingURL=button.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{ selector: "app-button", standalone: true, imports: [CommonModule], template: '<button\n        [ngClass]="classes"\n        [disabled]="disabled || loading"\n        (click)="onClick()"\n>\n    <span *ngIf="loading" class="spinner-border spinner-border-sm me-2" role="status"></span>\n\n    <i *ngIf="!loading && icon" [class]="icon" class="me-2"></i>\n\n    <span>{{ label }}</span>\n</button>\n', styles: ["/* src/app/shared/components/button/button.component.scss */\n.btn {\n  font-weight: 500;\n  letter-spacing: 0.3px;\n  transition: all 0.2s ease-in-out;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n}\n.btn:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\n}\n.btn:active {\n  transform: translateY(0);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2) inset;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.btn-light {\n  border: 1px solid #ccc;\n}\n@media (prefers-color-scheme: dark) {\n  .btn.btn-light {\n    background-color: #444 !important;\n    color: #f0f0f0 !important;\n    border: none;\n  }\n}\n.spinner-border {\n  width: 1rem;\n  height: 1rem;\n  border-width: 2px;\n}\n/*# sourceMappingURL=button.component.css.map */\n"] }]
  }], null, { label: [{
    type: Input
  }], icon: [{
    type: Input
  }], variant: [{
    type: Input
  }], size: [{
    type: Input
  }], disabled: [{
    type: Input
  }], loading: [{
    type: Input
  }], outline: [{
    type: Input
  }], block: [{
    type: Input
  }], rounded: [{
    type: Input
  }], clicked: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ButtonComponent, { className: "ButtonComponent", filePath: "src/app/shared/components/button/button.component.ts", lineNumber: 11 });
})();

// src/app/shared/components/password-group/password-group.component.ts
var _c0 = (a0, a1, a2) => ({ "bg-danger": a0, "bg-warning": a1, "bg-success": a2 });
var _c1 = (a0, a1, a2) => ({ "text-danger": a0, "text-warning": a1, "text-success": a2 });
function PasswordGroupComponent_div_3_div_5_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 13);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hint_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", hint_r1, " ");
  }
}
function PasswordGroupComponent_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, PasswordGroupComponent_div_3_div_5_small_1_Template, 3, 1, "small", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.missingHints);
  }
}
function PasswordGroupComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275element(2, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PasswordGroupComponent_div_3_div_5_Template, 2, 1, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.strengthPercent, "%");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(6, _c0, ctx_r1.passwordScore <= 2, ctx_r1.passwordScore === 3 || ctx_r1.passwordScore === 4, ctx_r1.passwordScore === 5));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(10, _c1, ctx_r1.passwordScore <= 2, ctx_r1.passwordScore === 3 || ctx_r1.passwordScore === 4, ctx_r1.passwordScore === 5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.strengthLabel, " password ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showHints && ctx_r1.missingHints.length > 0);
  }
}
function PasswordGroupComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, " Passwords do not match. ");
    \u0275\u0275elementEnd();
  }
}
var PasswordGroupComponent = class _PasswordGroupComponent {
  fb;
  msg;
  label = "Password";
  confirmLabel = "Confirm Password";
  required = true;
  floating = true;
  showStrength = true;
  disabled = false;
  valueChange = new EventEmitter();
  form;
  showHints = false;
  // show tooltip panel
  onChange = (value) => {
  };
  onTouched = () => {
  };
  constructor(fb, msg) {
    this.fb = fb;
    this.msg = msg;
  }
  ngOnInit() {
    this.form = this.fb.group({
      password: [
        "",
        [
          this.required ? Validators.required : Validators.nullValidator,
          this.passwordStrengthValidator()
        ]
      ],
      confirmPassword: [
        "",
        this.required ? Validators.required : Validators.nullValidator
      ]
    }, { validators: [this.matchPasswordsValidator()] });
    this.form.valueChanges.subscribe((val) => {
      if (this.form.valid) {
        this.onChange(val.password);
        this.valueChange.emit(val.password);
      } else {
        this.onChange(null);
      }
    });
  }
  writeValue(value) {
    if (value) {
      this.form.patchValue({ password: value, confirmPassword: value }, { emitEvent: false });
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    isDisabled ? this.form.disable() : this.form.enable();
  }
  validate() {
    return this.form.valid ? null : { invalid: true };
  }
  // ---------------- Password validation helpers ----------------
  passwordStrengthValidator() {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    return (control) => {
      if (!control.value)
        return null;
      return regex.test(control.value) ? null : { passwordWeak: true };
    };
  }
  matchPasswordsValidator() {
    return (group) => {
      const pass = group.get("password")?.value;
      const confirm = group.get("confirmPassword")?.value;
      return pass && confirm && pass !== confirm ? { mismatch: true } : null;
    };
  }
  // ---------------- Strength logic ----------------
  get passwordControl() {
    return this.form.get("password");
  }
  get confirmControl() {
    return this.form.get("confirmPassword");
  }
  get showMismatchError() {
    return this.form.hasError("mismatch") && this.confirmControl?.touched;
  }
  get passwordCriteria() {
    const val = this.passwordControl?.value || "";
    return {
      length: val.length >= 8,
      upper: /[A-Z]/.test(val),
      lower: /[a-z]/.test(val),
      number: /\d/.test(val),
      special: /[@$!%*?&]/.test(val)
    };
  }
  get passwordScore() {
    const c = this.passwordCriteria;
    return [c.length, c.upper, c.lower, c.number, c.special].filter(Boolean).length;
  }
  get strengthPercent() {
    return this.passwordScore / 5 * 100;
  }
  get strengthLabel() {
    if (this.passwordScore <= 2)
      return "Weak";
    if (this.passwordScore <= 4)
      return "Medium";
    return "Strong";
  }
  get missingHints() {
    const c = this.passwordCriteria;
    const hints = [];
    if (!c.length)
      hints.push("Use at least 8 characters");
    if (!c.upper)
      hints.push("Add an uppercase letter");
    if (!c.lower)
      hints.push("Add a lowercase letter");
    if (!c.number)
      hints.push("Add a number");
    if (!c.special)
      hints.push("Add a special character (@, #, !, etc.)");
    return hints;
  }
  // tooltip visibility
  toggleHints(show) {
    this.showHints = show;
  }
  static \u0275fac = function PasswordGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PasswordGroupComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ValidationMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PasswordGroupComponent, selectors: [["app-password-group"]], inputs: { label: "label", confirmLabel: "confirmLabel", required: "required", floating: "floating", showStrength: "showStrength", disabled: "disabled" }, outputs: { valueChange: "valueChange" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _PasswordGroupComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => _PasswordGroupComponent),
      multi: true
    }
  ])], decls: 6, vars: 11, consts: [[1, "password-group", "mb-3", 3, "formGroup"], [3, "focusin", "focusout"], ["formControlName", "password", "type", "password", "icon", "fa-solid fa-lock", 3, "label", "floating", "required", "toggleVisibility"], ["class", "password-strength", 4, "ngIf"], ["formControlName", "confirmPassword", "type", "password", "icon", "fa-solid fa-lock", 3, "label", "floating", "required", "toggleVisibility"], ["class", "invalid-feedback d-block", 4, "ngIf"], [1, "password-strength"], [1, "progress", 2, "height", "6px"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 3, "ngClass"], [1, "ms-1", 3, "ngClass"], ["class", "password-hints shadow-sm", 4, "ngIf"], [1, "password-hints", "shadow-sm"], ["class", "d-block text-muted", 4, "ngFor", "ngForOf"], [1, "d-block", "text-muted"], [1, "fa-solid", "fa-circle-info", "me-1"], [1, "invalid-feedback", "d-block"]], template: function PasswordGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275listener("focusin", function PasswordGroupComponent_Template_div_focusin_1_listener() {
        return ctx.toggleHints(true);
      })("focusout", function PasswordGroupComponent_Template_div_focusout_1_listener() {
        return ctx.toggleHints(false);
      });
      \u0275\u0275element(2, "app-textbox", 2);
      \u0275\u0275template(3, PasswordGroupComponent_div_3_Template, 6, 14, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "app-textbox", 4);
      \u0275\u0275template(5, PasswordGroupComponent_div_5_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(2);
      \u0275\u0275property("label", ctx.label)("floating", ctx.floating)("required", ctx.required)("toggleVisibility", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showStrength && (ctx.passwordControl == null ? null : ctx.passwordControl.value));
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.confirmLabel)("floating", ctx.floating)("required", ctx.required)("toggleVisibility", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showMismatchError);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, TextboxComponent, ReactiveFormsModule, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName], styles: ["\n\n.password-group[_ngcontent-%COMP%] {\n  position: relative;\n}\n.password-group[_ngcontent-%COMP%]   .password-strength[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 0.25rem;\n}\n.password-group[_ngcontent-%COMP%]   .password-strength[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  border-radius: 4px;\n}\n.password-group[_ngcontent-%COMP%]   .password-strength[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  transition: width 0.3s ease;\n}\n.password-group[_ngcontent-%COMP%]   .password-strength[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.password-group[_ngcontent-%COMP%]   .password-strength[_ngcontent-%COMP%]   .password-hints[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 110%;\n  left: 0;\n  background: #f8f9fa;\n  border: 1px solid #e2e6ea;\n  border-radius: 6px;\n  padding: 0.5rem 0.75rem;\n  width: 100%;\n  z-index: 10;\n  font-size: 0.8rem;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.password-group[_ngcontent-%COMP%]   .password-strength[_ngcontent-%COMP%]   .password-hints[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=password-group.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordGroupComponent, [{
    type: Component,
    args: [{ selector: "app-password-group", standalone: true, imports: [CommonModule, TextboxComponent, ReactiveFormsModule], providers: [
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
    ], template: `<div class="password-group mb-3" [formGroup]="form">
    <!-- Password field -->
    <div (focusin)="toggleHints(true)" (focusout)="toggleHints(false)">
        <app-textbox
                formControlName="password"
                [label]="label"
                type="password"
                [floating]="floating"
                [required]="required"
                icon="fa-solid fa-lock"
                [toggleVisibility]="true">
        </app-textbox>

        <!-- Strength bar -->
        <div *ngIf="showStrength && passwordControl?.value" class="password-strength">
            <div class="progress" style="height: 6px;">
                <div
                        class="progress-bar"
                        role="progressbar"
                        [style.width.%]="strengthPercent"
                        [ngClass]="{
            'bg-danger': passwordScore <= 2,
            'bg-warning': passwordScore === 3 || passwordScore === 4,
            'bg-success': passwordScore === 5
          }"
                        aria-valuemin="0"
                        aria-valuemax="100"
                ></div>
            </div>
            <small
                    class="ms-1"
                    [ngClass]="{
          'text-danger': passwordScore <= 2,
          'text-warning': passwordScore === 3 || passwordScore === 4,
          'text-success': passwordScore === 5
        }">
                {{ strengthLabel }} password
            </small>

            <!-- Tooltip-style hints -->
            <div *ngIf="showHints && missingHints.length > 0" class="password-hints shadow-sm">
                <small *ngFor="let hint of missingHints" class="d-block text-muted">
                    <i class="fa-solid fa-circle-info me-1"></i> {{ hint }}
                </small>
            </div>
        </div>
    </div>

    <!-- Confirm password -->
    <app-textbox
            formControlName="confirmPassword"
            [label]="confirmLabel"
            type="password"
            [floating]="floating"
            [required]="required"
            icon="fa-solid fa-lock"
            [toggleVisibility]="true">
    </app-textbox>

    <div *ngIf="showMismatchError" class="invalid-feedback d-block">
        Passwords do not match.
    </div>
</div>
`, styles: ["/* src/app/shared/components/password-group/password-group.component.scss */\n.password-group {\n  position: relative;\n}\n.password-group .password-strength {\n  position: relative;\n  margin-top: 0.25rem;\n}\n.password-group .password-strength .progress {\n  background-color: #e9ecef;\n  border-radius: 4px;\n}\n.password-group .password-strength .progress-bar {\n  transition: width 0.3s ease;\n}\n.password-group .password-strength small {\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.password-group .password-strength .password-hints {\n  position: absolute;\n  top: 110%;\n  left: 0;\n  background: #f8f9fa;\n  border: 1px solid #e2e6ea;\n  border-radius: 6px;\n  padding: 0.5rem 0.75rem;\n  width: 100%;\n  z-index: 10;\n  font-size: 0.8rem;\n  animation: fadeIn 0.2s ease;\n}\n.password-group .password-strength .password-hints i {\n  color: #6c757d;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=password-group.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: ValidationMessageService }], { label: [{
    type: Input
  }], confirmLabel: [{
    type: Input
  }], required: [{
    type: Input
  }], floating: [{
    type: Input
  }], showStrength: [{
    type: Input
  }], disabled: [{
    type: Input
  }], valueChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PasswordGroupComponent, { className: "PasswordGroupComponent", filePath: "src/app/shared/components/password-group/password-group.component.ts", lineNumber: 42 });
})();

// src/app/shared/components/radio-group/radio-group.component.ts
var _c02 = (a0) => ({ "grid-template-columns": a0 });
var _c12 = () => ({});
function RadioGroupComponent_label_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function RadioGroupComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 6);
    \u0275\u0275text(1);
    \u0275\u0275template(2, RadioGroupComponent_label_1_span_2_Template, 2, 0, "span", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.required);
  }
}
function RadioGroupComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(opt_r3.icon);
  }
}
function RadioGroupComponent_div_3_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r3.description);
  }
}
function RadioGroupComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function RadioGroupComponent_div_3_Template_div_click_0_listener() {
      const opt_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSelect(opt_r3.value));
    });
    \u0275\u0275template(1, RadioGroupComponent_div_3_div_1_Template, 2, 2, "div", 10);
    \u0275\u0275elementStart(2, "div", 11)(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, RadioGroupComponent_div_3_small_5_Template, 2, 1, "small", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r0.value === opt_r3.value)("disabled", ctx_r0.disabled);
    \u0275\u0275attribute("aria-checked", ctx_r0.value === opt_r3.value)("aria-disabled", ctx_r0.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", opt_r3.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(opt_r3.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", opt_r3.description);
  }
}
function RadioGroupComponent_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.helpText);
  }
}
function RadioGroupComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
var RadioGroupComponent = class _RadioGroupComponent {
  label = "";
  options = [];
  required = false;
  helpText;
  layout = "horizontal";
  columns = 3;
  value;
  disabled = false;
  errorMessage = null;
  onChange = (val) => {
  };
  onTouched = () => {
  };
  writeValue(value) {
    this.value = value;
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
    if (this.required && !this.value) {
      this.errorMessage = `${this.label || "This field"} is required`;
      return { required: true };
    }
    this.errorMessage = null;
    return null;
  }
  onSelect(value) {
    if (this.disabled)
      return;
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
  trackByValue(_, item) {
    return item.value;
  }
  static \u0275fac = function RadioGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioGroupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RadioGroupComponent, selectors: [["app-radio-group"]], inputs: { label: "label", options: "options", required: "required", helpText: "helpText", layout: "layout", columns: "columns" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _RadioGroupComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => _RadioGroupComponent),
      multi: true
    }
  ])], decls: 6, vars: 11, consts: [["role", "radiogroup", 1, "radio-group", 3, "ngClass"], ["class", "form-label fw-semibold mb-2", 4, "ngIf"], [1, "radio-options", 3, "ngStyle"], ["class", "radio-option", "tabindex", "0", "role", "radio", 3, "selected", "disabled", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "text-muted", 4, "ngIf"], ["class", "invalid-feedback d-block mt-1", 4, "ngIf"], [1, "form-label", "fw-semibold", "mb-2"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], ["tabindex", "0", "role", "radio", 1, "radio-option", 3, "click"], ["class", "icon", 4, "ngIf"], [1, "info"], [1, "label"], ["class", "desc", 4, "ngIf"], [1, "marker"], [1, "icon"], [1, "desc"], [1, "text-muted"], [1, "invalid-feedback", "d-block", "mt-1"]], template: function RadioGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, RadioGroupComponent_label_1_Template, 3, 2, "label", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275template(3, RadioGroupComponent_div_3_Template, 7, 9, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, RadioGroupComponent_small_4_Template, 2, 1, "small", 4)(5, RadioGroupComponent_div_5_Template, 2, 1, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.layout);
      \u0275\u0275attribute("aria-label", ctx.label);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.label);
      \u0275\u0275advance();
      \u0275\u0275property("ngStyle", ctx.layout === "grid" ? \u0275\u0275pureFunction1(8, _c02, "repeat(" + ctx.columns + ", 1fr)") : \u0275\u0275pureFunction0(10, _c12));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.options)("ngForTrackBy", ctx.trackByValue);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.helpText && !ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgStyle, FormsModule, ReactiveFormsModule], styles: ['\n\n.radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.radio-group[_ngcontent-%COMP%]   .radio-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.radio-group[_ngcontent-%COMP%]   .radio-options.grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.radio-group[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  background: #fff;\n  border: 2px solid var(--bs-border-color, #dee2e6);\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n  cursor: pointer;\n  min-width: 140px;\n  transition: all 0.2s ease;\n}\n.radio-group[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%]:hover {\n  border-color: var(--bs-primary);\n  background-color: rgba(var(--bs-primary-rgb), 0.05);\n}\n.radio-group[_ngcontent-%COMP%]   .radio-option.selected[_ngcontent-%COMP%] {\n  border-color: var(--bs-primary);\n  background-color: rgba(var(--bs-primary-rgb), 0.08);\n  box-shadow: 0 0 0 3px rgba(var(--bs-primary-rgb), 0.15);\n}\n.radio-group[_ngcontent-%COMP%]   .radio-option.selected[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--bs-primary);\n  font-weight: 600;\n}\n.radio-group[_ngcontent-%COMP%]   .radio-option.selected[_ngcontent-%COMP%]   .marker[_ngcontent-%COMP%]::after {\n  transform: scale(1);\n  opacity: 1;\n}\n.radio-group[_ngcontent-%COMP%]   .radio-option.disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.radio-group[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: var(--bs-primary);\n  flex-shrink: 0;\n}\n.radio-group[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.radio-group[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.radio-group[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6c757d;\n}\n.radio-group[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%]   .marker[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 16px;\n  height: 16px;\n  border: 2px solid var(--bs-primary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.radio-group[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%]   .marker[_ngcontent-%COMP%]::after {\n  content: "";\n  width: 8px;\n  height: 8px;\n  background-color: var(--bs-primary);\n  border-radius: 50%;\n  transform: scale(0);\n  opacity: 0;\n  transition: all 0.2s ease;\n}\n.radio-group.vertical[_ngcontent-%COMP%]   .radio-options[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n@media (max-width: 768px) {\n  .radio-group[_ngcontent-%COMP%]   .radio-options[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=radio-group.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioGroupComponent, [{
    type: Component,
    args: [{ selector: "app-radio-group", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => RadioGroupComponent),
        multi: true
      },
      {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => RadioGroupComponent),
        multi: true
      }
    ], template: `<div class="radio-group" [ngClass]="layout" role="radiogroup" [attr.aria-label]="label">
    <label *ngIf="label" class="form-label fw-semibold mb-2">
        {{ label }}
        <span *ngIf="required" class="text-danger">*</span>
    </label>

    <div
            class="radio-options"
            [ngStyle]="layout === 'grid' ? { 'grid-template-columns': 'repeat(' + columns + ', 1fr)' } : {}"
    >
        <div
                *ngFor="let opt of options; trackBy: trackByValue"
                class="radio-option"
                [class.selected]="value === opt.value"
                [class.disabled]="disabled"
                tabindex="0"
                (click)="onSelect(opt.value)"
                role="radio"
                [attr.aria-checked]="value === opt.value"
                [attr.aria-disabled]="disabled"
        >
            <div class="icon" *ngIf="opt.icon">
                <i [class]="opt.icon"></i>
            </div>

            <div class="info">
                <span class="label">{{ opt.label }}</span>
                <small class="desc" *ngIf="opt.description">{{ opt.description }}</small>
            </div>

            <div class="marker"></div>
        </div>
    </div>

    <small *ngIf="helpText && !errorMessage" class="text-muted">{{ helpText }}</small>
    <div *ngIf="errorMessage" class="invalid-feedback d-block mt-1">{{ errorMessage }}</div>
</div>
`, styles: ['/* src/app/shared/components/radio-group/radio-group.component.scss */\n.radio-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.radio-group .radio-options {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.radio-group .radio-options.grid {\n  display: grid;\n  gap: 1rem;\n}\n.radio-group .radio-option {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  background: #fff;\n  border: 2px solid var(--bs-border-color, #dee2e6);\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n  cursor: pointer;\n  min-width: 140px;\n  transition: all 0.2s ease;\n}\n.radio-group .radio-option:hover {\n  border-color: var(--bs-primary);\n  background-color: rgba(var(--bs-primary-rgb), 0.05);\n}\n.radio-group .radio-option.selected {\n  border-color: var(--bs-primary);\n  background-color: rgba(var(--bs-primary-rgb), 0.08);\n  box-shadow: 0 0 0 3px rgba(var(--bs-primary-rgb), 0.15);\n}\n.radio-group .radio-option.selected .label {\n  color: var(--bs-primary);\n  font-weight: 600;\n}\n.radio-group .radio-option.selected .marker::after {\n  transform: scale(1);\n  opacity: 1;\n}\n.radio-group .radio-option.disabled {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.radio-group .radio-option .icon {\n  font-size: 1.4rem;\n  color: var(--bs-primary);\n  flex-shrink: 0;\n}\n.radio-group .radio-option .info {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.radio-group .radio-option .info .label {\n  font-size: 0.95rem;\n}\n.radio-group .radio-option .info .desc {\n  font-size: 0.8rem;\n  color: #6c757d;\n}\n.radio-group .radio-option .marker {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 16px;\n  height: 16px;\n  border: 2px solid var(--bs-primary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.radio-group .radio-option .marker::after {\n  content: "";\n  width: 8px;\n  height: 8px;\n  background-color: var(--bs-primary);\n  border-radius: 50%;\n  transform: scale(0);\n  opacity: 0;\n  transition: all 0.2s ease;\n}\n.radio-group.vertical .radio-options {\n  flex-direction: column;\n}\n@media (max-width: 768px) {\n  .radio-group .radio-options {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=radio-group.component.css.map */\n'] }]
  }], null, { label: [{
    type: Input
  }], options: [{
    type: Input
  }], required: [{
    type: Input
  }], helpText: [{
    type: Input
  }], layout: [{
    type: Input
  }], columns: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RadioGroupComponent, { className: "RadioGroupComponent", filePath: "src/app/shared/components/radio-group/radio-group.component.ts", lineNumber: 32 });
})();

// src/app/shared/components/card-selector/card-selector.component.ts
var _c03 = (a0) => ({ responsive: a0 });
function CardSelectorComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label);
  }
}
function CardSelectorComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(opt_r3.icon);
  }
}
function CardSelectorComponent_div_2_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r3.description, " ");
  }
}
function CardSelectorComponent_div_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r3.badge, " ");
  }
}
function CardSelectorComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("click", function CardSelectorComponent_div_2_Template_div_click_0_listener() {
      const opt_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSelect(opt_r3.value));
    });
    \u0275\u0275template(1, CardSelectorComponent_div_2_div_1_Template, 2, 2, "div", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CardSelectorComponent_div_2_small_5_Template, 2, 1, "small", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CardSelectorComponent_div_2_span_6_Template, 2, 1, "span", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r0.value === opt_r3.value)("focused", i_r4 === ctx_r0.focusedIndex)("disabled", opt_r3.disabled);
    \u0275\u0275property("@selectAnim", void 0);
    \u0275\u0275attribute("aria-checked", ctx_r0.value === opt_r3.value)("aria-disabled", opt_r3.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", opt_r3.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(opt_r3.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", opt_r3.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", opt_r3.badge);
  }
}
function CardSelectorComponent_small_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.helpText);
  }
}
function CardSelectorComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
var CardSelectorComponent = class _CardSelectorComponent {
  label = "";
  options = [];
  required = false;
  columns = 3;
  helpText;
  responsive = true;
  value;
  focusedIndex = 0;
  disabled = false;
  errorMessage = null;
  onChange = (val) => {
  };
  onTouched = () => {
  };
  writeValue(value) {
    this.value = value;
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
    if (this.required && !this.value) {
      this.errorMessage = `${this.label || "This field"} is required`;
      return { required: true };
    }
    this.errorMessage = null;
    return null;
  }
  onSelect(value) {
    if (this.disabled)
      return;
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
  trackByValue(_, item) {
    return item.value;
  }
  // --- Keyboard Navigation ---
  handleKeyboard(event) {
    const cols = this.columns;
    const len = this.options.length;
    switch (event.key) {
      case "ArrowRight":
        this.focusedIndex = (this.focusedIndex + 1) % len;
        event.preventDefault();
        break;
      case "ArrowLeft":
        this.focusedIndex = (this.focusedIndex - 1 + len) % len;
        event.preventDefault();
        break;
      case "ArrowDown":
        this.focusedIndex = (this.focusedIndex + cols) % len;
        event.preventDefault();
        break;
      case "ArrowUp":
        this.focusedIndex = (this.focusedIndex - cols + len) % len;
        event.preventDefault();
        break;
      case "Enter":
      case " ":
        const focused = this.options[this.focusedIndex];
        if (focused && !focused.disabled)
          this.onSelect(focused.value);
        event.preventDefault();
        break;
    }
  }
  static \u0275fac = function CardSelectorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardSelectorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardSelectorComponent, selectors: [["app-card-selector"]], hostBindings: function CardSelectorComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function CardSelectorComponent_keydown_HostBindingHandler($event) {
        return ctx.handleKeyboard($event);
      });
    }
  }, inputs: { label: "label", options: "options", required: "required", columns: "columns", helpText: "helpText", responsive: "responsive" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _CardSelectorComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => _CardSelectorComponent),
      multi: true
    }
  ])], decls: 5, vars: 11, consts: [["role", "radiogroup", 1, "card-selector", 3, "ngClass"], ["class", "form-label fw-semibold mb-2", 4, "ngIf"], ["class", "option-card", "tabindex", "0", "role", "radio", 3, "selected", "focused", "disabled", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "text-muted", 4, "ngIf"], ["class", "invalid-feedback d-block mt-1", 4, "ngIf"], [1, "form-label", "fw-semibold", "mb-2"], ["tabindex", "0", "role", "radio", 1, "option-card", 3, "click"], ["class", "card-icon", 4, "ngIf"], [1, "card-content"], [1, "card-label"], ["class", "card-description text-muted", 4, "ngIf"], ["class", "badge bg-primary position-absolute top-0 end-0 m-2", 4, "ngIf"], [1, "card-icon"], [1, "card-description", "text-muted"], [1, "badge", "bg-primary", "position-absolute", "top-0", "end-0", "m-2"], [1, "text-muted"], [1, "invalid-feedback", "d-block", "mt-1"]], template: function CardSelectorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, CardSelectorComponent_label_1_Template, 2, 1, "label", 1)(2, CardSelectorComponent_div_2_Template, 7, 13, "div", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, CardSelectorComponent_small_3_Template, 2, 1, "small", 3)(4, CardSelectorComponent_div_4_Template, 2, 1, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("grid-template-columns", "repeat(" + ctx.columns + ", minmax(200px, 1fr))");
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c03, ctx.responsive));
      \u0275\u0275attribute("aria-label", ctx.label);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.label);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.options)("ngForTrackBy", ctx.trackByValue);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.helpText && !ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, ReactiveFormsModule], styles: ["\n\n.card-selector[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n@media (max-width: 992px) {\n  .card-selector.responsive[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr) !important;\n  }\n}\n@media (max-width: 576px) {\n  .card-selector.responsive[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, 1fr) !important;\n  }\n}\n.card-selector[_ngcontent-%COMP%]   .option-card[_ngcontent-%COMP%] {\n  position: relative;\n  border: 2px solid var(--bs-border-color, #dee2e6);\n  border-radius: 10px;\n  background: #fff;\n  padding: 1rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  transition: all 0.2s ease;\n  min-height: 90px;\n}\n.card-selector[_ngcontent-%COMP%]   .option-card[_ngcontent-%COMP%]:hover:not(.disabled), \n.card-selector[_ngcontent-%COMP%]   .option-card.focused[_ngcontent-%COMP%]:not(.disabled) {\n  border-color: var(--bs-primary);\n  box-shadow: 0 0 0 3px rgba(var(--bs-primary-rgb), 0.15);\n}\n.card-selector[_ngcontent-%COMP%]   .option-card.selected[_ngcontent-%COMP%] {\n  background: rgba(var(--bs-primary-rgb), 0.08);\n  border-color: var(--bs-primary);\n  color: var(--bs-primary);\n}\n.card-selector[_ngcontent-%COMP%]   .option-card.selected[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.card-selector[_ngcontent-%COMP%]   .option-card.disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.card-selector[_ngcontent-%COMP%]   .option-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  color: var(--bs-primary);\n}\n.card-selector[_ngcontent-%COMP%]   .option-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.card-selector[_ngcontent-%COMP%]   .option-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.card-selector[_ngcontent-%COMP%]   .option-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=card-selector.component.css.map */"], data: { animation: [
    trigger("selectAnim", [
      transition(":enter", [
        style({ opacity: 0, transform: "scale(0.95)" }),
        animate("150ms ease-out", style({ opacity: 1, transform: "scale(1)" }))
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardSelectorComponent, [{
    type: Component,
    args: [{ selector: "app-card-selector", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule], animations: [
      trigger("selectAnim", [
        transition(":enter", [
          style({ opacity: 0, transform: "scale(0.95)" }),
          animate("150ms ease-out", style({ opacity: 1, transform: "scale(1)" }))
        ])
      ])
    ], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CardSelectorComponent),
        multi: true
      },
      {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => CardSelectorComponent),
        multi: true
      }
    ], template: `<div
        class="card-selector"
        [ngClass]="{ responsive: responsive }"
        [style.gridTemplateColumns]="'repeat(' + columns + ', minmax(200px, 1fr))'"
        role="radiogroup"
        [attr.aria-label]="label"
>
    <label *ngIf="label" class="form-label fw-semibold mb-2">{{ label }}</label>

    <div
            *ngFor="let opt of options; let i = index; trackBy: trackByValue"
            class="option-card"
            [class.selected]="value === opt.value"
            [class.focused]="i === focusedIndex"
            [class.disabled]="opt.disabled"
            tabindex="0"
            (click)="onSelect(opt.value)"
            role="radio"
            [attr.aria-checked]="value === opt.value"
            [attr.aria-disabled]="opt.disabled"
            [@selectAnim]
    >
        <div class="card-icon" *ngIf="opt.icon">
            <i [class]="opt.icon"></i>
        </div>

        <div class="card-content">
            <div class="card-label">{{ opt.label }}</div>
            <small class="card-description text-muted" *ngIf="opt.description">
                {{ opt.description }}
            </small>
        </div>

        <span
                class="badge bg-primary position-absolute top-0 end-0 m-2"
                *ngIf="opt.badge"
        >
      {{ opt.badge }}
    </span>
    </div>
</div>

<small *ngIf="helpText && !errorMessage" class="text-muted">{{ helpText }}</small>
<div *ngIf="errorMessage" class="invalid-feedback d-block mt-1">{{ errorMessage }}</div>
`, styles: ["/* src/app/shared/components/card-selector/card-selector.component.scss */\n.card-selector {\n  display: grid;\n  gap: 1rem;\n}\n@media (max-width: 992px) {\n  .card-selector.responsive {\n    grid-template-columns: repeat(2, 1fr) !important;\n  }\n}\n@media (max-width: 576px) {\n  .card-selector.responsive {\n    grid-template-columns: repeat(1, 1fr) !important;\n  }\n}\n.card-selector .option-card {\n  position: relative;\n  border: 2px solid var(--bs-border-color, #dee2e6);\n  border-radius: 10px;\n  background: #fff;\n  padding: 1rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  transition: all 0.2s ease;\n  min-height: 90px;\n}\n.card-selector .option-card:hover:not(.disabled),\n.card-selector .option-card.focused:not(.disabled) {\n  border-color: var(--bs-primary);\n  box-shadow: 0 0 0 3px rgba(var(--bs-primary-rgb), 0.15);\n}\n.card-selector .option-card.selected {\n  background: rgba(var(--bs-primary-rgb), 0.08);\n  border-color: var(--bs-primary);\n  color: var(--bs-primary);\n}\n.card-selector .option-card.selected .card-label {\n  font-weight: 600;\n}\n.card-selector .option-card.disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.card-selector .option-card .card-icon {\n  font-size: 1.8rem;\n  color: var(--bs-primary);\n}\n.card-selector .option-card .card-content {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.card-selector .option-card .card-content .card-label {\n  font-size: 1rem;\n}\n.card-selector .option-card .card-content .card-description {\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=card-selector.component.css.map */\n"] }]
  }], null, { label: [{
    type: Input
  }], options: [{
    type: Input
  }], required: [{
    type: Input
  }], columns: [{
    type: Input
  }], helpText: [{
    type: Input
  }], responsive: [{
    type: Input
  }], handleKeyboard: [{
    type: HostListener,
    args: ["keydown", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardSelectorComponent, { className: "CardSelectorComponent", filePath: "src/app/shared/components/card-selector/card-selector.component.ts", lineNumber: 50 });
})();

// src/app/shared/components/checkbox/checkbox.component.ts
var _c04 = (a0, a1, a2) => ({ disabled: a0, checked: a1, indeterminate: a2 });
function CheckboxComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
}
function CheckboxComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275elementEnd();
  }
}
function CheckboxComponent_small_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.description);
  }
}
function CheckboxComponent_small_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.helpText);
  }
}
function CheckboxComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
var CheckboxComponent = class _CheckboxComponent {
  label = "";
  description;
  required = false;
  helpText;
  variant = "default";
  disabled = false;
  indeterminate = false;
  value = false;
  errorMessage = null;
  onChange = (val) => {
  };
  onTouched = () => {
  };
  writeValue(value) {
    this.value = !!value;
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
    if (this.required && !this.value) {
      this.errorMessage = `${this.label || "This field"} is required`;
      return { required: true };
    }
    this.errorMessage = null;
    return null;
  }
  toggle() {
    if (this.disabled)
      return;
    this.value = !this.value;
    this.indeterminate = false;
    this.onChange(this.value);
    this.onTouched();
  }
  static \u0275fac = function CheckboxComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckboxComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckboxComponent, selectors: [["app-checkbox"]], inputs: { label: "label", description: "description", required: "required", helpText: "helpText", variant: "variant", disabled: "disabled", indeterminate: "indeterminate" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _CheckboxComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => _CheckboxComponent),
      multi: true
    }
  ])], decls: 9, vars: 15, consts: [["role", "checkbox", "tabindex", "0", 1, "checkbox-container", 3, "click", "keyup.enter", "ngClass"], ["class", "checkbox-box", 4, "ngIf"], ["class", "switch-toggle", 4, "ngIf"], [1, "checkbox-label"], [1, "label-text"], ["class", "text-muted", 4, "ngIf"], ["class", "invalid-feedback d-block mt-1", 4, "ngIf"], [1, "checkbox-box"], [1, "checkmark"], [1, "switch-toggle"], [1, "knob"], [1, "text-muted"], [1, "invalid-feedback", "d-block", "mt-1"]], template: function CheckboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function CheckboxComponent_Template_div_click_0_listener() {
        return ctx.toggle();
      })("keyup.enter", function CheckboxComponent_Template_div_keyup_enter_0_listener() {
        return ctx.toggle();
      });
      \u0275\u0275template(1, CheckboxComponent_div_1_Template, 2, 0, "div", 1)(2, CheckboxComponent_div_2_Template, 2, 0, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, CheckboxComponent_small_6_Template, 2, 1, "small", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, CheckboxComponent_small_7_Template, 2, 1, "small", 5)(8, CheckboxComponent_div_8_Template, 2, 1, "div", 6);
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.variant);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(11, _c04, ctx.disabled, ctx.value, ctx.indeterminate));
      \u0275\u0275attribute("aria-checked", ctx.value)("aria-disabled", ctx.disabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.variant !== "switch");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.variant === "switch");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.label);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.description);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.helpText && !ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, ReactiveFormsModule], styles: ['\n\n.checkbox-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: all 0.2s ease;\n  border-radius: 8px;\n}\n.checkbox-container.disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.checkbox-container[_ngcontent-%COMP%]   .checkbox-box[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border: 2px solid var(--bs-border-color, #dee2e6);\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  position: relative;\n  background: #fff;\n}\n.checkbox-container[_ngcontent-%COMP%]   .checkbox-box[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 6px;\n  border-left: 2px solid #fff;\n  border-bottom: 2px solid #fff;\n  transform: rotate(-45deg) scale(0);\n  transition: all 0.2s ease;\n}\n.checkbox-container.checked[_ngcontent-%COMP%]   .checkbox-box[_ngcontent-%COMP%] {\n  background: var(--bs-primary);\n  border-color: var(--bs-primary);\n}\n.checkbox-container.checked[_ngcontent-%COMP%]   .checkbox-box[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  transform: rotate(-45deg) scale(1);\n}\n.checkbox-container.indeterminate[_ngcontent-%COMP%]   .checkbox-box[_ngcontent-%COMP%] {\n  background: var(--bs-primary);\n  border-color: var(--bs-primary);\n}\n.checkbox-container.indeterminate[_ngcontent-%COMP%]   .checkbox-box[_ngcontent-%COMP%]::after {\n  content: "";\n  width: 10px;\n  height: 2px;\n  background: #fff;\n  border-radius: 1px;\n  position: absolute;\n}\n.checkbox-container[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.checkbox-container[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .label-text[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n.checkbox-container[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.checkbox-container.switch[_ngcontent-%COMP%]   .switch-toggle[_ngcontent-%COMP%] {\n  position: relative;\n  width: 42px;\n  height: 24px;\n  border-radius: 12px;\n  background: #ccc;\n  transition: all 0.3s ease;\n}\n.checkbox-container.switch[_ngcontent-%COMP%]   .switch-toggle[_ngcontent-%COMP%]   .knob[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  top: 3px;\n  left: 3px;\n  background: #fff;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n}\n.checkbox-container.switch.checked[_ngcontent-%COMP%]   .switch-toggle[_ngcontent-%COMP%] {\n  background: var(--bs-primary);\n}\n.checkbox-container.switch.checked[_ngcontent-%COMP%]   .switch-toggle[_ngcontent-%COMP%]   .knob[_ngcontent-%COMP%] {\n  left: 21px;\n}\n.checkbox-container.card[_ngcontent-%COMP%] {\n  border: 2px solid var(--bs-border-color, #dee2e6);\n  padding: 0.75rem 1rem;\n  border-radius: 10px;\n  background: #fff;\n  transition: all 0.2s ease;\n}\n.checkbox-container.card[_ngcontent-%COMP%]:hover {\n  border-color: var(--bs-primary);\n  background-color: rgba(var(--bs-primary-rgb), 0.03);\n}\n.checkbox-container.card.checked[_ngcontent-%COMP%] {\n  border-color: var(--bs-primary);\n  box-shadow: 0 0 0 3px rgba(var(--bs-primary-rgb), 0.15);\n  background-color: rgba(var(--bs-primary-rgb), 0.05);\n}\n.checkbox-container.card[_ngcontent-%COMP%]   .checkbox-box[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=checkbox.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxComponent, [{
    type: Component,
    args: [{ selector: "app-checkbox", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CheckboxComponent),
        multi: true
      },
      {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => CheckboxComponent),
        multi: true
      }
    ], template: `<div
        class="checkbox-container"
        [class]="variant"
        [ngClass]="{
    disabled: disabled,
    checked: value,
    indeterminate: indeterminate
  }"
        role="checkbox"
        [attr.aria-checked]="value"
        [attr.aria-disabled]="disabled"
        tabindex="0"
        (click)="toggle()"
        (keyup.enter)="toggle()"
>
    <div class="checkbox-box" *ngIf="variant !== 'switch'">
        <div class="checkmark"></div>
    </div>

    <div class="switch-toggle" *ngIf="variant === 'switch'">
        <div class="knob"></div>
    </div>

    <div class="checkbox-label">
        <span class="label-text">{{ label }}</span>
        <small *ngIf="description" class="text-muted">{{ description }}</small>
    </div>
</div>

<small *ngIf="helpText && !errorMessage" class="text-muted">{{ helpText }}</small>
<div *ngIf="errorMessage" class="invalid-feedback d-block mt-1">{{ errorMessage }}</div>
`, styles: ['/* src/app/shared/components/checkbox/checkbox.component.scss */\n.checkbox-container {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: all 0.2s ease;\n  border-radius: 8px;\n}\n.checkbox-container.disabled {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.checkbox-container .checkbox-box {\n  width: 22px;\n  height: 22px;\n  border: 2px solid var(--bs-border-color, #dee2e6);\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  position: relative;\n  background: #fff;\n}\n.checkbox-container .checkbox-box .checkmark {\n  width: 10px;\n  height: 6px;\n  border-left: 2px solid #fff;\n  border-bottom: 2px solid #fff;\n  transform: rotate(-45deg) scale(0);\n  transition: all 0.2s ease;\n}\n.checkbox-container.checked .checkbox-box {\n  background: var(--bs-primary);\n  border-color: var(--bs-primary);\n}\n.checkbox-container.checked .checkbox-box .checkmark {\n  transform: rotate(-45deg) scale(1);\n}\n.checkbox-container.indeterminate .checkbox-box {\n  background: var(--bs-primary);\n  border-color: var(--bs-primary);\n}\n.checkbox-container.indeterminate .checkbox-box::after {\n  content: "";\n  width: 10px;\n  height: 2px;\n  background: #fff;\n  border-radius: 1px;\n  position: absolute;\n}\n.checkbox-container .checkbox-label {\n  display: flex;\n  flex-direction: column;\n}\n.checkbox-container .checkbox-label .label-text {\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n.checkbox-container .checkbox-label small {\n  font-size: 0.8rem;\n}\n.checkbox-container.switch .switch-toggle {\n  position: relative;\n  width: 42px;\n  height: 24px;\n  border-radius: 12px;\n  background: #ccc;\n  transition: all 0.3s ease;\n}\n.checkbox-container.switch .switch-toggle .knob {\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  top: 3px;\n  left: 3px;\n  background: #fff;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n}\n.checkbox-container.switch.checked .switch-toggle {\n  background: var(--bs-primary);\n}\n.checkbox-container.switch.checked .switch-toggle .knob {\n  left: 21px;\n}\n.checkbox-container.card {\n  border: 2px solid var(--bs-border-color, #dee2e6);\n  padding: 0.75rem 1rem;\n  border-radius: 10px;\n  background: #fff;\n  transition: all 0.2s ease;\n}\n.checkbox-container.card:hover {\n  border-color: var(--bs-primary);\n  background-color: rgba(var(--bs-primary-rgb), 0.03);\n}\n.checkbox-container.card.checked {\n  border-color: var(--bs-primary);\n  box-shadow: 0 0 0 3px rgba(var(--bs-primary-rgb), 0.15);\n  background-color: rgba(var(--bs-primary-rgb), 0.05);\n}\n.checkbox-container.card .checkbox-box {\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=checkbox.component.css.map */\n'] }]
  }], null, { label: [{
    type: Input
  }], description: [{
    type: Input
  }], required: [{
    type: Input
  }], helpText: [{
    type: Input
  }], variant: [{
    type: Input
  }], disabled: [{
    type: Input
  }], indeterminate: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckboxComponent, { className: "CheckboxComponent", filePath: "src/app/shared/components/checkbox/checkbox.component.ts", lineNumber: 32 });
})();

// src/app/shared/components/textarea/textarea.component.ts
var _c05 = ["textareaEl"];
function TextareaComponent_label_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function TextareaComponent_label_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275template(2, TextareaComponent_label_4_span_2_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.required);
  }
}
function TextareaComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.value.length || 0, " / ", ctx_r1.maxLength, " ");
  }
}
function TextareaComponent_small_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.helpText);
  }
}
function TextareaComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
var TextareaComponent = class _TextareaComponent {
  label = "";
  placeholder = "";
  rows = 3;
  maxLength;
  helpText;
  required = false;
  autoResize = true;
  disabled = false;
  textareaEl;
  value = "";
  touched = false;
  errorMessage = null;
  onChange = (val) => {
  };
  onTouched = () => {
  };
  ngAfterViewInit() {
    if (this.autoResize) {
      this.adjustHeight();
    }
  }
  writeValue(value) {
    this.value = value || "";
    if (this.autoResize)
      this.adjustHeight();
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
    if (this.required && !this.value.trim()) {
      this.errorMessage = `${this.label || "This field"} is required`;
      return { required: true };
    }
    this.errorMessage = null;
    return null;
  }
  onInput(event) {
    const input = event.target;
    this.value = input.value;
    this.onChange(this.value);
    if (this.autoResize)
      this.adjustHeight();
  }
  onBlur() {
    this.touched = true;
    this.onTouched();
  }
  adjustHeight() {
    const el = this.textareaEl?.nativeElement;
    if (el) {
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
    }
  }
  static \u0275fac = function TextareaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextareaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TextareaComponent, selectors: [["app-textarea"]], viewQuery: function TextareaComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c05, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.textareaEl = _t.first);
    }
  }, inputs: { label: "label", placeholder: "placeholder", rows: "rows", maxLength: "maxLength", helpText: "helpText", required: "required", autoResize: "autoResize", disabled: "disabled" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _TextareaComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => _TextareaComponent),
      multi: true
    }
  ])], decls: 8, vars: 12, consts: [["textareaEl", ""], [1, "textarea-wrapper"], [1, "form-floating", "position-relative"], [1, "form-control", 3, "input", "blur", "disabled", "value"], [4, "ngIf"], ["class", "char-count text-muted", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], ["class", "invalid-feedback d-block mt-1", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [1, "char-count", "text-muted"], [1, "text-muted"], [1, "invalid-feedback", "d-block", "mt-1"]], template: function TextareaComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "textarea", 3, 0);
      \u0275\u0275listener("input", function TextareaComponent_Template_textarea_input_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInput($event));
      })("blur", function TextareaComponent_Template_textarea_blur_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onBlur());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, TextareaComponent_label_4_Template, 3, 2, "label", 4)(5, TextareaComponent_div_5_Template, 2, 2, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, TextareaComponent_small_6_Template, 2, 1, "small", 6)(7, TextareaComponent_div_7_Template, 2, 1, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", ctx.errorMessage);
      \u0275\u0275property("disabled", ctx.disabled)("value", ctx.value);
      \u0275\u0275attribute("placeholder", ctx.placeholder || ctx.label)("rows", ctx.rows)("maxlength", ctx.maxLength)("aria-label", ctx.label);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.label);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.maxLength);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.helpText && !ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, ReactiveFormsModule], styles: ["\n\n.textarea-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n.textarea-wrapper[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.textarea-wrapper[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: none;\n  min-height: 3rem;\n  line-height: 1.5;\n  font-size: 0.95rem;\n  border-radius: 0.5rem;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.textarea-wrapper[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--bs-primary);\n  box-shadow: 0 0 0 0.15rem rgba(var(--bs-primary-rgb), 0.25);\n}\n.textarea-wrapper[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]   textarea.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--bs-danger);\n}\n.textarea-wrapper[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #6c757d;\n}\n.textarea-wrapper[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]   .char-count[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 6px;\n  right: 12px;\n  font-size: 0.75rem;\n  opacity: 0.75;\n}\n.textarea-wrapper[_ngcontent-%COMP%]   small.text-muted[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.3rem;\n}\n.textarea-wrapper[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=textarea.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextareaComponent, [{
    type: Component,
    args: [{ selector: "app-textarea", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TextareaComponent),
        multi: true
      },
      {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => TextareaComponent),
        multi: true
      }
    ], template: '<div class="textarea-wrapper">\n    <div class="form-floating position-relative">\n    <textarea\n        #textareaEl\n        class="form-control"\n        [class.is-invalid]="errorMessage"\n        [attr.placeholder]="placeholder || label"\n        [attr.rows]="rows"\n        [attr.maxlength]="maxLength"\n        [disabled]="disabled"\n        [value]="value"\n        (input)="onInput($event)"\n        (blur)="onBlur()"\n        [attr.aria-label]="label"\n    ></textarea>\n\n        <label *ngIf="label">{{ label }} <span *ngIf="required" class="text-danger">*</span></label>\n\n        <div class="char-count text-muted" *ngIf="maxLength">\n            {{ value.length || 0 }} / {{ maxLength }}\n        </div>\n    </div>\n\n    <small *ngIf="helpText && !errorMessage" class="text-muted">{{ helpText }}</small>\n    <div *ngIf="errorMessage" class="invalid-feedback d-block mt-1">{{ errorMessage }}</div>\n</div>\n', styles: ["/* src/app/shared/components/textarea/textarea.component.scss */\n.textarea-wrapper {\n  width: 100%;\n  position: relative;\n}\n.textarea-wrapper .form-floating {\n  width: 100%;\n}\n.textarea-wrapper .form-floating textarea.form-control {\n  resize: none;\n  min-height: 3rem;\n  line-height: 1.5;\n  font-size: 0.95rem;\n  border-radius: 0.5rem;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.textarea-wrapper .form-floating textarea.form-control:focus {\n  border-color: var(--bs-primary);\n  box-shadow: 0 0 0 0.15rem rgba(var(--bs-primary-rgb), 0.25);\n}\n.textarea-wrapper .form-floating textarea.form-control.is-invalid {\n  border-color: var(--bs-danger);\n}\n.textarea-wrapper .form-floating label {\n  font-size: 0.9rem;\n  color: #6c757d;\n}\n.textarea-wrapper .form-floating .char-count {\n  position: absolute;\n  bottom: 6px;\n  right: 12px;\n  font-size: 0.75rem;\n  opacity: 0.75;\n}\n.textarea-wrapper small.text-muted {\n  display: block;\n  margin-top: 0.3rem;\n}\n.textarea-wrapper .invalid-feedback {\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=textarea.component.css.map */\n"] }]
  }], null, { label: [{
    type: Input
  }], placeholder: [{
    type: Input
  }], rows: [{
    type: Input
  }], maxLength: [{
    type: Input
  }], helpText: [{
    type: Input
  }], required: [{
    type: Input
  }], autoResize: [{
    type: Input
  }], disabled: [{
    type: Input
  }], textareaEl: [{
    type: ViewChild,
    args: ["textareaEl"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TextareaComponent, { className: "TextareaComponent", filePath: "src/app/shared/components/textarea/textarea.component.ts", lineNumber: 32 });
})();

// src/app/shared/components/dropdown/dropdown.component.ts
var _c06 = ["searchInput"];
var _c13 = (a0, a1) => ({ "fa-chevron-up": a0, "fa-chevron-down": a1 });
function DropdownComponent_label_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function DropdownComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 10);
    \u0275\u0275text(1);
    \u0275\u0275template(2, DropdownComponent_label_1_span_2_Template, 2, 0, "span", 11);
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
function DropdownComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedLabel, " ");
  }
}
function DropdownComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.placeholder);
  }
}
function DropdownComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "input", 21, 1);
    \u0275\u0275listener("input", function DropdownComponent_div_7_div_1_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.filterOptions($event.target));
    });
    \u0275\u0275elementEnd()();
  }
}
function DropdownComponent_div_7_div_3_i_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const opt_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(opt_r5.icon + " me-2");
  }
}
function DropdownComponent_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("click", function DropdownComponent_div_7_div_3_Template_div_click_0_listener() {
      const opt_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectOption(opt_r5));
    });
    \u0275\u0275template(1, DropdownComponent_div_7_div_3_i_1_Template, 1, 2, "i", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("focused", i_r6 === ctx_r1.focusedIndex)("selected", opt_r5.value === ctx_r1.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", opt_r5.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r5.label, " ");
  }
}
function DropdownComponent_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, " No results found ");
    \u0275\u0275elementEnd();
  }
}
function DropdownComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, DropdownComponent_div_7_div_1_Template, 3, 0, "div", 16);
    \u0275\u0275elementStart(2, "div", 17);
    \u0275\u0275template(3, DropdownComponent_div_7_div_3_Template, 3, 6, "div", 18)(4, DropdownComponent_div_7_div_4_Template, 2, 0, "div", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchable);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredOptions.length === 0);
  }
}
function DropdownComponent_small_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.helpText);
  }
}
function DropdownComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
var DropdownComponent = class _DropdownComponent {
  el;
  label = "";
  placeholder = "Select an option";
  options = [];
  required = false;
  searchable = true;
  disabled = false;
  helpText;
  changed = new EventEmitter();
  searchInput;
  showDropdown = false;
  filteredOptions = [];
  value = null;
  searchTerm = "";
  errorMessage = null;
  focusedIndex = 0;
  selectedLabel = "";
  onChange = (val) => {
  };
  onTouched = () => {
  };
  constructor(el) {
    this.el = el;
  }
  ngOnInit() {
    this.filteredOptions = [...this.options];
  }
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
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  validate() {
    if (this.required && !this.value) {
      this.errorMessage = `${this.label || "This field"} is required`;
      return { required: true };
    }
    this.errorMessage = null;
    return null;
  }
  toggleDropdown() {
    if (this.disabled)
      return;
    this.showDropdown = !this.showDropdown;
    if (this.showDropdown && this.searchable) {
      setTimeout(() => this.searchInput?.nativeElement.focus(), 100);
    }
  }
  selectOption(option) {
    this.value = option.value;
    this.updateSelectedLabel();
    this.onChange(this.value);
    this.changed.emit(option.value);
    this.onTouched();
    this.showDropdown = false;
  }
  filterOptions(element) {
    this.searchTerm = element.value;
    this.filteredOptions = this.options.filter((opt) => opt.label.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
  updateSelectedLabel() {
    const selected = this.options.find((o) => o.value === this.value);
    this.selectedLabel = selected ? selected.label : "";
  }
  handleOutsideClick(event) {
    const target = event.target;
    if (!this.el.nativeElement.contains(target)) {
      this.showDropdown = false;
    }
  }
  handleKeyboard(event) {
    if (!this.showDropdown)
      return;
    const maxIndex = this.filteredOptions.length - 1;
    switch (event.key) {
      case "ArrowDown":
        this.focusedIndex = this.focusedIndex < maxIndex ? this.focusedIndex + 1 : 0;
        event.preventDefault();
        break;
      case "ArrowUp":
        this.focusedIndex = this.focusedIndex > 0 ? this.focusedIndex - 1 : maxIndex;
        event.preventDefault();
        break;
      case "Enter":
        const selected = this.filteredOptions[this.focusedIndex];
        if (selected)
          this.selectOption(selected);
        event.preventDefault();
        break;
      case "Escape":
        this.showDropdown = false;
        break;
    }
  }
  HTMLInputElement = HTMLInputElement;
  static \u0275fac = function DropdownComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropdownComponent)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DropdownComponent, selectors: [["app-dropdown"]], viewQuery: function DropdownComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c06, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
    }
  }, hostBindings: function DropdownComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function DropdownComponent_click_HostBindingHandler($event) {
        return ctx.handleOutsideClick($event);
      }, false, \u0275\u0275resolveDocument)("keydown", function DropdownComponent_keydown_HostBindingHandler($event) {
        return ctx.handleKeyboard($event);
      });
    }
  }, inputs: { label: "label", placeholder: "placeholder", options: "options", required: "required", searchable: "searchable", disabled: "disabled", helpText: "helpText" }, outputs: { changed: "changed" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _DropdownComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => _DropdownComponent),
      multi: true
    }
  ])], decls: 10, vars: 14, consts: [["placeholderBlock", ""], ["searchInput", ""], [1, "dropdown-wrapper"], ["class", "form-label fw-semibold mb-2", 4, "ngIf"], ["tabindex", "0", 1, "dropdown-control", 3, "click"], ["class", "selected-text", 4, "ngIf", "ngIfElse"], [1, "fa-solid", 3, "ngClass"], ["class", "dropdown-menu shadow-sm", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], ["class", "invalid-feedback d-block mt-1", 4, "ngIf"], [1, "form-label", "fw-semibold", "mb-2"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [1, "selected-text"], [1, "placeholder", "text-muted"], [1, "dropdown-menu", "shadow-sm"], ["class", "search-box", 4, "ngIf"], [1, "options-list"], ["class", "dropdown-item", 3, "focused", "selected", "click", 4, "ngFor", "ngForOf"], ["class", "no-results text-muted", 4, "ngIf"], [1, "search-box"], ["type", "text", "placeholder", "Search...", 1, "form-control", "form-control-sm", 3, "input"], [1, "dropdown-item", 3, "click"], [3, "class", 4, "ngIf"], [1, "no-results", "text-muted"], [1, "text-muted"], [1, "invalid-feedback", "d-block", "mt-1"]], template: function DropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275template(1, DropdownComponent_label_1_Template, 3, 2, "label", 3);
      \u0275\u0275elementStart(2, "div", 4);
      \u0275\u0275listener("click", function DropdownComponent_Template_div_click_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleDropdown());
      });
      \u0275\u0275template(3, DropdownComponent_span_3_Template, 2, 1, "span", 5)(4, DropdownComponent_ng_template_4_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275element(6, "i", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, DropdownComponent_div_7_Template, 5, 3, "div", 7)(8, DropdownComponent_small_8_Template, 2, 1, "small", 8)(9, DropdownComponent_div_9_Template, 2, 1, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const placeholderBlock_r7 = \u0275\u0275reference(5);
      \u0275\u0275classProp("disabled", ctx.disabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.label);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.showDropdown);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedLabel)("ngIfElse", placeholderBlock_r7);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(11, _c13, ctx.showDropdown, !ctx.showDropdown));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDropdown);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.helpText && !ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, ReactiveFormsModule], styles: ["\n\n.dropdown-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.dropdown-wrapper.disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-control[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 2px solid var(--bs-border-color, #dee2e6);\n  border-radius: 8px;\n  padding: 0.6rem 0.75rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.95rem;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-control[_ngcontent-%COMP%]:hover {\n  border-color: var(--bs-primary);\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-control.open[_ngcontent-%COMP%] {\n  border-color: var(--bs-primary);\n  box-shadow: 0 0 0 3px rgba(var(--bs-primary-rgb), 0.15);\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-control[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-control[_ngcontent-%COMP%]   .selected-text[_ngcontent-%COMP%] {\n  color: #212529;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-control[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  right: 0;\n  background: #fff;\n  border: 1px solid var(--bs-border-color, #dee2e6);\n  border-radius: 8px;\n  z-index: 10;\n  max-height: 250px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border-bottom: 1px solid #eee;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .options-list[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow-y: auto;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .options-list[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.75rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  display: flex;\n  align-items: center;\n  font-size: 0.9rem;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .options-list[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, \n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .options-list[_ngcontent-%COMP%]   .dropdown-item.focused[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-primary-rgb), 0.08);\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .options-list[_ngcontent-%COMP%]   .dropdown-item.selected[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-primary-rgb), 0.12);\n  font-weight: 600;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .options-list[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem;\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=dropdown.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownComponent, [{
    type: Component,
    args: [{ selector: "app-dropdown", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DropdownComponent),
        multi: true
      },
      {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => DropdownComponent),
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
                (input)="filterOptions($event.target)"
            />
        </div>

        <div class="options-list">
            <div
                    *ngFor="let opt of filteredOptions; let i = index"
                    class="dropdown-item"
                    [class.focused]="i === focusedIndex"
                    [class.selected]="opt.value === value"
                    (click)="selectOption(opt)"
            >
                <i *ngIf="opt.icon" [class]="opt.icon + ' me-2'"></i>
                {{ opt.label }}
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
`, styles: ["/* src/app/shared/components/dropdown/dropdown.component.scss */\n.dropdown-wrapper {\n  position: relative;\n  width: 100%;\n}\n.dropdown-wrapper.disabled {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.dropdown-wrapper .dropdown-control {\n  background: #fff;\n  border: 2px solid var(--bs-border-color, #dee2e6);\n  border-radius: 8px;\n  padding: 0.6rem 0.75rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.95rem;\n}\n.dropdown-wrapper .dropdown-control:hover {\n  border-color: var(--bs-primary);\n}\n.dropdown-wrapper .dropdown-control.open {\n  border-color: var(--bs-primary);\n  box-shadow: 0 0 0 3px rgba(var(--bs-primary-rgb), 0.15);\n}\n.dropdown-wrapper .dropdown-control i {\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n.dropdown-wrapper .dropdown-control .selected-text {\n  color: #212529;\n}\n.dropdown-wrapper .dropdown-control .placeholder {\n  color: #6c757d;\n}\n.dropdown-wrapper .dropdown-menu {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  right: 0;\n  background: #fff;\n  border: 1px solid var(--bs-border-color, #dee2e6);\n  border-radius: 8px;\n  z-index: 10;\n  max-height: 250px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.dropdown-wrapper .dropdown-menu .search-box {\n  padding: 0.5rem;\n  border-bottom: 1px solid #eee;\n}\n.dropdown-wrapper .dropdown-menu .search-box input {\n  font-size: 0.85rem;\n}\n.dropdown-wrapper .dropdown-menu .options-list {\n  max-height: 200px;\n  overflow-y: auto;\n}\n.dropdown-wrapper .dropdown-menu .options-list .dropdown-item {\n  padding: 0.6rem 0.75rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  display: flex;\n  align-items: center;\n  font-size: 0.9rem;\n}\n.dropdown-wrapper .dropdown-menu .options-list .dropdown-item:hover,\n.dropdown-wrapper .dropdown-menu .options-list .dropdown-item.focused {\n  background-color: rgba(var(--bs-primary-rgb), 0.08);\n}\n.dropdown-wrapper .dropdown-menu .options-list .dropdown-item.selected {\n  background-color: rgba(var(--bs-primary-rgb), 0.12);\n  font-weight: 600;\n}\n.dropdown-wrapper .dropdown-menu .options-list .no-results {\n  text-align: center;\n  padding: 1rem;\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=dropdown.component.css.map */\n"] }]
  }], () => [{ type: ElementRef }], { label: [{
    type: Input
  }], placeholder: [{
    type: Input
  }], options: [{
    type: Input
  }], required: [{
    type: Input
  }], searchable: [{
    type: Input
  }], disabled: [{
    type: Input
  }], helpText: [{
    type: Input
  }], changed: [{
    type: Output
  }], searchInput: [{
    type: ViewChild,
    args: ["searchInput"]
  }], handleOutsideClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }], handleKeyboard: [{
    type: HostListener,
    args: ["keydown", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DropdownComponent, { className: "DropdownComponent", filePath: "src/app/shared/components/dropdown/dropdown.component.ts", lineNumber: 42 });
})();

// src/app/pages/component-demo/component-demo.component.ts
var _c07 = () => ({ label: "Male", value: "M" });
var _c14 = () => ({ label: "Female", value: "F" });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = () => ({ searchText: "", page: 0, size: 10, source: "KYC_APP" });
var _c4 = () => ({ label: "Other", value: "O" });
var _c5 = (a0, a1, a2) => [a0, a1, a2];
var ComponentDemoComponent = class _ComponentDemoComponent {
  fb;
  form;
  countries = [
    { label: "Bangladesh", value: "BD", icon: "fa-solid fa-flag" },
    { label: "India", value: "IN", icon: "fa-solid fa-flag" },
    { label: "United States", value: "US", icon: "fa-solid fa-flag" },
    { label: "Germany", value: "DE", icon: "fa-solid fa-flag" }
  ];
  plans = [
    { label: "Basic", value: "BASIC", icon: "fa-solid fa-leaf", description: "For individuals starting out", badge: "Free" },
    { label: "Pro", value: "PRO", icon: "fa-solid fa-bolt", description: "For professionals and teams", badge: "Popular" }
  ];
  constructor(fb) {
    this.fb = fb;
    this.form = this.fb.group({
      username: [""],
      email: [""],
      password: [""],
      mobile: [""],
      dateOfBirth: [""],
      country: ["", Validators.required],
      travelPeriod: [""],
      genderDropDown: [""],
      district: [""],
      village: [""],
      gender: ["M", Validators.required],
      plan: ["", Validators.required],
      agreeTerms: [false, Validators.requiredTrue],
      notifications: [true],
      marketing: [false],
      notes: ["", [Validators.required, Validators.maxLength(250)]],
      photo: [null]
    });
  }
  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
  static \u0275fac = function ComponentDemoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComponentDemoComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComponentDemoComponent, selectors: [["app-component-demo"]], decls: 43, vars: 56, consts: [[1, "container", "mt-4"], [1, "d-flex", "flex-column", "flex-md-row", "align-items-md-center", "justify-content-between", "gap-3", "mb-4"], [1, "mb-1"], [1, "text-muted", "mb-0"], [3, "ngSubmit", "formGroup"], [1, "mb-4"], ["formControlName", "username", "label", "Username", "icon", "fa-solid fa-user", 3, "minLength", "noSpecialChars", "floating"], ["formControlName", "email", "label", "Email Address", "icon", "fa-solid fa-envelope", "type", "email", 3, "required", "floating"], ["formControlName", "password", "label", "Password", "confirmLabel", "Confirm Password", 3, "floating", "required"], ["formControlName", "mobile", "label", "Mobile Number", "icon", "fa-solid fa-phone", "type", "tel", 3, "onlyNumber", "minLength", "maxLength", "floating"], ["formControlName", "dateOfBirth", "label", "Date of Birth", 3, "rangeMode", "monthsToShow", "disableFuture"], ["formControlName", "travelPeriod", "label", "Travel Period", 3, "rangeMode", "monthsToShow", "disablePast"], ["formControlName", "country", "label", "Country", "placeholder", "Select your country", "helpText", "Choose your country of residence.", 3, "options", "searchable", "required"], ["label", "Gender", "mode", "static", "placeholder", "Select your country", "formControlName", "genderDropDown", 3, "searchable", "options"], ["label", "District", "mode", "api-simple", "apiUrl", "/api/locations/search", "formControlName", "district", 3, "requestBody"], ["label", "Village", "mode", "api-scroll", "apiUrl", "/api/locations/search", "formControlName", "village", 3, "requestBody", "pageSize"], ["formControlName", "gender", "label", "Gender", "orientation", "horizontal", 3, "options", "required"], ["formControlName", "agreeTerms", "label", "Accept Terms & Conditions", "description", "You must agree before submitting.", "variant", "default", 3, "required"], ["formControlName", "notifications", "label", "Enable Notifications", "variant", "switch", "helpText", "Get important updates instantly."], ["formControlName", "marketing", "label", "Join Marketing List", "description", "Receive product news and offers.", "variant", "card"], ["formControlName", "plan", "label", "Choose Your Plan", "helpText", "Use arrow keys or click to select your preferred plan.", 3, "options", "columns", "responsive", "required"], ["formControlName", "notes", "label", "Remarks", "placeholder", "Enter your remarks...", "helpText", "Please provide details about your request.", 3, "maxLength", "autoResize", "required"], ["formControlName", "photo", "label", "Upload Documents", "accept", "*.png", "uploadUrl", "/api/upload", 3, "multiple", "maxSizeMB"], ["label", "Register", "icon", "fa-solid fa-user-plus", "variant", "primary", 3, "clicked"], [1, "mt-4"], ["label", "Save", "icon", "fa-solid fa-save"], ["label", "Delete", "icon", "fa fa-trash", "variant", "danger", 3, "loading"], ["label", "Loading...", "variant", "success", "size", "sm", 3, "outline", "loading"], ["label", "Submit Form", "icon", "fa-solid fa-check", "variant", "primary", "size", "lg", 3, "block"]], template: function ComponentDemoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
      \u0275\u0275text(4, "All Component Demo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Centralized showcase for the shared UI components used across the app.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "form", 4);
      \u0275\u0275listener("ngSubmit", function ComponentDemoComponent_Template_form_ngSubmit_7_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(8, "h3", 5);
      \u0275\u0275text(9, "Form Example");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "app-textbox", 6)(11, "app-textbox", 7)(12, "app-password-group", 8)(13, "app-textbox", 9)(14, "app-date-picker", 10)(15, "app-date-picker", 11)(16, "app-dropdown", 12)(17, "app-smart-dropdown", 13)(18, "app-smart-dropdown", 14)(19, "app-smart-dropdown", 15)(20, "app-radio-group", 16);
      \u0275\u0275elementStart(21, "h3");
      \u0275\u0275text(22, "Checkbox and toggle Example");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "app-checkbox", 17)(24, "app-checkbox", 18)(25, "app-checkbox", 19);
      \u0275\u0275elementStart(26, "h3");
      \u0275\u0275text(27, "Card Example");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-card-selector", 20);
      \u0275\u0275elementStart(29, "h3");
      \u0275\u0275text(30, "Textarea Example");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "app-textarea", 21);
      \u0275\u0275elementStart(32, "h3");
      \u0275\u0275text(33, "File upload example");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "app-file-upload", 22);
      \u0275\u0275elementStart(35, "app-button", 23);
      \u0275\u0275listener("clicked", function ComponentDemoComponent_Template_app_button_clicked_35_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 24)(37, "h3", 5);
      \u0275\u0275text(38, "Button Example");
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "app-button", 25)(40, "app-button", 26)(41, "app-button", 27)(42, "app-button", 28);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(3);
      \u0275\u0275property("minLength", 3)("noSpecialChars", true)("floating", true);
      \u0275\u0275advance();
      \u0275\u0275property("required", true)("floating", true);
      \u0275\u0275advance();
      \u0275\u0275property("floating", true)("required", true);
      \u0275\u0275advance();
      \u0275\u0275property("onlyNumber", true)("minLength", 10)("maxLength", 11)("floating", true);
      \u0275\u0275advance();
      \u0275\u0275property("rangeMode", false)("monthsToShow", 1)("disableFuture", true);
      \u0275\u0275advance();
      \u0275\u0275property("rangeMode", true)("monthsToShow", 2)("disablePast", true);
      \u0275\u0275advance();
      \u0275\u0275property("options", ctx.countries)("searchable", true)("required", true);
      \u0275\u0275advance();
      \u0275\u0275property("searchable", true)("options", \u0275\u0275pureFunction2(44, _c2, \u0275\u0275pureFunction0(42, _c07), \u0275\u0275pureFunction0(43, _c14)));
      \u0275\u0275advance();
      \u0275\u0275property("requestBody", \u0275\u0275pureFunction0(47, _c3));
      \u0275\u0275advance();
      \u0275\u0275property("requestBody", \u0275\u0275pureFunction0(48, _c3))("pageSize", 20);
      \u0275\u0275advance();
      \u0275\u0275property("options", \u0275\u0275pureFunction3(52, _c5, \u0275\u0275pureFunction0(49, _c07), \u0275\u0275pureFunction0(50, _c14), \u0275\u0275pureFunction0(51, _c4)))("required", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("required", true);
      \u0275\u0275advance(5);
      \u0275\u0275property("options", ctx.plans)("columns", 3)("responsive", true)("required", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("maxLength", 250)("autoResize", true)("required", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("multiple", true)("maxSizeMB", 5);
      \u0275\u0275advance(6);
      \u0275\u0275property("loading", false);
      \u0275\u0275advance();
      \u0275\u0275property("outline", true)("loading", true);
      \u0275\u0275advance();
      \u0275\u0275property("block", true);
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    FormGroupDirective,
    FormControlName,
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
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComponentDemoComponent, [{
    type: Component,
    args: [{ selector: "app-component-demo", standalone: true, imports: [
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
    ], template: `<div class="container mt-4">
    <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-4">
        <div>
            <h2 class="mb-1">All Component Demo</h2>
            <p class="text-muted mb-0">Centralized showcase for the shared UI components used across the app.</p>
        </div>
    </div>

    <form [formGroup]="form" (ngSubmit)="submit()">
        <h3 class="mb-4">Form Example</h3>

        <app-textbox
                formControlName="username"
                label="Username"
                icon="fa-solid fa-user"
                [minLength]="3"
                [noSpecialChars]="true"
                [floating]="true">
        </app-textbox>

        <app-textbox
                formControlName="email"
                label="Email Address"
                icon="fa-solid fa-envelope"
                type="email"
                [required]="true"
                [floating]="true">
        </app-textbox>

        <app-password-group
                formControlName="password"
                label="Password"
                confirmLabel="Confirm Password"
                [floating]="true"
                [required]="true">
        </app-password-group>

        <app-textbox
                formControlName="mobile"
                label="Mobile Number"
                icon="fa-solid fa-phone"
                type="tel"
                [onlyNumber]="true"
                [minLength]="10"
                [maxLength]="11"
                [floating]="true">
        </app-textbox>

        <app-date-picker
                formControlName="dateOfBirth"
                label="Date of Birth"
                [rangeMode]="false"
                [monthsToShow]="1"
                [disableFuture]="true">
        </app-date-picker>

        <app-date-picker
                formControlName="travelPeriod"
                label="Travel Period"
                [rangeMode]="true"
                [monthsToShow]="2"
                [disablePast]="true">
        </app-date-picker>

        <app-dropdown
                formControlName="country"
                label="Country"
                [options]="countries"
                [searchable]="true"
                placeholder="Select your country"
                [required]="true"
                helpText="Choose your country of residence.">
        </app-dropdown>

        <app-smart-dropdown
                label="Gender"
                mode="static"
                [searchable]="true"
                placeholder="Select your country"
                [options]="[
                    { label: 'Male', value: 'M' },
                    { label: 'Female', value: 'F' }
                ]"
                formControlName="genderDropDown">
        </app-smart-dropdown>

        <app-smart-dropdown
                label="District"
                mode="api-simple"
                apiUrl="/api/locations/search"
                [requestBody]="{ searchText: '', page: 0, size: 10, source: 'KYC_APP' }"
                formControlName="district">
        </app-smart-dropdown>

        <app-smart-dropdown
                label="Village"
                mode="api-scroll"
                apiUrl="/api/locations/search"
                [requestBody]="{ searchText: '', page: 0, size: 10, source: 'KYC_APP' }"
                [pageSize]="20"
                formControlName="village">
        </app-smart-dropdown>

        <app-radio-group
                formControlName="gender"
                label="Gender"
                [options]="[
                    { label: 'Male', value: 'M' },
                    { label: 'Female', value: 'F' },
                    { label: 'Other', value: 'O' }
                ]"
                orientation="horizontal"
                [required]="true">
        </app-radio-group>

        <h3>Checkbox and toggle Example</h3>
        <app-checkbox
                formControlName="agreeTerms"
                label="Accept Terms & Conditions"
                description="You must agree before submitting."
                variant="default"
                [required]="true">
        </app-checkbox>

        <app-checkbox
                formControlName="notifications"
                label="Enable Notifications"
                variant="switch"
                helpText="Get important updates instantly.">
        </app-checkbox>

        <app-checkbox
                formControlName="marketing"
                label="Join Marketing List"
                description="Receive product news and offers."
                variant="card">
        </app-checkbox>

        <h3>Card Example</h3>
        <app-card-selector
                formControlName="plan"
                label="Choose Your Plan"
                [options]="plans"
                [columns]="3"
                [responsive]="true"
                [required]="true"
                helpText="Use arrow keys or click to select your preferred plan.">
        </app-card-selector>

        <h3>Textarea Example</h3>
        <app-textarea
                formControlName="notes"
                label="Remarks"
                placeholder="Enter your remarks..."
                [maxLength]="250"
                [autoResize]="true"
                helpText="Please provide details about your request."
                [required]="true">
        </app-textarea>

        <h3>File upload example</h3>
        <app-file-upload
                formControlName="photo"
                label="Upload Documents"
                accept="*.png"
                [multiple]="true"
                [maxSizeMB]="5"
                uploadUrl="/api/upload">
        </app-file-upload>

        <app-button label="Register" icon="fa-solid fa-user-plus" variant="primary" (clicked)="submit()"></app-button>
    </form>

    <div class="mt-4">
        <h3 class="mb-4">Button Example</h3>

        <app-button
                label="Save"
                icon="fa-solid fa-save">
        </app-button>

        <app-button
                label="Delete"
                icon="fa fa-trash"
                variant="danger"
                [loading]="false">
        </app-button>

        <app-button
                label="Loading..."
                variant="success"
                [outline]="true"
                size="sm"
                [loading]="true">
        </app-button>

        <app-button
                label="Submit Form"
                icon="fa-solid fa-check"
                variant="primary"
                size="lg"
                [block]="true">
        </app-button>
    </div>
</div>
` }]
  }], () => [{ type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComponentDemoComponent, { className: "ComponentDemoComponent", filePath: "src/app/pages/component-demo/component-demo.component.ts", lineNumber: 36 });
})();
export {
  ComponentDemoComponent
};
//# sourceMappingURL=chunk-OLSU5N2S.js.map
