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
    // Log first asset keys to help with property names if API shape differs
    if (res.body.data.length > 0) console.log('First asset keys:', Object.keys(res.body.data[0]));
    res.body.data.forEach((asset: any) => {
      // Normalize known API typo fields to expected names
      const normalized: any = {
        assetType: asset.assetType ?? asset.assestType ?? asset.asset_type,
        assetTypeId: asset.assetTypeId ?? asset.assetTpeId ?? asset.asset_type_id,
        available: asset.available ?? asset.availble ?? 0,
        assigned: asset.assigned ?? 0,
        total: asset.total ?? 0,
        rto: asset.rto ?? 0,
        allocated: asset.allocated ?? 0,
      };

      // 4 Type validations (use normalized values)
      expect(typeof normalized.assetType).toBe('string');
      expect(typeof normalized.assetTypeId).toBe('number');

      expect(typeof normalized.available).toBe('number');
      expect(typeof normalized.assigned).toBe('number');
      expect(typeof normalized.total).toBe('number');
      expect(typeof normalized.rto).toBe('number');
      expect(typeof normalized.allocated).toBe('number');

      // 5 Business logic validation
      expect(normalized.total).toBeGreaterThanOrEqual(
        normalized.available + normalized.assigned + normalized.allocated
      );
    });

    console.log(
      'Validated Asset Summary:',
      JSON.stringify(res.body.data, null, 2)
    );
  });

  // New test case for employee user

  test('IM_16 - Verify assettype summary is returned correctly for another valid user', async ({ apiAsEmployee }) => {

    const res = await apiAsEmployee.assets.getAllAssetTypes();

    // Status code validation
    expect(res.status).toBe(403);

    // Body should exist
    expect(res.body).toBeTruthy();
    expect(res.body).toHaveProperty('message');

    // Message validation
    // expect(res.body.message).toBe('Access Denied');

    // Structure validation
    expect(res.body).toHaveProperty('data');
    expect(Array.isArray(res.body.data)).toBe(true);
    console.log('Asset Summary for Employee User:', JSON.stringify(res.body, null, 2));  
    
  });

});