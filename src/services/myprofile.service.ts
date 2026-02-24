import { APIRequestContext } from '@playwright/test';
import { ENDPOINTS } from '../../constants/endpoints';
import { RequestBuilder } from '../api/requestBuilder';
import { RequestOptions } from '../api/request.types';


export class MyProfileService {
    constructor(
        private request: RequestBuilder
    ) {}


    async getMyAssetAssigned(
        params: {
            pageSize?: number;
            page?: number;
        } = {},
        options?: RequestOptions
        ){
            const response = await this.request.get(
                ENDPOINTS.GET_MY_ASSET_ASSIGNED,
                {
                    ...options,
                    params: {
                        pageSize: params.pageSize ?? 10,
                        page: params.page ?? 1
                    }
                }
            );
            return response;
        }
        
    async getDocuments(options?: RequestOptions) {

        let response = await this.request.get(ENDPOINTS.GET_DOCUMENTS, options);
        console.log("Documents Response:", response);
        return response;
    }

    async getStatusList(options?: RequestOptions) {

        let response = await this.request.get(ENDPOINTS.GET_STATUS_LIST, options);
        console.log("Document Status List:", response);
        return response;
    }

    async getAppraisal(options?: RequestOptions) {

        let response = await this.request.get(ENDPOINTS.GET_APPRAISAL, options);
        console.log("Appraisal Documents List:", response);
        return response;
    }

    async getProfile(options?: RequestOptions){

        let response = await this.request.get(ENDPOINTS.GET_PROFILE, options);
        console.log("Profile:", response);
        return response;
    }
    async getSalary(
        params: {
            year?: number;
        } = {},
        options?: RequestOptions
        ){
            const response = await this.request.get(
                ENDPOINTS.GET_SALARY_RECORD,
                {
                    ...options,
                    params: {
                        year: params.year?? 2026,
                    }
                }
            );
            console.log("Salary record:", response);
            return response;
        }

     async getTaxForm(
        params: {
            year?: number;
        } = {},
        options?: RequestOptions
        ){
            const response = await this.request.get(
                ENDPOINTS.GET_TAX_FORM,
                {
                    ...options,
                    params: {
                        year: params.year?? 2026,
                    }
                }
            );
            console.log("Tax Form:", response);
            return response;
        }
}