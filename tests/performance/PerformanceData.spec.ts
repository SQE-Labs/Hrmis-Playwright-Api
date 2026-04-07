import {test, expect} from '../../fixtures/role.fixtures';

test.describe("Performance Data", () => {

    test('IM-15 - Verify that performance data is retrieved successfully for the Super Admin role', async  ({apiAsSuperAdmin}) => {
        const res = await apiAsSuperAdmin.performance.getPerformance();

        //Status Code Validation
        expect(res.status).toBe(200);

        //Response Body Validation
        expect(res.body).toHaveProperty('data');
        expect(typeof res.body.data).toBe('object');

        //Basic Field Validation
        expect(res.body.data).toHaveProperty('userId');
        expect(typeof res.body.data.userId).toBe('number');

        expect(res.body.data).toHaveProperty('performanceData');
        expect(typeof res.body.data.performanceData).toBe('object');
    });

    test('IM-15 - Verify that performance data is retrieved successfully for the Employee role', async  ({apiAsEmployee}) => {
        const res = await apiAsEmployee.performance.getPerformance();

        //Status Code Validation
        expect(res.status).toBe(200);

        //Response Body Validation
        expect(res.body).toHaveProperty('data');
        expect(typeof res.body.data).toBe('object');

        //Basic Field Validation
        expect(res.body.data).toHaveProperty('userId');
        expect(res.body.data.userId === null || typeof res.body.data.userId === 'number').toBeTruthy();

        expect(res.body.data).toHaveProperty('performanceData');
        expect(res.body.data.performanceData === null || typeof res.body.data.performanceData === 'object').toBeTruthy();
    });
});