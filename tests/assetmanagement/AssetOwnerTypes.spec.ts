import {test, expect} from '../../fixtures/role.fixtures';

test.describe('Get Asset Owner Types API', () => {

    test('Verify Get Asset Owner Types API returns owner types for Super Admin user', async ({apiAsSuperAdmin}) => {
        const res = await apiAsSuperAdmin.assets.getAssetOwnerTypes();

        // Status Validation
        expect(res.status).toBe(200);

        // Body level validation
        expect(res.body).toBeTruthy();
        expect(res.body).toHaveProperty('statusCode');
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('owners fetched successfully');
        expect(res.body).toHaveProperty('data');

        // Validate owner types
        expect(res.body.data).toHaveProperty('ownerTypes');
        expect(Array.isArray(res.body.data.ownerTypes)).toBe(true);
        expect(res.body.data.ownerTypes.length).toBeGreaterThan(0);

        console.log(
            'Validated Asset Owner Types List:',
            JSON.stringify(res.body.data, null, 2)
        );
    });

    test('Verify Get Asset Owner Types API returns owner types for another valid user', async ({apiAsEmployee}) => {
        const res = await apiAsEmployee.assets.getAssetOwnerTypes();
        
        // Status Validation
        expect(res.status).toBe(200);

        // Body level validation
        expect(res.body).toBeTruthy();
        expect(res.body).toHaveProperty('statusCode');

        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('owners fetched successfully');
        expect(res.body).toHaveProperty('data');

        // Validate owner types
        expect(res.body.data).toHaveProperty('ownerTypes');
        expect(Array.isArray(res.body.data.ownerTypes)).toBe(true);
        expect(res.body.data.ownerTypes.length).toBeGreaterThan(0);

        console.log(
            'Validated Asset Owner Types List:',
            JSON.stringify(res.body.data, null, 2)
        );
    });
});