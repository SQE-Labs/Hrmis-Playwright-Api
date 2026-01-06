import { ApiClient, RequestOptions } from '../clients/apiClient';
import { ENDPOINTS } from '../../constants/endpoints';

export const getAssetTypeById = async (
  client: ApiClient,
  assetTypeId: string | number,
  options?: RequestOptions
) => {
  // baseURL will be picked automatically
  return client.get(`${ENDPOINTS.GET_ASSET_TYPE_BY_ID}/${assetTypeId}`, options);
};

export const getAllAssetTypes = async (
  client: ApiClient,
  options?: RequestOptions
) => {
  return client.get(ENDPOINTS.GET_ASSET_TYPE_BY_ID, options);
};
