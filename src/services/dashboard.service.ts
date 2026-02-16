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

    async getUserAccess(options?: RequestOptions) {

        let response = await this.request.get(ENDPOINTS.GET_USERS_ACCESS, options);

        console.log("User Access response:", response);
        return response;
    };

    async getPunchDetails(options?: RequestOptions) {

        let response = await this.request.get(ENDPOINTS.GET_PUNCH_DETAILS, options);
        console.log("Punch Details response:", response);
        return response;
    }

    async getTodayDate(
        params: {
            date?: string;
        } = {},
        options?: RequestOptions
        ) {
        // Generate today's date in YYYY-MM-DD format
        const todayDate = new Date().toISOString().split('T')[0];

        const response = await this.request.get(
            ENDPOINTS.GET_TODAYS_DATE,
            {
            ...options,
            params: {
                date: params.date ?? todayDate
            }
            }
        );

        console.log('Today Date Response:', response);
        return response;
        }

    async getMasterLeave(options?: RequestOptions) {

        let response = await this.request.get(ENDPOINTS.GET_MASTER_LEAVE, options);
        console.log("Master Leave response:", response);
        return response;
    }

};