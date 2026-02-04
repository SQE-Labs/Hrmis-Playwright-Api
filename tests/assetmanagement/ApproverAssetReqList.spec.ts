import {test, expect} from '../../fixtures/role.fixtures';

test.describe('Get Approver Asset Request List - API', () => {

    test('IM-34 Verify approver asset request list is returned correctly for Super Admin user', async ({apiAsSuperAdmin}) => {
        const res = await apiAsSuperAdmin.assets.getApproverAssetReqList();

        //Status Validation
        expect(res.status).toBe(200);

        //Body Validation
        expect(res.body).toHaveProperty('approver');
        expect(typeof res.body.approver).toBe('boolean');

        expect(res.body).toHaveProperty('data');

        expect(res.body).toHaveProperty('totalItems');
        expect(typeof res.body.totalItems).toBe('number');

        expect(res.body).toHaveProperty('totalPages');
        expect(typeof res.body.totalPages).toBe('number');

        expect(res.body).toHaveProperty('pageSize');
        expect(typeof res.body.pageSize).toBe('number');

        expect(res.body).toHaveProperty('currentPage');
        expect(typeof res.body.currentPage).toBe('number');

        expect(res.body).toHaveProperty('status');

        console.log(
            'Validated Approver Asset Request List:',
            JSON.stringify(res.body, null, 2)
        );
    });

    test('IM-34 Verify approver asset request list is returned correctly for another valid user', async ({apiAsEmployee}) => {
        const res = await apiAsEmployee.assets.getApproverAssetReqList();

        //Status Validation
        expect(res.status).toBe(403);

        //Body Validation
        expect(res.body).toHaveProperty('statusCode');
        expect(res.body).toHaveProperty('message');

        //Message Validation
        expect(res.body.message).toBe('You are not authorized to access this resource.');

        console.log(
            'Approver Asset Request List Access Denied Message:',
            JSON.stringify(res.body.message, null, 2)
        );
    });
});


