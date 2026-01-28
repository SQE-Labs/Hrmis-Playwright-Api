import {test, expect} from '../../fixtures/role.fixtures';

test.describe('Asset Management API - Users List', () => {

    // Test case for Super Admin user
  test('IM_25 - Verify users list is returned correctly for Super Admin user', async ({ apiAsSuperAdmin }) => {
    const res = await apiAsSuperAdmin.assets.getUsersList();
    // 1 Status validation
    expect(res.status).toBe(200);
    // 2 Body validation
    expect(res.body).toBeTruthy();
  });

    // Test case for employee user
    test('IM_25 - Verify users list is returned correctly for another valid user', async ({ apiAsEmployee }) => {   
        const res = await apiAsEmployee.assets.getUsersList();
        // 1 Status validation
        expect(res.status).toBe(403);
    });
});