import {test, expect} from'../../fixtures/role.fixtures';

test.describe('Punch Details', () => {

    test("IM-03: Verify that the punch details are displayed correctly for a specific punch", async ({ apiAsSuperAdmin }) => {
        const res = await apiAsSuperAdmin.dashboard.getPunchDetails();

        // Status code assertion
        expect(res.status).toBe(200);

        const body = await res.body;

        // Response body assertions
        expect(body).toHaveProperty('data');
        expect(Array.isArray(body.data)).toBe(true);
        expect(body.data.length).toBeGreaterThan(0);

        // Access first punch record
        const firstRecord = body.data[0];

        expect(firstRecord).toHaveProperty('work_entry');
        expect(typeof firstRecord.work_entry).toBe('object');

        expect(firstRecord).toHaveProperty('login_minutes');
        expect(typeof firstRecord.login_minutes).toBe('number');

        const punch = firstRecord.work_entry;

        // Validate work_entry structure
        expect(typeof punch.date).toBe('string');
        expect(typeof punch.punch_in_time).toBe('string');
        expect(typeof punch.punch_in_out).toBe('string');
        expect(typeof punch.total_hour).toBe('string');
        expect(typeof punch.is_positive_hour).toBe('boolean');
        expect(typeof punch.is_compiled).toBe('boolean');

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