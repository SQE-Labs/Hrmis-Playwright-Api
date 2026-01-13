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
}
