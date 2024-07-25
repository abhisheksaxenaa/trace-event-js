import { BackendOptions } from "./backend/Backend";
interface OptionsTraceEvent {
    backend: BackendOptions;
}
declare class TraceEvent {
    private apiKey;
    private captureObj;
    constructor(apiKey: string, options: OptionsTraceEvent);
    initialize(): void;
}
export { TraceEvent };
