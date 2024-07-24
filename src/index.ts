interface TraceEventIntializerI {
    apiKey: string;
}
function initialize(params: TraceEventIntializerI): void {
    const { apiKey } = params;
    console.log(apiKey);
}

export {
    initialize
};
