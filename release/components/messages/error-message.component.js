"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessageComponent = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var _c0 = ["*"];
var ErrorMessageComponent = /** @class */ (function () {
    function ErrorMessageComponent() {
    }
    ErrorMessageComponent.ɵfac = function ErrorMessageComponent_Factory(t) { return new (t || ErrorMessageComponent)(); };
    ErrorMessageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ErrorMessageComponent, selectors: [["ngx-remote-desktop-error-message"]], hostAttrs: [1, "ngx-remote-desktop-message"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function ErrorMessageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return ErrorMessageComponent;
}());
exports.ErrorMessageComponent = ErrorMessageComponent;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ErrorMessageComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ngx-remote-desktop-error-message',
                host: { class: 'ngx-remote-desktop-message' },
                template: "\n        <ng-content></ng-content>\n    "
            }]
    }], null, null); })();
//# sourceMappingURL=error-message.component.js.map