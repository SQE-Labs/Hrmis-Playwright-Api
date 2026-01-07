import { ENDPOINTS } from '../../constants/endpoints';
import { RequestBuilder } from '../api/requestBuilder';
import { RequestOptions } from '../api/request.types';

export class EmployeeManagementService {
    constructor
    (private request: RequestBuilder) {} 


     async getEmployeesApi(   params?: { id?: string; status?: string },  options?: RequestOptions) {
        // Use absolute URL from typed wrapper so calls don't depend on Playwright baseURL
        return this.request.get(ENDPOINTS.GET_EMPLOYEES, { params: params as Record<string, string>, ...(options || {}) });
    }
}
