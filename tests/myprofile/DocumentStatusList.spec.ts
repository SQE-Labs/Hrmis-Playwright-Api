import {test, expect} from '../../fixtures/role.fixtures';

test.describe("Document Status List - My Profile", () => {

    test("IM-09 - Verify the status of the documents is displayed corrctly using Super Admin role", async ({apiAsSuperAdmin}) =>{
        const res = await apiAsSuperAdmin.myProfile.getStatusList();

        //Status code Validation
        expect(res.status).toBe(200);

        //Response Body Validation
        expect(res.body).toBeDefined();
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('Success');

        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);

        // Validate the structure of the first document in the list
        res.body.data.forEach((status: any) => {
            expect(status).toHaveProperty('documentViewId');
            expect(typeof status.documentViewId).toBe('number');

            expect(status).toHaveProperty('documentId');
            expect(typeof status.documentId).toBe('number');

            expect(status).toHaveProperty('documentName');
            expect(typeof status.documentName).toBe('string');

            expect(status).toHaveProperty('documentType');
            expect(typeof status.documentType).toBe('string');

            expect(status).toHaveProperty('isUploaded');
            expect(typeof status.isUploaded).toBe('boolean');

            expect(status).toHaveProperty('isMandatory');
            expect(typeof status.isMandatory).toBe('boolean');

        })
    });

    test("IM-09 - Verify the status of the documents is displayed corrctly using Employee Role", async ({apiAsEmployee}) =>{
        const res = await apiAsEmployee.myProfile.getStatusList();

        //Status code Validation
        expect(res.status).toBe(200);

        //Response Body Validation
        expect(res.body).toBeDefined();
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('Success');

        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);

        // Validate the structure of the first document in the list
        res.body.data.forEach((status: any) => {
            expect(status).toHaveProperty('documentViewId');
            expect(typeof status.documentViewId).toBe('number');

            expect(status).toHaveProperty('documentId');
            expect(typeof status.documentId).toBe('number');

            expect(status).toHaveProperty('documentName');
            expect(typeof status.documentName).toBe('string');

            expect(status).toHaveProperty('documentType');
            expect(typeof status.documentType).toBe('string');

            expect(status).toHaveProperty('isUploaded');
            expect(typeof status.isUploaded).toBe('boolean');

            expect(status).toHaveProperty('isMandatory');
            expect(typeof status.isMandatory).toBe('boolean');

        })
    });
});