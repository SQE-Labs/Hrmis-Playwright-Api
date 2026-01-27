import { test, expect } from '../../../fixtures/role.fixtures';


test.describe('Attendance & Leave API', () => {

    test('Verify Employee Leave Details from Super Admin', async ({ apiAsSuperAdmin }) => {
        const employeeId = 389; //Employee ID

        const res = await apiAsSuperAdmin.attendanceAndLeave.getEmployeeLeaveDetails(employeeId);

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

        // expect(data.maternityLeave).toBeLessThanOrEqual(0);

        console.log('Fetched Employee Leave Details:', data);
    });
    test('Verify SuperAdmin Leave Details from Employee @bug', async ({ apiAsEmployee }) => {
        const employeeId = 271; //SuperAdmin ID

        const res = await apiAsEmployee.attendanceAndLeave.getEmployeeLeaveDetails(employeeId);

        expect(res.status).toBe(403);

        expect(res.body).toEqual({
            statusCode: 403,
            message: 'Access denied: insufficient permissions',
            data: null,
        });
        console.log('Response Body for Employee User:', JSON.stringify(res.body, null, 2));
    });
});