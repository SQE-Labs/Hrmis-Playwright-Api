import { APIRequestContext } from '@playwright/test';
import { ENDPOINTS } from '../../constants/endpoints';
import { RequestBuilder } from '../api/requestBuilder';
import { RequestOptions } from '../api/request.types';

export class AssetManagementService {
    constructor(
        private request: RequestBuilder
    ) {}    
   async getAssetTypeById (
    
    assetTypeId: string | number,
    options?: RequestOptions
)  {
    // Use absolute URL from typed wrapper so calls don't depend on Playwright baseURL
    return await this.request.get(ENDPOINTS.GET_ASSET_TYPE_BY_ID + `/${assetTypeId}`, options);
};

 async getAllAssetTypes (  options?: RequestOptions)  {
    // Use absolute URL from typed wrapper so calls don't depend on Playwright baseURL
     
    let response= await this.request.get(ENDPOINTS.GET_ASSET_TYPE_BY_ID, options);
    console.log("Asset Types response:", response);

     return response
};

async getAssetListSummary (  options?: RequestOptions)  {
    // Use absolute URL from typed wrapper so calls don't depend on Playwright baseURL
     
    let response= await this.request.get(ENDPOINTS.GET_ASSET_LIST_SUMMARY, options);
    console.log("Asset List Summary response:", response);
        return response
    };
}