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

// src/app/core/services/person.service.ts
var PersonService = class _PersonService {
  api;
  constructor(api) {
    this.api = api;
  }
  createPerson(formData) {
    return this.api.post(ApiEndpoints.PERSON_CREATE, formData);
  }
  updatePerson(formData) {
    return this.api.post(ApiEndpoints.PERSON_UPDATE, formData);
  }
  searchPersons(searchText = "", page = 0, size = 10) {
    const body = { searchText, page, size };
    return this.api.post(ApiEndpoints.PERSON_SEARCH, body);
  }
  deletePerson(id) {
    return this.api.post(ApiEndpoints.PERSON_DELETE, { id });
  }
  static \u0275fac = function PersonService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PersonService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PersonService, factory: _PersonService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ApiService }], null);
})();

export {
  PersonService
};
//# sourceMappingURL=chunk-6YRKYNHE.js.map
