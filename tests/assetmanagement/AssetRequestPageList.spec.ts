import {test, expect} from '../../fixtures/role.fixtures';

test.describe('Asset Management API - Asset Assigned To User', () => {

    test('IM_44 - Verify asset request page list is returned correctly for Super Admin user', async ({apiAsSuperAdmin}) => {
        const res = await apiAsSuperAdmin.assets.getAssetRequestPageList({ page: 1, pageSize: 10 });

        //Status Validation
        expect(res.status).toBe(200);

        // 2 Body level validation
        expect(res.body).toBeTruthy();
        expect(res.body).toHaveProperty('totalPages');
        expect(res.body).toHaveProperty('data');
    });

    test('IM_44 - Verify asset request page list is returned correctly for another valid user', async ({apiAsEmployee}) => {
        const res = await apiAsEmployee.assets.getAssetRequestPageList({page:1, pageSize:10});
        //Status Validation
        expect(res.status).toBe(200);

        // 2 Body level validation
        expect(res.body).toBeTruthy();
        expect(res.body).toHaveProperty('totalPages');
        expect(res.body).toHaveProperty('data');
    });
});