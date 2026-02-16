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



}