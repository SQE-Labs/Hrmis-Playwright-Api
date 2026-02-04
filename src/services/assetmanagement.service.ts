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

async getAssetAccessRequestPageList ( options?: RequestOptions)  {

    let response = await this.request.get(ENDPOINTS.GET_ASSET_ACCESS_REQUEST_PAGE_LIST, options);
    console.log("Asset Access Request Page List:", response);
        return response
    }

async getAssetAccessRequestDlList ( options?: RequestOptions)  {

    let response = await this.request.get(ENDPOINTS.GET_ASSET_ACCESS_REQUEST_PAGE_DL_LIST, options);
    console.log("Asset Access Request DL List:", response);
        return response
    }

async getAssetAccessRequestStatusApproved ( options?: RequestOptions)  {

    let response = await this.request.get(ENDPOINTS.GET_ASSET_ACCESS_REQUEST_STATUS_APPROVED, options);
    console.log("Asset Access Request Status Approved List:", response);
        return response
    }

async getActiveProjects ( options?: RequestOptions)  {

    let response = await this.request.get(ENDPOINTS.GET_ACTIVE_PROJECTS, options);
    console.log("Get Active Projects response:", response);
        return response
    }

async getAssetOwnerTypes ( options?: RequestOptions)  {

    let response = await this.request.get(ENDPOINTS.GET_ASSET_OWNER_TYPES, options);
    console.log("Get Asset Owner Types response:", response);
        return response
    }

async getAssetTypeRequestStatusAll ( options?: RequestOptions) {

    let response = await this.request.get(ENDPOINTS.GET_STATUS_CATEGORY_ALL, options);
    console.log("Get Asset Type Request Status All:", response);
        return response
    }

async getAssetTypeRequestStatusPending ( options?: RequestOptions) {

    let response = await this.request.get(ENDPOINTS.GET_STATUS_CATEGORY_PENDING, options);
    console.log("Get Asset Type Request Status Pending:", response);
        return response
    }

async getApproverAssetReqList ( options?: RequestOptions)  {

    let response = await this.request.get(ENDPOINTS.GET_APPROVER_ASSET_REQUEST_LIST, options);
    console.log("Get Approver Asset Request List:", response);
        return response
    }
}