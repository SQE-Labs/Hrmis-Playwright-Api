import { test, expect } from '@playwright/test';
import { getEmployees } from '../../src/services/employeemanagement.service';
import { getAuthenticatedClient } from '../helpers/authHelper';

test.describe('Employee Management API - Employee Directory', () => {
    test('TC_EM_01 - Verify successful fetching of employee details with valid ID and VERIFIED status', async ({ request }) => {
        // Reusable helper returns a client with auth already set
        const client = await getAuthenticatedClient(request);

        // Call employee directory with query params id=271 & status=VERIFIED
        const res = await getEmployees(client, { id: '271', status: 'VERIFIED' });

        // Status and contract
        expect(res.status).toBe(200);
        expect(res.body).toBeTruthy();
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('Employees fetched successfully');
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBeTruthy();
        expect(res.body.data.length).toBeGreaterThan(0);
        // console.log('Fetched Employees:', res.body);
        // Ensure one of the returned employee objects matches the expected id & status
        const found = res.body.data.find((e: any) => String(e.id) === '271' && e.status === 'VERIFIED');
        expect(found).toBeTruthy();
    });

    test('TC_EM_02 - Verify successful fetching of employee details with valid ID and BLOCKED status', async ({ request }) => {
        // Reusable helper returns a client with auth already set
        const client = await getAuthenticatedClient(request);

        const res = await getEmployees(client, { id: '417', status: 'BLOCKED' });
        // Status and contract
        expect(res.status).toBe(200);
        expect(res.body).toBeTruthy();
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('Employees fetched successfully');
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBeTruthy();
        // console.log('Fetched Employees:', res.body); 

        // Ensure one of the returned employee objects matches the expected id & status
        const found = res.body.data.find((e: any) => String(e.id) === '417' && e.status === 'BLOCKED');
        expect(found).toBeTruthy();
    });
    test('TC_EM_03 - Verify successful fetching of employee details with valid ID and LEFTOUT status', async ({ request }) => {
        // Reusable helper returns a client with auth already set
        const client = await getAuthenticatedClient(request);

        const res = await getEmployees(client, { id: '399', status: 'LEFTOUT' });
        // Status and contract
        expect(res.status).toBe(200);
        expect(res.body).toBeTruthy();
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('Employees fetched successfully');
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBeTruthy();
        // console.log('Fetched Employees:', res.body);

        // Ensure one of the returned employee objects matches the expected id & status
        const found = res.body.data.find((e: any) => String(e.id) === '399' && e.status === 'LEFTOUT');
        expect(found).toBeTruthy();
    });
});
