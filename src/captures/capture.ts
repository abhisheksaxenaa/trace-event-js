import { Backend } from "../backend/Backend";
import MouseEventModel from "../models/MouseEventModel";

class Capture {
    private documentBody: HTMLElement;
    private currentTime: number;
    private readonly BOUNCE: number = 500;
    private readonly SEND_FREQUENCY: number = 20000;
    private sequenceData: any;
    private intervalObj: any;

    constructor() {
        this.documentBody = document.body;
        this.sequenceData = [
            []
        ];
        this.currentTime = 0;
        this.intervalObj = null;
    }

    initSequenceData() {
        this.sequenceData = [
            []
        ]
    }
    initialize = () => {
        this.currentTime = Date.now();
        this.intervalObj = setInterval(() => { this.sendData() }, this.SEND_FREQUENCY);
        this.attachMouseEvent();
    }
    private sendData = () => {
        let isEmpty = true;
        if (Array.isArray(this.sequenceData)) {
            for (const seq of this.sequenceData) {
                if (Array.isArray(seq) && seq.length > 0) {
                    isEmpty = false;
                    break;
                }
            }
        }
        if (!isEmpty) {
            Backend.registerEvent(this.sequenceData);
        }
        this.initSequenceData();
    }
    private mouseClickEvent = (ev: PointerEvent): any => {
        const now = Date.now();
        const eventObj = new MouseEventModel(ev);
        if (now - this.currentTime < this.BOUNCE) {
            const lastSequence = this.sequenceData[this.sequenceData.length - 1];
            lastSequence.push(eventObj.getData())
        } else {
            this.sequenceData.push([eventObj.getData()]);
        }
        this.currentTime = now;
    }
    private attachMouseEvent() {
        if (this.documentBody) {
            this.documentBody.addEventListener('pointerup', this.mouseClickEvent)
        }
    }
    stopEvents = () => {
        if (this.intervalObj) {
            clearInterval(this.intervalObj);
            this.intervalObj = null;
        }

    }
}

export default Capture;