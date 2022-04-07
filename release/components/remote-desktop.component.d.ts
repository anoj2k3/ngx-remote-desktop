import { OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RemoteDesktopManager } from '../services';
import { ConnectingMessageComponent } from './messages/connecting-message.component';
import { DisconnectedMessageComponent } from './messages/disconnected-message.component';
import { ErrorMessageComponent } from './messages/error-message.component';
/**
 * The main component for displaying a remote desktop
 */
export declare class RemoteDesktopComponent implements OnInit, OnDestroy {
    /**
     * Client that manages the connection to the remote desktop
     */
    manager: RemoteDesktopManager;
    /**
     * Guacamole has more states than the list below however for the component we are only interested
     * in managing four states.
     */
    states: {
        CONNECTING: string;
        CONNECTED: string;
        DISCONNECTED: string;
        ERROR: string;
    };
    /**
     * Manage the component state
     */
    state: BehaviorSubject<string>;
    connectingMessage: ConnectingMessageComponent;
    disconnectedMessage: DisconnectedMessageComponent;
    errorMessage: ErrorMessageComponent;
    private container;
    private toolbar;
    /**
     * Subscriptions
     */
    private subscriptions;
    /**
     * Hide or show the toolbar
     */
    toolbarVisible: boolean;
    /**
     * Subscribe to the connection state  and full screen state when the component is initialised
     */
    ngOnInit(): void;
    /**
     * Remove all subscriptions when the component is destroyed
     */
    ngOnDestroy(): void;
    /**
     * Bind the subscriptions
     */
    private bindSubscriptions;
    /**
     * Unbind the subscriptions
     */
    private unbindSubscriptions;
    /**
     * Set the component state to the new guacamole state
     * @param newState
     */
    private setState;
    /**
     * Receive the state from the desktop client and update this components state
     * @param newState - state received from the guacamole client
     */
    private handleState;
    /**
     * Exit full screen and show the toolbar
     */
    private exitFullScreen;
    /**
     * Enter full screen mode and auto hide the toolbar
     */
    private enterFullScreen;
    /**
     * Go in and out of full screen
     */
    private handleFullScreen;
    private handleToolbar;
    /**
     * Handle the display mouse movement
     * @param event Mouse event
     */
    handleDisplayMouseMove($event: any): void;
    onDocumentMousemove($event: MouseEvent): void;
}
