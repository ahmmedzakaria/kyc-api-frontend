import {
  PersonService
} from "./chunk-6YRKYNHE.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule
} from "./chunk-34VX2KBB.js";
import {
  ApiEndpoints,
  ApiService,
  Router,
  RouterLink
} from "./chunk-RP4NV6HK.js";
import {
  ImagePreviewComponent
} from "./chunk-NOEZV2AX.js";
import "./chunk-NEC4XMZM.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
  debounceTime,
  distinctUntilChanged,
  of,
  setClassMetadata,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5Z4ZU7MS.js";

// src/app/pages/person/person-list/person-list.component.ts
var _c0 = (a0, a1) => [a0, a1];
var _c1 = () => [];
function PersonListComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "app-image-preview", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "td", 13)(4, "td", 13)(5, "td", 13);
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "button", 14);
    \u0275\u0275listener("click", function PersonListComponent_tr_29_Template_button_click_11_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.preview(p_r2));
    });
    \u0275\u0275element(12, "i", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 16);
    \u0275\u0275listener("click", function PersonListComponent_tr_29_Template_button_click_13_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(p_r2));
    });
    \u0275\u0275element(14, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 18);
    \u0275\u0275listener("click", function PersonListComponent_tr_29_Template_button_click_15_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(p_r2));
    });
    \u0275\u0275element(16, "i", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", p_r2.photoUrl || "assets/default-avatar.svg")("subtitle", (p_r2.firstName || "-") + " " + (p_r2.lastName || ""))("width", 45)("height", 45)("previewOnClick", false)("disabled", false);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r2.highlightText(\u0275\u0275pureFunction2(11, _c0, p_r2.firstName || "", p_r2.lastName || "").join(" ").trim()), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r2.highlightText(p_r2.email), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r2.highlightText(p_r2.mobileNumber), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.gender);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.educationLevel);
  }
}
function PersonListComponent_nav_30_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 22)(1, "button", 23);
    \u0275\u0275listener("click", function PersonListComponent_nav_30_li_5_Template_button_click_1_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(i_r6));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", i_r6 === ctx_r2.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
  }
}
function PersonListComponent_nav_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 20)(1, "ul", 21)(2, "li", 22)(3, "button", 23);
    \u0275\u0275listener("click", function PersonListComponent_nav_30_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage - 1));
    });
    \u0275\u0275text(4, " \xAB Prev ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, PersonListComponent_nav_30_li_5_Template, 3, 3, "li", 24);
    \u0275\u0275elementStart(6, "li", 22)(7, "button", 23);
    \u0275\u0275listener("click", function PersonListComponent_nav_30_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage + 1));
    });
    \u0275\u0275text(8, " Next \xBB ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r2.currentPage === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(5, _c1).constructor(ctx_r2.totalPages));
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r2.currentPage + 1 >= ctx_r2.totalPages);
  }
}
var PersonListComponent = class _PersonListComponent {
  service;
  fb;
  router;
  apiService;
  persons = [];
  totalElements = 0;
  totalPages = 0;
  currentPage = 0;
  pageSize = 10;
  currentSearchText = "";
  photoObjectUrls = [];
  constructor(service, fb, router, apiService) {
    this.service = service;
    this.fb = fb;
    this.router = router;
    this.apiService = apiService;
  }
  searchForm;
  ngOnInit() {
    this.searchForm = this.fb.group({
      searchText: [""]
    });
    this.loadData();
    const searchControl = this.searchForm.get("searchText");
    if (!searchControl)
      return;
    searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), switchMap((text) => {
      const normalizedText = (text || "").trim();
      if (!normalizedText) {
        this.currentSearchText = "";
        return this.service.searchPersons("", 0, this.pageSize);
      }
      if (normalizedText.length <= 2) {
        this.currentSearchText = "";
        return of(null);
      }
      this.currentSearchText = normalizedText;
      return this.service.searchPersons(normalizedText, 0, this.pageSize);
    })).subscribe({
      next: (res) => {
        if (!res) {
          return;
        }
        this.currentPage = 0;
        this.populateData(res);
      },
      error: (err) => console.error("Search error:", err)
    });
  }
  ngOnDestroy() {
    this.revokePhotoUrls();
  }
  loadData(page = 0) {
    const searchText = (this.searchForm?.value?.searchText || "").trim();
    const effectiveSearchText = searchText.length > 2 ? searchText : "";
    this.currentSearchText = effectiveSearchText;
    this.service.searchPersons(effectiveSearchText, page, this.pageSize).subscribe({
      next: (res) => this.populateData(res)
    });
  }
  populateData(data) {
    this.revokePhotoUrls();
    this.persons = (data?.content || []).map((person) => __spreadProps(__spreadValues({}, person), {
      photoUrl: "assets/default-avatar.svg"
    }));
    this.totalElements = data?.totalElements || 0;
    this.totalPages = data?.totalPages || 0;
    this.currentPage = data?.number || 0;
    this.persons.forEach((person) => {
      if (!person.id) {
        return;
      }
      this.apiService.fetchImageUrl(ApiEndpoints.PERSON_PHOTO, { ownerId: person.id }).subscribe({
        next: (imageUrl) => {
          this.photoObjectUrls.push(imageUrl);
          person.photoUrl = imageUrl;
        },
        error: () => {
          person.photoUrl = "assets/default-avatar.svg";
        }
      });
    });
  }
  edit(person) {
    this.router.navigate(["/person", person.id, "edit"], { state: { person } });
  }
  preview(person) {
    this.router.navigate(["/person", person.id, "preview"], { state: { person } });
  }
  delete(person) {
    if (confirm(`Delete ${person.firstName || person.username}?`)) {
      this.service.deletePerson(person.id).subscribe(() => this.loadData(this.currentPage));
    }
  }
  goToPage(page) {
    if (page >= 0 && page < this.totalPages) {
      this.loadData(page);
    }
  }
  revokePhotoUrls() {
    this.photoObjectUrls.forEach((url) => URL.revokeObjectURL(url));
    this.photoObjectUrls = [];
  }
  highlightText(value) {
    const text = value || "-";
    if (!this.currentSearchText) {
      return text;
    }
    const escapedSearchText = this.escapeRegex(this.currentSearchText);
    return text.replace(new RegExp(`(${escapedSearchText})`, "gi"), '<mark style="background-color: #f4c542; color: #1f2937; padding: 0 !important; border-radius: 0.15rem;">$1</mark>');
  }
  escapeRegex(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  static \u0275fac = function PersonListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PersonListComponent)(\u0275\u0275directiveInject(PersonService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PersonListComponent, selectors: [["app-person-list"]], decls: 31, vars: 3, consts: [[1, "container", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], ["routerLink", "/person/create", 1, "btn", "btn-success"], [1, "fa", "fa-plus", "me-2"], [1, "row", "mb-3", 3, "formGroup"], [1, "col-md-6"], ["type", "text", "placeholder", "Search by name, email, or mobile...", "formControlName", "searchText", 1, "form-control"], [1, "table-responsive"], [1, "table", "table-striped", "shadow-sm", "align-middle"], [1, "table-primary"], [4, "ngFor", "ngForOf"], ["class", "mt-3", 4, "ngIf"], ["alt", "Person photo", "title", "Person Photo", "thumbnailClass", "rounded-circle shadow-sm object-fit-cover", 3, "src", "subtitle", "width", "height", "previewOnClick", "disabled"], [3, "innerHTML"], ["title", "Preview", 1, "btn", "btn-sm", "btn-outline-secondary", "me-2", 3, "click"], [1, "fa", "fa-eye"], [1, "btn", "btn-sm", "btn-outline-primary", "me-2", 3, "click"], [1, "fa", "fa-edit"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "fa", "fa-trash"], [1, "mt-3"], [1, "pagination", "justify-content-center"], [1, "page-item"], [1, "page-link", 3, "click"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"]], template: function PersonListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Person Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "a", 2);
      \u0275\u0275element(5, "i", 3);
      \u0275\u0275text(6, "Add Person ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5);
      \u0275\u0275element(9, "input", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 7)(11, "table", 8)(12, "thead", 9)(13, "tr")(14, "th");
      \u0275\u0275text(15, "Photo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "th");
      \u0275\u0275text(17, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th");
      \u0275\u0275text(19, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th");
      \u0275\u0275text(21, "Mobile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Gender");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Education");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "tbody");
      \u0275\u0275template(29, PersonListComponent_tr_29_Template, 17, 14, "tr", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(30, PersonListComponent_nav_30_Template, 9, 6, "nav", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.searchForm);
      \u0275\u0275advance(22);
      \u0275\u0275property("ngForOf", ctx.persons);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalPages > 1);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, ImagePreviewComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonListComponent, [{
    type: Component,
    args: [{ selector: "app-person-list", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink, ImagePreviewComponent], template: `<div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h2>Person Management</h2>
        <a class="btn btn-success" routerLink="/person/create">
            <i class="fa fa-plus me-2"></i>Add Person
        </a>
    </div>

    <div class="row mb-3" [formGroup]="searchForm">
        <div class="col-md-6">
            <input
                    type="text"
                    class="form-control"
                    placeholder="Search by name, email, or mobile..."
                    formControlName="searchText"
            />
        </div>
    </div>

    <div class="table-responsive">
        <table class="table table-striped shadow-sm align-middle">
            <thead class="table-primary">
            <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Gender</th>
                <th>Education</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr *ngFor="let p of persons">
                <td>
                    <app-image-preview
                            [src]="p.photoUrl || 'assets/default-avatar.svg'"
                            alt="Person photo"
                            title="Person Photo"
                            [subtitle]="(p.firstName || '-') + ' ' + (p.lastName || '')"
                            thumbnailClass="rounded-circle shadow-sm object-fit-cover"
                            [width]="45"
                            [height]="45"
                            [previewOnClick]="false"
                            [disabled]="false">
                    </app-image-preview>
                </td>
                <td [innerHTML]="highlightText(([p.firstName || '', p.lastName || ''].join(' ').trim()))"></td>
                <td [innerHTML]="highlightText(p.email)"></td>
                <td [innerHTML]="highlightText(p.mobileNumber)"></td>
                <td>{{ p.gender }}</td>
                <td>{{ p.educationLevel }}</td>
                <td>
                    <button class="btn btn-sm btn-outline-secondary me-2" (click)="preview(p)" title="Preview">
                        <i class="fa fa-eye"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-primary me-2" (click)="edit(p)">
                        <i class="fa fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger" (click)="delete(p)">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>

    <!-- Pagination -->
    <nav *ngIf="totalPages > 1" class="mt-3">
        <ul class="pagination justify-content-center">
            <li class="page-item" [class.disabled]="currentPage === 0">
                <button class="page-link" (click)="goToPage(currentPage - 1)">
                    &laquo; Prev
                </button>
            </li>

            <li
                    class="page-item"
                    *ngFor="let page of [].constructor(totalPages); let i = index"
                    [class.active]="i === currentPage"
            >
                <button class="page-link" (click)="goToPage(i)">{{ i + 1 }}</button>
            </li>

            <li class="page-item" [class.disabled]="currentPage + 1 >= totalPages">
                <button class="page-link" (click)="goToPage(currentPage + 1)">
                    Next &raquo;
                </button>
            </li>
        </ul>
    </nav>
</div>
` }]
  }], () => [{ type: PersonService }, { type: FormBuilder }, { type: Router }, { type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PersonListComponent, { className: "PersonListComponent", filePath: "src/app/pages/person/person-list/person-list.component.ts", lineNumber: 20 });
})();
export {
  PersonListComponent
};
//# sourceMappingURL=chunk-6CIHLHL4.js.map
