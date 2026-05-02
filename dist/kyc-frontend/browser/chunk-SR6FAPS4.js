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
import {
  ImagePreviewComponent
} from "./chunk-NOEZV2AX.js";
import "./chunk-NEC4XMZM.js";
import {
  CommonModule,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-5Z4ZU7MS.js";

// src/app/pages/person/person-preview.component.ts
var _c0 = (a0) => ["/person", a0, "edit"];
var _c1 = (a0) => ({ person: a0 });
function PersonPreviewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h2", 3);
    \u0275\u0275text(4, "Person Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6, "Read-only overview of the selected person record.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5)(8, "a", 6);
    \u0275\u0275element(9, "i", 7);
    \u0275\u0275text(10, "Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 8);
    \u0275\u0275element(12, "i", 9);
    \u0275\u0275text(13, "Edit ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13);
    \u0275\u0275element(18, "app-image-preview", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 15)(20, "h3", 3);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 16);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 17)(25, "div", 18)(26, "div", 19);
    \u0275\u0275text(27, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 18)(31, "div", 19);
    \u0275\u0275text(32, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 18)(36, "div", 19);
    \u0275\u0275text(37, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 18)(41, "div", 19);
    \u0275\u0275text(42, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(45, "div", 20)(46, "div", 21)(47, "div", 22)(48, "div", 11)(49, "h5", 23);
    \u0275\u0275text(50, "Basic Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 24)(52, "div", 19);
    \u0275\u0275text(53, "National ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 24)(57, "div", 19);
    \u0275\u0275text(58, "Blood Group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 24)(62, "div", 19);
    \u0275\u0275text(63, "Email Verified");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div");
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div")(67, "div", 19);
    \u0275\u0275text(68, "Mobile Verified");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div");
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(71, "div", 21)(72, "div", 22)(73, "div", 11)(74, "h5", 23);
    \u0275\u0275text(75, "Family Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 24)(77, "div", 19);
    \u0275\u0275text(78, "Father");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div");
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 24)(82, "div", 19);
    \u0275\u0275text(83, "Father Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div");
    \u0275\u0275text(85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 24)(87, "div", 19);
    \u0275\u0275text(88, "Mother");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "div");
    \u0275\u0275text(90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 24)(92, "div", 19);
    \u0275\u0275text(93, "Mother Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div");
    \u0275\u0275text(95);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(96, "div", 21)(97, "div", 22)(98, "div", 11)(99, "h5", 23);
    \u0275\u0275text(100, "Emergency Contact Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 24)(102, "div", 19);
    \u0275\u0275text(103, "Emergency Contact Person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div");
    \u0275\u0275text(105);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "div", 24)(107, "div", 19);
    \u0275\u0275text(108, "Emergency Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "div");
    \u0275\u0275text(110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "div")(112, "div", 19);
    \u0275\u0275text(113, "Relation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "div");
    \u0275\u0275text(115);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(116, "div", 21)(117, "div", 22)(118, "div", 11)(119, "h5", 23);
    \u0275\u0275text(120, "Education Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "div", 24)(122, "div", 19);
    \u0275\u0275text(123, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "div");
    \u0275\u0275text(125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(126, "div", 24)(127, "div", 19);
    \u0275\u0275text(128, "Institution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "div");
    \u0275\u0275text(130);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(131, "div")(132, "div", 19);
    \u0275\u0275text(133, "Passing Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "div");
    \u0275\u0275text(135);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(136, "div", 21)(137, "div", 22)(138, "div", 11)(139, "h5", 23);
    \u0275\u0275text(140, "Address Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "div", 24)(142, "div", 19);
    \u0275\u0275text(143, "Current Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "div");
    \u0275\u0275text(145);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(146, "div", 24)(147, "div", 19);
    \u0275\u0275text(148, "Current Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "div");
    \u0275\u0275text(150);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(151, "div", 24)(152, "div", 19);
    \u0275\u0275text(153, "Permanent Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "div");
    \u0275\u0275text(155);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(156, "div")(157, "div", 19);
    \u0275\u0275text(158, "Permanent Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "div");
    \u0275\u0275text(160);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const p_r1 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(33, _c0, p_r1.id))("state", \u0275\u0275pureFunction1(35, _c1, p_r1));
    \u0275\u0275advance(7);
    \u0275\u0275property("src", ctx_r1.photoUrl)("subtitle", (p_r1.firstName || "-") + " " + (p_r1.lastName || ""))("width", 140)("height", 140)("previewOnClick", true)("disabled", ctx_r1.photoUrl === "assets/default-avatar.svg");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", p_r1.firstName || "-", " ", p_r1.lastName || "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.username || "-");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(p_r1.email || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r1.mobileNumber || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r1.gender || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r1.dateOfBirth || "-");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(p_r1.nationalId || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r1.bloodGroup || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r1.emailVerified ? "Yes" : "No");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r1.mobileVerified ? "Yes" : "No");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(p_r1.fatherName || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r1.fatherMobileNumber || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r1.motherName || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r1.motherMobileNumber || "-");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(p_r1.emergencyContactPerson || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r1.emergencyContactNumber || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r1.emergencyContactPersonRelation || "-");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(p_r1.educationLevel || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r1.institutionName || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r1.passingYear || "-");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(p_r1.currentAddress || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.currentLocationLabel);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r1.permanentAddress || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.permanentLocationLabel);
  }
}
var PersonPreviewComponent = class _PersonPreviewComponent {
  route;
  router;
  apiService;
  gisService;
  person;
  photoUrl = "assets/default-avatar.svg";
  currentLocationLabel = "-";
  permanentLocationLabel = "-";
  objectUrl;
  constructor(route, router, apiService, gisService) {
    this.route = route;
    this.router = router;
    this.apiService = apiService;
    this.gisService = gisService;
  }
  ngOnInit() {
    const routeId = this.route.snapshot.paramMap.get("id");
    const person = history.state?.person;
    if (!routeId || !person?.id || person.id.toString() !== routeId) {
      this.router.navigate(["/person"]);
      return;
    }
    this.person = person;
    this.loadPhoto(person.id);
    this.loadLocationLabels(person);
  }
  ngOnDestroy() {
    if (this.objectUrl) {
      URL.revokeObjectURL(this.objectUrl);
    }
  }
  loadPhoto(personId) {
    this.apiService.fetchImageUrl(ApiEndpoints.PERSON_PHOTO, { ownerId: personId }).subscribe({
      next: (imageUrl) => {
        if (this.objectUrl) {
          URL.revokeObjectURL(this.objectUrl);
        }
        this.objectUrl = imageUrl;
        this.photoUrl = this.objectUrl;
      },
      error: () => {
        this.photoUrl = "assets/default-avatar.svg";
      }
    });
  }
  loadLocationLabels(person) {
    this.loadLocationLabel(person.currentLocationId, person.currentLocationType, "current");
    this.loadLocationLabel(person.permanentLocationId, person.permanentLocationType, "permanent");
  }
  loadLocationLabel(locationId, gisCode, type) {
    if (!locationId || !gisCode) {
      return;
    }
    this.gisService.getLocationById(locationId, gisCode).subscribe({
      next: (location) => {
        const label = location?.detailLocation || "-";
        if (type === "current") {
          this.currentLocationLabel = label;
        } else {
          this.permanentLocationLabel = label;
        }
      },
      error: () => {
        if (type === "current") {
          this.currentLocationLabel = "-";
        } else {
          this.permanentLocationLabel = "-";
        }
      }
    });
  }
  static \u0275fac = function PersonPreviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PersonPreviewComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(GisService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PersonPreviewComponent, selectors: [["app-person-preview"]], decls: 1, vars: 1, consts: [["class", "container mt-4", 4, "ngIf"], [1, "container", "mt-4"], [1, "d-flex", "flex-column", "flex-md-row", "align-items-md-center", "justify-content-between", "gap-3", "mb-4"], [1, "mb-1"], [1, "text-muted", "mb-0"], [1, "d-flex", "gap-2"], ["routerLink", "/person", 1, "btn", "btn-outline-secondary"], [1, "fa", "fa-arrow-left", "me-2"], [1, "btn", "btn-primary", 3, "routerLink", "state"], [1, "fa", "fa-edit", "me-2"], [1, "card", "shadow-sm", "border-0", "mb-4"], [1, "card-body"], [1, "row", "align-items-center", "g-4"], [1, "col-md-3", "text-center"], ["alt", "Person photo", "title", "Person Photo", "hint", "Click photo to view full image", "thumbnailClass", "rounded-circle shadow-sm object-fit-cover", "imageClass", "img-fluid rounded-4 shadow-sm", 3, "src", "subtitle", "width", "height", "previewOnClick", "disabled"], [1, "col-md-9"], [1, "text-muted", "mb-3"], [1, "row", "g-3"], [1, "col-md-6"], [1, "small", "text-muted"], [1, "row", "g-4"], [1, "col-lg-6"], [1, "card", "shadow-sm", "h-100"], [1, "border-bottom", "pb-2", "mb-3"], [1, "mb-3"]], template: function PersonPreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, PersonPreviewComponent_div_0_Template, 161, 37, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.person);
    }
  }, dependencies: [CommonModule, NgIf, RouterLink, ImagePreviewComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonPreviewComponent, [{
    type: Component,
    args: [{ selector: "app-person-preview", standalone: true, imports: [CommonModule, RouterLink, ImagePreviewComponent], template: `<div class="container mt-4" *ngIf="person as p">
    <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-4">
        <div>
            <h2 class="mb-1">Person Preview</h2>
            <p class="text-muted mb-0">Read-only overview of the selected person record.</p>
        </div>

        <div class="d-flex gap-2">
            <a class="btn btn-outline-secondary" routerLink="/person">
                <i class="fa fa-arrow-left me-2"></i>Back
            </a>
            <a class="btn btn-primary" [routerLink]="['/person', p.id, 'edit']" [state]="{ person: p }">
                <i class="fa fa-edit me-2"></i>Edit
            </a>
        </div>
    </div>

    <div class="card shadow-sm border-0 mb-4">
        <div class="card-body">
            <div class="row align-items-center g-4">
                <div class="col-md-3 text-center">
                    <app-image-preview
                            [src]="photoUrl"
                            alt="Person photo"
                            title="Person Photo"
                            [subtitle]="(p.firstName || '-') + ' ' + (p.lastName || '')"
                            hint="Click photo to view full image"
                            thumbnailClass="rounded-circle shadow-sm object-fit-cover"
                            [width]="140"
                            [height]="140"
                            imageClass="img-fluid rounded-4 shadow-sm"
                            [previewOnClick]="true"
                            [disabled]="photoUrl === 'assets/default-avatar.svg'">
                    </app-image-preview>
                </div>
                <div class="col-md-9">
                    <h3 class="mb-1">{{ p.firstName || '-' }} {{ p.lastName || '' }}</h3>
                    <div class="text-muted mb-3">{{ p.username || '-' }}</div>
                    <div class="row g-3">
                        <div class="col-md-6">
                            <div class="small text-muted">Email</div>
                            <div>{{ p.email || '-' }}</div>
                        </div>
                        <div class="col-md-6">
                            <div class="small text-muted">Mobile</div>
                            <div>{{ p.mobileNumber || '-' }}</div>
                        </div>
                        <div class="col-md-6">
                            <div class="small text-muted">Gender</div>
                            <div>{{ p.gender || '-' }}</div>
                        </div>
                        <div class="col-md-6">
                            <div class="small text-muted">Date of Birth</div>
                            <div>{{ p.dateOfBirth || '-' }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row g-4">
        <div class="col-lg-6">
            <div class="card shadow-sm h-100">
                <div class="card-body">
                    <h5 class="border-bottom pb-2 mb-3">Basic Information</h5>
                    <div class="mb-3">
                        <div class="small text-muted">National ID</div>
                        <div>{{ p.nationalId || '-' }}</div>
                    </div>
                    <div class="mb-3">
                        <div class="small text-muted">Blood Group</div>
                        <div>{{ p.bloodGroup || '-' }}</div>
                    </div>
                    <div class="mb-3">
                        <div class="small text-muted">Email Verified</div>
                        <div>{{ p.emailVerified ? 'Yes' : 'No' }}</div>
                    </div>
                    <div>
                        <div class="small text-muted">Mobile Verified</div>
                        <div>{{ p.mobileVerified ? 'Yes' : 'No' }}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card shadow-sm h-100">
                <div class="card-body">
                    <h5 class="border-bottom pb-2 mb-3">Family Information</h5>
                    <div class="mb-3">
                        <div class="small text-muted">Father</div>
                        <div>{{ p.fatherName || '-' }}</div>
                    </div>
                    <div class="mb-3">
                        <div class="small text-muted">Father Mobile</div>
                        <div>{{ p.fatherMobileNumber || '-' }}</div>
                    </div>
                    <div class="mb-3">
                        <div class="small text-muted">Mother</div>
                        <div>{{ p.motherName || '-' }}</div>
                    </div>
                    <div class="mb-3">
                        <div class="small text-muted">Mother Mobile</div>
                        <div>{{ p.motherMobileNumber || '-' }}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card shadow-sm h-100">
                <div class="card-body">
                    <h5 class="border-bottom pb-2 mb-3">Emergency Contact Information</h5>
                    <div class="mb-3">
                        <div class="small text-muted">Emergency Contact Person</div>
                        <div>{{ p.emergencyContactPerson || '-' }}</div>
                    </div>
                    <div class="mb-3">
                        <div class="small text-muted">Emergency Contact</div>
                        <div>{{ p.emergencyContactNumber || '-' }}</div>
                    </div>
                    <div>
                        <div class="small text-muted">Relation</div>
                        <div>{{ p.emergencyContactPersonRelation || '-' }}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card shadow-sm h-100">
                <div class="card-body">
                    <h5 class="border-bottom pb-2 mb-3">Education Information</h5>
                    <div class="mb-3">
                        <div class="small text-muted">Level</div>
                        <div>{{ p.educationLevel || '-' }}</div>
                    </div>
                    <div class="mb-3">
                        <div class="small text-muted">Institution</div>
                        <div>{{ p.institutionName || '-' }}</div>
                    </div>
                    <div>
                        <div class="small text-muted">Passing Year</div>
                        <div>{{ p.passingYear || '-' }}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card shadow-sm h-100">
                <div class="card-body">
                    <h5 class="border-bottom pb-2 mb-3">Address Information</h5>
                    <div class="mb-3">
                        <div class="small text-muted">Current Address</div>
                        <div>{{ p.currentAddress || '-' }}</div>
                    </div>
                    <div class="mb-3">
                        <div class="small text-muted">Current Location</div>
                        <div>{{ currentLocationLabel }}</div>
                    </div>
                    <div class="mb-3">
                        <div class="small text-muted">Permanent Address</div>
                        <div>{{ p.permanentAddress || '-' }}</div>
                    </div>
                    <div>
                        <div class="small text-muted">Permanent Location</div>
                        <div>{{ permanentLocationLabel }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
` }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: ApiService }, { type: GisService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PersonPreviewComponent, { className: "PersonPreviewComponent", filePath: "src/app/pages/person/person-preview.component.ts", lineNumber: 16 });
})();
export {
  PersonPreviewComponent
};
//# sourceMappingURL=chunk-SR6FAPS4.js.map
