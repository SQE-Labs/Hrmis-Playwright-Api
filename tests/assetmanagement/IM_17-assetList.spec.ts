import { test, expect } from '../../fixtures/role.fixtures';

test.describe('Asset Management API - Asset Summary', () => {

    // Test case for Super Admin user

  test('IM_17 - Verify asset list summary is returned correctly for Super Admin user', async ({ apiAsSuperAdmin }) => {
    const res = await apiAsSuperAdmin.assets.getAssetListSummary();

    // 1 Status validation
    expect(res.status).toBe(200);

    // 2 Body validation
    expect(res.body).toBeTruthy();
    expect(res.body).toHaveProperty('data');
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);

    // 3 Validate each asset record
    res.body.data.forEach((asset: any) => {

      // 4 Type validations (aligned with actual response)
      expect(typeof asset.createdBy).toBe('number');
      expect(asset.creationDate === null || typeof asset.creationDate === 'string').toBeTruthy();
      expect(typeof asset.lastModifiedBy).toBe('number');
      expect(asset.lastModifiedDate === null || typeof asset.lastModifiedDate === 'string').toBeTruthy();
      expect(asset.assetId === undefined || typeof asset.assetId === 'number').toBeTruthy();
      expect(typeof asset.ram).toBe('boolean');
      expect(typeof asset.status).toBe('string');


      // 5 Business logic validation
      const validStatuses = ['VERIFIED', 'PENDING', 'REJECTED'];
      expect(validStatuses).toContain(asset.status);
    });

    console.log(
      'Validated Asset List Summary:',
      JSON.stringify(res.body.data, null, 2)
    );
  });


    // Test case for employee user  
    test('IM_17 - Verify asset list summary is returned correctly for another valid user', async ({ apiAsEmployee }) => {   
        const res = await apiAsEmployee.assets.getAssetListSummary();
        // Status code validation
        expect(res.status).toBe(200);
        // Body should exist
        expect(res.body).toBeTruthy();
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);
        // Validate each asset record
        res.body.data.forEach((asset: any) => {
            // Type validations (aligned with actual response)
            expect(typeof asset.createdBy).toBe('number');
            expect(asset.creationDate === null || typeof asset.creationDate === 'string').toBeTruthy();
            expect(typeof asset.lastModifiedBy).toBe('number');
            expect(asset.lastModifiedDate === null || typeof asset.lastModifiedDate === 'string').toBeTruthy();
            expect(asset.assetId === undefined || typeof asset.assetId === 'number').toBeTruthy();
            expect(typeof asset.ram).toBe('boolean');
            expect(typeof asset.status).toBe('string');
            // Business logic validation
            const validStatuses = ['VERIFIED', 'PENDING', 'REJECTED'];
            expect(validStatuses).toContain(asset.status);
        });

        console.log(
            'Asset List Summary for Employee User:',
            JSON.stringify(res.body.data, null, 2)
        );  
    });
});
