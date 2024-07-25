export interface BackendOptions {
    baseUrl: string;
}
export declare class Backend {
    private static apiKey;
    private static sessionId;
    private static BASE_URL;
    static init(apiKey: string): void;
    static initBackend(options: BackendOptions): void;
    static setSessionId(sessionId: string): void;
    static registerSession(): Promise<unknown>;
    static registerEvent(data: any): Promise<unknown>;
}
