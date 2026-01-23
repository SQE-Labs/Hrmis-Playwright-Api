export const ENDPOINTS = {
    POST_SIGNIN: '/HRMBackendTest/api/auth/signin',
    GET_EMPLOYEES: '/HRMBackendTest/user',
    GET_ASSET_TYPE_BY_ID: '/HRMBackendTest/assest/total?owner=ALL&assestTypeId=0',
    GET_ASSET_LIST_SUMMARY: '/HRMBackendTest/assest/list',
    GET_USERS: '/HRMBackendTest/user',
    GET_LEAVE_TYPES: '/HRMBackendTest/leave/v2/types',
    GET_EMPLOYEE_LEAVE_DETAILS: (leaveId: number | string) =>
        `/HRMBackendTest/leave/masterleave/${leaveId}`,
    GET_LEAVE_REQUEST: '/HRMBackendTest/leave',
    POST_APPLY_LEAVE: '/HRMBackendTest/leave/leaveApply',
    PUT_WITHDRAW_LEAVE: '/HRMBackendTest/leave/leave/withdraw',
    GET_MY_TEAM_LEAVE: '/HRMBackendTest/leave/leave/approver/manager',
    PUT_APPROVE_REJECT_LEAVE: '/HRMBackendTest/leave/us/leave/approve',

}