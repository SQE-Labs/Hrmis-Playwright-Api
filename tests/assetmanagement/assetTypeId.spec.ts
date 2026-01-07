import { test, expect } from '../../fixtures/role.fixtures';

test.describe('Asset Management API - Asset Summary', () => {

  test('IM_16 - Verify assettype summary is returned correctly for Super Admin user', async ({ apiAsSuperAdmin }) => {

    const res = await apiAsSuperAdmin.assets.getAllAssetTypes();

    // 1 Status validation
    expect(res.status).toBe(200);

    // 2 Body validation
    expect(res.body).toBeTruthy();
    expect(res.body).toHaveProperty('data');
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);

    // 3 Validate each asset record
    res.body.data.forEach((asset: any) => {

      // 4 Type validations
      expect(typeof asset.assetType).toBe('string');
      expect(typeof asset.assetTypeId).toBe('number');

      expect(typeof asset.available).toBe('number');
      expect(typeof asset.assigned).toBe('number');
      expect(typeof asset.total).toBe('number');
      expect(typeof asset.rto).toBe('number');
      expect(typeof asset.allocated).toBe('number');

      // 5 Business logic validation
      expect(asset.total).toBeGreaterThanOrEqual(
        asset.available + asset.assigned + asset.allocated
      );
    });

    console.log(
      'Validated Asset Summary:',
      JSON.stringify(res.body.data, null, 2)
    );
  });

  // New test case for another valid user

  test('IM_16 - Verify assettype summary is returned correctly for another valid user', async ({ apiAsSuperAdmin }) => {

    const res = await apiAsSuperAdmin.assets.getAllAssetTypes();

    // Status code validation
    expect(res.status).toBe(200);

    // Body should exist
    expect(res.body).toBeTruthy();

    // Structure validation
    expect(res.body).toHaveProperty('data');
    expect(Array.isArray(res.body.data)).toBe(true);

    console.log(
      'Validated Asset Summary:',
      JSON.stringify(res.body.data, null, 2)
    );
  });

});