import {test, expect} from '../../fixtures/role.fixtures';

test.describe("Tax Form - My Profile", () => {

    test('IM-14 - Verify that tax form is displayed correctly for the Super Admin role', async ({apiAsSuperAdmin}) => {
        const res = await apiAsSuperAdmin.myProfile.getTaxForm({year: 2026});

        //Status Code Validation
        expect(res.status).toBe(200);

        //Response Body Validation
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);

    });

    test('IM-13 - Verify that tax form is displayed correctly for the Employee role', async ({apiAsEmployee}) => {
        const res = await apiAsEmployee.myProfile.getTaxForm({year: 2026});

        //Status Code Validation
        expect(res.status).toBe(200);

        //Response Body Validation
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);

    });

});