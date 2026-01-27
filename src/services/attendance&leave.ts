import { RequestBuilder } from '../api/requestBuilder';
import { ENDPOINTS } from '../../constants/endpoints';

export class AttendanceAndLeave {
    constructor(private client: RequestBuilder) { }

    getUsers() {
        return this.client.get(ENDPOINTS.GET_USERS);
    }

    getLeaveTypes() {
        return this.client.get(ENDPOINTS.GET_LEAVE_TYPES);
    }

    getEmployeeLeaveDetails(leaveId: number | string) {
        return this.client.get(
            ENDPOINTS.GET_EMPLOYEE_LEAVE_DETAILS(leaveId)
        );
    }

    getLeaveRequests(params?: { pageSize?: number; page?: number }) {
        return this.client.get(
            ENDPOINTS.GET_LEAVE_REQUEST,
            { params: params as Record<string, string> }
        );
    }
    postApplyLeave(payload: any) {
        return this.client.post(ENDPOINTS.POST_APPLY_LEAVE, { body: payload });
    }
    putWithdrawLeave(
        leaveId: number | string,
        reason: string
    ) {
        return this.client.put(
            ENDPOINTS.PUT_WITHDRAW_LEAVE,
            {
                params: {
                    leaveId,
                    reason
                },
                body: {}
            }
        );
    }

    getMyTeamLeaveRequests(
        status: string,
        pageSize: number,
        page: number
    ) {
        return this.client.get(
            ENDPOINTS.GET_MY_TEAM_LEAVE,
            {
                params: {
                    status,
                    pageSize,
                    page
                }
            }
        );
    }

    putApproveRejectMyTeamLeave(
        leaveId: number | string,
        Status: string,
        reason?: string
    ) {
        return this.client.put(
            ENDPOINTS.GET_MY_TEAM_LEAVE,
            {
                params: {
                    leaveId,
                    Status
                },
                body: { reason }
            }
        );
    }

}