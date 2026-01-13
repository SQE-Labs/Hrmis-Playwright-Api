import { test, expect } from '../../../fixtures/role.fixtures';

test.describe('Attendance & Leave API', () => {
    test('Verify Leave Types', async ({ apiAsSuperAdmin }) => {

        const res = await apiAsSuperAdmin.attendanceAndLeave.getLeaveTypes();

        // Status and contract
        expect(res.status).toBe(200);
        expect(res.body).toBeTruthy();
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBeTruthy();
        // console.log('Fetched Leave Types:', res.body);
        for (const leave of res.body.data) {
            expect(leave).toHaveProperty('id');
            expect(typeof leave.id).toBe('number');

            expect(leave).toHaveProperty('leaveType');
            expect(typeof leave.leaveType).toBe('string');

            expect(leave).toHaveProperty('leaveTypeName');
            expect(typeof leave.leaveTypeName).toBe('string');

            expect(leave).toHaveProperty('status');
            expect(typeof leave.status).toBe('boolean');

            expect(leave).toHaveProperty('leaveFor');
            expect(typeof leave.leaveFor).toBe('string');
        }
        const leaveTypes = res.body.data.map((l: any) => l.leaveType);

        expect(leaveTypes).toContain('PrivilegeLeave');
        expect(leaveTypes).toContain('HalfDayLeave');

    });
});