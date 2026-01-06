import { ApiClient, RequestOptions } from '../clients/apiClient';
import { ENDPOINTS } from '../../constants/endpoints';

export const getAssetTypeById = async (
    client: ApiClient,
    assetTypeId: string | number,
    options?: RequestOptions
) => {
    // Use absolute URL from typed wrapper so calls don't depend on Playwright baseURL
    return client.get(ENDPOINTS.GET_ASSET_TYPE_BY_ID + `/${assetTypeId}`, options);
};

export const getAllAssetTypes = async (
    client: ApiClient,
    options?: RequestOptions
) => {
    // Use absolute URL from typed wrapper so calls don't depend on Playwright baseURL
    return client.get(ENDPOINTS.GET_ASSET_TYPE_BY_ID, options);
};
