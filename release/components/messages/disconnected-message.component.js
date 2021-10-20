"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisconnectedMessageComponent = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var _c0 = ["*"];
var DisconnectedMessageComponent = /** @class */ (function () {
    function DisconnectedMessageComponent() {
    }
    DisconnectedMessageComponent.ɵfac = function DisconnectedMessageComponent_Factory(t) { return new (t || DisconnectedMessageComponent)(); };
    DisconnectedMessageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DisconnectedMessageComponent, selectors: [["ngx-remote-desktop-disconnected-message"]], hostAttrs: [1, "ngx-remote-desktop-message"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function DisconnectedMessageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return DisconnectedMessageComponent;
}());
exports.DisconnectedMessageComponent = DisconnectedMessageComponent;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DisconnectedMessageComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ngx-remote-desktop-disconnected-message',
                host: { class: 'ngx-remote-desktop-message' },
                template: "\n        <ng-content></ng-content>\n    "
            }]
    }], null, null); })();
//# sourceMappingURL=disconnected-message.component.js.map