"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusBarComponent = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var _c0 = [[["ngx-remote-desktop-status-bar-item"]]];
var _c1 = ["ngx-remote-desktop-status-bar-item"];
/**
 * Status bar component
 */
var StatusBarComponent = /** @class */ (function () {
    function StatusBarComponent() {
    }
    StatusBarComponent.ɵfac = function StatusBarComponent_Factory(t) { return new (t || StatusBarComponent)(); };
    StatusBarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StatusBarComponent, selectors: [["ngx-remote-desktop-status-bar"]], hostAttrs: [1, "ngx-remote-desktop-status-bar"], ngContentSelectors: _c1, decls: 1, vars: 0, template: function StatusBarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return StatusBarComponent;
}());
exports.StatusBarComponent = StatusBarComponent;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatusBarComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ngx-remote-desktop-status-bar',
                template: "<ng-content select=\"ngx-remote-desktop-status-bar-item\"></ng-content>",
                host: {
                    class: 'ngx-remote-desktop-status-bar'
                }
            }]
    }], null, null); })();
//# sourceMappingURL=status-bar.component.js.map