import {test, expect} from '../../fixtures/role.fixtures';

test.describe('Asset Management API - Asset Assigned To User', () => {

    test('Verify asset access request page list is returned correctly for Super Admin user', async ({apiAsSuperAdmin}) => {
        const res = await apiAsSuperAdmin.assets.getAssetAccessRequestPageList();

        //Status Validation
        expect(res.status).toBe(200);

        // 2 Body level validation
        expect(res.body).toBeTruthy();
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('Access requests fetched successfully.');
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toHaveProperty('content');

        expect(typeof res.body.message).toBe('string');
        expect(Array.isArray(res.body.data.content)).toBe(true);
        expect(res.body.data.content.length).toBeGreaterThan(0);

        // 3 Validate each asset record
        res.body.data.content.forEach((asset: any) => {
            // 4 Type validations (aligned with actual response)
            expect(typeof asset.id).toBe('number');
            expect(typeof asset.createdBy).toBe('number');

        });

        console.log(
            'Validated Asset Access Request Page List:',
            JSON.stringify(res.body.data.content, null, 2)
        );

    });

    test('Verify asset access request page list is returned correctly for another valid user', async ({apiAsEmployee}) => {
        const res = await apiAsEmployee.assets.getAssetAccessRequestPageList();

        //Status Validation
        expect(res.status).toBe(200);
        
        // 2 Body level validation
        expect(res.body).toBeTruthy();
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('Access requests fetched successfully.');
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toHaveProperty('content');
        expect(typeof res.body.message).toBe('string');
        expect(Array.isArray(res.body.data.content)).toBe(true);
        expect(res.body.data.content.length).toBeGreaterThan(0);

        // 3 Validate each asset record
        res.body.data.content.forEach((asset: any) => {
            // 4 Type validations (aligned with actual response)
            expect(typeof asset.id).toBe('number');
            expect(typeof asset.createdBy).toBe('number');
        });

        console.log(
            'Validated Asset Access Request Page List:',
            JSON.stringify(res.body.data.content, null, 2)
        );
    });

});