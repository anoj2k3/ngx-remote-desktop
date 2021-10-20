import * as i0 from "@angular/core";
/**
 * Message component for showing error or success messages for when the connection
 * state changes
 */
export declare class MessageComponent {
    /**
     * Title of the message to display
     */
    title: string;
    /**
     * Content of the message to display
     */
    message: string;
    /**
     * Message type. Can be 'success' or 'error'
     */
    type: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MessageComponent, "ngx-remote-desktop-message", never, { "title": "title"; "message": "message"; "type": "type"; }, {}, never, ["*"]>;
}
