import {test, expect} from '../../fixtures/role.fixtures';

test.describe("Document Details - My Profile", () => {

    test("IM-08 - Verify that the Super Admin can view the document details in my profile", async ({ apiAsSuperAdmin }) => {
        const res = await apiAsSuperAdmin.myProfile.getDocuments();

        //Status Code Validation
        expect(res.status).toBe(200);

        //Response Body Validation
        expect(res.body).toBeDefined();
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('Success');

        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);

        // Validate the structure of the first document in the list
        res.body.data.forEach((document: any) => {
            expect(document).toHaveProperty('documentViewId');
            expect(typeof document.documentViewId).toBe('number');

            expect(document).toHaveProperty('documentId');
            expect(typeof document.documentId).toBe('number');

            expect(document).toHaveProperty('documentName');
            expect(typeof document.documentName).toBe('string');

            expect(document).toHaveProperty('documentType');
            expect(typeof document.documentType).toBe('string');

            expect(document).toHaveProperty('documentPath');
            expect(typeof document.documentPath).toBe('string');

            expect(document).toHaveProperty('approvalStatus');
            expect(document.approvalStatus === 'approved' || document.approvalStatus === 'pending' || document.approvalStatus === 'rejected').toBe(true);
        });

    });

    test("IM-08 - Verify that the Employee can view the document details in my profile", async ({ apiAsEmployee }) => {
        const res = await apiAsEmployee.myProfile.getDocuments();

        //Status Code Validation
        expect(res.status).toBe(200);

        //Response Body Validation
        expect(res.body).toBeDefined();
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('Success');

        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);

        // Validate the structure of the first document in the list
        res.body.data.forEach((document: any) => {
            expect(document).toHaveProperty('documentViewId');
            expect(typeof document.documentViewId).toBe('number');

            expect(document).toHaveProperty('documentId');
            expect(typeof document.documentId).toBe('number');

            expect(document).toHaveProperty('documentName');
            expect(typeof document.documentName).toBe('string');

            expect(document).toHaveProperty('documentType');
            expect(typeof document.documentType).toBe('string');

            expect(document).toHaveProperty('documentPath');
            expect(typeof document.documentPath).toBe('string');

            expect(document).toHaveProperty('approvalStatus');
            expect(document.approvalStatus === 'approved' || document.approvalStatus === 'pending' || document.approvalStatus === 'rejected').toBe(true);
        });
    });
});