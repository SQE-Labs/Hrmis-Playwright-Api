import {test, expect} from '../../fixtures/role.fixtures';

test.describe("Profile - My Profile", () => {

    test("IM-12 - Verify that profile of Super Admin is displayed with all the information", async ({ apiAsSuperAdmin }) => {
        const res = await apiAsSuperAdmin.myProfile.getProfile();

        // Status Code Validation
        expect(res.status).toBe(200);

        const body = await res.body;

        // Response Body Validation
        expect(body).toBeDefined();
        expect(body.statusCode).toBe(200);
        expect(body.message).toBe('Profile fetched successfully');

        expect(body).toHaveProperty('data');
        expect(typeof body.data).toBe('object');

        expect(body.data).toHaveProperty('personalDetail');
        expect(typeof body.data.personalDetail).toBe('object');

        const profile = body.data.personalDetail;

        // Basic Field Validation
        expect(typeof profile.id).toBe('number');
        expect(typeof profile.employeeId).toBe('string');
        expect(typeof profile.empName).toBe('string');
        expect(typeof profile.firstName).toBe('string');
        expect(typeof profile.lastName).toBe('string');
        expect(typeof profile.gender).toBe('string');
        expect(typeof profile.phoneNumber).toBe('string');
        expect(typeof profile.enabled).toBe('boolean');
        expect(typeof profile.status).toBe('string');

        // Roles Validation (array)
        expect(Array.isArray(profile.roles)).toBe(true);
        profile.roles.forEach((role: string) => {
            expect(typeof role).toBe('string');
        });

    });


    test("IM-12 - Verify that profile of Employee is displayed with all the information", async ({ apiAsEmployee }) => {
        const res = await apiAsEmployee.myProfile.getProfile();

        // Status Code Validation
        expect(res.status).toBe(200);

        const body = await res.body;

        // Response Body Validation
        expect(body).toBeDefined();
        expect(body.statusCode).toBe(200);
        expect(body.message).toBe('Profile fetched successfully');

        expect(body).toHaveProperty('data');
        expect(typeof body.data).toBe('object');

        expect(body.data).toHaveProperty('personalDetail');
        expect(typeof body.data.personalDetail).toBe('object');

        const profile = body.data.personalDetail;

        // Basic Field Validation
        expect(typeof profile.id).toBe('number');
        expect(typeof profile.employeeId).toBe('string');
        expect(typeof profile.empName).toBe('string');
        expect(typeof profile.firstName).toBe('string');
        expect(typeof profile.lastName).toBe('string');
        expect(typeof profile.gender).toBe('string');
        expect(typeof profile.phoneNumber).toBe('string');
        expect(typeof profile.enabled).toBe('boolean');
        expect(typeof profile.status).toBe('string');

        // Roles Validation (array)
        expect(Array.isArray(profile.roles)).toBe(true);
        profile.roles.forEach((role: string) => {
            expect(typeof role).toBe('string');
        });

    });
})