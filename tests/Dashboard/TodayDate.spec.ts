import {test, expect} from '../../fixtures/role.fixtures';

test.describe("Dashboard - Today's date", () => {
    test('IM-05 - Verify that the current date shows all the information of the leave request', async ({apiAsSuperAdmin}) => {
        const res = await apiAsSuperAdmin.dashboard.getTodayDate();

        //Status code assertion
        expect(res.status).toBe(200);

        //Response body assertion
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('success');

        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);

        // Validate the structure of the first item in the data array
        res.body.data.forEach((item: any) => {
            expect(item).toHaveProperty('createdBy');

            expect(item).toHaveProperty('creationDate');

            expect(item).toHaveProperty('employeeId');
            expect(typeof item.employeeId).toBe('number');

            expect(item).toHaveProperty('laveId');
            expect(typeof item.laveId).toBe('number');

            expect(item).toHaveProperty('typeOfLeave');
            expect(typeof item.typeOfLeave).toBe('string');

            expect(item).toHaveProperty('startDate');
            expect(typeof item.startDate).toBe('string');

            expect(item).toHaveProperty('endDate');
            expect(typeof item.endDate).toBe('string');

            expect(item).toHaveProperty('reasonOfLeave');
            expect(typeof item.reasonOfLeave).toBe('string');

            expect(item).toHaveProperty('managerId');
            expect(typeof item.managerId).toBe('number');

            expect(item).toHaveProperty('approverStatus');
            expect(item.approverStatus ==='APPROVED' || item.approverStatus === 'PENDING' || item.approverStatus === 'REJECTED').toBe(true);
        });
    });

    test('IM-05 - Verify that the current date shows all the information of the leave request with employee role', async ({apiAsEmployee}) => {
        const res = await apiAsEmployee.dashboard.getTodayDate();

        //Status code assertion
        expect(res.status).toBe(200);

        //Response body assertion
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);

        // Validate the structure of the first item in the data array
        res.body.data.forEach((item: any) => {
            expect(item).toHaveProperty('createdBy');

            expect(item).toHaveProperty('creationDate');

            expect(item).toHaveProperty('employeeId');
            expect(typeof item.employeeId).toBe('number');

            expect(item).toHaveProperty('laveId');
            expect(typeof item.laveId).toBe('number');

            expect(item).toHaveProperty('typeOfLeave');
            expect(typeof item.typeOfLeave).toBe('string');

            expect(item).toHaveProperty('startDate');
            expect(typeof item.startDate).toBe('string');

            expect(item).toHaveProperty('endDate');
            expect(typeof item.endDate).toBe('string');

            expect(item).toHaveProperty('reasonOfLeave');
            expect(typeof item.reasonOfLeave).toBe('string');

            expect(item).toHaveProperty('managerId');
            expect(typeof item.managerId).toBe('number');

            expect(item).toHaveProperty('approverStatus');
            expect(item.approverStatus ==='APPROVED' || item.approverStatus === 'PENDING' || item.approverStatus === 'REJECTED').toBe(true);
        });
    });
})