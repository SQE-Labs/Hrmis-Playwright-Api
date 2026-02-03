import {test, expect} from '../../fixtures/role.fixtures';

test.describe('Get Active Projects API', () => {

    test('Verify Get Active Projects API returns active projects for Super Admin user', async ({apiAsSuperAdmin}) => {
        const res = await apiAsSuperAdmin.assets.getActiveProjects();

        // Status Validation
        expect(res.status).toBe(200);

        // Body level validation
        expect(res.body).toBeTruthy();
        expect(res.body).toHaveProperty('statusCode');
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('All projects fetched successfully.');
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);

        // Validate each project record
        res.body.data.forEach((project: any) => {
            // Type validations (aligned with actual response)
            expect(project).toHaveProperty('projectId');
            expect(typeof project.projectId).toBe('number');

            expect(project).toHaveProperty('projectName');
            expect(typeof project.projectName).toBe('string');

            expect(project).toHaveProperty('projectStatus');
            expect(typeof project.projectStatus).toBe('number');

        });

        console.log(
            'Validated Active Projects List:',
            JSON.stringify(res.body.data, null, 2)
        );
    });



    test('Verify Get Active Projects API returns active projects for another valid user', async ({apiAsEmployee}) => {
        const res = await apiAsEmployee.assets.getActiveProjects();

        // Status Validation
        expect(res.status).toBe(200);

        // Body level validation
        expect(res.body).toBeTruthy();
        expect(res.body).toHaveProperty('statusCode');
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('All projects fetched successfully.');
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);

        // Validate each project record
        res.body.data.forEach((project: any) => {
            // Type validations (aligned with actual response)
            expect(project).toHaveProperty('projectId');
            expect(typeof project.projectId).toBe('number');

            expect(project).toHaveProperty('projectName');
            expect(typeof project.projectName).toBe('string');

            expect(project).toHaveProperty('projectStatus');
            expect(typeof project.projectStatus).toBe('number');
        });

        console.log(
            'Validated Active Projects List for another user:',
            JSON.stringify(res.body.data, null, 2)
        );
    });

});