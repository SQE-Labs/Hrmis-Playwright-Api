import {test, expect} from '../../fixtures/role.fixtures';

test.describe('Projects by Employee Dashboard', () => {

    test('Verify the projects must display when super admin id is entered', async ({apiAsSuperAdmin}) => {
        const response = await apiAsSuperAdmin.dashboard.getProjectsByEmployee();

        // Status code validation
        expect(response.status).toBe(200);

        // Response body validation
        expect(response.body).toHaveProperty('statusCode');
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('Projects fetched successfully.');
        expect(response.body).toHaveProperty('data');

        expect(response.body.data).toHaveProperty('totalProjects');
        expect(typeof response.body.data.totalProjects).toBe('number');

        expect(response.body.data).toHaveProperty('projects');
        expect(Array.isArray(response.body.data.projects)).toBe(true);
        expect(response.body.data.projects.length).toBeGreaterThan(0);

        // Validate structure of each project in the projects array
        response.body.data.projects.forEach((project: any) => {
        expect(project).toHaveProperty('projectId');
        expect(typeof project.projectId).toBe('number');

        expect(project).toHaveProperty('projectName');
        expect(typeof project.projectName).toBe('string');

        });

        console.log(
            'Validated Projects by Employee Dashboard:',
            JSON.stringify(response.body.data, null, 2)
        );
    });

    test('Verify projects should return with the employee ', async ({apiAsEmployee}) => {
        const response = await apiAsEmployee.dashboard.getProjectsByEmployee();

        // Status code validation
        expect(response.status).toBe(200);

        // Response body validation
        expect(response.body).toHaveProperty('statusCode');
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('Projects fetched successfully.');
        expect(response.body).toHaveProperty('data');

        expect(response.body.data).toHaveProperty('totalProjects');
        expect(typeof response.body.data.totalProjects).toBe('number');

        expect(response.body.data).toHaveProperty('projects');
        expect(Array.isArray(response.body.data.projects)).toBe(true);
        expect(response.body.data.projects.length).toBeGreaterThan(0);

        // Validate structure of each project in the projects array
        response.body.data.projects.forEach((project: any) => {
            expect(project).toHaveProperty('projectId');
            expect(typeof project.projectId).toBe('number');

            expect(project).toHaveProperty('projectName');
            expect(typeof project.projectName).toBe('string');
        });

        console.log(
            'Validated Projects by Employee for Employee Role:',
            JSON.stringify(response.body.data, null, 2)
        );
    });
});
