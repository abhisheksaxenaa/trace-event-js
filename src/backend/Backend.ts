export interface BackendOptions {
    baseUrl: string;
}
export class Backend {
    private static apiKey: string;
    private static sessionId: string;
    private static BASE_URL: string;
    static init(apiKey: string) {
        this.apiKey = apiKey;
    }
    static initBackend(options: BackendOptions) {
        if (options) {
            this.BASE_URL = options.baseUrl
        }
    }
    static setSessionId(sessionId: string) {
        this.sessionId = sessionId;
    }
    static registerSession() {
        const endUrl = this.BASE_URL+'/verify';
        return new Promise((resolve, reject) => {
            fetch(endUrl, {
                method: 'GET',
                headers: {
                    'api-key': this.apiKey
                }
            })
            .then(res => res.json())
            .then(res => {
                resolve(res);
            })
            .catch(e => reject(e));
        });
    }
    static registerEvent(data: any) {
        const queryParams = `session_id=${this.sessionId}`;
        const endUrl = this.BASE_URL+'/events?'+queryParams;
        const requestOptions = {
            method: 'POST',
            headers: {
                'api-key': this.apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data
            })
        };
        return new Promise((resolve, reject) => {
            // @ts-ignore
            fetch(endUrl, requestOptions)
            .then(res => res.json())
            .then(res => {
                resolve(res);
            })
            .catch(e => reject(e));
        });
    }
} 