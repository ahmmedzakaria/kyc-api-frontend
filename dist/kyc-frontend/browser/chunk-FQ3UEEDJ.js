import {
  AuthService,
  LayoutService
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
  Router
} from "./chunk-RP4NV6HK.js";
import "./chunk-NEC4XMZM.js";
import {
  Component,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-5Z4ZU7MS.js";

// src/app/pages/login/login.component.ts
function LoginComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, " Username is required ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, " Password is required ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
var LoginComponent = class _LoginComponent {
  fb;
  authService;
  router;
  layoutService;
  form;
  errorMessage = "";
  constructor(fb, authService, router, layoutService) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.layoutService = layoutService;
    this.form = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  login() {
    if (this.form.invalid)
      return;
    const { username, password } = this.form.value;
    this.authService.login(username, password).subscribe({
      next: () => {
        console.log("login success setting layout");
        this.layoutService.setAuthenticatedLayout();
        this.router.navigate([""]);
      },
      error: (err) => {
        this.errorMessage = err?.error || "Login failed";
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 24, vars: 5, consts: [[1, "d-flex", "justify-content-center", "align-items-center", "vh-80", "bg-light"], [1, "card", "shadow-sm", "p-4", 2, "min-width", "350px", "max-width", "400px"], [1, "text-center", "mb-4"], [1, "fa-solid", "fa-user-shield", "fa-3x", "text-primary", "mb-2"], [1, "fw-bold"], [1, "text-muted"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "username", 1, "form-label", "fw-semibold"], ["id", "username", "type", "text", "formControlName", "username", "placeholder", "Enter username", 1, "form-control"], ["class", "text-danger small", 4, "ngIf"], ["for", "password", 1, "form-label", "fw-semibold"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Enter password", 1, "form-control"], ["class", "alert alert-danger py-2 small", 4, "ngIf"], [1, "d-grid", "mt-4"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "fa-solid", "fa-right-to-bracket", "me-2"], [1, "text-danger", "small"], [1, "alert", "alert-danger", "py-2", "small"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementStart(4, "h2", 4);
      \u0275\u0275text(5, "Login");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, "Enter your credentials to continue");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "form", 6);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() {
        return ctx.login();
      });
      \u0275\u0275elementStart(9, "div", 7)(10, "label", 8);
      \u0275\u0275text(11, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 9);
      \u0275\u0275template(13, LoginComponent_div_13_Template, 2, 0, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 7)(15, "label", 11);
      \u0275\u0275text(16, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 12);
      \u0275\u0275template(18, LoginComponent_div_18_Template, 2, 0, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, LoginComponent_div_19_Template, 2, 1, "div", 13);
      \u0275\u0275elementStart(20, "div", 14)(21, "button", 15);
      \u0275\u0275element(22, "i", 16);
      \u0275\u0275text(23, " Login ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ((tmp_1_0 = ctx.form.get("username")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.form.get("username")) == null ? null : tmp_1_0.touched));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.form.get("password")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.form.get("password")) == null ? null : tmp_2_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.form.invalid);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", imports: [
      ReactiveFormsModule,
      NgIf
    ], template: `<div class="d-flex justify-content-center align-items-center vh-80 bg-light">
    <div class="card shadow-sm p-4" style="min-width: 350px; max-width: 400px;">
        <div class="text-center mb-4">
            <i class="fa-solid fa-user-shield fa-3x text-primary mb-2"></i>
            <h2 class="fw-bold">Login</h2>
            <p class="text-muted">Enter your credentials to continue</p>
        </div>

        <form [formGroup]="form" (ngSubmit)="login()">
            <!-- Username -->
            <div class="mb-3">
                <label for="username" class="form-label fw-semibold">Username</label>
                <input
                        id="username"
                        type="text"
                        class="form-control"
                        formControlName="username"
                        placeholder="Enter username" />
                <div class="text-danger small" *ngIf="form.get('username')?.invalid && form.get('username')?.touched">
                    Username is required
                </div>
            </div>

            <!-- Password -->
            <div class="mb-3">
                <label for="password" class="form-label fw-semibold">Password</label>
                <input
                        id="password"
                        type="password"
                        class="form-control"
                        formControlName="password"
                        placeholder="Enter password" />
                <div class="text-danger small" *ngIf="form.get('password')?.invalid && form.get('password')?.touched">
                    Password is required
                </div>
            </div>

            <!-- Error Message -->
            <div *ngIf="errorMessage" class="alert alert-danger py-2 small">
                {{ errorMessage }}
            </div>

            <!-- Submit -->
            <div class="d-grid mt-4">
                <button type="submit" class="btn btn-primary" [disabled]="form.invalid">
                    <i class="fa-solid fa-right-to-bracket me-2"></i> Login
                </button>
            </div>
        </form>
    </div>
</div>
` }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }, { type: LayoutService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/login/login.component.ts", lineNumber: 19 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-FQ3UEEDJ.js.map
