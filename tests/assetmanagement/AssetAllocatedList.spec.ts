import { test, expect } from '../../fixtures/role.fixtures';

test.describe('Asset Management API - Asset Summary', () => {

  // Test case for Super Admin user
  test('IM_19 - Verify asset allocated list summary is returned correctly for Super Admin user', async ({ apiAsSuperAdmin }) => {
    const res = await apiAsSuperAdmin.assets.getAssetAllocatedListSummary({ page: 1, pageSize: 10 });

    // 1 Status validation
    expect(res.status).toBe(200);

    // 2 Body validation
    expect(res.body).toBeTruthy();
    expect(res.body).toHaveProperty('totalPages');
    expect(res.body).toHaveProperty('totalAssest');
    expect(res.body).toHaveProperty('data');

    expect(typeof res.body.totalPages).toBe('number');
    expect(typeof res.body.totalAssest).toBe('number');
    expect(Array.isArray(res.body.data)).toBe(true);
    // expect(res.body.data.length).toBeGreaterThan(0);

    // 3 Validate each asset record
    res.body.data.forEach((asset: any) => {

      // 4 Type validations (aligned with actual response)

      expect(typeof asset.assignedAssestId).toBe('number');
      expect(typeof asset.manufacture).toBe('string');
      expect(typeof asset.serialNumber).toBe('string');
      expect(typeof asset.owner).toBe('string');
      expect(typeof asset.comments).toBe('string');
      expect(typeof asset.assestName).toBe('string');

      expect(typeof asset.empId).toBe('number');
      expect(typeof asset.empName).toBe('string');

      expect(typeof asset.allocatedDate).toBe('string');
      expect(typeof asset.purchaseDate).toBe('string');

      expect(typeof asset.model).toBe('string');
      expect(typeof asset.warrantyExpired).toBe('string');
    });

  });

    // Test case for employee user
    test('IM_19 - Verify asset allocated list summary is returned correctly for another valid user', async ({ apiAsEmployee }) => {
        const res = await apiAsEmployee.assets.getAssetAllocatedListSummary({page: 1, pageSize: 10});
        // Status code validation
        expect(res.status).toBe(403);
        
        // Body should exist
        expect(res.body).toBeTruthy();
        expect(res.body).toHaveProperty('message');

        // Message validation
        expect(res.body.message).toBe('You are not authorized to access this resource.');

        // Structure validation
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toBeNull();
  

  });
});