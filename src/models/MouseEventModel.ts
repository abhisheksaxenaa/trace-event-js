import { BaseEvent } from "./BaseEvent";
interface TraceEventElement {
    id?: string;
    disabled: string;
    tagName: string;
}
class MouseEventModel implements BaseEvent {
    private isTrusted: boolean;
    private altKey : boolean;
    private button : number;
    private buttons : number;
    private clientX : number;
    private clientY : number;
    private ctrlKey : boolean;
    private detail: number;
    private element: TraceEventElement;
    private layerX : number;
    private layerY : number;
    private metaKey : boolean;
    private movementX : number;
    private movementY : number;
    private offsetX : number;
    private offsetY : number;
    private pageX : number;
    private pageY : number;
    private pointerType: string;
    private screenX : number;
    private screenY : number;
    private shiftKey : boolean;
    private x : number;
    private y : number;
    timestamp: number;
    constructor(ev: PointerEvent) {
        this.isTrusted = ev.isTrusted;
        this.altKey = ev.altKey;
        this.button = ev.button;
        this.buttons = ev.buttons;
        this.clientX = ev.clientX;
        this.clientY = ev.clientY;
        this.ctrlKey = ev.ctrlKey;
        this.detail = ev.detail;
        this.element = {
            // @ts-ignore
            tagName: ev.target?.tagName,
            // @ts-ignore
            id: ev.target?.id,
            // @ts-ignore
            disabled: ev.target?.disabled,
        };
        this.layerX = ev.layerX;
        this.layerY = ev.layerY;
        this.metaKey = ev.metaKey;
        this.movementX = ev.movementX;
        this.movementY = ev.movementY;
        this.offsetX = ev.offsetX;
        this.offsetY = ev.offsetY;
        this.pageX = ev.pageX;
        this.pageY = ev.pageY;
        this.pointerType = ev.pointerType;
        this.screenX = ev.screenX;
        this.screenY = ev.screenY;
        this.shiftKey = ev.shiftKey;
        this.x = ev.x;
        this.y = ev.y;
        this.timestamp = Date.now();
    }
    getData() {
        return {
            isTrusted: this.isTrusted,
            altKey: this.altKey,
            button: this.button,
            buttons: this.buttons,
            clientX: this.clientX,
            clientY: this.clientY,
            ctrlKey: this.ctrlKey,
            detail: this.detail,
            element: this.element,
            layerX: this.layerX,
            layerY: this.layerY,
            metaKey: this.metaKey,
            movementX: this.movementX,
            movementY: this.movementY,
            offsetX: this.offsetX,
            offsetY: this.offsetY,
            pageX: this.pageX,
            pageY: this.pageY,
            pointerType: this.pointerType,
            screenX: this.screenX,
            screenY: this.screenY,
            shiftKey: this.shiftKey,
            timestamp: this.timestamp,
            x: this.x,
            y: this.y
        }
    }

}

export default MouseEventModel;