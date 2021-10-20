"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayComponent = void 0;
var core_1 = require("@angular/core");
var guacamole_common_js_1 = require("@dboterho/guacamole-common-js");
var rxjs_1 = require("rxjs");
var services_1 = require("../services");
var i0 = require("@angular/core");
var _c0 = ["display"];
var DisplayComponent = /** @class */ (function () {
    function DisplayComponent(viewport, renderer) {
        this.viewport = viewport;
        this.renderer = renderer;
        /**
         * Emit the mouse move events to any subscribers
         */
        this.onMouseMove = new rxjs_1.BehaviorSubject(null);
        /**
         * Subscriptions
         */
        this.subscriptions = [];
    }
    /**
     * Create the display canvas when initialising the component
     */
    DisplayComponent.prototype.ngOnInit = function () {
    };
    /**
     * Unbind all display input listeners when destroying the component
     */
    DisplayComponent.prototype.ngOnDestroy = function () {
        this.removeDisplay();
        this.removeDisplayInputListeners();
        this.unbindSubscriptions();
    };
    DisplayComponent.prototype.ngAfterViewChecked = function () {
        this.setDisplayScale();
    };
    DisplayComponent.prototype.ngAfterViewInit = function () {
        this.createDisplayCanvas();
        this.bindSubscriptions();
    };
    /**
     * Bind all subscriptions
     */
    DisplayComponent.prototype.bindSubscriptions = function () {
        var _this = this;
        this.subscriptions.push(this.manager.onKeyboardReset.subscribe(function (_) { return _this.resetKeyboard(); }));
        this.subscriptions.push(this.manager.onFocused.subscribe(this.handleFocused.bind(this)));
    };
    /**
     * Unbind all subscriptions
     */
    DisplayComponent.prototype.unbindSubscriptions = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    /**
     * Bind input listeners if display is focused, otherwise, unbind
     */
    DisplayComponent.prototype.handleFocused = function (newFocused) {
        if (newFocused) {
            this.bindDisplayInputListeners();
        }
        else {
            this.removeDisplayInputListeners();
        }
    };
    /**
     * Release all the keyboards when the window loses focus
     * @param event
     */
    DisplayComponent.prototype.onWindowBlur = function (event) {
        this.resetKeyboard();
    };
    /**
     * Resize the display scale when the window is resized
     * @param event
     */
    DisplayComponent.prototype.onWindowResize = function (event) {
        this.setDisplayScale();
    };
    /**
     * Create the remote desktop display and bind the event handlers
     */
    DisplayComponent.prototype.createDisplayCanvas = function () {
        this.createDisplay();
        this.createDisplayInputs();
        this.bindDisplayInputListeners();
    };
    /**
     * Get the remote desktop display and set the scale
     */
    DisplayComponent.prototype.setDisplayScale = function () {
        var display = this.getDisplay();
        var scale = this.calculateDisplayScale(display);
        display.scale(scale);
    };
    /**
     * Get the remote desktop display
     */
    DisplayComponent.prototype.getDisplay = function () {
        return this.manager.getClient().getDisplay();
    };
    /**
     * Get the remote desktop client
     */
    DisplayComponent.prototype.getClient = function () {
        return this.manager.getClient();
    };
    /**
     * Calculate the scale for the display
     */
    DisplayComponent.prototype.calculateDisplayScale = function (display) {
        var viewportElement = this.viewport.nativeElement;
        var scale = Math.min(viewportElement.clientWidth / display.getWidth(), viewportElement.clientHeight / display.getHeight());
        return scale;
    };
    /**
     * Assign the display to the client
     */
    DisplayComponent.prototype.createDisplay = function () {
        var element = this.display.nativeElement;
        var display = this.getDisplay();
        this.renderer.appendChild(element, display.getElement());
    };
    /**
     * Remove the display
     */
    DisplayComponent.prototype.removeDisplay = function () {
        var element = this.display.nativeElement;
        var display = this.getDisplay();
        this.renderer.removeChild(element, display.getElement());
    };
    /**
     * Bind input listeners for keyboard and mouse
     */
    DisplayComponent.prototype.bindDisplayInputListeners = function () {
        this.removeDisplayInputListeners();
        this.mouse.onmousedown = this.mouse.onmouseup = this.mouse.onmousemove = this.handleMouseState.bind(this);
        this.keyboard.onkeyup = this.handleKeyUp.bind(this);
        this.keyboard.onkeydown = this.handleKeyDown.bind(this);
    };
    /**
     * Remove all input listeners
     */
    DisplayComponent.prototype.removeDisplayInputListeners = function () {
        if (this.keyboard) {
            this.keyboard.onkeydown = null;
            this.keyboard.onkeyup = null;
        }
        if (this.mouse) {
            this.mouse.onmousedown = this.mouse.onmouseup = this.mouse.onmousemove = null;
        }
    };
    /**
     * Create the keyboard and mouse inputs
     */
    DisplayComponent.prototype.createDisplayInputs = function () {
        var display = this.display.nativeElement.children[0];
        this.mouse = new guacamole_common_js_1.Mouse(display);
        this.keyboard = new guacamole_common_js_1.Keyboard(window.document);
    };
    /**
     * Send mouse events to the remote desktop
     * @param mouseState
     */
    DisplayComponent.prototype.handleMouseState = function (mouseState) {
        var display = this.getDisplay();
        var scale = display.getScale();
        var scaledState = new guacamole_common_js_1.Mouse.State(mouseState.x / scale, mouseState.y / scale, mouseState.left, mouseState.middle, mouseState.right, mouseState.up, mouseState.down);
        this.getClient().sendMouseState(scaledState);
        this.onMouseMove.next(mouseState);
    };
    /**
     * Resetting the keyboard will release all keys
     */
    DisplayComponent.prototype.resetKeyboard = function () {
        if (this.keyboard) {
            this.keyboard.reset();
        }
    };
    /**
     * Send key down event to the remote desktop
     * @param key
     */
    DisplayComponent.prototype.handleKeyDown = function (key) {
        this.getClient().sendKeyEvent(1, key);
    };
    /**
     * Send key up event to the remote desktop
     * @param key
     */
    DisplayComponent.prototype.handleKeyUp = function (key) {
        this.getClient().sendKeyEvent(0, key);
    };
    DisplayComponent.ɵfac = function DisplayComponent_Factory(t) { return new (t || DisplayComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    DisplayComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DisplayComponent, selectors: [["ngx-remote-desktop-display"]], viewQuery: function DisplayComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.display = _t.first);
        } }, hostAttrs: [1, "ngx-remote-desktop-viewport"], hostBindings: function DisplayComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("blur", function DisplayComponent_blur_HostBindingHandler($event) { return ctx.onWindowBlur($event); }, false, i0.ɵɵresolveWindow)("resize", function DisplayComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { manager: "manager" }, outputs: { onMouseMove: "onMouseMove" }, decls: 2, vars: 0, consts: [[1, "ngx-remote-desktop-display"], ["display", ""]], template: function DisplayComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0, 1);
        } }, encapsulation: 2, changeDetection: 0 });
    return DisplayComponent;
}());
exports.DisplayComponent = DisplayComponent;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DisplayComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ngx-remote-desktop-display',
                host: { class: 'ngx-remote-desktop-viewport' },
                template: "\n        <div class=\"ngx-remote-desktop-display\" #display>\n        </div>\n    ",
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { onMouseMove: [{
            type: core_1.Output
        }], manager: [{
            type: core_1.Input
        }], display: [{
            type: core_1.ViewChild,
            args: ['display', { static: true }]
        }], onWindowBlur: [{
            type: core_1.HostListener,
            args: ['window:blur', ['$event']]
        }], onWindowResize: [{
            type: core_1.HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();
//# sourceMappingURL=display.component.js.map