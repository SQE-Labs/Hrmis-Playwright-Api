import { test, expect } from '../../../fixtures/role.fixtures';
import { applyleavePayload } from '../../../testdata/payloads';

test.describe.serial('Attendance & Leave API', () => {
    let laveId: number;

    test('Setup - Apply Leave for Employee1 to be Approved/Rejected', async ({ apiAsEmployee1 }) => {

        const res = await apiAsEmployee1.attendanceAndLeave.postApplyLeave(applyleavePayload);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('Leave Applied Successfully! Wait for Approval.');
        const leave = await apiAsEmployee1.attendanceAndLeave.getLeaveRequests({
            page: 1,
            pageSize: 10,
        });
        expect(leave.status).toBe(200);
        laveId = leave.body.data[0].laveId;
        console.log('Leave ID:', laveId);
        console.log(res.body);
    });
    test("Approve / Reject My Team's Leave Requests", async ({ apiAsSuperAdmin }) => {
        console.log('Leave ID:', laveId);
        const myTeamLeaveRes = await apiAsSuperAdmin.attendanceAndLeave.putApproveRejectMyTeamLeave(
            laveId, // leaveId
            "REJECTED", // status
            "Rejected by super admin" // reason
        );
        expect(myTeamLeaveRes.status).toBe(200);
        expect(myTeamLeaveRes.body).toHaveProperty('message');
        expect((myTeamLeaveRes.body as any).message).toBe('Leave REJECTED successfully.');
        expect(myTeamLeaveRes.body).toHaveProperty('data');
        console.log('Approve/Reject Response:', myTeamLeaveRes.body);
    });
});

test.describe("Approve/Reject My Team Leave Requests", () => {  
    test("Should require valid authentication", async ({apiAsEmployee }) => {
        const response = await apiAsEmployee.attendanceAndLeave.putApproveRejectMyTeamLeave(
            
            "APPROVED",
            "Approving leave"
        );
        console.log('Response for invalid auth:', response.body);
        expect(response.status).toBe(403);
    });
});