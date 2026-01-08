import { test, expect } from '@playwright/test';
import { onboardEmployee } from '../../src/endpoints/employeemanagement';
import { getAuthenticatedClient } from './helpers/authHelper';
import { validOnboarding, onboardingWithoutEmail, onboardingWithInvalidEmail, onboardingWithoutFile } from '../../src/payloads/onboarding';

test.describe('Employee Onboarding API', () => {
    test('TC_ON_01 - Verify successful employee onboarding with valid data', async ({ request }) => {
        const client = await getAuthenticatedClient(request);

        const res = await onboardEmployee(client, validOnboarding);

        expect(res.status).toBe(200);
        expect(res.body).toBeTruthy();
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toContain('success'); // Assuming success message
        console.log('Onboarding Response:', res.body);
    });

    test('TC_ON_02 - Verify onboarding fails without emailId', async ({ request }) => {
        const client = await getAuthenticatedClient(request);

        const res = await onboardEmployee(client, onboardingWithoutEmail);

        expect(res.status).toBe(400); // Assuming bad request
        expect(res.body).toBeTruthy();
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toContain('emailId'); // Assuming error mentions emailId
        console.log('Onboarding without email Response:', res.body);
    });

    test('TC_ON_03 - Verify onboarding fails with invalid email format', async ({ request }) => {
        const client = await getAuthenticatedClient(request);

        const res = await onboardEmployee(client, onboardingWithInvalidEmail);

        expect(res.status).toBe(400); // Assuming bad request
        expect(res.body).toBeTruthy();
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toContain('email'); // Assuming error mentions email
        console.log('Onboarding with invalid email Response:', res.body);
    });

    test('TC_ON_04 - Verify onboarding fails without offer letter file', async ({ request }) => {
        const client = await getAuthenticatedClient(request);

        const res = await onboardEmployee(client, onboardingWithoutFile);

        expect(res.status).toBe(400); // Assuming bad request
        expect(res.body).toBeTruthy();
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toContain('file'); // Assuming error mentions file
        console.log('Onboarding without file Response:', res.body);
    });
});