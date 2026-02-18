import {test, expect} from '../../fixtures/role.fixtures';

test.describe('Asset Management API - Asset Assigned To User', () => {

    test('Verify asset access request status approved is returned correctly for Super Admin user', async ({apiAsSuperAdmin}) => {
        const res = await apiAsSuperAdmin.assets.getAssetAccessRequestStatusApproved({status: 'APPROVED'});

        //Status Validation
        expect(res.status).toBe(200);

        // 2 Body level validation
        expect(res.body).toBeTruthy();
        expect(res.body).toHaveProperty('statusCode');
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('Access types fetched successfully.');
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toHaveProperty('accessTypes');

        expect(res.body.data).toHaveProperty('accessSubtypes');

        expect(Array.isArray(res.body.data.accessTypes)).toBe(true);
        expect(res.body.data.accessTypes.length).toBeGreaterThan(0);

        // 3 Validate each asset record
        res.body.data.accessTypes.forEach((asset: any) => {
            // 4 Type validations (aligned with actual response)
            expect(typeof asset.accessId).toBe('number');
            expect(typeof asset.name).toBe('string');
            expect(typeof asset.status).toBe('string');
            expect(asset.status).toBe('APPROVED');
            expect(typeof asset.createdBy).toBe('number');
            expect(typeof asset.createdAt).toBe('string');
            expect(typeof asset.isRole).toBe('number');
            expect(typeof asset.description).toBe('string');
        });

        
    });

    test('Verify asset access request status approved is returned correctly for another valid user', async ({apiAsEmployee}) => {
        const res = await apiAsEmployee.assets.getAssetAccessRequestStatusApproved({status: 'APPROVED'});

        //Status Validation
        expect(res.status).toBe(200);

        // 2 Body level validation
        expect(res.body).toBeTruthy();
        expect(res.body).toHaveProperty('statusCode');
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('Access types fetched successfully.');
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toHaveProperty('accessTypes');
        expect(Array.isArray(res.body.data.accessTypes)).toBe(true);
        expect(res.body.data.accessTypes.length).toBeGreaterThan(0);

        expect(res.body.data).toHaveProperty('accessSubtypes');

        // 3 Validate each asset record
        res.body.data.accessTypes.forEach((asset: any) => {
            // 4 Type validations (aligned with actual response)
            expect(typeof asset.accessId).toBe('number');
            expect(typeof asset.name).toBe('string');
            expect(typeof asset.status).toBe('string');
            expect(asset.status).toBe('APPROVED');
            expect(typeof asset.createdBy).toBe('number');
            expect(typeof asset.createdAt).toBe('string');
            expect(typeof asset.isRole).toBe('number');
            expect(typeof asset.description).toBe('string');
        });

        
    });

});