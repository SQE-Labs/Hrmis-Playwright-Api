import {test, expect} from "../../fixtures/role.fixtures";

test.describe('Access Request Type Status', () => {

    test("Verify that the user can access the asset request status with valid credentials", async ({ apiAsSuperAdmin }) => {
        const res = await apiAsSuperAdmin.assets.getAccessRequestTypeStatus({status: ''});

        //Status code Validation
        expect(res.status).toBe(200);

        //Response body validation
        expect(res.body).toHaveProperty('statusCode');
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('Access types fetched successfully.');
        expect(res.body).toHaveProperty('data');

        expect(res.body.data).toHaveProperty('accessTypes');
        expect(Array.isArray(res.body.data.accessTypes)).toBe(true);

        expect(res.body.data).toHaveProperty('accessSubtypes');
        expect(Array.isArray(res.body.data.accessSubtypes)).toBe(true);

        //Validate the structure of each access type in the array
        res.body.data.accessTypes.forEach((accessType: any) => {
            expect(accessType).toHaveProperty('accessId');
            expect(typeof accessType.accessId).toBe('number');

            expect(accessType).toHaveProperty('name');
            expect(typeof accessType.name).toBe('string');

            expect(accessType).toHaveProperty('status');
            expect(typeof accessType.status).toBe('string');

            expect(accessType).toHaveProperty('createdBy');
            expect(typeof accessType.createdBy).toBe('number');

            expect(accessType).toHaveProperty('createdAt');
            expect(typeof accessType.createdAt).toBe('string');

            expect(accessType).toHaveProperty('isRole');
            expect(typeof accessType.isRole).toBe('number');

            expect(accessType).toHaveProperty('description');
            expect(typeof accessType.description).toBe('string');
        });


    });

    test("Verify that the user can access the asset request status with valid credentials and filter by PENDING status", async ({ apiAsEmployee }) => {
        const res = await apiAsEmployee.assets.getAccessRequestTypeStatus({status: ''});

        //Status code Validation
        expect(res.status).toBe(200);

        //Response body validation
        expect(res.body).toHaveProperty('statusCode');
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('Access types fetched successfully.');
        expect(res.body).toHaveProperty('data');

        expect(res.body.data).toHaveProperty('accessTypes');
        expect(Array.isArray(res.body.data.accessTypes)).toBe(true);

        expect(res.body.data).toHaveProperty('accessSubtypes');
        expect(Array.isArray(res.body.data.accessSubtypes)).toBe(true);

        //Validate the structure of each access type in the array
        res.body.data.accessTypes.forEach((accessType: any) => {
            expect(accessType).toHaveProperty('accessId');
            expect(typeof accessType.accessId).toBe('number');

            expect(accessType).toHaveProperty('name');
            expect(typeof accessType.name).toBe('string');

            expect(accessType).toHaveProperty('status');
            expect(typeof accessType.status).toBe('string');
            
            expect(accessType).toHaveProperty('createdBy');
            expect(typeof accessType.createdBy).toBe('number');

            expect(accessType).toHaveProperty('createdAt');
            expect(typeof accessType.createdAt).toBe('string');

            expect(accessType).toHaveProperty('isRole');
            expect(typeof accessType.isRole).toBe('number');

            expect(accessType).toHaveProperty('description');
            expect(typeof accessType.description).toBe('string');
        });

    });

});