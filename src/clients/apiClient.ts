import { APIRequestContext, APIResponse } from '@playwright/test';

export type RequestOptions = {
    headers?: Record<string, string>;
    params?: Record<string, string>;
    baseUrl?: string;
};

export class ApiClient {
    private defaultHeaders: Record<string, string> = {
        Accept: '*/*',
        'Content-Type': 'application/json'
    };

    private authToken?: string;

    constructor(private request: APIRequestContext, authToken?: string) {
        this.authToken = authToken;
    }

    setAuth(token?: string) {
        this.authToken = token;
    }

    private buildHeaders(headers?: Record<string, string>) {
        const out: Record<string, string> = {
            ...this.defaultHeaders,
            ...(headers || {})
        };

        if (this.authToken) {
            // ✅ FIXED: template string
            out.Authorization = `Bearer ${this.authToken}`;
            out['x-access-token'] = this.authToken;
        }

        return out;
    }

    /**
     * URL resolution rules:
     * 1. Absolute URL → returned as-is
     * 2. baseUrl override → joined with path
     * 3. Relative path → Playwright baseURL is applied automatically
     */
    private resolveUrl(path: string, baseUrl?: string) {
        if (/^https?:\/\//i.test(path)) return path;
        if (!baseUrl) return path;

        // ✅ FIXED: template string
        return `${baseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
    }

    private async handleResponse(res: APIResponse) {
        let body: any = null;

        try {
            body = await res.json();
        } catch {
            body = await res.text().catch(() => null);
        }

        return {
            status: res.status(),
            body,
            headers: res.headers()
        } as const;
    }

    async get(path: string, options?: RequestOptions) {
        const url = this.resolveUrl(path, options?.baseUrl);
        const res = await this.request.get(url, {
            headers: this.buildHeaders(options?.headers),
            params: options?.params
        });
        return this.handleResponse(res);
    }

    async post(path: string, payload?: any, options?: RequestOptions) {
        const url = this.resolveUrl(path, options?.baseUrl);
        const res = await this.request.post(url, {
            headers: this.buildHeaders(options?.headers),
            data: payload
        });
        return this.handleResponse(res);
    }

    async put(path: string, payload?: any, options?: RequestOptions) {
        const url = this.resolveUrl(path, options?.baseUrl);
        const res = await this.request.put(url, {
            headers: this.buildHeaders(options?.headers),
            data: payload
        });
        return this.handleResponse(res);
    }

    async delete(path: string, options?: RequestOptions) {
        const url = this.resolveUrl(path, options?.baseUrl);
        const res = await this.request.delete(url, {
            headers: this.buildHeaders(options?.headers),
            params: options?.params
        });
        return this.handleResponse(res);
    }
}
