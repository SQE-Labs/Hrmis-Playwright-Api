import {test, expect} from '../../fixtures/role.fixtures';

test.describe('Get Asset type request status all - API', () => {

    test('IM-29 Verify asset access request status approved is returned correctly for Super Admin user', async ({apiAsSuperAdmin}) => {
        const res = await apiAsSuperAdmin.assets.getAssetTypeRequestStatusAll();

        //Status Validation
        expect(res.status).toBe(200);

        //Body Validation
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);

        // 3 Validate each asset record
        res.body.data.forEach((asset: any) => {

            expect(asset).toHaveProperty('assestId');
            expect(typeof asset.assestId).toBe('number');

            expect(asset).toHaveProperty('name');
            expect(typeof asset.name).toBe('string');

            expect(asset).toHaveProperty('status');
            expect(typeof asset.status).toBe('string');

            expect(asset).toHaveProperty('createdBy');
            expect(typeof asset.createdBy).toBe('number');

            expect(asset).toHaveProperty('creationDate');
            expect(typeof asset.creationDate).toBe('string');

            expect(asset).toHaveProperty('assetCategory');
            expect(typeof asset.assetCategory).toBe('string');

            expect(asset).toHaveProperty('approver');
            expect(typeof asset.approver).toBe('number');

            expect(asset).toHaveProperty('approverComment');
            expect(typeof asset.approverComment).toBe('string');

            expect(asset).toHaveProperty('approvedDate');
            expect(typeof asset.approvedDate).toBe('string');
        });

        console.log(
            'Validated Asset Type Request Status All:',
            JSON.stringify(res.body.data, null, 2)
        );
    });

    test('IM-29 Verify asset access request status approved is returned correctly for another valid user', async ({apiAsEmployee}) => {
        const res = await apiAsEmployee.assets.getAssetTypeRequestStatusAll();

        //Status Validation
        expect(res.status).toBe(403);

        //Body Validation
        expect(res.body).toHaveProperty('statusCode');
        expect(res.body).toHaveProperty('message');

        //Message Validation
        expect(res.body.message).toBe('You are not authorized to access this resource.');

        // Structure validation
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toBeNull();
        console.log('Validated Asset Type Request Status All:',
             JSON.stringify(res.body, null, 2));
    });

});
