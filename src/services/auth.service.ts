import { ApiClient } from '../clients/apiClient';
import { BASE_URL } from '../../constants/endpoints';
import { ENDPOINTS } from '../../constants/endpoints';

export const signIn = async (client: ApiClient, payload: { email: string; password: string }) => {
    // Use absolute URL from typed wrapper so calls don't depend on Playwright baseURL
    return client.post(BASE_URL + ENDPOINTS.POST_SIGNIN, payload);
};
