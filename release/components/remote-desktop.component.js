"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteDesktopComponent = void 0;
var animations_1 = require("@angular/animations");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var screenfull = require("screenfull");
var services_1 = require("../services");
var connecting_message_component_1 = require("./messages/connecting-message.component");
var disconnected_message_component_1 = require("./messages/disconnected-message.component");
var error_message_component_1 = require("./messages/error-message.component");
var i0 = require("@angular/core");
var i1 = require("@angular/common");
var i2 = require("./message.component");
var i3 = require("./display.component");
var _c0 = ["container"];
var _c1 = ["toolbar"];
function RemoteDesktopComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 8);
    i0.ɵɵprojection(1, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ul", 8);
    i0.ɵɵprojection(3, 2);
    i0.ɵɵelementEnd();
} }
function RemoteDesktopComponent_nav_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nav", 9);
    i0.ɵɵelement(1, "template", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r1 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1);
} }
function RemoteDesktopComponent_nav_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nav", 11, 12);
    i0.ɵɵelement(2, "template", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext();
    var _r1 = i0.ɵɵreference(3);
    i0.ɵɵproperty("@toolbarAnimation", ctx_r4.toolbarVisible);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r1);
} }
function RemoteDesktopComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵprojection(1, 3);
    i0.ɵɵelementEnd();
} }
function RemoteDesktopComponent_div_7_ngx_remote_desktop_message_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-remote-desktop-message", 16);
} }
function RemoteDesktopComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RemoteDesktopComponent_div_7_div_1_Template, 2, 0, "div", 13);
    i0.ɵɵtemplate(2, RemoteDesktopComponent_div_7_ngx_remote_desktop_message_2_Template, 1, 0, "ngx-remote-desktop-message", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.connectingMessage);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r5.connectingMessage);
} }
function RemoteDesktopComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵprojection(1, 4);
    i0.ɵɵelementEnd();
} }
function RemoteDesktopComponent_div_9_ngx_remote_desktop_message_2_Template(rf, ctx) { if (rf & 1) {
    var _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-remote-desktop-message", 18);
    i0.ɵɵelementStart(1, "button", 19);
    i0.ɵɵlistener("click", function RemoteDesktopComponent_div_9_ngx_remote_desktop_message_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r15); var ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.manager.onReconnect.next(true); });
    i0.ɵɵtext(2, " Reconnect ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RemoteDesktopComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RemoteDesktopComponent_div_9_div_1_Template, 2, 0, "div", 13);
    i0.ɵɵtemplate(2, RemoteDesktopComponent_div_9_ngx_remote_desktop_message_2_Template, 3, 0, "ngx-remote-desktop-message", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.disconnectedMessage);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r6.disconnectedMessage);
} }
function RemoteDesktopComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵprojection(1, 5);
    i0.ɵɵelementEnd();
} }
function RemoteDesktopComponent_div_11_ngx_remote_desktop_message_2_Template(rf, ctx) { if (rf & 1) {
    var _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-remote-desktop-message", 21);
    i0.ɵɵelementStart(1, "button", 19);
    i0.ɵɵlistener("click", function RemoteDesktopComponent_div_11_ngx_remote_desktop_message_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r19); var ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.manager.onReconnect.next(true); });
    i0.ɵɵtext(2, " Connect ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RemoteDesktopComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RemoteDesktopComponent_div_11_div_1_Template, 2, 0, "div", 13);
    i0.ɵɵtemplate(2, RemoteDesktopComponent_div_11_ngx_remote_desktop_message_2_Template, 3, 0, "ngx-remote-desktop-message", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.errorMessage);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r7.errorMessage);
} }
function RemoteDesktopComponent_ngx_remote_desktop_display_13_Template(rf, ctx) { if (rf & 1) {
    var _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-remote-desktop-display", 22);
    i0.ɵɵlistener("onMouseMove", function RemoteDesktopComponent_ngx_remote_desktop_display_13_Template_ngx_remote_desktop_display_onMouseMove_0_listener($event) { i0.ɵɵrestoreView(_r21); var ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.handleDisplayMouseMove($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("manager", ctx_r8.manager);
} }
var _c2 = [[["ngx-remote-desktop-status-bar"]], [["ngx-remote-desktop-toolbar-item", "align", "left"]], [["ngx-remote-desktop-toolbar-item", "align", "right"]], [["ngx-remote-desktop-connecting-message"]], [["ngx-remote-desktop-disconnected-message"]], [["ngx-remote-desktop-error-message"]]];
var _c3 = ["ngx-remote-desktop-status-bar", "ngx-remote-desktop-toolbar-item[align=left]", "ngx-remote-desktop-toolbar-item[align=right]", "ngx-remote-desktop-connecting-message", "ngx-remote-desktop-disconnected-message", "ngx-remote-desktop-error-message"];
/**
 * The main component for displaying a remote desktop
 */
var RemoteDesktopComponent = /** @class */ (function () {
    function RemoteDesktopComponent() {
        /**
         * Guacamole has more states than the list below however for the component we are only interested
         * in managing four states.
         */
        this.states = {
            CONNECTING: 'CONNECTING',
            CONNECTED: 'CONNECTED',
            DISCONNECTED: 'DISCONNECTED',
            ERROR: 'ERROR'
        };
        /**
         * Manage the component state
         */
        this.state = new rxjs_1.BehaviorSubject(this.states.CONNECTING);
        /**
         * Subscriptions
         */
        this.subscriptions = [];
        /**
         * Hide or show the toolbar
         */
        this.toolbarVisible = true;
    }
    /**
     * Subscribe to the connection state  and full screen state when the component is initialised
     */
    RemoteDesktopComponent.prototype.ngOnInit = function () {
        this.bindSubscriptions();
    };
    /**
     * Remove all subscriptions when the component is destroyed
     */
    RemoteDesktopComponent.prototype.ngOnDestroy = function () {
        this.unbindSubscriptions();
    };
    /**
     * Bind the subscriptions
     */
    RemoteDesktopComponent.prototype.bindSubscriptions = function () {
        this.subscriptions.push(this.manager.onStateChange.subscribe(this.handleState.bind(this)));
        this.subscriptions.push(this.manager.onFullScreen.subscribe(this.handleFullScreen.bind(this)));
    };
    /**
     * Unbind the subscriptions
     */
    RemoteDesktopComponent.prototype.unbindSubscriptions = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    /**
     * Set the component state to the new guacamole state
     * @param newState
     */
    RemoteDesktopComponent.prototype.setState = function (newState) {
        this.state.next(newState);
    };
    /**
     * Receive the state from the desktop client and update this components state
     * @param newState - state received from the guacamole client
     */
    RemoteDesktopComponent.prototype.handleState = function (newState) {
        switch (newState) {
            case services_1.RemoteDesktopManager.STATE.CONNECTED:
                this.setState(this.states.CONNECTED);
                break;
            case services_1.RemoteDesktopManager.STATE.DISCONNECTED:
                this.exitFullScreen();
                this.setState(this.states.DISCONNECTED);
                break;
            case services_1.RemoteDesktopManager.STATE.CONNECTING:
            case services_1.RemoteDesktopManager.STATE.WAITING:
                this.setState(this.states.CONNECTING);
                break;
            case services_1.RemoteDesktopManager.STATE.CLIENT_ERROR:
            case services_1.RemoteDesktopManager.STATE.TUNNEL_ERROR:
                this.exitFullScreen();
                this.setState(this.states.ERROR);
                break;
        }
    };
    /**
     * Exit full screen and show the toolbar
     */
    RemoteDesktopComponent.prototype.exitFullScreen = function () {
        if (!screenfull.isFullscreen) {
            return;
        }
        var containerElement = this.container.nativeElement;
        screenfull.exit(containerElement);
    };
    /**
     * Enter full screen mode and auto hide the toolbar
     */
    RemoteDesktopComponent.prototype.enterFullScreen = function () {
        var _this = this;
        if (screenfull.isFullscreen) {
            return;
        }
        var containerElement = this.container.nativeElement;
        screenfull.request(containerElement);
        screenfull.on('change', function (change) {
            if (!screenfull.isFullscreen) {
                _this.manager.setFullScreen(false);
            }
            _this.handleToolbar();
        });
    };
    /**
     * Go in and out of full screen
     */
    RemoteDesktopComponent.prototype.handleFullScreen = function (newFullScreen) {
        if (newFullScreen) {
            this.enterFullScreen();
        }
        else {
            this.exitFullScreen();
        }
    };
    RemoteDesktopComponent.prototype.handleToolbar = function () {
        this.toolbarVisible = (this.manager.isFullScreen()) ? false : true;
    };
    /**
     * Handle the display mouse movement
     * @param event Mouse event
     */
    RemoteDesktopComponent.prototype.handleDisplayMouseMove = function ($event) {
        if (!this.manager.isFullScreen()) {
            return;
        }
        var toolbarWidth = this.toolbar.nativeElement.clientWidth;
        if ($event.x >= toolbarWidth) {
            this.toolbarVisible = false;
        }
    };
    RemoteDesktopComponent.prototype.onDocumentMousemove = function ($event) {
        if (!this.manager.isFullScreen()) {
            return;
        }
        var toolbarWidth = this.toolbar.nativeElement.clientWidth;
        var x = $event.x;
        if (x >= -1 && x <= 0) {
            this.toolbarVisible = true;
        }
        if (x >= toolbarWidth) {
            this.toolbarVisible = false;
        }
    };
    RemoteDesktopComponent.ɵfac = function RemoteDesktopComponent_Factory(t) { return new (t || RemoteDesktopComponent)(); };
    RemoteDesktopComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RemoteDesktopComponent, selectors: [["ngx-remote-desktop"]], contentQueries: function RemoteDesktopComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, connecting_message_component_1.ConnectingMessageComponent, 5);
            i0.ɵɵcontentQuery(dirIndex, disconnected_message_component_1.DisconnectedMessageComponent, 5);
            i0.ɵɵcontentQuery(dirIndex, error_message_component_1.ErrorMessageComponent, 5);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.connectingMessage = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.disconnectedMessage = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.errorMessage = _t.first);
        } }, viewQuery: function RemoteDesktopComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.toolbar = _t.first);
        } }, hostBindings: function RemoteDesktopComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mousemove", function RemoteDesktopComponent_mousemove_HostBindingHandler($event) { return ctx.onDocumentMousemove($event); }, false, i0.ɵɵresolveDocument);
        } }, inputs: { manager: "manager" }, ngContentSelectors: _c3, decls: 17, vars: 16, consts: [[1, "ngx-remote-desktop"], ["container", ""], ["toolbarItems", ""], ["class", "ngx-remote-desktop-toolbar", 4, "ngIf"], ["class", "ngx-remote-desktop-toolbar ngx-remote-desktop-toolbar-fullscreen", 4, "ngIf"], [1, "ngx-remote-desktop-container"], [4, "ngIf"], [3, "manager", "onMouseMove", 4, "ngIf"], [1, "ngx-remote-desktop-toolbar-items"], [1, "ngx-remote-desktop-toolbar"], [3, "ngTemplateOutlet"], [1, "ngx-remote-desktop-toolbar", "ngx-remote-desktop-toolbar-fullscreen"], ["toolbar", ""], ["class", "ngx-remote-desktop-message", 4, "ngIf"], ["title", "Connecting to remote desktop", "message", "Attempting to connect to the remote desktop. Waiting for response...", "type", "success", 4, "ngIf"], [1, "ngx-remote-desktop-message"], ["title", "Connecting to remote desktop", "message", "Attempting to connect to the remote desktop. Waiting for response...", "type", "success"], ["title", "Disconnected", "message", "The connection to the remote desktop terminated successfully", "type", "error", 4, "ngIf"], ["title", "Disconnected", "message", "The connection to the remote desktop terminated successfully", "type", "error"], [1, "ngx-remote-desktop-message-body-btn", 3, "click"], ["title", "Connection error", "message", "The remote desktop server is currently unreachable.", "type", "error", 4, "ngIf"], ["title", "Connection error", "message", "The remote desktop server is currently unreachable.", "type", "error"], [3, "manager", "onMouseMove"]], template: function RemoteDesktopComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c2);
            i0.ɵɵelementStart(0, "main", 0, 1);
            i0.ɵɵtemplate(2, RemoteDesktopComponent_ng_template_2_Template, 4, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, RemoteDesktopComponent_nav_4_Template, 2, 1, "nav", 3);
            i0.ɵɵtemplate(5, RemoteDesktopComponent_nav_5_Template, 3, 2, "nav", 4);
            i0.ɵɵelementStart(6, "section", 5);
            i0.ɵɵtemplate(7, RemoteDesktopComponent_div_7_Template, 3, 2, "div", 6);
            i0.ɵɵpipe(8, "async");
            i0.ɵɵtemplate(9, RemoteDesktopComponent_div_9_Template, 3, 2, "div", 6);
            i0.ɵɵpipe(10, "async");
            i0.ɵɵtemplate(11, RemoteDesktopComponent_div_11_Template, 3, 2, "div", 6);
            i0.ɵɵpipe(12, "async");
            i0.ɵɵtemplate(13, RemoteDesktopComponent_ngx_remote_desktop_display_13_Template, 1, 1, "ngx-remote-desktop-display", 7);
            i0.ɵɵpipe(14, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "section");
            i0.ɵɵprojection(16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !ctx.manager.isFullScreen());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.manager.isFullScreen());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(8, 8, ctx.state) === ctx.states.CONNECTING);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(10, 10, ctx.state) === ctx.states.DISCONNECTED);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(12, 12, ctx.state) === ctx.states.ERROR);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(14, 14, ctx.state) === ctx.states.CONNECTED);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("ngx-remote-desktop-status-bar-hidden", ctx.manager.isFullScreen());
        } }, directives: [i1.NgIf, i1.NgTemplateOutlet, i2.MessageComponent, i3.DisplayComponent], pipes: [i1.AsyncPipe], encapsulation: 2, data: { animation: [
                animations_1.trigger('toolbarAnimation', [
                    animations_1.state('1', animations_1.style({ transform: 'translateX(0%)' })),
                    animations_1.state('0', animations_1.style({ transform: 'translateX(-100%)' })),
                    animations_1.transition('1 => 0', animations_1.animate('200ms 200ms ease-out')),
                    animations_1.transition('0 => 1', animations_1.animate('225ms ease-in'))
                ])
            ] } });
    return RemoteDesktopComponent;
}());
exports.RemoteDesktopComponent = RemoteDesktopComponent;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RemoteDesktopComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ngx-remote-desktop',
                template: "\n        <main class=\"ngx-remote-desktop\" #container>\n            <!-- Toolbar items template -->\n            <ng-template #toolbarItems>\n                <ul class=\"ngx-remote-desktop-toolbar-items\">\n                    <ng-content select='ngx-remote-desktop-toolbar-item[align=left]'></ng-content>\n                </ul>\n                <ul class=\"ngx-remote-desktop-toolbar-items\">\n                    <ng-content select='ngx-remote-desktop-toolbar-item[align=right]'></ng-content>\n                </ul>\n            </ng-template>\n            <!-- End toolbar items template -->\n            <!-- Normal toolbar -->\n            <nav class=\"ngx-remote-desktop-toolbar\" *ngIf=\"!manager.isFullScreen()\" >\n                <template [ngTemplateOutlet]=\"toolbarItems\"></template>\n            </nav>\n            <!-- End normal toolbar -->\n            <!-- Full screen toolbar -->\n            <nav class=\"ngx-remote-desktop-toolbar ngx-remote-desktop-toolbar-fullscreen\" *ngIf=\"manager.isFullScreen()\"\n                [@toolbarAnimation]=\"toolbarVisible\" #toolbar>\n                <template [ngTemplateOutlet]=\"toolbarItems\"></template>\n            </nav>\n            <!-- End full screen toolbar -->\n            <section class=\"ngx-remote-desktop-container\">\n                <!-- Connecting message -->\n                <div *ngIf=\"(state|async) === states.CONNECTING\">\n                    <div class=\"ngx-remote-desktop-message\" *ngIf=\"connectingMessage\" >\n                        <ng-content select=\"ngx-remote-desktop-connecting-message\"></ng-content>\n                    </div>\n                    <ngx-remote-desktop-message  *ngIf=\"!connectingMessage\"\n                        title=\"Connecting to remote desktop\"\n                        message=\"Attempting to connect to the remote desktop. Waiting for response...\"\n                        type=\"success\">\n                    </ngx-remote-desktop-message>\n                </div>\n                <!-- End connecting message -->\n\n                <!-- Disconnected message -->\n                <div *ngIf=\"(state|async) === states.DISCONNECTED\">\n                    <div class=\"ngx-remote-desktop-message\" *ngIf=\"disconnectedMessage\">\n                        <ng-content select=\"ngx-remote-desktop-disconnected-message\"></ng-content>\n                    </div>\n                    <ngx-remote-desktop-message *ngIf=\"!disconnectedMessage\"\n                        title=\"Disconnected\"\n                        message=\"The connection to the remote desktop terminated successfully\"\n                        type=\"error\">\n                        <button (click)=\"manager.onReconnect.next(true)\" class=\"ngx-remote-desktop-message-body-btn\">\n                            Reconnect\n                        </button>\n                    </ngx-remote-desktop-message>\n                </div>\n                <!-- End disconnected message -->\n                \n                <!-- Error message -->\n                <div *ngIf=\"(state|async) === states.ERROR\">\n                    <div class=\"ngx-remote-desktop-message\" *ngIf=\"errorMessage\">\n                        <ng-content select=\"ngx-remote-desktop-error-message\"></ng-content>\n                    </div>\n\n                    <ngx-remote-desktop-message *ngIf=\"!errorMessage\"\n                        title=\"Connection error\"\n                        message=\"The remote desktop server is currently unreachable.\"\n                        type=\"error\">\n                        <button (click)=\"manager.onReconnect.next(true)\" class=\"ngx-remote-desktop-message-body-btn\">\n                            Connect\n                        </button>\n                    </ngx-remote-desktop-message>\n                </div>\n                <!-- End error message -->\n                \n                <!-- Display -->\n                <ngx-remote-desktop-display *ngIf=\"(state|async) === states.CONNECTED\"\n                    [manager]=\"manager\"\n                    (onMouseMove)=\"handleDisplayMouseMove($event)\">\n                </ngx-remote-desktop-display>                \n                <!-- End display -->\n            </section>\n            <section [class.ngx-remote-desktop-status-bar-hidden]=\"manager.isFullScreen()\">\n                <ng-content select=\"ngx-remote-desktop-status-bar\"></ng-content>\n            </section>\n        </main>\n    ",
                encapsulation: core_1.ViewEncapsulation.None,
                changeDetection: core_1.ChangeDetectionStrategy.Default,
                animations: [
                    animations_1.trigger('toolbarAnimation', [
                        animations_1.state('1', animations_1.style({ transform: 'translateX(0%)' })),
                        animations_1.state('0', animations_1.style({ transform: 'translateX(-100%)' })),
                        animations_1.transition('1 => 0', animations_1.animate('200ms 200ms ease-out')),
                        animations_1.transition('0 => 1', animations_1.animate('225ms ease-in'))
                    ])
                ],
            }]
    }], null, { manager: [{
            type: core_1.Input
        }], connectingMessage: [{
            type: core_1.ContentChild,
            args: [connecting_message_component_1.ConnectingMessageComponent]
        }], disconnectedMessage: [{
            type: core_1.ContentChild,
            args: [disconnected_message_component_1.DisconnectedMessageComponent]
        }], errorMessage: [{
            type: core_1.ContentChild,
            args: [error_message_component_1.ErrorMessageComponent]
        }], container: [{
            type: core_1.ViewChild,
            args: ['container', { static: false }]
        }], toolbar: [{
            type: core_1.ViewChild,
            args: ['toolbar', { static: false }]
        }], onDocumentMousemove: [{
            type: core_1.HostListener,
            args: ['document:mousemove', ['$event']]
        }] }); })();
//# sourceMappingURL=remote-desktop.component.js.map