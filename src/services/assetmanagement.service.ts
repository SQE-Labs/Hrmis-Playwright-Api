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

 async getAllAssetTypes(
  owner: string = 'ALL',
  assestTypeId: number = 0,
  options?: RequestOptions
) {
  let response = await this.request.get(
    ENDPOINTS.GET_ASSET_TYPE_BY_ID,
    {
      ...options,
      params: {
        owner,
        assestTypeId
      }
    }
  );
  console.log("Get Asset Type by ID:", response);
  return response;
}

async getAssetListSummary (  options?: RequestOptions)  {
    // Use absolute URL from typed wrapper so calls don't depend on Playwright baseURL
     
    let response= await this.request.get(ENDPOINTS.GET_ASSET_LIST_SUMMARY, options);
    console.log("Asset List Summary response:", response);
        return response
    };

async getAssetAllocatedListSummary(
  params: {
    pageSize?: number;
    page?: number;
  } = {},
  options?: RequestOptions
) {
  let response = await this.request.get(
    ENDPOINTS.GET_ASSET_ALLOCATED_LIST_SUMMARY,
    {
      ...options,
      params: {
        pageSize: params.pageSize ?? 10,
        page: params.page ?? 1
      }
    }
  );
  console.log("Get Asset Allocated List summary:", response);
  return response;
}

async getUsersList (  options?: RequestOptions)  {
    // Use absolute URL from typed wrapper so calls don't depend on Playwright baseURL  
    let response= await this.request.get(ENDPOINTS.GET_USERS_LIST, options);
    console.log("Users List response:", response);
        return response
    };

async getAssetAssignedToUser (
    params: {
    employeeId?: number;
    } = {},
    options?: RequestOptions)  {
      
    let response= await this.request.get(
        ENDPOINTS.GET_ASSET_ASSIGNED_TO_USER,
        {
           ...options,
           params:{
            employeeId: params.employeeId ?? 271
           } 
        }
    );
    console.log("Asset Assigned To User response:", response);
        return response
    }

async getAssetRequestPageList (
    params: {
    pageSize?: number;
    page?: number;
    } = {},
    options?: RequestOptions)  {

    let response = await this.request.get(
        ENDPOINTS.GET_ASSET_REQUEST_PAGE_LIST,
        {
        ...options,
        params: {
            pageSize: params.pageSize ?? 10,
            page: params.page ?? 1
        }
    }
    );
    console.log("Asset Request Page List:", response);
        return response
}

async getAssetAccessRequestPageList (
    params: {
    pageSize?: number;
    pageNo?: number;
    status?: string;
    } = {},
    options?: RequestOptions)  {

    let response = await this.request.get(
        ENDPOINTS.GET_ASSET_ACCESS_REQUEST_PAGE_LIST,
        {
            ...options,
                params: {
                    pageSize: params.pageSize ?? 10,
                    pageNo: params.pageNo ?? 1,
                    status: params.status ?? '',
                }
        }
    );
    console.log("Asset Access Request Page List:", response);
        return response
    }

async getAssetAccessRequestDlList ( options?: RequestOptions)  {

    let response = await this.request.get(ENDPOINTS.GET_ASSET_ACCESS_REQUEST_PAGE_DL_LIST, options);
    console.log("Asset Access Request DL List:", response);
        return response
    }

async getAssetAccessRequestStatusApproved (
    params: {
    status?: string;
    } = {},
    options?: RequestOptions)  {

    let response = await this.request.get(
        ENDPOINTS.GET_ASSET_ACCESS_REQUEST_STATUS_APPROVED,
        {
            ...options,
            params: {
                status: params.status ?? 'APPROVED' 
            }
        }
        );
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

async getAssetTypeRequestStatusAll (
    params: {
    status?: string;
    } = {},
    options?: RequestOptions) {

    let response = await this.request.get(
        ENDPOINTS.GET_STATUS_CATEGORY_ALL,
        {
            ... options,
            params: {
                status : params.status ?? 'ALL'
            }
        }
        );
    console.log("Get Asset Type Request Status All:", response);
        return response
    }

async getAssetTypeRequestStatusPending (
    params: {
    status?: string;
    } = {},
    options?: RequestOptions) {

    let response = await this.request.get(
        ENDPOINTS.GET_STATUS_CATEGORY_PENDING,
        {
            ...options,
            params: {
                status: params.status ?? 'PENDING' 
            }
        }
    );
    console.log("Get Asset Type Request Status Pending:", response);
        return response
    }

async getApproverAssetReqList (
    params: {
    page?: number;
    size?: number;
    } = {},
    options?: RequestOptions)  {

    let response = await this.request.get(
        ENDPOINTS.GET_APPROVER_ASSET_REQUEST_LIST,
        {
            ... options,
            params: {
                page: params.page ?? 0,
                size: params.size ?? 10
            }
        }
    );
    console.log("Get Approver Asset Request List:", response);
        return response
    }

async getEmployeesDataV2 ( options?: RequestOptions)  {

    let response = await this.request.get(ENDPOINTS.GET_EMPLOYEES_DATA_V2, options);
    console.log("Get Employees Data V2 response:", response);
        return response
    }
}