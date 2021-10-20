import { ElementRef, OnDestroy, OnInit, Renderer2, AfterViewChecked, AfterViewInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class DisplayComponent implements OnInit, OnDestroy, AfterViewChecked, AfterViewInit {
    private viewport;
    private renderer;
    /**
     * Emit the mouse move events to any subscribers
     */
    onMouseMove: BehaviorSubject<any>;
    /**
     * Remote desktop manager
     */
    private manager;
    private display;
    /**
     * Remote desktop keyboard
     */
    private keyboard;
    /**
     * Remote desktop mouse
     */
    private mouse;
    /**
     * Subscriptions
     */
    private subscriptions;
    constructor(viewport: ElementRef, renderer: Renderer2);
    /**
     * Create the display canvas when initialising the component
     */
    ngOnInit(): void;
    /**
     * Unbind all display input listeners when destroying the component
     */
    ngOnDestroy(): void;
    ngAfterViewChecked(): void;
    ngAfterViewInit(): void;
    /**
     * Bind all subscriptions
     */
    private bindSubscriptions;
    /**
     * Unbind all subscriptions
     */
    private unbindSubscriptions;
    /**
     * Bind input listeners if display is focused, otherwise, unbind
     */
    private handleFocused;
    /**
     * Release all the keyboards when the window loses focus
     * @param event
     */
    onWindowBlur(event: any): void;
    /**
     * Resize the display scale when the window is resized
     * @param event
     */
    onWindowResize(event: any): void;
    /**
     * Create the remote desktop display and bind the event handlers
     */
    private createDisplayCanvas;
    /**
     * Get the remote desktop display and set the scale
     */
    private setDisplayScale;
    /**
     * Get the remote desktop display
     */
    private getDisplay;
    /**
     * Get the remote desktop client
     */
    private getClient;
    /**
     * Calculate the scale for the display
     */
    private calculateDisplayScale;
    /**
     * Assign the display to the client
     */
    private createDisplay;
    /**
     * Remove the display
     */
    private removeDisplay;
    /**
     * Bind input listeners for keyboard and mouse
     */
    private bindDisplayInputListeners;
    /**
     * Remove all input listeners
     */
    private removeDisplayInputListeners;
    /**
     * Create the keyboard and mouse inputs
     */
    private createDisplayInputs;
    /**
     * Send mouse events to the remote desktop
     * @param mouseState
     */
    private handleMouseState;
    /**
     * Resetting the keyboard will release all keys
     */
    private resetKeyboard;
    /**
     * Send key down event to the remote desktop
     * @param key
     */
    private handleKeyDown;
    /**
     * Send key up event to the remote desktop
     * @param key
     */
    private handleKeyUp;
    static ɵfac: i0.ɵɵFactoryDeclaration<DisplayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DisplayComponent, "ngx-remote-desktop-display", never, { "manager": "manager"; }, { "onMouseMove": "onMouseMove"; }, never, never>;
}
