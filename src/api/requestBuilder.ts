// src/api/requestBuilder.ts
import { APIRequestContext, APIResponse } from '@playwright/test';
import { RequestOptions } from './request.types';

export interface BuiltResponse<T = any> {
  status: number;
  body: T;
  headers?: Record<string, string>;
  raw: APIResponse;
}

export class RequestBuilder {
  constructor(
    private api: APIRequestContext,
    private defaultHeaders: Record<string, string> = {}
  ) {}

  private buildHeaders(
    headers?: Record<string, string>
  ): Record<string, string> {
    return {
      ...this.defaultHeaders,
      ...headers,
    };
  }

  private buildParams(
    params?: Record<string, string | number | boolean>
  ): Record<string, string> {
    if (!params) return {};

    return Object.entries(params).reduce((acc, [key, value]) => {
      if (value !== undefined && value !== null) {
        acc[key] = String(value);
      }
      return acc;
    }, {} as Record<string, string>);
  }

  async get<T = any>(
    url: string,
    options?: RequestOptions<T>
  ): Promise<BuiltResponse<T>> {
    const res = await this.api.get(url, {
      headers: this.buildHeaders(options?.headers),
      params: this.buildParams(options?.params),
    });
    let body: any;
    try {
      body = await res.json();
    } catch {
      body = await res.body();
    }
    return { status: res.status(), body, headers: res.headers(), raw: res };
  }

  async post<T>(
    url: string,
    options?: RequestOptions<T>
  ): Promise<BuiltResponse<T>> {
    const res = await this.api.post(url, {
      headers: this.buildHeaders(options?.headers),
      params: this.buildParams(options?.params),
      data: options?.body,
    });
    let body: any;
    try {
      body = await res.json();
    } catch {
      body = await res.body();
    }
    return { status: res.status(), body, raw: res };
  }

  async put<T>(
    url: string,
    options?: RequestOptions<T>
  ): Promise<BuiltResponse<T>> {
    const res = await this.api.put(url, {
      headers: this.buildHeaders(options?.headers),
      params: this.buildParams(options?.params),
      data: options?.body,
    });
    let body: any;
    try {
      body = await res.json();
    } catch {
      body = await res.body();
    }
    return { status: res.status(), body, raw: res };
  }

  async delete<T = any>(
    url: string,
    options?: RequestOptions<T>
  ): Promise<BuiltResponse<T>> {
    const res = await this.api.delete(url, {
      headers: this.buildHeaders(options?.headers),
      params: this.buildParams(options?.params),
    });
    let body: any;
    try {
      body = await res.json();
    } catch {
      body = await res.body();
    }
    return { status: res.status(), body, raw: res };
  }
}