import { RequestBuilder } from '../api/requestBuilder';
import { ENDPOINTS } from '../../constants/endpoints';

export const getUsers = async (
    client: RequestBuilder,
) => {
    return client.get(ENDPOINTS.GET_USERS)
};

export const getLeaveTypes = async (
    client: RequestBuilder,
) => {
    return client.get(ENDPOINTS.GET_LEAVE_TYPES);
};
export const getEmployeeLeaveDetails = async (
    client: RequestBuilder,
    leaveId: number | string,
) => {
    return client.get(ENDPOINTS.GET_EMPLOYEE_LEAVE_DETAILS(leaveId));
};
export const getLeaveRequests = async (
    client: RequestBuilder,
    params?:{pageSize?:number,page?:number}
) => {
    return client.get(ENDPOINTS.GET_LEAVE_REQUEST, { params: params as Record<string, string> } );
};
