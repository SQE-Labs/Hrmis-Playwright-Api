import { ApiClient, RequestOptions } from '../clients/apiClient';
import { BASE_URL } from '../../constants/endpoints';
import { ENDPOINTS } from '../../constants/endpoints';

export const getEmployees = async (
    client: ApiClient,
    params?: { id?: string; status?: string },
    options?: RequestOptions
) => {
    // Use absolute URL from typed wrapper so calls don't depend on Playwright baseURL
    return client.get(BASE_URL + ENDPOINTS.GET_EMPLOYEES, { params: params as Record<string, string>, ...(options || {}) });
};
