import { Backend, BackendOptions } from "./backend/Backend";
import Capture from "./captures/capture";

interface OptionsTraceEvent {
    backend: BackendOptions
}

class TraceEvent {
    private apiKey: string;
    private captureObj: Capture;
    constructor(apiKey: string, options: OptionsTraceEvent) {
        this.apiKey = apiKey;
        this.captureObj = new Capture();
        if (options && options.backend) {
            Backend.init(apiKey)
            Backend.initBackend(options.backend);
        }
    }
    initialize() {
        Backend.registerSession().then(
            (data: any) => {
                if (data) {
                    this.captureObj.initialize();
                    // @ts-ignore
                    if (data.session_id) {
                        Backend.setSessionId(data.session_id);
                    }
                }
            }
        )
    }
}

export { TraceEvent };
