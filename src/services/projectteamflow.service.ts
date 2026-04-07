import { APIRequestContext } from '@playwright/test';
import { ENDPOINTS } from '../../constants/endpoints';
import { RequestBuilder } from '../api/requestBuilder';
import { RequestOptions } from '../api/request.types';


export class ProjectTeamFlowService{
    constructor(
        private request: RequestBuilder
    ){}


    async getProjectManagerList(options?: RequestOptions) {
        let res = await this.request.get(ENDPOINTS.GET_PROJECT_MANAGER_LIST, options);
        console.log("Project Manager List API response:", res);
        return res;
    }
}