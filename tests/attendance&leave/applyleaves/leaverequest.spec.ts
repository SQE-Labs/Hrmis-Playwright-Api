import { test, expect } from '../../../fixtures/role.fixtures';

test.describe('Attendance & Leave API', () => {
    test('Verify Leave Requests Super Admin', async ({ apiAsSuperAdmin }) => {
        const pageSize = 10;
        const page = 1;

        const res = await apiAsSuperAdmin.attendanceAndLeave.getLeaveRequests({ pageSize, page });

        expect(res.status).toBe(200);
        expect(res.headers!['content-type']).toContain('application/json');

        expect(res.body).toEqual(
            expect.objectContaining({
                totalPages: expect.any(Number),
                totalLeave: expect.any(Number),
                data: expect.any(Array)
            })
        );

        expect(res.body.data.length).toBeLessThanOrEqual(pageSize);
        expect(res.body.totalLeave).toBeGreaterThanOrEqual(res.body.data.length);

        res.body.data.forEach((leave: any) => {
            expect(leave).toEqual(
                expect.objectContaining({
                    laveId: expect.any(Number),
                    startDate: expect.any(String),
                    endDate: expect.any(String),
                    reasonOfLeave: expect.any(String),
                    typeOfLeave: expect.any(String),
                    considerLeave: expect.any(Boolean),
                    noOfDays: expect.any(Number),
                    managerStatus: expect.any(String),
                    leaveFinalStatus: expect.any(String)
                })
            );
            expect(leave.startDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
            expect(leave.endDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
            expect(leave.noOfDays).toBeGreaterThan(0);
            expect(leave.leaveFinalStatus).toBe(leave.managerStatus);
            if (leave.approverStatus) {
                expect(['PENDING', 'APPROVED', 'WITHDRAW']).toContain(
                    leave.approverStatus
                );
            }
        });
        // console.log('Fetched Leave Requests:', res.body.data);
    });

    test('Verify Leave Requests Employee - Empty Response', async ({ apiAsEmployee }) => {
        const pageSize = 10;
        const page = 1;

        const res = await apiAsEmployee.attendanceAndLeave.getLeaveRequests({
            pageSize,
            page,
        });

        // Status & headers
        expect(res.status).toBe(200);
        expect(res.headers?.['content-type']).toContain('application/json');

        // Top-level response structure
        expect(res.body).toEqual(
            expect.objectContaining({
                totalPages: expect.any(Number),
                totalLeave: expect.any(Number),
                data: expect.any(Array),
            })
        );

        // Empty data validations (based on actual response)
        expect(res.body.data).toHaveLength(0);
        expect(res.body.totalLeave).toBe(0);
        expect(res.body.totalPages).toBe(0);
        console.log('Leave Requests for Employee User:', JSON.stringify(res.body, null, 2));
    });

});