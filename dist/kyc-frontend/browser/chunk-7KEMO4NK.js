import {
  DatePickerComponent,
  FileUploadComponent,
  SmartDropdownComponent,
  TextboxComponent
} from "./chunk-OXOENLNZ.js";
import {
  PersonService
} from "./chunk-6YRKYNHE.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-34VX2KBB.js";
import {
  GisService
} from "./chunk-MHLBT6PD.js";
import {
  ActivatedRoute,
  ApiEndpoints,
  ApiService,
  Router,
  RouterLink
} from "./chunk-RP4NV6HK.js";
import "./chunk-NOEZV2AX.js";
import {
  HttpClientModule
} from "./chunk-NEC4XMZM.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgForOf,
  NgIf,
  Output,
  Subject,
  ViewChild,
  debounceTime,
  distinctUntilChanged,
  of,
  setClassMetadata,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
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
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-5Z4ZU7MS.js";

// src/app/pages/person/location-dropdown.component.ts
var _c0 = ["dropdownList"];
function LocationDropdownComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function LocationDropdownComponent_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSelection());
    });
    \u0275\u0275text(1, "\u2715");
    \u0275\u0275elementEnd();
  }
}
function LocationDropdownComponent_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function LocationDropdownComponent_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275listener("click", function LocationDropdownComponent_div_4_div_3_Template_div_click_0_listener() {
      const loc_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectLocation(loc_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("highlighted", i_r6 === ctx_r1.highlightedIndex);
    \u0275\u0275property("innerHTML", ctx_r1.highlightMatch(loc_r5.detailLocation), \u0275\u0275sanitizeHtml);
  }
}
function LocationDropdownComponent_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, " No results found ");
    \u0275\u0275elementEnd();
  }
}
function LocationDropdownComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7, 0);
    \u0275\u0275listener("scroll", function LocationDropdownComponent_div_4_Template_div_scroll_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onScroll($event));
    });
    \u0275\u0275template(2, LocationDropdownComponent_div_4_div_2_Template, 2, 0, "div", 8)(3, LocationDropdownComponent_div_4_div_3_Template, 1, 3, "div", 9)(4, LocationDropdownComponent_div_4_div_4_Template, 2, 0, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.locations);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading && ctx_r1.locations.length === 0);
  }
}
var LocationDropdownComponent = class _LocationDropdownComponent {
  gisService;
  placeholder = "Search location...";
  selectedLabel = "";
  locationSelected = new EventEmitter();
  dropdownList;
  searchTerm = "";
  locations = [];
  isLoading = false;
  isDropdownOpen = false;
  selectedLocation = null;
  highlightedIndex = -1;
  page = 0;
  totalPages = 0;
  search$ = new Subject();
  constructor(gisService) {
    this.gisService = gisService;
    this.setupSearch();
  }
  ngOnChanges(changes) {
    if ("selectedLabel" in changes && !this.selectedLocation) {
      this.searchTerm = this.selectedLabel || "";
    }
  }
  setupSearch() {
    this.search$.pipe(debounceTime(400), distinctUntilChanged(), tap(() => {
      this.page = 0;
      this.locations = [];
      this.isLoading = true;
    }), switchMap((term) => {
      if (!term.trim())
        return of({ content: [], totalPages: 0 });
      return this.gisService.searchLocation(term, this.page, 10);
    }), tap(() => this.isLoading = false)).subscribe({
      next: (res) => {
        this.locations = res?.content ?? [];
        this.totalPages = res?.totalPages ?? 0;
        this.isDropdownOpen = true;
        this.highlightedIndex = -1;
      },
      error: () => this.isLoading = false
    });
  }
  onSearch(term) {
    this.searchTerm = term;
    this.search$.next(term);
  }
  onScroll(e) {
    const el = e.target;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 10;
    if (atBottom && !this.isLoading && this.page + 1 < this.totalPages) {
      this.page++;
      this.isLoading = true;
      this.gisService.searchLocation(this.searchTerm, this.page, 10).subscribe({
        next: (res) => {
          this.locations.push(...res?.content ?? []);
          this.isLoading = false;
        },
        error: () => this.isLoading = false
      });
    }
  }
  selectLocation(location) {
    this.selectedLocation = location;
    this.searchTerm = location.detailLocation;
    this.isDropdownOpen = false;
    this.highlightedIndex = -1;
    this.locationSelected.emit(location);
  }
  clearSelection() {
    this.selectedLocation = null;
    this.searchTerm = "";
    this.locations = [];
    this.isDropdownOpen = false;
    this.locationSelected.emit(null);
  }
  handleKeyDown(event) {
    if (!this.isDropdownOpen || !this.locations.length)
      return;
    if (event.key === "ArrowDown") {
      this.highlightedIndex = (this.highlightedIndex + 1) % this.locations.length;
      this.scrollToHighlighted();
      event.preventDefault();
    } else if (event.key === "ArrowUp") {
      this.highlightedIndex = (this.highlightedIndex - 1 + this.locations.length) % this.locations.length;
      this.scrollToHighlighted();
      event.preventDefault();
    } else if (event.key === "Enter" && this.highlightedIndex >= 0) {
      this.selectLocation(this.locations[this.highlightedIndex]);
      event.preventDefault();
    }
  }
  scrollToHighlighted() {
    const listEl = this.dropdownList?.nativeElement;
    if (!listEl)
      return;
    const activeEl = listEl.children[this.highlightedIndex];
    if (activeEl) {
      const top = activeEl.offsetTop;
      const bottom = top + activeEl.offsetHeight;
      if (top < listEl.scrollTop) {
        listEl.scrollTop = top;
      } else if (bottom > listEl.scrollTop + listEl.clientHeight) {
        listEl.scrollTop = bottom - listEl.clientHeight;
      }
    }
  }
  highlightMatch(text) {
    if (!this.searchTerm)
      return text;
    const re = new RegExp(`(${this.escapeRegex(this.searchTerm)})`, "gi");
    return text.replace(re, `<mark>$1</mark>`);
  }
  escapeRegex(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  static \u0275fac = function LocationDropdownComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocationDropdownComponent)(\u0275\u0275directiveInject(GisService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LocationDropdownComponent, selectors: [["app-location-dropdown"]], viewQuery: function LocationDropdownComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dropdownList = _t.first);
    }
  }, inputs: { placeholder: "placeholder", selectedLabel: "selectedLabel" }, outputs: { locationSelected: "locationSelected" }, features: [\u0275\u0275NgOnChangesFeature], decls: 5, vars: 4, consts: [["dropdownList", ""], [1, "dropdown-container"], [1, "search-wrapper"], ["type", "text", 1, "search-input", 3, "ngModelChange", "input", "keydown", "focus", "ngModel", "placeholder"], ["class", "clear-btn", 3, "click", 4, "ngIf"], ["class", "dropdown-list", 3, "scroll", 4, "ngIf"], [1, "clear-btn", 3, "click"], [1, "dropdown-list", 3, "scroll"], ["class", "loading", 4, "ngIf"], ["class", "dropdown-item", 3, "highlighted", "innerHTML", "click", 4, "ngFor", "ngForOf"], ["class", "no-results", 4, "ngIf"], [1, "loading"], [1, "dropdown-item", 3, "click", "innerHTML"], [1, "no-results"]], template: function LocationDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "input", 3);
      \u0275\u0275twoWayListener("ngModelChange", function LocationDropdownComponent_Template_input_ngModelChange_2_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function LocationDropdownComponent_Template_input_input_2_listener() {
        return ctx.onSearch(ctx.searchTerm);
      })("keydown", function LocationDropdownComponent_Template_input_keydown_2_listener($event) {
        return ctx.handleKeyDown($event);
      })("focus", function LocationDropdownComponent_Template_input_focus_2_listener() {
        return ctx.isDropdownOpen = true;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, LocationDropdownComponent_button_3_Template, 2, 0, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, LocationDropdownComponent_div_4_Template, 5, 3, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275property("placeholder", ctx.placeholder);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedLocation);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isDropdownOpen);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.dropdown-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 35px 8px 10px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  outline: none;\n}\n.clear-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: 6px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 16px;\n  color: #999;\n}\n.dropdown-list[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  max-height: 240px;\n  overflow-y: auto;\n  background: #fff;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  margin-top: 4px;\n  z-index: 1000;\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  cursor: pointer;\n  border-radius: 4px;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover, \n.dropdown-item.highlighted[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: #fff;\n}\nmark[_ngcontent-%COMP%] {\n  background: yellow;\n  color: black;\n  font-weight: bold;\n  border-radius: 2px;\n  padding: 0 2px;\n}\n.loading[_ngcontent-%COMP%], \n.no-results[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n  color: #888;\n}\n/*# sourceMappingURL=location-dropdown.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocationDropdownComponent, [{
    type: Component,
    args: [{ selector: "app-location-dropdown", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="dropdown-container">\n    <div class="search-wrapper">\n        <input\n                type="text"\n                [(ngModel)]="searchTerm"\n                (input)="onSearch(searchTerm)"\n                (keydown)="handleKeyDown($event)"\n                (focus)="isDropdownOpen = true"\n                [placeholder]="placeholder"\n                class="search-input"\n        />\n        <button *ngIf="selectedLocation" class="clear-btn" (click)="clearSelection()">\u2715</button>\n    </div>\n\n    <div\n        #dropdownList\n        class="dropdown-list"\n        *ngIf="isDropdownOpen"\n        (scroll)="onScroll($event)"\n    >\n        <div *ngIf="isLoading" class="loading">Loading...</div>\n\n        <div\n                *ngFor="let loc of locations; let i = index"\n                class="dropdown-item"\n                [class.highlighted]="i === highlightedIndex"\n                (click)="selectLocation(loc)"\n                [innerHTML]="highlightMatch(loc.detailLocation)"\n        ></div>\n\n        <div *ngIf="!isLoading && locations.length === 0" class="no-results">\n            No results found\n        </div>\n    </div>\n</div>\n', styles: ["/* src/app/pages/person/location-dropdown.component.scss */\n.dropdown-container {\n  position: relative;\n  width: 100%;\n}\n.search-wrapper {\n  position: relative;\n}\n.search-input {\n  width: 100%;\n  padding: 8px 35px 8px 10px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  outline: none;\n}\n.clear-btn {\n  position: absolute;\n  right: 8px;\n  top: 6px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 16px;\n  color: #999;\n}\n.dropdown-list {\n  position: absolute;\n  width: 100%;\n  max-height: 240px;\n  overflow-y: auto;\n  background: #fff;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  margin-top: 4px;\n  z-index: 1000;\n}\n.dropdown-item {\n  padding: 8px 10px;\n  cursor: pointer;\n  border-radius: 4px;\n}\n.dropdown-item:hover,\n.dropdown-item.highlighted {\n  background-color: #007bff;\n  color: #fff;\n}\nmark {\n  background: yellow;\n  color: black;\n  font-weight: bold;\n  border-radius: 2px;\n  padding: 0 2px;\n}\n.loading,\n.no-results {\n  padding: 10px;\n  text-align: center;\n  color: #888;\n}\n/*# sourceMappingURL=location-dropdown.component.css.map */\n"] }]
  }], () => [{ type: GisService }], { placeholder: [{
    type: Input
  }], selectedLabel: [{
    type: Input
  }], locationSelected: [{
    type: Output
  }], dropdownList: [{
    type: ViewChild,
    args: ["dropdownList"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LocationDropdownComponent, { className: "LocationDropdownComponent", filePath: "src/app/pages/person/location-dropdown.component.ts", lineNumber: 21 });
})();

// src/app/pages/person/person-form.component.ts
function PersonFormComponent_option_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    \u0275\u0275property("value", r_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r1);
  }
}
function PersonFormComponent_option_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r2 = ctx.$implicit;
    \u0275\u0275property("value", e_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r2);
  }
}
function PersonFormComponent_option_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r3 = ctx.$implicit;
    \u0275\u0275property("value", y_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(y_r3);
  }
}
var PersonFormComponent = class _PersonFormComponent {
  fb;
  service;
  gisService;
  apiService;
  personData;
  saved = new EventEmitter();
  form;
  photoPreview = null;
  currentLocationLabel = "";
  permanentLocationLabel = "";
  previewObjectUrl = null;
  // Dropdown options
  bloodGroups = [
    { label: "A+", value: "A+" },
    { label: "A-", value: "A-" },
    { label: "B+", value: "B+" },
    { label: "B-", value: "B-" },
    { label: "AB+", value: "AB+" },
    { label: "AB-", value: "AB-" },
    { label: "O+", value: "O+" },
    { label: "O-", value: "O" }
  ];
  relations = ["Father", "Mother", "Brother", "Sister", "Friend", "Other"];
  educationLevels = ["SSC", "HSC", "Diploma", "Bachelor", "Master", "PhD"];
  passingYears = Array.from({ length: 30 }, (_, i) => (/* @__PURE__ */ new Date()).getFullYear() - i);
  genderList = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" }
  ];
  // Location search
  currentLocationResults = [];
  permanentLocationResults = [];
  constructor(fb, service, gisService, apiService) {
    this.fb = fb;
    this.service = service;
    this.gisService = gisService;
    this.apiService = apiService;
    this.form = this.fb.group({
      id: [],
      username: [""],
      mobileNumber: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      firstName: [""],
      lastName: [""],
      dateOfBirth: [""],
      gender: [""],
      nationalId: [""],
      bloodGroup: [""],
      photo: [""],
      fatherName: [""],
      fatherMobileNumber: [""],
      motherName: [""],
      motherMobileNumber: [""],
      emergencyContactPerson: [""],
      emergencyContactNumber: [""],
      emergencyContactPersonRelation: [""],
      educationLevel: [""],
      institutionName: [""],
      passingYear: [""],
      currentLocationId: [""],
      currentLocationType: [""],
      currentAddress: [""],
      sameAddress: [false],
      permanentLocationId: [""],
      permanentLocationType: [""],
      permanentAddress: [""]
    });
  }
  ngOnInit() {
    if (this.personData) {
      this.form.patchValue(this.personData);
      this.loadPhotoPreview();
      this.loadLocationLabel("current");
      this.loadLocationLabel("permanent");
    }
    this.form.controls.sameAddress.valueChanges.subscribe((checked) => {
      if (checked) {
        this.form.patchValue({
          permanentAddress: this.form.value.currentAddress,
          permanentLocationId: this.form.value.currentLocationId,
          permanentLocationType: this.form.value.currentLocationType
        });
      } else {
        this.form.patchValue({
          permanentAddress: "",
          permanentLocationId: null,
          permanentLocationType: ""
        });
      }
    });
    this.setupLocationSearch("currentLocationId", "currentLocationResults");
    this.setupLocationSearch("permanentLocationId", "permanentLocationResults");
  }
  // onLocationSelected(controlName: string, location: any) {
  //     this.form.patchValue({ [controlName]: location.id });
  // }
  onLocationSelected(controlName, location) {
    const patchValue = {
      [controlName]: location?.id || null
    };
    if (controlName === "currentLocationId") {
      patchValue.currentLocationType = location?.gisCode || "";
      this.currentLocationLabel = location?.detailLocation || "";
    }
    if (controlName === "permanentLocationId") {
      patchValue.permanentLocationType = location?.gisCode || "";
      this.permanentLocationLabel = location?.detailLocation || "";
    }
    this.form.patchValue(patchValue);
  }
  setupLocationSearch(controlName, resultKey) {
    this.form.controls[controlName]?.valueChanges.pipe(debounceTime(400), switchMap((val) => {
      if (typeof val === "string" && val.length > 1) {
        return this.gisService.searchLocation(val, 0, 10);
      }
      return of([]);
    })).subscribe((results) => {
      this[resultKey] = results.content;
    });
  }
  loadLocationLabel(type) {
    const idControlName = type === "current" ? "currentLocationId" : "permanentLocationId";
    const typeControlName = type === "current" ? "currentLocationType" : "permanentLocationType";
    const locationId = this.form.get(idControlName)?.value;
    const gisCode = this.form.get(typeControlName)?.value;
    if (!locationId || !gisCode) {
      return;
    }
    this.gisService.getLocationById(locationId, gisCode).subscribe({
      next: (location) => {
        const label = location?.detailLocation || "";
        if (type === "current") {
          this.currentLocationLabel = label;
        } else {
          this.permanentLocationLabel = label;
        }
      },
      error: () => {
        if (type === "current") {
          this.currentLocationLabel = "";
        } else {
          this.permanentLocationLabel = "";
        }
      }
    });
  }
  loadPhotoPreview() {
    const personId = this.personData?.id;
    if (!personId) {
      this.photoPreview = null;
      return;
    }
    this.apiService.fetchImageUrl(ApiEndpoints.PERSON_PHOTO, { ownerId: personId }).subscribe({
      next: (imageUrl) => {
        this.revokePreviewUrl();
        this.previewObjectUrl = imageUrl;
        this.photoPreview = imageUrl;
      },
      error: () => {
        this.revokePreviewUrl();
        this.photoPreview = null;
      }
    });
  }
  selectLocation(type, location) {
    if (type === "current") {
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
      if (val !== null && val !== void 0 && key !== "sameAddress" && key !== "photo")
        formData.append(key, val.toString());
    });
    const selectedFiles = this.form.value.photo;
    const selectedFile = selectedFiles?.[0];
    if (selectedFile) {
      formData.append("photo", selectedFile);
    }
    const request$ = this.personData?.id ? this.service.updatePerson(formData) : this.service.createPerson(formData);
    request$.subscribe({
      next: () => this.saved.emit()
    });
  }
  ngOnDestroy() {
    this.revokePreviewUrl();
  }
  revokePreviewUrl() {
    if (!this.previewObjectUrl) {
      return;
    }
    URL.revokeObjectURL(this.previewObjectUrl);
    this.previewObjectUrl = null;
  }
  static \u0275fac = function PersonFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PersonFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(PersonService), \u0275\u0275directiveInject(GisService), \u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PersonFormComponent, selectors: [["app-person-form"]], inputs: { personData: "personData" }, outputs: { saved: "saved" }, decls: 94, vars: 46, consts: [[1, "card", "shadow", "p-4", "mb-4"], [3, "ngSubmit", "formGroup"], [1, "mb-3", "border-bottom", "pb-2"], [1, "row"], [1, "col-md-6", "mb-3"], ["formControlName", "firstName", "label", "First Name", "icon", "fa-solid fa-id-card", 3, "floating"], ["formControlName", "lastName", "label", "Last Name", "icon", "fa-solid fa-id-card", 3, "floating"], ["formControlName", "mobileNumber", "label", "Mobile Number", "icon", "fa-solid fa-phone", "type", "number", 3, "onlyNumber", "minLength", "maxLength", "floating"], ["formControlName", "email", "label", "Email", "icon", "fa-solid fa-envelope", "type", "email", 3, "required", "floating"], ["formControlName", "username", "label", "Username", "icon", "fa-solid fa-user", 3, "readonly", "floating"], ["formControlName", "nationalId", "label", "National ID", "icon", "fa-solid fa-user", 3, "minLength", "noSpecialChars", "floating"], ["label", "Gender", "mode", "static", "placeholder", "Select Gender", "formControlName", "gender", 3, "searchable", "options"], ["label", "Blood Group", "mode", "static", "placeholder", "Select Blood Group", "formControlName", "bloodGroup", 3, "searchable", "options"], ["formControlName", "dateOfBirth", "label", "Date of Birth", 3, "rangeMode", "monthsToShow", "disableFuture"], ["formControlName", "photo", "label", "Upload Photo", "accept", "*.png", "existingPreviewTitle", "Current uploaded photo", 3, "multiple", "maxSizeMB", "existingPreviewUrl"], ["formControlName", "fatherName", "label", "Father Name", "icon", "fa-solid fa-user", 3, "floating"], ["formControlName", "fatherMobileNumber", "label", "Mobile Number", "icon", "fa-solid fa-phone", "type", "number", 3, "onlyNumber", "minLength", "maxLength", "floating"], ["formControlName", "motherName", "label", "Mother Name", "icon", "fa-solid fa-user", 3, "floating"], ["formControlName", "motherMobileNumber", "label", "Mother Number", "icon", "fa-solid fa-phone", "type", "number", 3, "onlyNumber", "minLength", "maxLength", "floating"], ["formControlName", "emergencyContactPerson", "label", "Emergency Contact Person", "icon", "fa-solid fa-user", 3, "floating"], ["formControlName", "emergencyContactNumber", "label", "Emergency Contact", "icon", "fa-solid fa-phone", "type", "number", 3, "onlyNumber", "minLength", "maxLength", "floating"], ["formControlName", "emergencyContactPersonRelation", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-4", "mb-3"], ["formControlName", "educationLevel", 1, "form-select"], ["formControlName", "institutionName", 1, "form-control"], ["formControlName", "passingYear", 1, "form-select"], [1, "col-md-6"], ["placeholder", "Search Current Location", 3, "locationSelected", "selectedLabel"], [1, "mt-2"], ["formControlName", "currentAddress", "rows", "2", 1, "form-control"], [1, "form-check", "mb-2"], ["type", "checkbox", "formControlName", "sameAddress", 1, "form-check-input"], [1, "form-check-label"], ["placeholder", "Search Permanent Location", 3, "locationSelected", "selectedLabel"], ["formControlName", "permanentAddress", "rows", "2", 1, "form-control"], [1, "mt-4", "text-end"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "fa", "fa-save", "me-2"], [3, "value"]], template: function PersonFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h4");
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "form", 1);
      \u0275\u0275listener("ngSubmit", function PersonFormComponent_Template_form_ngSubmit_3_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(4, "h5", 2);
      \u0275\u0275text(5, "Basic Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 3)(7, "div", 4);
      \u0275\u0275element(8, "app-textbox", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 4);
      \u0275\u0275element(10, "app-textbox", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 4);
      \u0275\u0275element(12, "app-textbox", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 4);
      \u0275\u0275element(14, "app-textbox", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 4);
      \u0275\u0275element(16, "app-textbox", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 4);
      \u0275\u0275element(18, "app-textbox", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 4);
      \u0275\u0275element(20, "app-smart-dropdown", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 4);
      \u0275\u0275element(22, "app-smart-dropdown", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 4);
      \u0275\u0275element(24, "app-date-picker", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 4);
      \u0275\u0275element(26, "app-file-upload", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "h5", 2);
      \u0275\u0275text(28, "Family Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 3)(30, "div", 4);
      \u0275\u0275element(31, "app-textbox", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 4);
      \u0275\u0275element(33, "app-textbox", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 4);
      \u0275\u0275element(35, "app-textbox", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 4);
      \u0275\u0275element(37, "app-textbox", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "h5", 2);
      \u0275\u0275text(39, "Emergency Contact Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 3)(41, "div", 4);
      \u0275\u0275element(42, "app-textbox", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 4);
      \u0275\u0275element(44, "app-textbox", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 4)(46, "label");
      \u0275\u0275text(47, "Relation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "select", 21)(49, "option", 22);
      \u0275\u0275text(50, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275template(51, PersonFormComponent_option_51_Template, 2, 2, "option", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "h5", 2);
      \u0275\u0275text(53, "Education Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 3)(55, "div", 24)(56, "label");
      \u0275\u0275text(57, "Level");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "select", 25)(59, "option", 22);
      \u0275\u0275text(60, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275template(61, PersonFormComponent_option_61_Template, 2, 2, "option", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 24)(63, "label");
      \u0275\u0275text(64, "Institution");
      \u0275\u0275elementEnd();
      \u0275\u0275element(65, "input", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 24)(67, "label");
      \u0275\u0275text(68, "Passing Year");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "select", 27)(70, "option", 22);
      \u0275\u0275text(71, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275template(72, PersonFormComponent_option_72_Template, 2, 2, "option", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "h5", 2);
      \u0275\u0275text(74, "Address Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 3)(76, "div", 28)(77, "app-location-dropdown", 29);
      \u0275\u0275listener("locationSelected", function PersonFormComponent_Template_app_location_dropdown_locationSelected_77_listener($event) {
        return ctx.onLocationSelected("currentLocationId", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "label", 30);
      \u0275\u0275text(79, "Current Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(80, "textarea", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 28)(82, "div", 32);
      \u0275\u0275element(83, "input", 33);
      \u0275\u0275elementStart(84, "label", 34);
      \u0275\u0275text(85, "Same as current address");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "app-location-dropdown", 35);
      \u0275\u0275listener("locationSelected", function PersonFormComponent_Template_app_location_dropdown_locationSelected_86_listener($event) {
        return ctx.onLocationSelected("permanentLocationId", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "label", 30);
      \u0275\u0275text(88, "Permanent Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(89, "textarea", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "div", 37)(91, "button", 38);
      \u0275\u0275element(92, "i", 39);
      \u0275\u0275text(93, " Save ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.personData ? "Edit Person" : "Create Person");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275property("floating", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("floating", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("onlyNumber", true)("minLength", 10)("maxLength", 11)("floating", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("required", true)("floating", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("readonly", true)("floating", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("minLength", 3)("noSpecialChars", true)("floating", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("searchable", true)("options", ctx.genderList);
      \u0275\u0275advance(2);
      \u0275\u0275property("searchable", true)("options", ctx.bloodGroups);
      \u0275\u0275advance(2);
      \u0275\u0275property("rangeMode", false)("monthsToShow", 1)("disableFuture", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("multiple", false)("maxSizeMB", 5)("existingPreviewUrl", ctx.photoPreview ? ctx.photoPreview.toString() : "");
      \u0275\u0275advance(5);
      \u0275\u0275property("floating", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("onlyNumber", true)("minLength", 10)("maxLength", 11)("floating", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("floating", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("onlyNumber", true)("minLength", 10)("maxLength", 11)("floating", true);
      \u0275\u0275advance(5);
      \u0275\u0275property("floating", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("onlyNumber", true)("minLength", 10)("maxLength", 11)("floating", true);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.relations);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", ctx.educationLevels);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.passingYears);
      \u0275\u0275advance(5);
      \u0275\u0275property("selectedLabel", ctx.currentLocationLabel);
      \u0275\u0275advance(9);
      \u0275\u0275property("selectedLabel", ctx.permanentLocationLabel);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", ctx.form.invalid);
    }
  }, dependencies: [CommonModule, NgForOf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, HttpClientModule, LocationDropdownComponent, TextboxComponent, SmartDropdownComponent, DatePickerComponent, FileUploadComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonFormComponent, [{
    type: Component,
    args: [{ selector: "app-person-form", standalone: true, imports: [CommonModule, ReactiveFormsModule, HttpClientModule, LocationDropdownComponent, TextboxComponent, SmartDropdownComponent, DatePickerComponent, FileUploadComponent], template: `<div class="card shadow p-4 mb-4">
    <h4>{{ personData ? 'Edit Person' : 'Create Person' }}</h4>
    <form [formGroup]="form" (ngSubmit)="submit()">

        <!-- Basic Info -->
        <h5 class="mb-3 border-bottom pb-2">Basic Information</h5>
        <div class="row">
            <div class="col-md-6 mb-3">
                <app-textbox
                        formControlName="firstName"
                        label="First Name"
                        icon="fa-solid fa-id-card"
                        [floating]="true">
                </app-textbox>
            </div>
            <div class="col-md-6 mb-3">
                <app-textbox
                        formControlName="lastName"
                        label="Last Name"
                        icon="fa-solid fa-id-card"
                        [floating]="true">
                </app-textbox>
            </div>
            <div class="col-md-6 mb-3">
                <app-textbox
                        formControlName="mobileNumber"
                        label="Mobile Number"
                        icon="fa-solid fa-phone"
                        type="number"
                        [onlyNumber]="true"
                        [minLength]="10"
                        [maxLength]="11"
                        [floating]="true">
                </app-textbox>
            </div>
            <div class="col-md-6 mb-3">
                <app-textbox
                        formControlName="email"
                        label="Email"
                        icon="fa-solid fa-envelope"
                        type="email"
                        [required]="true"
                        [floating]="true">
                </app-textbox>
            </div>
            <div class="col-md-6 mb-3">
                <app-textbox
                        formControlName="username"
                        label="Username"
                        icon="fa-solid fa-user"
                        [readonly]="true"
                        [floating]="true">
                </app-textbox>
            </div>
            <div class="col-md-6 mb-3">
                <app-textbox
                        formControlName="nationalId"
                        label="National ID"
                        icon="fa-solid fa-user"
                        [minLength]="3"
                        [noSpecialChars]="true"
                        [floating]="true">
                </app-textbox>
            </div>
            <div class="col-md-6 mb-3">
                <app-smart-dropdown
                        label="Gender"
                        mode="static"
                        [searchable]="true"
                        placeholder="Select Gender"
                        [options]="genderList"
                        formControlName="gender">
                </app-smart-dropdown>
            </div>
            <div class="col-md-6 mb-3">
                <app-smart-dropdown
                        label="Blood Group"
                        mode="static"
                        [searchable]="true"
                        placeholder="Select Blood Group"
                        [options]="bloodGroups"
                        formControlName="bloodGroup">
                </app-smart-dropdown>
            </div>
            <div class="col-md-6 mb-3">
                <app-date-picker
                        formControlName="dateOfBirth"
                        label="Date of Birth"
                        [rangeMode]="false"
                        [monthsToShow]="1"
                        [disableFuture]="true">
                </app-date-picker>
            </div>
            <div class="col-md-6 mb-3">
                <app-file-upload
                        formControlName="photo"
                        label="Upload Photo"
                        accept="*.png"
                        [multiple]="false"
                        [maxSizeMB]="5"
                        [existingPreviewUrl]="photoPreview ? photoPreview.toString() : ''"
                        existingPreviewTitle="Current uploaded photo"
                ></app-file-upload>
            </div>
        </div>

        <!-- Family Info -->
        <h5 class="mb-3 border-bottom pb-2">Family Information</h5>
        <div class="row">
            <div class="col-md-6 mb-3">
                <app-textbox
                        formControlName="fatherName"
                        label="Father Name"
                        icon="fa-solid fa-user"
                        [floating]="true">
                </app-textbox>
            </div>
            <div class="col-md-6 mb-3">
                <app-textbox
                        formControlName="fatherMobileNumber"
                        label="Mobile Number"
                        icon="fa-solid fa-phone"
                        type="number"
                        [onlyNumber]="true"
                        [minLength]="10"
                        [maxLength]="11"
                        [floating]="true">
                </app-textbox>
            </div>
            <div class="col-md-6 mb-3">
                <app-textbox
                        formControlName="motherName"
                        label="Mother Name"
                        icon="fa-solid fa-user"
                        [floating]="true">
                </app-textbox>
        </div>
        <div class="col-md-6 mb-3">
            <app-textbox
                    formControlName="motherMobileNumber"
                    label="Mother Number"
                    icon="fa-solid fa-phone"
                    type="number"
                    [onlyNumber]="true"
                    [minLength]="10"
                    [maxLength]="11"
                    [floating]="true">
            </app-textbox>
        </div>
        </div>

        <!-- Emergency Contact Info -->
        <h5 class="mb-3 border-bottom pb-2">Emergency Contact Information</h5>
        <div class="row">
            <div class="col-md-6 mb-3">
                <app-textbox
                        formControlName="emergencyContactPerson"
                        label="Emergency Contact Person"
                        icon="fa-solid fa-user"
                        [floating]="true">
                </app-textbox>
            </div>
            <div class="col-md-6 mb-3">
                <app-textbox
                        formControlName="emergencyContactNumber"
                        label="Emergency Contact"
                        icon="fa-solid fa-phone"
                        type="number"
                        [onlyNumber]="true"
                        [minLength]="10"
                        [maxLength]="11"
                        [floating]="true">
                </app-textbox>
            </div>
            <div class="col-md-6 mb-3">
                <label>Relation</label>
                <select class="form-select" formControlName="emergencyContactPersonRelation">
                    <option value="">Select</option>
                    <option *ngFor="let r of relations" [value]="r">{{ r }}</option>
                </select>
            </div>
        </div>

        <!-- Education Info -->
        <h5 class="mb-3 border-bottom pb-2">Education Information</h5>
        <div class="row">
            <div class="col-md-4 mb-3">
                <label>Level</label>
                <select class="form-select" formControlName="educationLevel">
                    <option value="">Select</option>
                    <option *ngFor="let e of educationLevels" [value]="e">{{ e }}</option>
                </select>
            </div>
            <div class="col-md-4 mb-3"><label>Institution</label><input class="form-control" formControlName="institutionName" /></div>
            <div class="col-md-4 mb-3">
                <label>Passing Year</label>
                <select class="form-select" formControlName="passingYear">
                    <option value="">Select</option>
                    <option *ngFor="let y of passingYears" [value]="y">{{ y }}</option>
                </select>
            </div>
        </div>

        <!-- Address Info -->
        <h5 class="mb-3 border-bottom pb-2">Address Information</h5>
        <div class="row">
            <!-- Current -->
            <div class="col-md-6">
<!--                <label>Current Location</label>-->
<!--                <input type="text" class="form-control" formControlName="currentLocationId" placeholder="Search location..." />-->
<!--                <ul *ngIf="currentLocationResults.length" class="list-group">-->
<!--                    <li *ngFor="let loc of currentLocationResults" class="list-group-item list-group-item-action"-->
<!--                        (click)="selectLocation('current', loc)">-->
<!--                        {{ loc.detailLocation }}-->
<!--                    </li>-->
<!--                </ul>-->
<!--                <label>Current Location</label>-->
<!--                <app-location-dropdown-->
<!--                        placeholder="Search Current Location"-->
<!--                        (locationSelected)="onLocationSelected('currentLocationId', $event)">-->
<!--                </app-location-dropdown>-->
                <app-location-dropdown
                        [selectedLabel]="currentLocationLabel"
                        placeholder="Search Current Location"
                        (locationSelected)="onLocationSelected('currentLocationId', $event)">
                </app-location-dropdown>
                <label class="mt-2">Current Address</label>
                <textarea class="form-control" formControlName="currentAddress" rows="2"></textarea>
            </div>

            <!-- Permanent -->
            <div class="col-md-6">
                <div class="form-check mb-2">
                    <input class="form-check-input" type="checkbox" formControlName="sameAddress" />
                    <label class="form-check-label">Same as current address</label>
                </div>

<!--                <label>Permanent Location</label>-->
<!--                <input type="text" class="form-control" formControlName="permanentLocationId" placeholder="Search location..." />-->
<!--                <ul *ngIf="permanentLocationResults.length" class="list-group">-->
<!--                    <li *ngFor="let loc of permanentLocationResults" class="list-group-item list-group-item-action"-->
<!--                        (click)="selectLocation('permanent', loc)">-->
<!--                        {{ loc.name }}-->
<!--                    </li>-->
<!--                </ul>-->
<!--                <label>Permanent Location</label>-->
<!--                <app-location-dropdown-->
<!--                        placeholder="Search Permanent Location"-->
<!--                        (locationSelected)="onLocationSelected('permanentLocationId', $event)">-->
<!--                </app-location-dropdown>-->
                <app-location-dropdown
                        [selectedLabel]="permanentLocationLabel"
                        placeholder="Search Permanent Location"
                        (locationSelected)="onLocationSelected('permanentLocationId', $event)">
                </app-location-dropdown>
                <label class="mt-2">Permanent Address</label>
                <textarea class="form-control" formControlName="permanentAddress" rows="2"></textarea>
            </div>
        </div>

        <div class="mt-4 text-end">
            <button type="submit" class="btn btn-primary" [disabled]="form.invalid">
                <i class="fa fa-save me-2"></i> Save
            </button>
        </div>
    </form>
</div>
` }]
  }], () => [{ type: FormBuilder }, { type: PersonService }, { type: GisService }, { type: ApiService }], { personData: [{
    type: Input
  }], saved: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PersonFormComponent, { className: "PersonFormComponent", filePath: "src/app/pages/person/person-form.component.ts", lineNumber: 26 });
})();

// src/app/pages/person/person-editor.component.ts
var PersonEditorComponent = class _PersonEditorComponent {
  route;
  router;
  personData;
  isEditMode = false;
  constructor(route, router) {
    this.route = route;
    this.router = router;
  }
  ngOnInit() {
    const routeId = this.route.snapshot.paramMap.get("id");
    this.isEditMode = !!routeId;
    if (!this.isEditMode) {
      return;
    }
    const person = history.state?.person;
    if (!person?.id || person.id.toString() !== routeId) {
      this.router.navigate(["/person"]);
      return;
    }
    this.personData = person;
  }
  onSaved() {
    this.router.navigate(["/person"]);
  }
  static \u0275fac = function PersonEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PersonEditorComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PersonEditorComponent, selectors: [["app-person-editor"]], decls: 11, vars: 3, consts: [[1, "container", "mt-4"], [1, "d-flex", "flex-column", "flex-md-row", "align-items-md-center", "justify-content-between", "gap-3", "mb-4"], [1, "mb-1"], [1, "text-muted", "mb-0"], ["routerLink", "/person", 1, "btn", "btn-outline-secondary"], [1, "fa", "fa-arrow-left", "me-2"], [3, "saved", "personData"]], template: function PersonEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "a", 4);
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275text(9, "Back to Person List ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "app-person-form", 6);
      \u0275\u0275listener("saved", function PersonEditorComponent_Template_app_person_form_saved_10_listener() {
        return ctx.onSaved();
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Person" : "Add Person");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update an existing person record." : "Create a new person record with full profile details.", " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("personData", ctx.personData);
    }
  }, dependencies: [CommonModule, RouterLink, PersonFormComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonEditorComponent, [{
    type: Component,
    args: [{ selector: "app-person-editor", standalone: true, imports: [CommonModule, RouterLink, PersonFormComponent], template: `<div class="container mt-4">
    <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-4">
        <div>
            <h2 class="mb-1">{{ isEditMode ? 'Edit Person' : 'Add Person' }}</h2>
            <p class="text-muted mb-0">
                {{ isEditMode ? 'Update an existing person record.' : 'Create a new person record with full profile details.' }}
            </p>
        </div>

        <a class="btn btn-outline-secondary" routerLink="/person">
            <i class="fa fa-arrow-left me-2"></i>Back to Person List
        </a>
    </div>

    <app-person-form
            [personData]="personData"
            (saved)="onSaved()">
    </app-person-form>
</div>
` }]
  }], () => [{ type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PersonEditorComponent, { className: "PersonEditorComponent", filePath: "src/app/pages/person/person-editor.component.ts", lineNumber: 13 });
})();
export {
  PersonEditorComponent
};
//# sourceMappingURL=chunk-7KEMO4NK.js.map
