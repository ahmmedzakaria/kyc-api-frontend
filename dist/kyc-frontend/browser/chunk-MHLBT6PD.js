import {
  ApiEndpoints,
  ApiService
} from "./chunk-RP4NV6HK.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-5Z4ZU7MS.js";

// src/app/core/services/gis.service.ts
var GisService = class _GisService {
  apiService;
  constructor(apiService) {
    this.apiService = apiService;
  }
  searchLocation(searchText, page = 0, size = 10) {
    return this.apiService.post(ApiEndpoints.GIS_SEARCH, { page, size, searchText });
  }
  getLocationById(id, type) {
    return this.apiService.post(ApiEndpoints.GIS_GET_BY_ID, { id, type });
  }
  static \u0275fac = function GisService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GisService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GisService, factory: _GisService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GisService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ApiService }], null);
})();

export {
  GisService
};
//# sourceMappingURL=chunk-MHLBT6PD.js.map
