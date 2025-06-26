export class BaseCin7SDK {
    constructor(accountId, applicationKey) {
        this.baseURL = 'https://inventory.dearsystems.com/externalapi/v2/';
        this.accountId = accountId;
        this.applicationKey = applicationKey;
    }
    async makeRequest(endpoint, options) {
        const url = `${this.baseURL}${endpoint}`;
        const headers = {
            'Content-Type': 'application/json',
            'api-auth-accountid': this.accountId,
            'api-auth-applicationkey': this.applicationKey,
            ...options.headers,
        };
        const response = await fetch(url, {
            method: options.method,
            headers,
            body: options.body ? JSON.stringify(options.body) : undefined,
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }
    async get(endpoint, params) {
        const searchParams = params ? new URLSearchParams(params).toString() : '';
        const fullEndpoint = searchParams ? `${endpoint}?${searchParams}` : endpoint;
        return this.makeRequest(fullEndpoint, { method: 'GET' });
    }
    async post(endpoint, data) {
        return this.makeRequest(endpoint, { method: 'POST', body: data });
    }
    async put(endpoint, data) {
        return this.makeRequest(endpoint, { method: 'PUT', body: data });
    }
    async delete(endpoint) {
        return this.makeRequest(endpoint, { method: 'DELETE' });
    }
}
//# sourceMappingURL=base-sdk.js.map