import { APIRequestContext } from '@playwright/test';
import { ENDPOINTS } from '../../constants/endpoints';
import { RequestBuilder } from '../api/requestBuilder';
import { RequestOptions } from '../api/request.types';

export class PerformanceService{
    constructor(
        private request: RequestBuilder
    ) {}


    async getPerformance(options?: RequestOptions) {
        let response = await this.request.get(ENDPOINTS.GET_PERFORMANCE, options);
        console.log("Performance Response:", response);
        return response;
    }
}