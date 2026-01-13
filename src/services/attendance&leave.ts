import { ENDPOINTS } from "../../constants/endpoints";
import { ApiClient } from "../clients/apiClient";

export class AttendanceAndLeaveService {
    async getUsers(
        client: ApiClient
    ) {
        return client.get(ENDPOINTS.GET_USERS);
    }

    async getLeaveTypes(
        client: ApiClient
    ) {
        return client.get(ENDPOINTS.GET_LEAVE_TYPES);
    }

    async getEmployeeLeaveDetails(
        client: ApiClient,
        leaveId: number | string
    ) {
        return client.get(ENDPOINTS.GET_EMPLOYEE_LEAVE_DETAILS(leaveId));
    }

    async getLeaveRequests(
        client: ApiClient,
        params?: {
            pageSize?: number;
            page?: number;
        }
    ) {
        return client.get(
            ENDPOINTS.GET_LEAVE_REQUEST,
            { params: params as Record<string, string | number> }
        );
    }

    async applyLeave(
        client: ApiClient,
        payload: Record<string, any>
    ) {
        return client.post(ENDPOINTS.POST_APPLY_LEAVE, payload);
    }
}
