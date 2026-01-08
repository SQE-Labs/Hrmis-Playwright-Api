import { ApiClient, RequestOptions } from '../api/client';
import { endpoints } from '.';

export const getEmployees = async (
    client: ApiClient,
    params?: { id?: string; status?: string },
    options?: RequestOptions
) => {
    // Use absolute URL from typed wrapper so calls don't depend on Playwright baseURL
    return client.get(endpoints.user.list, { params: params as Record<string, string>, ...(options || {}) });
};

export const onboardEmployee = async (
    client: ApiClient,
    formData: any[],
    options?: RequestOptions
) => {
    return client.multipartPost(endpoints.user.onboarding, formData, options);
};
