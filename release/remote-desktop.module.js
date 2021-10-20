"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NgxRemoteDesktopModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var animations_1 = require("@angular/platform-browser/animations");
var components_1 = require("./components");
var i0 = require("@angular/core");
var NgxRemoteDesktopModule = /** @class */ (function () {
    function NgxRemoteDesktopModule() {
    }
    NgxRemoteDesktopModule.ɵfac = function NgxRemoteDesktopModule_Factory(t) { return new (t || NgxRemoteDesktopModule)(); };
    NgxRemoteDesktopModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxRemoteDesktopModule, bootstrap: [components_1.RemoteDesktopComponent] });
    NgxRemoteDesktopModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
                common_1.CommonModule,
                animations_1.BrowserAnimationsModule
            ]] });
    return NgxRemoteDesktopModule;
}());
exports.NgxRemoteDesktopModule = NgxRemoteDesktopModule;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxRemoteDesktopModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [
                    common_1.CommonModule,
                    animations_1.BrowserAnimationsModule
                ],
                declarations: [
                    components_1.RemoteDesktopComponent,
                    components_1.ToolbarItemComponent,
                    components_1.MessageComponent,
                    components_1.DisplayComponent,
                    components_1.ErrorMessageComponent,
                    components_1.DisconnectedMessageComponent,
                    components_1.ConnectingMessageComponent,
                    components_1.StatusBarComponent,
                    components_1.StatusBarItemComponent
                ],
                exports: [
                    components_1.RemoteDesktopComponent,
                    components_1.ToolbarItemComponent,
                    components_1.ErrorMessageComponent,
                    components_1.DisconnectedMessageComponent,
                    components_1.ConnectingMessageComponent,
                    components_1.StatusBarComponent,
                    components_1.StatusBarItemComponent
                ],
                entryComponents: [],
                bootstrap: [components_1.RemoteDesktopComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxRemoteDesktopModule, { declarations: [components_1.RemoteDesktopComponent,
        components_1.ToolbarItemComponent,
        components_1.MessageComponent,
        components_1.DisplayComponent,
        components_1.ErrorMessageComponent,
        components_1.DisconnectedMessageComponent,
        components_1.ConnectingMessageComponent,
        components_1.StatusBarComponent,
        components_1.StatusBarItemComponent], imports: [common_1.CommonModule,
        animations_1.BrowserAnimationsModule], exports: [components_1.RemoteDesktopComponent,
        components_1.ToolbarItemComponent,
        components_1.ErrorMessageComponent,
        components_1.DisconnectedMessageComponent,
        components_1.ConnectingMessageComponent,
        components_1.StatusBarComponent,
        components_1.StatusBarItemComponent] }); })();
//# sourceMappingURL=remote-desktop.module.js.map