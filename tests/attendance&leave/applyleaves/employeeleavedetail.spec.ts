import { test, expect } from '@playwright/test';
import { getEmployeeLeaveDetails } from '../../../src/services/attendance&leave';


test.describe('Attendance & Leave API', () => {
    test('Verify Employee Leave Details', async ({ request }) => {
        const employeeId = 271;

        const res = await apiAsSuperAdmin.getEmployeeLeaveDetails(employeeId);


        expect(res.status).toBe(200);
      
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toBeInstanceOf(Object);

        const data = res.body.data;

        expect(data).toHaveProperty('id');
        expect(data).toHaveProperty('employeeId');
        expect(data).toHaveProperty('creationDate');
        expect(data).toHaveProperty('lastModifiedDate');

        expect(data.employeeId).toBe(employeeId);
        expect(typeof data.id).toBe('number');

        expect(data.quartelyLeave).toEqual(expect.any(Number));
        expect(data.privilegeLeave).toEqual(expect.any(Number));
        expect(data.workFromHomeLeave).toEqual(expect.any(Number));
        expect(data.paternityLeave).toEqual(expect.any(Number));
        expect(data.maternityLeave).toEqual(expect.any(Number));
        expect(data.shortLeave).toEqual(expect.any(Number));
        expect(data.halfDayLeave).toEqual(expect.any(Number));
        expect(data.unpaidLeaveBalanceMonth).toEqual(expect.any(Number));
        expect(data.unpaidLeaveBalanceYear).toEqual(expect.any(Number));

        expect(data.unpaidLeaveBalanceMonth).toBeGreaterThanOrEqual(0);
        expect(data.unpaidLeaveBalanceYear).toBeGreaterThanOrEqual(0);

        expect(data.maternityLeave).toBeLessThanOrEqual(0);

        // console.log('Fetched Employee Leave Details:', data);
    });
});