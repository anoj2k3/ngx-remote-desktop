"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolbarItemComponent = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var _c0 = ["*"];
/**
 * Toolbar item inside the toolbar
 */
var ToolbarItemComponent = /** @class */ (function () {
    function ToolbarItemComponent() {
    }
    ToolbarItemComponent.ɵfac = function ToolbarItemComponent_Factory(t) { return new (t || ToolbarItemComponent)(); };
    ToolbarItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToolbarItemComponent, selectors: [["ngx-remote-desktop-toolbar-item"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "ngx-remote-desktop-toolbar-item"]], template: function ToolbarItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "li", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
    return ToolbarItemComponent;
}());
exports.ToolbarItemComponent = ToolbarItemComponent;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolbarItemComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ngx-remote-desktop-toolbar-item',
                template: "<li class=\"ngx-remote-desktop-toolbar-item\"><ng-content></ng-content></li>"
            }]
    }], null, null); })();
//# sourceMappingURL=toolbar-item.component.js.map