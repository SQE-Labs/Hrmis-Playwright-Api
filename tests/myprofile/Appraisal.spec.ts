import {test, expect} from '../../fixtures/role.fixtures';

test.describe("Appraisal- My Profile", () => {

    test("IM-11 - Verify the appraisal documents is displayed corrctly using Super Admin role", async ({apiAsSuperAdmin}) =>{
        const res = await apiAsSuperAdmin.myProfile.getAppraisal();

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
        res.body.data.forEach((appraisal: any) => {
            expect(appraisal).toHaveProperty('documentViewId');
            expect(typeof appraisal.documentViewId).toBe('number');

            expect(appraisal).toHaveProperty('documentId');
            expect(typeof appraisal.documentId).toBe('number');

            expect(appraisal).toHaveProperty('documentPath');
            expect(typeof appraisal.documentPath).toBe('string');

            expect(appraisal).toHaveProperty('letterIssueDate');
            expect(typeof appraisal.letterIssueDate).toBe('string');

            expect(appraisal).toHaveProperty('effectiveDate');
            expect(typeof appraisal.effectiveDate).toBe('string');

        })
    });

    test("IM-11 - Verify the appraisal documents is displayed corrctly using Employee Role", async ({apiAsEmployee}) =>{
        const res = await apiAsEmployee.myProfile.getAppraisal();

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
        res.body.data.forEach((appraisal: any) => {
            expect(appraisal).toHaveProperty('documentViewId');
            expect(typeof appraisal.documentViewId).toBe('number');

            expect(appraisal).toHaveProperty('documentId');
            expect(typeof appraisal.documentId).toBe('number');

            expect(appraisal).toHaveProperty('documentPath');
            expect(typeof appraisal.documentPath).toBe('string');

            expect(appraisal).toHaveProperty('letterIssueDate');
            expect(typeof appraisal.letterIssueDate).toBe('string');

            expect(appraisal).toHaveProperty('effectiveDate');
            expect(typeof appraisal.effectiveDate).toBe('string');

        })
    });
});