import {
  AuthService,
  LayoutService
} from "./chunk-7PRRKU4A.js";
import "./chunk-C53HBVYJ.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-53JHYZBU.js";
import {
  ApiEndpoints,
  ApiService,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-RP4NV6HK.js";
import "./chunk-NEC4XMZM.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  EventEmitter,
  Injectable,
  Input,
  NgForOf,
  NgIf,
  Output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
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
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5Z4ZU7MS.js";

// src/app/core/layout/topbar/topbar.component.ts
function TopbarComponent_img_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.user.photoUrl, \u0275\u0275sanitizeUrl);
  }
}
function TopbarComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 24);
  }
}
var TopbarComponent = class _TopbarComponent {
  layoutService;
  theme = "light";
  user;
  logout = new EventEmitter();
  isMenuOpen = true;
  constructor(layoutService) {
    this.layoutService = layoutService;
  }
  toggleSidebar() {
    this.layoutService.toggleSidebar();
  }
  toggleTheme() {
    const newTheme = this.theme === "dark" ? "light" : "dark";
    this.theme = newTheme;
    this.layoutService.setTheme(newTheme);
    document.body.setAttribute("data-bs-theme", newTheme);
  }
  onLogout() {
    this.logout.emit();
    console.log("logout");
  }
  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  static \u0275fac = function TopbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopbarComponent)(\u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopbarComponent, selectors: [["app-topbar"]], inputs: { theme: "theme", user: "user" }, outputs: { logout: "logout" }, decls: 34, vars: 13, consts: [["defaultAvatar", ""], [1, "navbar", "navbar-expand-lg", "shadow-sm", "topbar"], [1, "container-fluid", "px-3"], ["aria-label", "Toggle Sidebar", 1, "btn", "btn-link", "d-lg-none", "me-2", 3, "click"], [1, "fa", "fa-bars", "fs-5"], ["type", "button", "aria-controls", "navbarNav", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto", "align-items-center", "gap-2"], [1, "nav-item"], [1, "btn", "btn-link", "theme-toggle", 3, "click"], [1, "nav-item", "dropdown"], ["href", "#", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "d-flex", "align-items-center"], ["class", "rounded-circle me-2", "width", "32", "height", "32", "alt", "User Avatar", 3, "src", 4, "ngIf", "ngIfElse"], [1, "d-none", "d-md-inline"], [1, "dropdown-menu", "dropdown-menu-end", "shadow-sm"], ["routerLink", "/profile", 1, "dropdown-item"], [1, "fa", "fa-user", "me-2"], ["routerLink", "/settings", 1, "dropdown-item"], [1, "fa", "fa-cog", "me-2"], [1, "dropdown-divider"], [1, "dropdown-item", "text-danger", 3, "click"], [1, "fa", "fa-sign-out-alt", "me-2"], ["width", "32", "height", "32", "alt", "User Avatar", 1, "rounded-circle", "me-2", 3, "src"], [1, "fa", "fa-user-circle", "fa-lg", "me-2"]], template: function TopbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "nav", 1)(1, "div", 2)(2, "button", 3);
      \u0275\u0275listener("click", function TopbarComponent_Template_button_click_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleSidebar());
      });
      \u0275\u0275element(3, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 5);
      \u0275\u0275listener("click", function TopbarComponent_Template_button_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleMobileMenu());
      });
      \u0275\u0275element(5, "span", 6);
      \u0275\u0275text(6, "else ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 7)(8, "ul", 8)(9, "li", 9)(10, "button", 10);
      \u0275\u0275listener("click", function TopbarComponent_Template_button_click_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleTheme());
      });
      \u0275\u0275element(11, "i");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li", 11)(13, "a", 12);
      \u0275\u0275template(14, TopbarComponent_img_14_Template, 1, 1, "img", 13)(15, TopbarComponent_ng_template_15_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(17, "span", 14);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "ul", 15)(20, "li")(21, "a", 16);
      \u0275\u0275element(22, "i", 17);
      \u0275\u0275text(23, "Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "li")(25, "a", 18);
      \u0275\u0275element(26, "i", 19);
      \u0275\u0275text(27, "Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "li");
      \u0275\u0275element(29, "hr", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "li")(31, "a", 21);
      \u0275\u0275listener("click", function TopbarComponent_Template_a_click_31_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLogout());
      });
      \u0275\u0275element(32, "i", 22);
      \u0275\u0275text(33, "Logout");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      const defaultAvatar_r3 = \u0275\u0275reference(16);
      \u0275\u0275classProp("navbar-dark", ctx.theme === "dark")("navbar-light", ctx.theme === "light");
      \u0275\u0275advance(4);
      \u0275\u0275attribute("aria-expanded", ctx.isMenuOpen);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("show", ctx.isMenuOpen);
      \u0275\u0275advance(3);
      \u0275\u0275attribute("aria-label", "Switch to " + (ctx.theme === "dark" ? "light" : "dark") + " mode");
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.theme === "dark" ? "fa fa-sun text-warning" : "fa fa-moon text-secondary");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.user == null ? null : ctx.user.photoUrl)("ngIfElse", defaultAvatar_r3);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate((ctx.user == null ? null : ctx.user.sub) || "Guest");
    }
  }, dependencies: [CommonModule, NgIf, RouterLink], styles: ["\n\n.topbar[_ngcontent-%COMP%] {\n  background-color: var(--bs-body-bg);\n  border-bottom: 1px solid var(--bs-border-color);\n  transition: all 0.3s ease;\n}\n.topbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: var(--bs-body-color);\n  font-size: 1.25rem;\n}\n.topbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover {\n  color: var(--bs-primary);\n}\n.topbar[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  color: var(--bs-body-color);\n}\n.topbar[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:hover {\n  color: var(--bs-primary);\n}\n.topbar[_ngcontent-%COMP%]   .theme-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  transition: transform 0.3s ease;\n}\n.topbar[_ngcontent-%COMP%]   .theme-toggle[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: rotate(20deg);\n}\n.topbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n  border: 1px solid var(--bs-border-color);\n  min-width: 200px;\n}\n.topbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  transition: background-color 0.2s ease;\n}\n.topbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--bs-light-bg-subtle);\n}\n.topbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 18px;\n  text-align: center;\n}\n.topbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%]:hover {\n  background-color: rgba(var(--bs-danger-rgb), 0.1);\n}\n.topbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  border: none;\n}\n.topbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.topbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n/*# sourceMappingURL=topbar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopbarComponent, [{
    type: Component,
    args: [{ selector: "app-topbar", standalone: true, imports: [CommonModule, RouterLink], template: `<nav class="navbar navbar-expand-lg shadow-sm topbar" [class.navbar-dark]="theme === 'dark'" [class.navbar-light]="theme === 'light'">
    <div class="container-fluid px-3">

        <!-- Sidebar Toggle -->
        <button class="btn btn-link d-lg-none me-2" (click)="toggleSidebar()" aria-label="Toggle Sidebar">
            <i class="fa fa-bars fs-5"></i>
        </button>

        <button
                class="navbar-toggler"
                type="button"
                (click)="toggleMobileMenu()"
                [attr.aria-expanded]="isMenuOpen"
                aria-controls="navbarNav"
                aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>else
        </button>
        <!-- Brand -->
        
        <!-- Navbar Items -->
        <div class="collapse navbar-collapse" [class.show]="isMenuOpen" id="navbarNav">
            <ul class="navbar-nav ms-auto align-items-center gap-2">

                <!-- Theme Toggle -->
                <li class="nav-item">
                    <button class="btn btn-link theme-toggle" (click)="toggleTheme()" [attr.aria-label]="'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode'">
                        <i [class]="theme === 'dark' ? 'fa fa-sun text-warning' : 'fa fa-moon text-secondary'"></i>
                    </button>
                </li>

                <!-- Profile Dropdown -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img
                                *ngIf="user?.photoUrl; else defaultAvatar"
                                [src]="user.photoUrl"
                                class="rounded-circle me-2"
                                width="32"
                                height="32"
                                alt="User Avatar"
                        />
                        <ng-template #defaultAvatar>
                            <i class="fa fa-user-circle fa-lg me-2"></i>
                        </ng-template>
                        <span class="d-none d-md-inline">{{ user?.sub || 'Guest' }}</span>
                    </a>

                    <ul class="dropdown-menu dropdown-menu-end shadow-sm">
                        <li><a class="dropdown-item" routerLink="/profile"><i class="fa fa-user me-2"></i>Profile</a></li>
                        <li><a class="dropdown-item" routerLink="/settings"><i class="fa fa-cog me-2"></i>Settings</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item text-danger" (click)="onLogout()"><i class="fa fa-sign-out-alt me-2"></i>Logout</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
`, styles: ["/* src/app/core/layout/topbar/topbar.component.scss */\n.topbar {\n  background-color: var(--bs-body-bg);\n  border-bottom: 1px solid var(--bs-border-color);\n  transition: all 0.3s ease;\n}\n.topbar .navbar-brand {\n  color: var(--bs-body-color);\n  font-size: 1.25rem;\n}\n.topbar .navbar-brand:hover {\n  color: var(--bs-primary);\n}\n.topbar .btn-link {\n  color: var(--bs-body-color);\n}\n.topbar .btn-link:hover {\n  color: var(--bs-primary);\n}\n.topbar .theme-toggle i {\n  font-size: 1.2rem;\n  transition: transform 0.3s ease;\n}\n.topbar .theme-toggle:hover i {\n  transform: rotate(20deg);\n}\n.topbar .dropdown-menu {\n  border-radius: 0.75rem;\n  border: 1px solid var(--bs-border-color);\n  min-width: 200px;\n}\n.topbar .dropdown-menu .dropdown-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  transition: background-color 0.2s ease;\n}\n.topbar .dropdown-menu .dropdown-item:hover {\n  background-color: var(--bs-light-bg-subtle);\n}\n.topbar .dropdown-menu .dropdown-item i {\n  width: 18px;\n  text-align: center;\n}\n.topbar .dropdown-menu .text-danger:hover {\n  background-color: rgba(var(--bs-danger-rgb), 0.1);\n}\n.topbar .navbar-toggler {\n  border: none;\n}\n.topbar .navbar-toggler:focus {\n  box-shadow: none;\n}\n.topbar img {\n  object-fit: cover;\n}\n/*# sourceMappingURL=topbar.component.css.map */\n"] }]
  }], () => [{ type: LayoutService }], { theme: [{
    type: Input
  }], user: [{
    type: Input
  }], logout: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopbarComponent, { className: "TopbarComponent", filePath: "src/app/core/layout/topbar/topbar.component.ts", lineNumber: 13 });
})();

// src/app/core/services/sidebar-menu.service.ts
var SidebarMenuService = class _SidebarMenuService {
  apiService;
  constructor(apiService) {
    this.apiService = apiService;
  }
  loadSidebarMenu() {
    return this.apiService.post(ApiEndpoints.PRIVILEGE_SIDEBAR_MENU, {});
  }
  static \u0275fac = function SidebarMenuService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarMenuService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SidebarMenuService, factory: _SidebarMenuService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarMenuService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ApiService }], null);
})();

// src/app/core/layout/sidebar/sidebar.component.ts
function SidebarComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "MyApp");
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9);
    \u0275\u0275text(1, " Loading menu... ");
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9);
    \u0275\u0275text(1, " No menu available ");
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_li_8_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
function SidebarComponent_li_8_i_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 16);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("@rotateArrow", ctx_r2.isExpanded(item_r2.label) ? "expanded" : "collapsed");
  }
}
function SidebarComponent_li_8_ul_6_li_1_i_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 16);
  }
  if (rf & 2) {
    const child_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("@rotateArrow", ctx_r2.isExpanded(child_r5.label) ? "expanded" : "collapsed");
  }
}
function SidebarComponent_li_8_ul_6_li_1_ul_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 19);
    \u0275\u0275element(2, "i");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const grandChild_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", grandChild_r6.path);
    \u0275\u0275advance();
    \u0275\u0275classMap((grandChild_r6.icon || "fa fa-angle-right") + " me-1");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", grandChild_r6.label, " ");
  }
}
function SidebarComponent_li_8_ul_6_li_1_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 17);
    \u0275\u0275template(1, SidebarComponent_li_8_ul_6_li_1_ul_6_li_1_Template, 4, 4, "li", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("@slideToggle", void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", child_r5.children);
  }
}
function SidebarComponent_li_8_ul_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 11);
    \u0275\u0275listener("click", function SidebarComponent_li_8_ul_6_li_1_Template_a_click_1_listener() {
      const child_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.handleMenuClick(child_r5));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275element(3, "i");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SidebarComponent_li_8_ul_6_li_1_i_5_Template, 1, 1, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SidebarComponent_li_8_ul_6_li_1_ul_6_Template, 2, 2, "ul", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", child_r5.path || null);
    \u0275\u0275advance(2);
    \u0275\u0275classMap((child_r5.icon || "fa fa-angle-right") + " me-1");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", child_r5.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasChildren(child_r5) && !ctx_r2.collapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasChildren(child_r5) && ctx_r2.isExpanded(child_r5.label));
  }
}
function SidebarComponent_li_8_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 17);
    \u0275\u0275template(1, SidebarComponent_li_8_ul_6_li_1_Template, 7, 6, "li", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("@slideToggle", void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", item_r2.children);
  }
}
function SidebarComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 10)(1, "a", 11);
    \u0275\u0275listener("click", function SidebarComponent_li_8_Template_a_click_1_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleMenuClick(item_r2));
    });
    \u0275\u0275elementStart(2, "div", 12);
    \u0275\u0275element(3, "i");
    \u0275\u0275template(4, SidebarComponent_li_8_span_4_Template, 2, 1, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SidebarComponent_li_8_i_5_Template, 1, 1, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SidebarComponent_li_8_ul_6_Template, 2, 2, "ul", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r2.path || null);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(item_r2.icon + " me-2");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.collapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasChildren(item_r2) && !ctx_r2.collapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasChildren(item_r2) && ctx_r2.isExpanded(item_r2.label));
  }
}
var SidebarComponent = class _SidebarComponent {
  sidebarMenuService;
  constructor(sidebarMenuService) {
    this.sidebarMenuService = sidebarMenuService;
  }
  collapsed = false;
  expandedMenus = signal(/* @__PURE__ */ new Set());
  menuItems = [];
  loading = true;
  ngOnInit() {
    this.sidebarMenuService.loadSidebarMenu().subscribe({
      next: (menuItems) => {
        this.menuItems = menuItems || [];
        this.loading = false;
      },
      error: () => {
        this.menuItems = [];
        this.loading = false;
      }
    });
  }
  hasChildren(item) {
    return !!item.children?.length;
  }
  handleMenuClick(item) {
    if (this.hasChildren(item)) {
      this.toggleSubMenu(item.label);
    }
  }
  toggleSubMenu(label) {
    const expandedMenus = new Set(this.expandedMenus());
    if (expandedMenus.has(label)) {
      expandedMenus.delete(label);
    } else {
      expandedMenus.add(label);
    }
    this.expandedMenus.set(expandedMenus);
  }
  isExpanded(label) {
    return this.expandedMenus().has(label);
  }
  static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarComponent)(\u0275\u0275directiveInject(SidebarMenuService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], inputs: { collapsed: "collapsed" }, decls: 9, vars: 4, consts: [[1, "sidebar"], [1, "sidebar-header", "d-flex", "align-items-center", "justify-content-between", "px-3", "py-2"], [1, "d-flex", "align-items-center", "gap-2"], ["src", "assets/logo.svg", "alt", "Logo", 1, "brand-logo"], ["class", "fw-bold fs-5", 4, "ngIf"], [1, "nav", "flex-column", "mt-3"], ["class", "px-3 py-2 small text-muted", 4, "ngIf"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "fw-bold", "fs-5"], [1, "px-3", "py-2", "small", "text-muted"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", "d-flex", "align-items-center", "justify-content-between", 3, "click", "routerLink"], [1, "d-flex", "align-items-center"], [4, "ngIf"], ["class", "fa fa-chevron-right", 4, "ngIf"], ["class", "submenu list-unstyled ps-4", 4, "ngIf"], [1, "fa", "fa-chevron-right"], [1, "submenu", "list-unstyled", "ps-4"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"]], template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275template(4, SidebarComponent_span_4_Template, 2, 0, "span", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "ul", 5);
      \u0275\u0275template(6, SidebarComponent_li_6_Template, 2, 0, "li", 6)(7, SidebarComponent_li_7_Template, 2, 0, "li", 6)(8, SidebarComponent_li_8_Template, 7, 6, "li", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", !ctx.collapsed);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading && !ctx.collapsed);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.menuItems.length === 0 && !ctx.collapsed);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.menuItems);
    }
  }, dependencies: [NgForOf, NgIf, RouterLink, RouterLinkActive], styles: ["\n\n.sidebar[_ngcontent-%COMP%] {\n  background-color: var(--bs-body-bg);\n  height: 100vh;\n  width: 260px;\n  transition: width 0.3s ease;\n  border-right: 1px solid var(--bs-border-color);\n  overflow-y: auto;\n}\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  background-color: var(--bs-primary-bg-subtle);\n  border-bottom: 1px solid var(--bs-border-color);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: var(--bs-body-color);\n  border-radius: 0.375rem;\n  margin: 0.25rem 0;\n  padding: 0.6rem 1rem;\n  transition: all 0.2s ease;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, \n.sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  background-color: var(--bs-primary-bg-subtle);\n  color: var(--bs-primary);\n}\n.sidebar[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-color: rgba(var(--bs-primary-rgb), 0.02);\n  border-left: 2px solid var(--bs-primary);\n  margin-left: 0.2rem;\n  border-radius: 0.25rem;\n}\n.sidebar[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.75rem;\n  font-size: 0.9rem;\n  color: var(--bs-secondary-color);\n}\n.sidebar[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--bs-primary);\n  background-color: var(--bs-primary-bg-subtle);\n}\n.sidebar[_ngcontent-%COMP%]   .fa-chevron-right[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease;\n}\n/*# sourceMappingURL=sidebar.component.css.map */"], data: { animation: [
    trigger("slideToggle", [
      transition(":enter", [
        style({ height: 0, opacity: 0, overflow: "hidden" }),
        animate("250ms ease-out", style({ height: "*", opacity: 1 }))
      ]),
      transition(":leave", [
        style({ height: "*", opacity: 1, overflow: "hidden" }),
        animate("250ms ease-in", style({ height: 0, opacity: 0 }))
      ])
    ]),
    trigger("rotateArrow", [
      state("collapsed", style({ transform: "rotate(0deg)" })),
      state("expanded", style({ transform: "rotate(90deg)" })),
      transition("collapsed <=> expanded", animate("200ms ease"))
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar", standalone: true, imports: [NgForOf, NgIf, RouterLink, RouterLinkActive], animations: [
      trigger("slideToggle", [
        transition(":enter", [
          style({ height: 0, opacity: 0, overflow: "hidden" }),
          animate("250ms ease-out", style({ height: "*", opacity: 1 }))
        ]),
        transition(":leave", [
          style({ height: "*", opacity: 1, overflow: "hidden" }),
          animate("250ms ease-in", style({ height: 0, opacity: 0 }))
        ])
      ]),
      trigger("rotateArrow", [
        state("collapsed", style({ transform: "rotate(0deg)" })),
        state("expanded", style({ transform: "rotate(90deg)" })),
        transition("collapsed <=> expanded", animate("200ms ease"))
      ])
    ], template: `<div class="sidebar">
    <!-- Brand -->
    <div class="sidebar-header d-flex align-items-center justify-content-between px-3 py-2">
        <div class="d-flex align-items-center gap-2">
            <img src="assets/logo.svg" alt="Logo" class="brand-logo" />
            <span class="fw-bold fs-5" *ngIf="!collapsed">MyApp</span>
        </div>
    </div>

    <!-- Navigation -->
    <ul class="nav flex-column mt-3">
        <li class="px-3 py-2 small text-muted" *ngIf="loading && !collapsed">
            Loading menu...
        </li>
        <li class="px-3 py-2 small text-muted" *ngIf="!loading && menuItems.length === 0 && !collapsed">
            No menu available
        </li>
        <li class="nav-item" *ngFor="let item of menuItems">
            <a
                    class="nav-link d-flex align-items-center justify-content-between"
                    [routerLink]="item.path || null"
                    routerLinkActive="active"
                    (click)="handleMenuClick(item)"
            >
                <div class="d-flex align-items-center">
                    <i [class]="item.icon + ' me-2'"></i>
                    <span *ngIf="!collapsed">{{ item.label }}</span>
                </div>
                <i
                        *ngIf="hasChildren(item) && !collapsed"
                        class="fa fa-chevron-right"
                        [@rotateArrow]="isExpanded(item.label) ? 'expanded' : 'collapsed'"
                ></i>
            </a>

            <!-- Submenu with slide-down -->
            <ul
                    *ngIf="hasChildren(item) && isExpanded(item.label)"
                    class="submenu list-unstyled ps-4"
                    [@slideToggle]
            >
                <li *ngFor="let child of item.children">
                    <a
                            class="nav-link d-flex align-items-center justify-content-between"
                            [routerLink]="child.path || null"
                            routerLinkActive="active"
                            (click)="handleMenuClick(child)">
                        <span>
                            <i [class]="(child.icon || 'fa fa-angle-right') + ' me-1'"></i> {{ child.label }}
                        </span>
                        <i
                                *ngIf="hasChildren(child) && !collapsed"
                                class="fa fa-chevron-right"
                                [@rotateArrow]="isExpanded(child.label) ? 'expanded' : 'collapsed'"
                        ></i>
                    </a>
                    <ul
                            *ngIf="hasChildren(child) && isExpanded(child.label)"
                            class="submenu list-unstyled ps-4"
                            [@slideToggle]>
                        <li *ngFor="let grandChild of child.children">
                            <a class="nav-link" [routerLink]="grandChild.path" routerLinkActive="active">
                                <i [class]="(grandChild.icon || 'fa fa-angle-right') + ' me-1'"></i> {{ grandChild.label }}
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</div>
`, styles: ["/* src/app/core/layout/sidebar/sidebar.component.scss */\n.sidebar {\n  background-color: var(--bs-body-bg);\n  height: 100vh;\n  width: 260px;\n  transition: width 0.3s ease;\n  border-right: 1px solid var(--bs-border-color);\n  overflow-y: auto;\n}\n.sidebar.collapsed {\n  width: 80px;\n}\n.sidebar .sidebar-header {\n  background-color: var(--bs-primary-bg-subtle);\n  border-bottom: 1px solid var(--bs-border-color);\n}\n.sidebar .sidebar-header .brand-logo {\n  width: 28px;\n  height: 28px;\n}\n.sidebar .nav-link {\n  color: var(--bs-body-color);\n  border-radius: 0.375rem;\n  margin: 0.25rem 0;\n  padding: 0.6rem 1rem;\n  transition: all 0.2s ease;\n}\n.sidebar .nav-link:hover,\n.sidebar .nav-link.active {\n  background-color: var(--bs-primary-bg-subtle);\n  color: var(--bs-primary);\n}\n.sidebar .submenu {\n  overflow: hidden;\n  background-color: rgba(var(--bs-primary-rgb), 0.02);\n  border-left: 2px solid var(--bs-primary);\n  margin-left: 0.2rem;\n  border-radius: 0.25rem;\n}\n.sidebar .submenu a.nav-link {\n  padding: 0.4rem 0.75rem;\n  font-size: 0.9rem;\n  color: var(--bs-secondary-color);\n}\n.sidebar .submenu a.nav-link:hover {\n  color: var(--bs-primary);\n  background-color: var(--bs-primary-bg-subtle);\n}\n.sidebar .fa-chevron-right {\n  transition: transform 0.2s ease;\n}\n/*# sourceMappingURL=sidebar.component.css.map */\n"] }]
  }], () => [{ type: SidebarMenuService }], { collapsed: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/core/layout/sidebar/sidebar.component.ts", lineNumber: 31 });
})();

// src/app/core/layout/layout/layout.component.ts
function LayoutComponent_app_sidebar_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-sidebar", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("collapsed", ctx_r0.layoutService.layout().collapsed);
  }
}
function LayoutComponent_app_topbar_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-topbar", 6);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("logout", function LayoutComponent_app_topbar_3_Template_app_topbar_logout_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onLogout());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("theme", ctx_r0.layoutService.theme())("user", \u0275\u0275pipeBind1(1, 2, ctx_r0.authService.currentUser$));
  }
}
var LayoutComponent = class _LayoutComponent {
  layoutService;
  authService;
  constructor(layoutService, authService) {
    this.layoutService = layoutService;
    this.authService = authService;
    console.log("layoutService.layout()", layoutService.layout());
  }
  onLogout() {
    this.authService.logout();
    this.layoutService.setPublicLayout();
  }
  static \u0275fac = function LayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutComponent)(\u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], decls: 6, vars: 6, consts: [[1, "app-layout"], [3, "collapsed", 4, "ngIf"], [1, "app-main"], [3, "theme", "user", "logout", 4, "ngIf"], [1, "app-content", "container-fluid", "p-3", "ms-4"], [3, "collapsed"], [3, "logout", "theme", "user"]], template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, LayoutComponent_app_sidebar_1_Template, 1, 1, "app-sidebar", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275template(3, LayoutComponent_app_topbar_3_Template, 2, 4, "app-topbar", 3);
      \u0275\u0275elementStart(4, "main", 4);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("dark-theme", ctx.layoutService.theme() === "dark")("collapsed", ctx.layoutService.layout().collapsed);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.layoutService.layout().showSidebar);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.layoutService.layout().showTopbar);
    }
  }, dependencies: [CommonModule, NgIf, AsyncPipe, TopbarComponent, SidebarComponent, RouterOutlet], styles: ["\n\n.app-layout[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n  background-color: var(--bs-body-bg);\n  color: var(--bs-body-color);\n  transition: all 0.3s ease;\n}\n.app-layout.dark-theme[_ngcontent-%COMP%] {\n  background-color: #121212;\n  color: #e0e0e0;\n}\n.app-layout[_ngcontent-%COMP%]   .app-sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  background-color: var(--bs-dark);\n  color: white;\n  transition: width 0.3s ease;\n  z-index: 1030;\n}\n.app-layout[_ngcontent-%COMP%]   .app-sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.app-layout[_ngcontent-%COMP%]   .app-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: hidden;\n}\n.app-layout[_ngcontent-%COMP%]   .app-main[_ngcontent-%COMP%]   .app-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  background-color: var(--bs-body-bg);\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n.app-layout.collapsed[_ngcontent-%COMP%]   .app-sidebar[_ngcontent-%COMP%] {\n  width: 70px;\n}\n@media (max-width: 991px) {\n  .app-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .app-layout[_ngcontent-%COMP%]   .app-sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    transform: translateX(-100%);\n    transition: transform 0.3s ease;\n    z-index: 1040;\n  }\n  .app-layout.sidebar-open[_ngcontent-%COMP%]   .app-sidebar[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .app-layout[_ngcontent-%COMP%]   .app-main[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutComponent, [{
    type: Component,
    args: [{ selector: "app-layout", standalone: true, imports: [CommonModule, TopbarComponent, SidebarComponent, RouterOutlet, AsyncPipe], template: `<div
        class="app-layout"
        [class.dark-theme]="layoutService.theme() === 'dark'"
        [class.collapsed]="layoutService.layout().collapsed"
>
    <!-- Sidebar -->
    <app-sidebar
            *ngIf="layoutService.layout().showSidebar"
            [collapsed]="layoutService.layout().collapsed"
    ></app-sidebar>

    <!-- Main Area -->
    <div class="app-main">
        <app-topbar
                *ngIf="layoutService.layout().showTopbar"
                [theme]="layoutService.theme()"
                [user]="authService.currentUser$ | async"
                (logout)="onLogout()"
        ></app-topbar>

        <main class="app-content container-fluid p-3 ms-4">
            <router-outlet></router-outlet>
        </main>
    </div>
</div>
`, styles: ["/* src/app/core/layout/layout/layout.component.scss */\n.app-layout {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n  background-color: var(--bs-body-bg);\n  color: var(--bs-body-color);\n  transition: all 0.3s ease;\n}\n.app-layout.dark-theme {\n  background-color: #121212;\n  color: #e0e0e0;\n}\n.app-layout .app-sidebar {\n  width: 260px;\n  background-color: var(--bs-dark);\n  color: white;\n  transition: width 0.3s ease;\n  z-index: 1030;\n}\n.app-layout .app-sidebar.collapsed {\n  width: 70px;\n}\n.app-layout .app-main {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: hidden;\n}\n.app-layout .app-main .app-content {\n  flex: 1;\n  overflow-y: auto;\n  background-color: var(--bs-body-bg);\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n.app-layout.collapsed .app-sidebar {\n  width: 70px;\n}\n@media (max-width: 991px) {\n  .app-layout {\n    flex-direction: column;\n  }\n  .app-layout .app-sidebar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    transform: translateX(-100%);\n    transition: transform 0.3s ease;\n    z-index: 1040;\n  }\n  .app-layout.sidebar-open .app-sidebar {\n    transform: translateX(0);\n  }\n  .app-layout .app-main {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */\n"] }]
  }], () => [{ type: LayoutService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src/app/core/layout/layout/layout.component.ts", lineNumber: 17 });
})();
export {
  LayoutComponent
};
//# sourceMappingURL=chunk-4BG5P5YO.js.map
