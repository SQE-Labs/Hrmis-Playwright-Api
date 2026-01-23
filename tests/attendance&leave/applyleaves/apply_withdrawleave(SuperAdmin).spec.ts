import { test, expect } from '../../../fixtures/role.fixtures';
import { applyleavePayload } from '../../../testdata/payloads';
test.describe.serial('Attendance & Leave API', () => {

    let laveId: number;

    test('Verify Apply Leave Employee - Super Admin', async ({ apiAsSuperAdmin }) => {

        const res = await apiAsSuperAdmin.attendanceAndLeave.postApplyLeave(applyleavePayload);

        expect(res.status).toBe(200);

        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('Leave Applied Successfully! Wait for Approval.');

        if (res.body.data) {
            const data = res.body.data;
            expect(data).toHaveProperty('laveId');
            expect(typeof data.laveId).toBe('number');
            expect(data.startDate).toBe(applyleavePayload.startDate);
            expect(data.endDate).toBe(applyleavePayload.endDate);
            expect(data.typeOfLeave).toBe(applyleavePayload.typeOfLeave);
            expect(data.reasonOfLeave).toBe(applyleavePayload.reasonOfLeave);
            expect(data.considerLeave).toBe(applyleavePayload.considerLeave);
            expect(data.managerStatus).toBe('PENDING');
            expect(data.leaveFinalStatus).toBe('PENDING');
        }
        const leave = await apiAsSuperAdmin.attendanceAndLeave.getLeaveRequests({
            page: 1,
            pageSize: 10,
        });
        expect(leave.status).toBe(200);
        laveId = leave.body.data[0].laveId;
        console.log('Leave ID:', laveId);
    });

    test('Verify Withdraw Leave', async ({ apiAsSuperAdmin }) => {
        console.log('Withdrawing Leave ID:', laveId);

        const res = await apiAsSuperAdmin.attendanceAndLeave.putWithdrawLeave(
            laveId,
            'check_withdrawal'
        );

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('Leave Withdrawn Successfully');
    });


});