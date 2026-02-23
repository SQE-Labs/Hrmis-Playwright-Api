import {test, expect} from '../../fixtures/role.fixtures';

test.describe('My Profile - My Asset Assigned', () => {

    test('IM-07 - Verify that the My Asset Assigned endpoint is working for Super Admin role', async ({ apiAsSuperAdmin }) => {
        const res = await apiAsSuperAdmin.myProfile.getMyAssetAssigned({pageSize: 10, page: 1});

        //Status Validation
        expect(res.status).toBe(200);

        //Response Structure Validation
        expect(res.body).toHaveProperty('totalPages');
        expect(typeof res.body.totalPages).toBe('number');

        expect(res.body).toHaveProperty('totalAssest');
        expect(typeof res.body.totalAssest).toBe('number');

        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);

        //Data Validation
        res.body.data.forEach((asset: any) => {
            expect(asset).toHaveProperty('assignedAssestId');
            expect(typeof asset.assignedAssestId).toBe('number');

            expect(asset).toHaveProperty('manufacture');
            expect(typeof asset.manufacture).toBe('string');

            expect(asset).toHaveProperty('model');
            expect(typeof asset.model).toBe('string');

            expect(asset).toHaveProperty('serialNumber');
            expect(typeof asset.serialNumber).toBe('string');

            expect(asset).toHaveProperty('owner');
            expect(typeof asset.owner).toBe('string');

            expect(asset).toHaveProperty('comments');
            expect(typeof asset.comments).toBe('string');

            expect(asset).toHaveProperty('assestName');
            expect(typeof asset.assestName).toBe('string');

            expect(asset).toHaveProperty('empName');
            expect(typeof asset.empName).toBe('string');

            expect(asset).toHaveProperty('empId');
            expect(typeof asset.empId).toBe('number');

            expect(asset).toHaveProperty('allocatedDate');
            expect(typeof asset.allocatedDate).toBe('string');
        });
    });

    test('IM-07 - Verify that the My Asset Assigned endpoint is working for Employee role', async ({ apiAsEmployee }) => {
        const res = await apiAsEmployee.myProfile.getMyAssetAssigned({pageSize: 10, page: 1});

        //Status Validation
        expect(res.status).toBe(200);

        //Response Structure Validation
        expect(res.body).toHaveProperty('totalPages');
        expect(typeof res.body.totalPages).toBe('number');

        expect(res.body).toHaveProperty('totalAssest');
        expect(typeof res.body.totalAssest).toBe('number');

        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);

        //Data Validation
        res.body.data.forEach((asset: any) => {
            expect(asset).toHaveProperty('assignedAssestId');
            expect(typeof asset.assignedAssestId).toBe('number');

            expect(asset).toHaveProperty('manufacture');
            expect(typeof asset.manufacture).toBe('string');

            expect(asset).toHaveProperty('model');
            expect(typeof asset.model).toBe('string');

            expect(asset).toHaveProperty('serialNumber');
            expect(typeof asset.serialNumber).toBe('string');

            expect(asset).toHaveProperty('owner');
            expect(typeof asset.owner).toBe('string');  

            expect(asset).toHaveProperty('comments');
            expect(typeof asset.comments).toBe('string');

            expect(asset).toHaveProperty('assestName');
            expect(typeof asset.assestName).toBe('string');

            expect(asset).toHaveProperty('empName');
            expect(typeof asset.empName).toBe('string');

            expect(asset).toHaveProperty('empId');
            expect(typeof asset.empId).toBe('number');

            expect(asset).toHaveProperty('allocatedDate');
            expect(typeof asset.allocatedDate).toBe('string');
        });
    });

});