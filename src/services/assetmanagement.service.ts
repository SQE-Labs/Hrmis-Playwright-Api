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

async getAssetAllocatedListSummary (  options?: RequestOptions)  {
    // Use absolute URL from typed wrapper so calls don't depend on Playwright baseURL

    let response= await this.request.get(ENDPOINTS.GET_ASSET_ALLOCATED_LIST_SUMMARY, options);
    console.log("Asset Allocated List Summary response:", response);
        return response
    };

async getUsersList (  options?: RequestOptions)  {
    // Use absolute URL from typed wrapper so calls don't depend on Playwright baseURL  
    let response= await this.request.get(ENDPOINTS.GET_USERS_LIST, options);
    console.log("Users List response:", response);
        return response
    };

async getAssetAssignedToUser (  options?: RequestOptions)  {
    // Use absolute URL from typed wrapper so calls don't depend on Playwright baseURL  
    let response= await this.request.get(ENDPOINTS.GET_ASSET_ASSIGNED_TO_USER, options);
    console.log("Asset Assigned To User response:", response);
        return response
    }

async getAssetRequestPageList ( options?: RequestOptions)  {

    let response = await this.request.get(ENDPOINTS.GET_ASSET_REQUEST_PAGE_LIST, options);
    console.log("Asset Request Page List:", response);
        return response
    }
}