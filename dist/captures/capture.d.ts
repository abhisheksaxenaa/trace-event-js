declare class Capture {
    private documentBody;
    private currentTime;
    private readonly BOUNCE;
    private readonly SEND_FREQUENCY;
    private sequenceData;
    private intervalObj;
    constructor();
    initSequenceData(): void;
    initialize: () => void;
    private sendData;
    private mouseClickEvent;
    private attachMouseEvent;
    stopEvents: () => void;
}
export default Capture;
