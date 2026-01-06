import { test, expect } from '@playwright/test';
import { getUsers } from '../../../../src/services/attendance&leave';
import { getAuthenticatedClient } from '../../helpers/authHelper';

test.describe('Attendance & Leave API', () => {
    test('Verify fetching of users', async ({ request }) => {
        // Reusable helper returns a client with auth already set
        const client = await getAuthenticatedClient(request);

        // Call getUsers endpoint
        const res = await getUsers(client);

        // Status and contract
        expect(res.status).toBe(200);
        expect(res.body).toBeTruthy();
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('Employees fetched successfully');
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBeTruthy();
        // console.log('Fetched Users:', res.body);
    });
});