import {test, expect} from '../../fixtures/role.fixtures';

test.describe('Get Asset type request status pending - API', () => {

    test('IM-31 Verify asset access request status pending is returned correctly for Super Admin user', async ({apiAsSuperAdmin}) => {
        const res = await apiAsSuperAdmin.assets.getAssetTypeRequestStatusPending();

        //Status Validation
        expect(res.status).toBe(200);

        //Body Validation
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);

        console.log(
            'Validated Asset Type Request Status Pending:',
            JSON.stringify(res.body.data, null, 2)
        );

    });

    test('IM-31 Verify asset access request status pending is returned correctly for another valid user', async ({apiAsEmployee}) => {
        const res = await apiAsEmployee.assets.getAssetTypeRequestStatusPending();

        //Status Validation
        expect(res.status).toBe(403);

        //Body Validation
        expect(res.body).toHaveProperty('statusCode');
        expect(res.body).toHaveProperty('message');

        //Message Validation
        expect(res.body.message).toBe('You are not authorized to access this resource.');

        console.log(
            'Asset Type Request Status Pending Access Denied Message:',
            JSON.stringify(res.body.message, null, 2)
        );
    });
});