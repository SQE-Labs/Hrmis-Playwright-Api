import { test, expect } from '@playwright/test';
import { getAllAssetTypes } from '../../../src/services/assetmanagement.service';
import { getAuthenticatedClient } from '../helpers/authHelper';

test.describe('Asset Management API - Asset Summary', () => {

  test('IM_16 - Verify assettype summary is returned correctly for Super Admin user', async ({ request }) => {
    const client = await getAuthenticatedClient(request);

    const res = await getAllAssetTypes(client);

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
      expect(typeof asset.assestType).toBe('string');
      expect(typeof asset.assetTpeId).toBe('number');

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

});
