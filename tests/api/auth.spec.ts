import { test, expect } from '@playwright/test';
import { ApiClient } from '../../src/clients/apiClient';
import { signIn } from '../../src/services/auth.service';
import { validSignin } from '../../testdata/payloads';
import { getAuthenticatedClient, signInAndGetToken } from './helpers/authHelper';

test.describe('Auth API - Signin', () => {
    test('AUTH-PF-001 - Verify user can sign in with valid email & password', async ({ request }) => {
        // Use the helper to verify sign-in both as an integration and a reusable path
        const token = await signInAndGetToken(request);
        console.log('Obtained Access Token:', token);
        expect(token).toBeTruthy();

        // Also verify the full sign-in flow still works (sanity check)
        const client = await getAuthenticatedClient(request);
        expect(client).toBeTruthy();
    });
});
