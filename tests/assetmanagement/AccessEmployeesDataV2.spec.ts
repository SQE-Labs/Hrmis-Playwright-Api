import {test, expect} from '../../fixtures/role.fixtures';

test.describe('Access Employees Data V2', () => {

    test("Verify that the user can access the employee data with valid credentials", async ({ apiAsSuperAdmin }) => {
        const res = await apiAsSuperAdmin.assets.getEmployeesDataV2();

        //Status code Validation
        expect(res.status).toBe(200);

        //Response body validation
        expect(res.body).toHaveProperty('statusCode');
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('Data fetched successfully.');
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);

        // Validate structure of each item in the data array
        res.body.data.forEach((employee: any) => {
            expect(employee).toHaveProperty('accessId');
            expect(typeof employee.accessId).toBe('number');

            expect(employee).toHaveProperty('fullName');
            expect(typeof employee.fullName).toBe('string');

            expect(employee).toHaveProperty('accessName');
            expect(typeof employee.accessName).toBe('string');

            expect(employee).toHaveProperty('userRole');
            expect(employee).toHaveProperty('deliveryLead');
            expect(employee).toHaveProperty('projectName');
            expect(employee).toHaveProperty('status');

        });

        console.log(
            'Validated Employees Data V2:',
            JSON.stringify(res.body.data, null, 2)
        );
    });

    test("Verify that the user cannot access the employee data with invalid credentials", async ({ apiAsEmployee }) => {
        const res = await apiAsEmployee.assets.getEmployeesDataV2();

        //Status code Validation
        expect(res.status).toBe(403);

        //Response body validation
        expect(res.body).toHaveProperty('statusCode');
        expect(res.body).toHaveProperty('message');

        //Message validation
        expect(res.body.message).toBe('You are not authorized to access this resource.');

        // Structure validation
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toBeNull();
        console.log(
            'Validated Employees Data V2 with invalid credentials:',
            JSON.stringify(res.body, null, 2)
        );
    });

});
