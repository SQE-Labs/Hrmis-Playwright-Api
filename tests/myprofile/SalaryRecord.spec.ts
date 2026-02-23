import {test, expect} from '../../fixtures/role.fixtures';

test.describe("Salary Record - My Profile", () => {

    test('IM-13 - Verify that salary record is displayed correctly for the Super Admin role', async ({apiAsSuperAdmin}) => {
        const res = await apiAsSuperAdmin.myProfile.getSalary({year: 2026});

        //Status Code Validation
        expect(res.status).toBe(200);

        //Response Body Validation
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);

        //Validate each record
        res.body.data.forEach((salary: any) => {
            expect(salary).toHaveProperty('id');
            expect(typeof salary.id).toBe('number');

            expect(salary).toHaveProperty('employeeId');
            expect(typeof salary.employeeId).toBe('number')

            expect(salary).toHaveProperty('month');
            expect(typeof salary.month).toBe('string');

            expect(salary).toHaveProperty('year');
            expect(typeof salary.year).toBe('string');

            expect(salary).toHaveProperty('fileName');
            expect(typeof salary.fileName).toBe('string');

        });

    });

    test('IM-13 - Verify that salary record is displayed correctly for the Employee role', async ({apiAsEmployee}) => {
        const res = await apiAsEmployee.myProfile.getSalary({year: 2026});

        //Status Code Validation
        expect(res.status).toBe(200);

        //Response Body Validation
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);

        //Validate each record
        res.body.data.forEach((salary: any) => {
            expect(salary).toHaveProperty('id');
            expect(typeof salary.id).toBe('number');

            expect(salary).toHaveProperty('employeeId');
            expect(typeof salary.employeeId).toBe('number')

            expect(salary).toHaveProperty('month');
            expect(typeof salary.month).toBe('string');

            expect(salary).toHaveProperty('year');
            expect(typeof salary.year).toBe('string');

            expect(salary).toHaveProperty('fileName');
            expect(typeof salary.fileName).toBe('string');

        });

    });

})