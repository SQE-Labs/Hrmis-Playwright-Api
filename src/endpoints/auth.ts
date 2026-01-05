import { ApiClient } from '../api/client';
import { endpoints } from '.';

export const signIn = async (client: ApiClient, payload: { email: string; password: string }) => {
    // Use absolute URL from typed wrapper so calls don't depend on Playwright baseURL
    return client.post(endpoints.auth.signin, payload);
};
