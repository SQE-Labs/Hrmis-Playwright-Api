// import { test, expect } from '../../fixtures/role.fixtures';


// test.describe('Employee Management API - Employee Directory', () => {
//     test('TC_EM_01 - Verify successful fetching of employee details with valid ID and VERIFIED status SuperAdmin', async ({ apiAsSuperAdmin }) => {
//         // Call employee directory with query params id=271 & status=VERIFIED
//         const res = await apiAsSuperAdmin.employeeManagement.getEmployees({ id: '271', status: 'VERIFIED' });

//         // Status and contract
//         expect(res.status).toBe(200);
//         expect(res.body).toBeTruthy();
//         expect(res.body).toHaveProperty('message');
//         expect(res.body.message).toBe('Employees fetched successfully');
//         expect(res.body).toHaveProperty('data');
//         expect(Array.isArray(res.body.data)).toBeTruthy();
//         expect(res.body.data.length).toBeGreaterThan(0);
//         // console.log('Fetched Employees:', res.body);
//         // Ensure one of the returned employee objects matches the expected id & status
//         const found = res.body.data.find((e: any) => String(e.id) === '271' && e.status === 'VERIFIED');
//         expect(found).toBeTruthy();
//     });

//     test('TC_EM_01 - Verify access denied when employee tries to fetch employee details Employee', async ({ apiAsEmployee }) => {
//         const res = await apiAsEmployee.employeeManagement.getEmployees();

//         expect(res.status).toBe(403);

//         // Response body validation
//             expect(res.body).toEqual({
//                 statusCode: 403,
//                 message: 'Access denied: insufficient permissions',
//                 data: null,
//             });
//         console.log('Response Body for Employee User:', JSON.stringify(res.body, null, 2));
//     });




//     test('TC_EM_02 - Verify successful fetching of employee details with valid ID and BLOCKED status', async ({ apiAsSuperAdmin }) => {
//         const res = await apiAsSuperAdmin.employeeManagement.getEmployees({ id: '417', status: 'BLOCKED' });
//         // Status and contract
//         expect(res.status).toBe(200);
//         expect(res.body).toBeTruthy();
//         expect(res.body).toHaveProperty('message');
//         expect(res.body.message).toBe('Employees fetched successfully');
//         expect(res.body).toHaveProperty('data');
//         expect(Array.isArray(res.body.data)).toBeTruthy();
//         // console.log('Fetched Employees:', res.body); 

//         // Ensure one of the returned employee objects matches the expected id & status
//         const found = res.body.data.find((e: any) => String(e.id) === '417' && e.status === 'BLOCKED');
//         expect(found).toBeTruthy();
//     });
//     test('TC_EM_03 - Verify successful fetching of employee details with valid ID and LEFTOUT status', async ({ apiAsSuperAdmin }) => {
//         const res = await apiAsSuperAdmin.employeeManagement.getEmployees({ id: '399', status: 'LEFTOUT' });
//         // Status and contract
//         expect(res.status).toBe(200);
//         expect(res.body).toBeTruthy();
//         expect(res.body).toHaveProperty('message');
//         expect(res.body.message).toBe('Employees fetched successfully');
//         expect(res.body).toHaveProperty('data');
//         expect(Array.isArray(res.body.data)).toBeTruthy();
//         // console.log('Fetched Employees:', res.body);

//         // Ensure one of the returned employee objects matches the expected id & status
//         const found = res.body.data.find((e: any) => String(e.id) === '399' && e.status === 'LEFTOUT');
//         expect(found).toBeTruthy();
//     });
// });
