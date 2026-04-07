import {test, expect} from '../../fixtures/role.fixtures';

test.describe('Project Manager List API', () => {

    test('Verify that the project manager list returns a successful respone with Super Admin role', async ({apiAsSuperAdmin}) => {
        const res = await apiAsSuperAdmin.projectTeamFlow.getProjectManagerList();

        //Status code assertion
        expect(res.status).toBe(200);

        //Response body assertion
        expect(res.body).toBeDefined();
        expect(typeof res.body).toBe('object');

        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);

        // Validate structure of each project in the projects array
        res.body.data.forEach((projectManager: any) => {

        expect(projectManager).toHaveProperty('id');
        expect(typeof projectManager.id).toBe('number');

        expect(projectManager).toHaveProperty('firstName');
        expect(typeof projectManager.firstName).toBe('string');

        expect(projectManager).toHaveProperty('lastName');
        expect(typeof projectManager.lastName).toBe('string');

        });

    });

    test('Verify that the project manager list returns a successful response with employee role', async ({apiAsEmployee}) => {
        const res = await apiAsEmployee.projectTeamFlow.getProjectManagerList();

        //Status code assertion
        expect(res.status).toBe(403);

        //Response body assertion
        expect(res.body).toHaveProperty('statusCode');

        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('You are not authorized to access this resource.');

        expect(res.body).toHaveProperty('data');
        });
});