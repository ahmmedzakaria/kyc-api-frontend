import {
  CommonModule,
  Component,
  NgForOf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5Z4ZU7MS.js";

// src/app/pages/dashboard/dashboard.component.ts
function DashboardComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9);
    \u0275\u0275element(3, "i");
    \u0275\u0275elementStart(4, "h5", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275classMapInterpolate1("fa ", stat_r1.icon, " fa-2x text-primary mb-2");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.value);
  }
}
var DashboardComponent = class _DashboardComponent {
  stats = [
    { title: "Total KYC", value: 128, icon: "fa-id-card" },
    { title: "Pending Approvals", value: 12, icon: "fa-hourglass-half" },
    { title: "Rejected", value: 5, icon: "fa-ban" },
    { title: "Users Online", value: 42, icon: "fa-users" }
  ];
  ngOnInit() {
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 9, vars: 1, consts: [[1, "dashboard", "container", "mt-4"], [1, "mb-4"], [1, "row"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "text-center", "mt-4"], ["routerLink", "/kyc", 1, "btn", "btn-outline-primary"], [1, "fa", "fa-id-badge", "me-2"], [1, "col-md-3"], [1, "card", "shadow-sm", "text-center", "mb-3", "dashboard-card"], [1, "card-body"], [1, "card-title"], [1, "card-text", "fw-bold"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275template(4, DashboardComponent_div_4_Template, 8, 5, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "a", 5);
      \u0275\u0275element(7, "i", 6);
      \u0275\u0275text(8, " Manage KYC ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.stats);
    }
  }, dependencies: [CommonModule, NgForOf], styles: ["\n\n.dashboard-card[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n  transition: transform 0.2s ease-in-out;\n  cursor: pointer;\n}\n.dashboard-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.dashboard-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0d6efd;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule], template: '<div class="dashboard container mt-4">\n    <h2 class="mb-4">Dashboard</h2>\n\n    <div class="row">\n        <div class="col-md-3" *ngFor="let stat of stats">\n            <div class="card shadow-sm text-center mb-3 dashboard-card">\n                <div class="card-body">\n                    <i class="fa {{ stat.icon }} fa-2x text-primary mb-2"></i>\n                    <h5 class="card-title">{{ stat.title }}</h5>\n                    <h3 class="card-text fw-bold">{{ stat.value }}</h3>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="text-center mt-4">\n        <a routerLink="/kyc" class="btn btn-outline-primary">\n            <i class="fa fa-id-badge me-2"></i> Manage KYC\n        </a>\n    </div>\n</div>\n', styles: ["/* src/app/pages/dashboard/dashboard.component.scss */\n.dashboard-card {\n  border-radius: 1rem;\n  transition: transform 0.2s ease-in-out;\n  cursor: pointer;\n}\n.dashboard-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.dashboard-card i {\n  color: #0d6efd;\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/pages/dashboard/dashboard.component.ts", lineNumber: 11 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-KVVKCBLI.js.map
