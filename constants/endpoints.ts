export const ENDPOINTS = {
    POST_SIGNIN: '/HRMBackendTest/api/auth/signin',
    GET_EMPLOYEES: '/HRMBackendTest/user',
    GET_USERS: '/HRMBackendTest/user',
    GET_LEAVE_TYPES: '/HRMBackendTest/leave/v2/types',
    GET_EMPLOYEE_LEAVE_DETAILS: (leaveId: number | string) =>
        `/HRMBackendTest/leave/masterleave/${leaveId}`,
    GET_LEAVE_REQUEST:'/HRMBackendTest/leave'
}