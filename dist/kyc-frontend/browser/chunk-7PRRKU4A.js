import {
  ApiEndpoints,
  ApiService,
  Router
} from "./chunk-RP4NV6HK.js";
import {
  HttpClient
} from "./chunk-NEC4XMZM.js";
import {
  BehaviorSubject,
  Injectable,
  __spreadProps,
  __spreadValues,
  computed,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-5Z4ZU7MS.js";

// src/app/core/services/layout.service.ts
var LayoutService = class _LayoutService {
  _layout = signal({
    showSidebar: false,
    showTopbar: false,
    collapsed: false
  });
  _theme = signal("light");
  _layoutType = signal("default");
  layout = computed(() => this._layout());
  theme = computed(() => this._theme());
  layoutType = computed(() => this._layoutType());
  toggleSidebar() {
    this._layout.update((cfg) => __spreadProps(__spreadValues({}, cfg), { collapsed: !cfg.collapsed }));
  }
  setTheme(theme) {
    this._theme.set(theme);
    document.body.dataset.bsTheme = theme;
  }
  setLayoutType(type) {
    this._layoutType.set(type);
  }
  /** 🧭 Called after login */
  setAuthenticatedLayout() {
    this._layout.set({
      showSidebar: true,
      showTopbar: true,
      collapsed: false
    });
    console.log("Authenticated Layout", this._layout());
  }
  /** 🚪 Called after logout */
  setPublicLayout() {
    this._layout.set({
      showSidebar: false,
      showTopbar: false,
      collapsed: false
    });
  }
  static \u0275fac = function LayoutService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LayoutService, factory: _LayoutService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// node_modules/jwt-decode/build/esm/index.js
var InvalidTokenError = class extends Error {
};
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, (m, p) => {
    let code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = "0" + code;
    }
    return "%" + code;
  }));
}
function base64UrlDecode(str) {
  let output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
}
function jwtDecode(token, options) {
  if (typeof token !== "string") {
    throw new InvalidTokenError("Invalid token specified: must be a string");
  }
  options || (options = {});
  const pos = options.header === true ? 0 : 1;
  const part = token.split(".")[pos];
  if (typeof part !== "string") {
    throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
  }
  let decoded;
  try {
    decoded = base64UrlDecode(part);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
  }
  try {
    return JSON.parse(decoded);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
  }
}

// src/app/core/services/auth/auth.service.ts
var AuthService = class _AuthService {
  http;
  apiService;
  layoutService;
  router;
  currentUserSubject = new BehaviorSubject(null);
  currentUser$ = this.currentUserSubject.asObservable();
  logoutTimerId = null;
  constructor(http, apiService, layoutService, router) {
    this.http = http;
    this.apiService = apiService;
    this.layoutService = layoutService;
    this.router = router;
    const token = this.getToken();
    if (token) {
      if (this.isTokenExpired(token)) {
        this.logout(false);
      } else {
        this.decodeAndSetUser(token);
      }
    }
  }
  login(username, password) {
    localStorage.removeItem("token");
    return this.apiService.post(ApiEndpoints.KYC_LOGIN, { username, password }).pipe(tap((res) => {
      if (res?.accessToken) {
        localStorage.setItem("token", res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken || "");
        this.decodeAndSetUser(res.accessToken);
      }
    }));
  }
  logout(redirectToLogin = true) {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    this.clearLogoutTimer();
    this.currentUserSubject.next(null);
    this.layoutService.setPublicLayout();
    if (redirectToLogin) {
      this.router.navigate(["/login"]);
    }
  }
  getToken() {
    return localStorage.getItem("token");
  }
  decodeAndSetUser(token) {
    try {
      const decoded = jwtDecode(token);
      console.log("decoded", decoded);
      this.currentUserSubject.next(decoded);
      this.scheduleAutoLogout(decoded.exp);
    } catch (err) {
      console.error("JWT Decode failed", err);
      this.logout();
    }
  }
  isAuthenticated() {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    if (this.isTokenExpired(token)) {
      this.logout();
      return false;
    }
    return true;
  }
  handleSessionExpired() {
    this.logout();
  }
  hasRole(role) {
    return this.currentUserSubject.value?.roles?.includes(role) ?? false;
  }
  isTokenExpired(token) {
    try {
      const decoded = jwtDecode(token);
      return decoded.exp * 1e3 <= Date.now();
    } catch {
      return true;
    }
  }
  scheduleAutoLogout(expirationInSeconds) {
    this.clearLogoutTimer();
    const remainingMs = expirationInSeconds * 1e3 - Date.now();
    if (remainingMs <= 0) {
      this.logout();
      return;
    }
    this.logoutTimerId = setTimeout(() => {
      this.logout();
    }, remainingMs);
  }
  clearLogoutTimer() {
    if (this.logoutTimerId) {
      clearTimeout(this.logoutTimerId);
      this.logoutTimerId = null;
    }
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(ApiService), \u0275\u0275inject(LayoutService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: ApiService }, { type: LayoutService }, { type: Router }], null);
})();

export {
  LayoutService,
  AuthService
};
//# sourceMappingURL=chunk-7PRRKU4A.js.map
