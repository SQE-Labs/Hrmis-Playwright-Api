import {test, expect} from'../../fixtures/role.fixtures';

test.describe('Punch Details', () => {

    test("IM-03: Verify that the punch details are displayed correctly for a specific punch", async ({apiAsSuperAdmin}) => {
        const res = await apiAsSuperAdmin.dashboard.getPunchDetails();

        //Status code assertion
        expect(res.status).toBe(200);

        //Response body assertions
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);

        // Validate the structure of the first punch detail
        res.body.data.forEach((punch: any) => {
            expect(punch).toHaveProperty('date');
            expect(typeof punch.date).toBe('string');

            expect(punch).toHaveProperty('punch_in_time');
            expect(typeof punch.punch_in_time).toBe('string');

            expect(punch).toHaveProperty('punch_in_out');
            expect(typeof punch.punch_in_out).toBe('string');

            expect(punch).toHaveProperty('total_hour');
            expect(typeof punch.total_hour).toBe('string');

            expect(punch).toHaveProperty('is_positive_hour');
            expect(typeof punch.is_positive_hour).toBe('boolean');
        });

    });

    test("IM-03: Verify that the punch details are displayed correctly for a specific employee", async ({apiAsEmployee}) => {
        const res = await apiAsEmployee.dashboard.getPunchDetails();

        //Status code assertion
        expect(res.status).toBe(200);

        //Response body assertions
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);

    });   
});