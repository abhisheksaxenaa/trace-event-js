import Capture from "./captures/capture";

class TraceEvent {
    private apiKey: string;
    private captureObj: Capture;
    constructor(apiKey: string) {
        console.log("Initializing API KEY : ", apiKey)
        this.apiKey = apiKey;
        this.captureObj = new Capture();
    }
    initialize() {
        this.captureObj.initialize();
    }
}

export { TraceEvent };
