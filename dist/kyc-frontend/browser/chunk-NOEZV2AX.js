import {
  CommonModule,
  Component,
  Input,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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

// src/app/shared/components/image-preview/image-preview.component.ts
function ImagePreviewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.hint);
  }
}
function ImagePreviewComponent_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subtitle);
  }
}
function ImagePreviewComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275listener("click", function ImagePreviewComponent_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeViewer());
    });
    \u0275\u0275elementStart(1, "div", 6);
    \u0275\u0275listener("click", function ImagePreviewComponent_div_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 7)(3, "div")(4, "div", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ImagePreviewComponent_div_4_div_6_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 10);
    \u0275\u0275listener("click", function ImagePreviewComponent_div_4_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeViewer());
    });
    \u0275\u0275element(8, "i", 11);
    \u0275\u0275text(9, "Close ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 12)(11, "img", 13);
    \u0275\u0275listener("error", function ImagePreviewComponent_div_4_Template_img_error_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onImageError());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.subtitle);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r0.imageClass || "img-fluid rounded-4 shadow-sm");
    \u0275\u0275property("src", ctx_r0.currentSrc, \u0275\u0275sanitizeUrl)("alt", ctx_r0.alt);
  }
}
var ImagePreviewComponent = class _ImagePreviewComponent {
  src = "";
  fallbackSrc = "assets/default-avatar.svg";
  alt = "Preview image";
  title = "Image Preview";
  subtitle = "";
  hint = "Click image to view full size";
  thumbnailClass = "";
  imageClass = "";
  width = null;
  height = null;
  previewOnClick = true;
  disabled = false;
  currentSrc = this.fallbackSrc;
  isViewerOpen = false;
  ngOnChanges() {
    this.currentSrc = this.src || this.fallbackSrc;
  }
  onImageError(event) {
    this.currentSrc = this.fallbackSrc;
    if (event) {
      event.target.src = this.fallbackSrc;
    }
  }
  openViewer() {
    if (!this.previewOnClick || this.disabled || this.currentSrc === this.fallbackSrc) {
      return;
    }
    this.isViewerOpen = true;
  }
  closeViewer() {
    this.isViewerOpen = false;
  }
  static \u0275fac = function ImagePreviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImagePreviewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImagePreviewComponent, selectors: [["app-image-preview"]], inputs: { src: "src", fallbackSrc: "fallbackSrc", alt: "alt", title: "title", subtitle: "subtitle", hint: "hint", thumbnailClass: "thumbnailClass", imageClass: "imageClass", width: "width", height: "height", previewOnClick: "previewOnClick", disabled: "disabled" }, features: [\u0275\u0275NgOnChangesFeature], decls: 5, vars: 12, consts: [["type", "button", 1, "btn", "p-0", "border-0", "bg-transparent", 3, "click", "disabled"], [3, "error", "src", "alt"], ["class", "small text-muted mt-2", 4, "ngIf"], ["class", "position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3", "style", "background: rgba(15, 23, 42, 0.82); z-index: 1055;", 3, "click", 4, "ngIf"], [1, "small", "text-muted", "mt-2"], [1, "position-fixed", "top-0", "start-0", "w-100", "h-100", "d-flex", "align-items-center", "justify-content-center", "p-3", 2, "background", "rgba(15, 23, 42, 0.82)", "z-index", "1055", 3, "click"], [1, "bg-white", "rounded-4", "shadow-lg", "overflow-hidden", 2, "max-width", "920px", "width", "100%", 3, "click"], [1, "d-flex", "align-items-center", "justify-content-between", "px-4", "py-3", "border-bottom"], [1, "fw-semibold"], ["class", "small text-muted", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "fa", "fa-times", "me-1"], [1, "p-3", "p-md-4", "bg-light", "d-flex", "align-items-center", "justify-content-center"], [2, "max-height", "78vh", "width", "auto", 3, "error", "src", "alt"], [1, "small", "text-muted"]], template: function ImagePreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "button", 0);
      \u0275\u0275listener("click", function ImagePreviewComponent_Template_button_click_1_listener() {
        return ctx.openViewer();
      });
      \u0275\u0275elementStart(2, "img", 1);
      \u0275\u0275listener("error", function ImagePreviewComponent_Template_img_error_2_listener($event) {
        return ctx.onImageError($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(3, ImagePreviewComponent_div_3_Template, 2, 1, "div", 2)(4, ImagePreviewComponent_div_4_Template, 12, 6, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("rounded-circle", ctx.thumbnailClass.includes("rounded-circle"));
      \u0275\u0275property("disabled", ctx.disabled);
      \u0275\u0275attribute("aria-label", ctx.title);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.thumbnailClass);
      \u0275\u0275property("src", ctx.currentSrc, \u0275\u0275sanitizeUrl)("alt", ctx.alt);
      \u0275\u0275attribute("width", ctx.width)("height", ctx.height);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.previewOnClick && ctx.hint);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isViewerOpen);
    }
  }, dependencies: [CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImagePreviewComponent, [{
    type: Component,
    args: [{ selector: "app-image-preview", standalone: true, imports: [CommonModule], template: `<div>
    <button
            type="button"
            class="btn p-0 border-0 bg-transparent"
            [class.rounded-circle]="thumbnailClass.includes('rounded-circle')"
            [disabled]="disabled"
            (click)="openViewer()"
            [attr.aria-label]="title">
        <img
                [src]="currentSrc"
                [alt]="alt"
                [class]="thumbnailClass"
                [attr.width]="width"
                [attr.height]="height"
                (error)="onImageError($event)" />
    </button>

    <div *ngIf="previewOnClick && hint" class="small text-muted mt-2">{{ hint }}</div>

    <div
            *ngIf="isViewerOpen"
            class="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
            style="background: rgba(15, 23, 42, 0.82); z-index: 1055;"
            (click)="closeViewer()">
        <div
                class="bg-white rounded-4 shadow-lg overflow-hidden"
                style="max-width: 920px; width: 100%;"
                (click)="$event.stopPropagation()">
            <div class="d-flex align-items-center justify-content-between px-4 py-3 border-bottom">
                <div>
                    <div class="fw-semibold">{{ title }}</div>
                    <div *ngIf="subtitle" class="small text-muted">{{ subtitle }}</div>
                </div>
                <button type="button" class="btn btn-outline-secondary btn-sm" (click)="closeViewer()">
                    <i class="fa fa-times me-1"></i>Close
                </button>
            </div>
            <div class="p-3 p-md-4 bg-light d-flex align-items-center justify-content-center">
                <img
                        [src]="currentSrc"
                        [alt]="alt"
                        [class]="imageClass || 'img-fluid rounded-4 shadow-sm'"
                        style="max-height: 78vh; width: auto;"
                        (error)="onImageError()" />
            </div>
        </div>
    </div>
</div>
` }]
  }], null, { src: [{
    type: Input
  }], fallbackSrc: [{
    type: Input
  }], alt: [{
    type: Input
  }], title: [{
    type: Input
  }], subtitle: [{
    type: Input
  }], hint: [{
    type: Input
  }], thumbnailClass: [{
    type: Input
  }], imageClass: [{
    type: Input
  }], width: [{
    type: Input
  }], height: [{
    type: Input
  }], previewOnClick: [{
    type: Input
  }], disabled: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImagePreviewComponent, { className: "ImagePreviewComponent", filePath: "src/app/shared/components/image-preview/image-preview.component.ts", lineNumber: 10 });
})();

export {
  ImagePreviewComponent
};
//# sourceMappingURL=chunk-NOEZV2AX.js.map
