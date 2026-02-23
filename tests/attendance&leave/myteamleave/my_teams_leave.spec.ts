import { test, expect } from '../../../fixtures/role.fixtures';
import { getMyTeamLeaveParams } from '../../../testdata/params';
test.describe('Attendance & Leave API', () => {
    test("Get My Team's Leave Requests", async ({ apiAsSuperAdmin }) => {
        const res = await apiAsSuperAdmin.attendanceAndLeave.getMyTeamLeaveRequests(
            getMyTeamLeaveParams.status,
            getMyTeamLeaveParams.pageSize,
            getMyTeamLeaveParams.page
        );

        expect(res.status).toBe(200);

        // 1. Basic Structure Assertions
        expect(res.body).toEqual(
            expect.objectContaining({
                totalPages: expect.any(Number),
                totalLeave: expect.any(Number),
                data: expect.any(Array)
            })
        );

        // 2. Handle Empty vs. Non-Empty States
        if (res.body.totalLeave === 0) {
            // Assertion for when no records exist
            expect(res.body.data.length).toBe(0);
            expect(res.body.totalPages).toBe(0);
            console.log('No leave records found for this team.');
            console.log(JSON.stringify(res.body, null, 2));
        } else {
            // Assertions for when records exist
            expect(res.body.totalPages).toBeGreaterThanOrEqual(1);
            expect(res.body.data.length).toBeGreaterThan(0);

            const leave = res.body.data[0];
            expect(leave).toEqual(
                expect.objectContaining({
                    laveId: expect.any(Number), // keeping your handled typo
                    employeeName: expect.any(String),
                    managerStatus: 'PENDING'
                })
            );
            console.log('Fetched Leave ID:', leave.laveId);
        }
    });

    test("Get My Team's Leave Requests - Invalid Auth", async ({ apiAsEmployee }) => {
        const res = await apiAsEmployee.attendanceAndLeave.getMyTeamLeaveRequests(
            getMyTeamLeaveParams.status,
            getMyTeamLeaveParams.pageSize,
            getMyTeamLeaveParams.page
        );
        expect(res.body).toEqual({
            statusCode: 403,
            message: 'You are not authorized to access this resource.',
            data: null,
        });
    });
});