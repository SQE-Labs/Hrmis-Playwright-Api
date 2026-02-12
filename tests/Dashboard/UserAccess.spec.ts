import {test, expect} from '../../fixtures/role.fixtures';

test.describe('Dashboard resources', () => {

    test('IM-02_ Verify the user is able to access dashboard resources', async ({ apiAsSuperAdmin }) => {
        const response = await apiAsSuperAdmin.dashboard.getUserAccess();

        //Status Code Validation
        expect(response.status).toBe(200);

        //Response Body Validation
        expect(response.body).toHaveProperty('code');
        expect(response.body).toHaveProperty('data');

        // Validate the structure of the data array
        expect(Array.isArray(response.body.data)).toBe(true);
        expect(response.body.data.length).toBeGreaterThan(0);

        // Validate the structure of each user access object
        response.body.data.forEach((userAccess: any) => {
            expect(userAccess).toHaveProperty('id');
            expect(typeof userAccess.id).toBe('number');

            expect(userAccess).toHaveProperty('name');
            expect(typeof userAccess.name).toBe('string');

            expect(userAccess).toHaveProperty('achorValue');
            expect(typeof userAccess.achorValue).toBe('string');

            expect(userAccess).toHaveProperty('assigned');
            expect(typeof userAccess.assigned).toBe('boolean');
        });

        console.log(
            "User Access response body:",
            JSON.stringify(response.body, null, 2)
        );
    });

    test('IM-02_ Verify the user is able to access dashboard resources with employee role', async ({ apiAsEmployee }) => {
        const response = await apiAsEmployee.dashboard.getUserAccess();

        //Status Code Validation
        expect(response.status).toBe(200);

        //Response Body Validation
        expect(response.body).toHaveProperty('code');
        expect(response.body).toHaveProperty('data');

        // Validate the structure of the data array
        expect(Array.isArray(response.body.data)).toBe(true);
        expect(response.body.data.length).toBeGreaterThan(0);

        // Validate the structure of each user access object
        response.body.data.forEach((userAccess: any) => {
            expect(userAccess).toHaveProperty('id');
            expect(typeof userAccess.id).toBe('number');

            expect(userAccess).toHaveProperty('name');
            expect(typeof userAccess.name).toBe('string');

            expect(userAccess).toHaveProperty('achorValue');
            expect(typeof userAccess.achorValue).toBe('string');

            expect(userAccess).toHaveProperty('assigned');
            expect(typeof userAccess.assigned).toBe('boolean');
        });

        console.log(
            "User Access response body for employee:",
            JSON.stringify(response.body, null, 2)
        );
    });
});
