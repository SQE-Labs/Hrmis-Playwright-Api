import { APIRequestContext, APIResponse } from '@playwright/test';

export type RequestOptions = {
    headers?: Record<string, string>;
    params?: Record<string, string>;
    // Optional: override the request context baseURL for this call. Can be a full origin or origin+path
    baseUrl?: string;
};

export class ApiClient {
    private defaultHeaders: Record<string, string> = {
        Accept: '*/*',
        'Content-Type': 'application/json'
    };

    private authToken?: string;

    constructor(public request: APIRequestContext, authToken?: string) {
        this.authToken = authToken;
    }

    setAuth(token?: string) {
        this.authToken = token;
    }

    private buildHeaders(headers?: Record<string, string>) {
        const out: Record<string, string> = { ...this.defaultHeaders, ...(headers || {}) };
        if (this.authToken) {
            out.Authorization = `Bearer ${this.authToken}`;
            // Some endpoints accept the token in x-access-token header instead of Authorization
            out['x-access-token'] = this.authToken;
        }
        return out;
    }

    /**
     * Build full URL for a request. If `path` is already an absolute URL, return as-is.
     * If `baseUrl` is provided it will be joined with the path (handling slashes).
     * Otherwise the original path is returned (so Playwright's baseURL will be used).
     */
    private buildUrl(path: string, baseUrl?: string) {
        if (/^https?:\/\//i.test(path)) return path;
        if (!baseUrl) return path;
        return `${baseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
    }

    private async handleResponse(res: APIResponse) {
        const status = res.status();
        let body: any = null;
        try {
            body = await res.json();
        } catch (e) {
            body = await res.text().catch(() => null);
        }
        return { status, body, headers: res.headers() } as const;
    }

    async get(path: string, options?: RequestOptions) {
        const url = this.buildUrl(path, options?.baseUrl);
        const res = await this.request.get(url, { headers: this.buildHeaders(options?.headers), params: options?.params });
        return this.handleResponse(res);
    }

    async post(path: string, payload?: any, options?: RequestOptions) {
        const url = this.buildUrl(path, options?.baseUrl);
        const res = await this.request.post(url, { headers: this.buildHeaders(options?.headers), data: payload });
        return this.handleResponse(res);
    }

    async put(path: string, payload?: any, options?: RequestOptions) {
        const url = this.buildUrl(path, options?.baseUrl);
        const res = await this.request.put(url, { headers: this.buildHeaders(options?.headers), data: payload });
        return this.handleResponse(res);
    }

    async delete(path: string, options?: RequestOptions) {
        const url = this.buildUrl(path, options?.baseUrl);
        const res = await this.request.delete(url, { headers: this.buildHeaders(options?.headers), params: options?.params });
        return this.handleResponse(res); 
    }
}
