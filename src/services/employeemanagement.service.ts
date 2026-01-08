import { ENDPOINTS } from '../../constants/endpoints';
import { RequestBuilder } from '../api/requestBuilder';
import { RequestOptions } from '../api/request.types';

export class EmployeeManagementService {
    constructor(private request: RequestBuilder) {}

    async getEmployeesApi(params?: { id?: string; status?: string }, options?: RequestOptions) {
        return this.request.get(ENDPOINTS.GET_EMPLOYEES, { params: params as Record<string, string>, ...(options || {}) });
    }
}

// Convenience function used by tests that prefer functional imports
export async function getEmployees(request: RequestBuilder, params?: { id?: string; status?: string }, options?: RequestOptions) {
    return request.get(ENDPOINTS.GET_EMPLOYEES, { params: params as Record<string, string>, ...(options || {}) });
}
