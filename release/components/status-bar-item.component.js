"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusBarItemComponent = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var _c0 = ["*"];
/**
 * Status bar item component
 */
var StatusBarItemComponent = /** @class */ (function () {
    function StatusBarItemComponent() {
    }
    StatusBarItemComponent.ɵfac = function StatusBarItemComponent_Factory(t) { return new (t || StatusBarItemComponent)(); };
    StatusBarItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StatusBarItemComponent, selectors: [["ngx-remote-desktop-status-bar-item"]], hostAttrs: [1, "ngx-remote-desktop-status-bar-item"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function StatusBarItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return StatusBarItemComponent;
}());
exports.StatusBarItemComponent = StatusBarItemComponent;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatusBarItemComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ngx-remote-desktop-status-bar-item',
                template: "<ng-content></ng-content>",
                host: {
                    class: 'ngx-remote-desktop-status-bar-item'
                }
            }]
    }], null, null); })();
//# sourceMappingURL=status-bar-item.component.js.map