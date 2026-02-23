import { test, expect } from '../../fixtures/role.fixtures';

test.describe('Asset Management API - Asset Assigned To User', () => {

  test('IM_23 - Verify asset assigned to user is returned correctly for Super Admin user', async ({ apiAsSuperAdmin }) => {

    const res = await apiAsSuperAdmin.assets.getAssetAssignedToUser({employeeId: 271});

    // 1 Status validation
    expect(res.status).toBe(200);

    // 2 Body level validation
    expect(res.body).toBeTruthy();
    expect(res.body).toHaveProperty('totalPages');
    expect(res.body).toHaveProperty('totalAssest');
    expect(res.body).toHaveProperty('data');

    expect(typeof res.body.totalPages).toBe('number');
    expect(typeof res.body.totalAssest).toBe('number');

    // 3 Data array validation
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);

    // 4 Validate each assigned asset
    res.body.data.forEach((asset: any) => {

      // ID validations
      expect(typeof asset.assignedAssestId).toBe('number');
      expect(typeof asset.empId).toBe('number');

      // Asset basic info
      expect(typeof asset.assestName).toBe('string');
      expect(typeof asset.manufacture).toBe('string');
      expect(typeof asset.model).toBe('string');
      expect(typeof asset.serialNumber).toBe('string');

      // Owner / employee info
      expect(typeof asset.owner).toBe('string');
      expect(typeof asset.empName).toBe('string');

      // Dates (string format from API)
      expect(typeof asset.allocatedDate).toBe('string');
      expect(typeof asset.purchaseDate).toBe('string');

      // Optional / free-text fields
      expect(asset.comments === null || asset.comments === undefined || typeof asset.comments === 'string').toBeTruthy();

      expect(
        asset.warrantyExpired === null || asset.warrantyExpired === undefined || typeof asset.warrantyExpired === 'string').toBeTruthy();
    });

    console.log(
      'Validated assigned assets:',
      JSON.stringify(res.body.data, null, 2)
    );
  });

  // Test case for employee user
  test('IM_23 - Verify asset assigned to user is returned correctly for another valid user', async ({ apiAsEmployee }) => {
      const res = await apiAsEmployee.assets.getAssetAssignedToUser({employeeId: 271});
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
        console.log('Asset Assigned To User for Employee User:',
             JSON.stringify(res.body, null, 2));
    });

});
