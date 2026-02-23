import {test, expect} from '../../fixtures/role.fixtures';

test.describe('Asset Management API - Asset Assigned To User', () => {

    test('Verify asset access request dl list is returned correctly for Super Admin user', async ({apiAsSuperAdmin}) => {
        const res = await apiAsSuperAdmin.assets.getAssetAccessRequestDlList();

        //Status code validation
        expect(res.status).toBe(200);

        //Response body validation
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);

        // Validate structure of each item in the data array
        res.body.data.forEach((asset: any) => {
            expect(asset).toHaveProperty('id');
            expect(typeof asset.id).toBe('number');
            expect(asset).toHaveProperty('fullName');
            expect(typeof asset.fullName).toBe('string');

        });
        console.log(
            'Validated Asset Access Request DL List:',
            JSON.stringify(res.body.data, null, 2)
        );
    });

    test('Verify asset access request dl list is returned correctly for another valid user', async ({apiAsEmployee}) => {
        const res = await apiAsEmployee.assets.getAssetAccessRequestDlList();

        //Status code validation
        expect(res.status).toBe(200);

        //Response body validation
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);

        // Validate structure of each item in the data array
        res.body.data.forEach((asset: any) => {
            expect(asset).toHaveProperty('id');
            expect(typeof asset.id).toBe('number');
            expect(asset).toHaveProperty('fullName');
            expect(typeof asset.fullName).toBe('string');
        });

        console.log(
            'Validated Asset Access Request DL List:',
            JSON.stringify(res.body.data, null, 2)
        );
    });

});