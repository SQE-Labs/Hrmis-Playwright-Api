export interface RequestOptions<T = any> {
    headers?: Record<string, string>;
    params?: Record<string, string | number | boolean>;
    body?: T;
}