import { APIRequestContext } from '@playwright/test';
import { ApiClient } from '../../../src/clients/apiClient';
import { signIn } from '../../../src/services/auth.service';
import { validSignin } from '../../../testdata/payloads';

/**
 * Sign in using the configured valid credentials and return an ApiClient with auth set.
 */
export async function getAuthenticatedClient(request: APIRequestContext) {
    const client = new ApiClient(request);
    const authRes = await signIn(client, validSignin);
    if (authRes.status !== 200) throw new Error(`Sign-in failed: ${JSON.stringify(authRes.body)}`);
    client.setAuth(authRes.body.accessToken);
    return client;
}

/**
 * Sign in and return just the access token string.
 */
export async function signInAndGetToken(request: APIRequestContext) {
    const client = new ApiClient(request);
    const authRes = await signIn(client, validSignin);
    if (authRes.status !== 200) throw new Error(`Sign-in failed: ${JSON.stringify(authRes.body)}`);
    return authRes.body.accessToken;
}


export function getCurrentDateFormatted() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
export function getDatePlusDaysFormatted(daysToAdd: number) {
    const date = new Date();
    date.setDate(date.getDate() + daysToAdd);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
