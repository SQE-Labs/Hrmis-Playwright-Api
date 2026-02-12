import { APIRequestContext } from '@playwright/test';
import { ENDPOINTS } from '../../constants/endpoints';
import { RequestBuilder } from '../api/requestBuilder';
import { RequestOptions } from '../api/request.types';


export class DashboardService {
    constructor(
        private request: RequestBuilder
    ) {}

    async getProjectsByEmployee(options?: RequestOptions) {
    // Use absolute URL from typed wrapper so calls don't depend on Playwright baseURL
        let response = await this.request.get(ENDPOINTS.GET_PROJECTS_BY_EMPLOYEE, options);

        console.log("Projects by Employee response:", response);
        return response;

    }

};