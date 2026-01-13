import { test, expect } from '@playwright/test';
import { AttendanceAndLeaveService } from '../../../../src/services/attendance&leave';
import { getAuthenticatedClient } from '../../helpers/authHelper';
import { apllyLeavePayload } from '../../../../testdata/payloads';


test.describe('Attendance & Leave API', () => {
    test('Verify Apply Leave Details', async ({ request }) => {
        const client = await getAuthenticatedClient(request);
        const employeeId = 271;

        const res = await new AttendanceAndLeaveService().applyLeave(client, apllyLeavePayload);

        expect(res.status).toBe(200);
      
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('Leave applied successfully');

        console.log('Apply Leave Response:', res.body);
    });

    
}); 