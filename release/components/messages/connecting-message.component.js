"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectingMessageComponent = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var _c0 = ["*"];
var ConnectingMessageComponent = /** @class */ (function () {
    function ConnectingMessageComponent() {
    }
    ConnectingMessageComponent.ɵfac = function ConnectingMessageComponent_Factory(t) { return new (t || ConnectingMessageComponent)(); };
    ConnectingMessageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ConnectingMessageComponent, selectors: [["ngx-remote-desktop-connecting-message"]], hostAttrs: [1, "ngx-remote-desktop-message"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function ConnectingMessageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return ConnectingMessageComponent;
}());
exports.ConnectingMessageComponent = ConnectingMessageComponent;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConnectingMessageComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ngx-remote-desktop-connecting-message',
                host: { class: 'ngx-remote-desktop-message' },
                template: "\n        <ng-content></ng-content>\n    "
            }]
    }], null, null); })();
//# sourceMappingURL=connecting-message.component.js.map