"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComponent = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var i1 = require("@angular/common");
var _c0 = ["*"];
/**
 * Message component for showing error or success messages for when the connection
 * state changes
 */
var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
        /**
         * Message type. Can be 'success' or 'error'
         */
        this.type = 'success';
    }
    MessageComponent.ɵfac = function MessageComponent_Factory(t) { return new (t || MessageComponent)(); };
    MessageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MessageComponent, selectors: [["ngx-remote-desktop-message"]], inputs: { title: "title", message: "message", type: "type" }, ngContentSelectors: _c0, decls: 8, vars: 8, consts: [[1, "ngx-remote-desktop-message"], [1, "ngx-remote-desktop-message-title"], [1, "ngx-remote-desktop-message-body"]], template: function MessageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "uppercase");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 2);
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵprojection(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("ngx-remote-desktop-message-title-success", ctx.type === "success")("ngx-remote-desktop-message-title-error", ctx.type === "error");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 6, ctx.title), " ");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.message);
        } }, pipes: [i1.UpperCasePipe], encapsulation: 2 });
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessageComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ngx-remote-desktop-message',
                template: "\n        <div class=\"ngx-remote-desktop-message\">\n            <div class=\"ngx-remote-desktop-message-title\"\n                [class.ngx-remote-desktop-message-title-success]=\"type === 'success'\"\n                [class.ngx-remote-desktop-message-title-error]=\"type === 'error'\">\n            {{ title | uppercase }}\n            </div>\n            <div class=\"ngx-remote-desktop-message-body\">\n                <p>{{ message }}</p>\n                <ng-content></ng-content>\n            </div>\n        </div>\n    "
            }]
    }], null, { title: [{
            type: core_1.Input
        }], message: [{
            type: core_1.Input
        }], type: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=message.component.js.map