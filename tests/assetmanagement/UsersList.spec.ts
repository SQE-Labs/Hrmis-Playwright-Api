import {test, expect} from '../../fixtures/role.fixtures';

test.describe('Asset Management API - Users List', () => {

    // Test case for Super Admin user
  test('IM_20, IM_22 - Verify users list is returned correctly for Super Admin user', async ({ apiAsSuperAdmin }) => {

    const res = await apiAsSuperAdmin.assets.getUsersList();

    // 1 Status validation
    expect(res.status).toBe(200);

    // 2 Body validation (top-level)
    expect(res.body).toBeTruthy();
    expect(res.body).toHaveProperty('statusCode');
    expect(res.body).toHaveProperty('message');
    expect(res.body).toHaveProperty('data');

    expect(res.body.statusCode).toBe(200);
    expect(res.body.message).toBe('Employees fetched successfully');

    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);

    // 3 Validate each employee record
    res.body.data.forEach((emp: any) => {

      // 4 ID & basic info
      expect(typeof emp.id).toBe('number');
      expect(emp.employeeId === null || emp.employeeId === undefined || typeof emp.employeeId === 'string').toBeTruthy();
      expect(typeof emp.empName).toBe('string');

      // 5 Name breakup
      expect(typeof emp.firstName).toBe('string');
      expect(emp.middleName === null || emp.middleName === undefined || typeof emp.middleName === 'string').toBeTruthy();
      expect(typeof emp.lastName).toBe('string');

      // 6 Personal details
      expect(typeof emp.gender).toBe('string');
      expect(emp.bloodGroup === null || emp.bloodGroup === undefined || typeof emp.bloodGroup === 'string').toBeTruthy();
      expect(typeof emp.dob).toBe('string');

      // 7 Identity details
      expect(emp.aadharNum === null || emp.aadharNum === undefined || typeof emp.aadharNum === 'string').toBeTruthy();
      expect(typeof emp.panNum).toBe('string');
      expect(typeof emp.passportNum).toBe('string');

      // 8 Employment dates
      expect(emp.doj === null || emp.doj === undefined || typeof emp.doj === 'string').toBeTruthy();
      expect(typeof emp.maritalStatus).toBe('string');

      // anniversaryDate can be null or string
      expect(emp.anniversaryDate === null || emp.anniversaryDate === undefined || typeof emp.anniversaryDate === 'string').toBeTruthy();

      // 9 Contact details
      expect(typeof emp.phoneNumber).toBe('string');
      expect(emp.alternateNumber === null || emp.alternateNumber === undefined || typeof emp.alternateNumber === 'string').toBeTruthy();
      expect(typeof emp.ccEmail).toBe('string');

      // 10 Address details
      expect(emp.presentAddress === null || emp.presentAddress === undefined || typeof emp.presentAddress === 'string').toBeTruthy();
      expect(typeof emp.permanentAddress).toBe('string');

      // 11 Status & flags
      expect(typeof emp.enabled).toBe('boolean');
      expect(typeof emp.status).toBe('string');

      const validStatuses = ['VERIFIED', 'PENDING', 'REJECTED'];
      expect(validStatuses).toContain(emp.status);

      // 12 Organization details
      expect(typeof emp.designation).toBe('string');
      expect(typeof emp.department).toBe('string');
      expect(typeof emp.managerName).toBe('string');

      // 13 Roles
      expect(Array.isArray(emp.roles)).toBe(true);
      expect(emp.roles.length).toBeGreaterThan(0);

      // 14 Misc
      expect(typeof emp.photoPath).toBe('string');
      expect(typeof emp.employeeType).toBe('string');
      expect(emp.leaveManager === null || emp.leaveManager === undefined || typeof emp.leaveManager === 'number').toBeTruthy();
      expect(emp.employeeSubType === null || emp.employeeSubType === undefined || typeof emp.employeeSubType === 'string').toBeTruthy();
      expect(typeof emp.isTech).toBe('boolean');
    });

    console.log(
      'Validated Users List:',
      JSON.stringify(res.body.data, null, 2)
    );
  });

    // Test case for employee user
    test('IM_20, IM_22 - Verify users list is returned correctly for another valid user', async ({ apiAsEmployee }) => {   
        const res = await apiAsEmployee.assets.getUsersList();
        // 1 Status validation
        expect(res.status).toBe(403);
        //Body validation
        expect(res.body).toBeTruthy();
        expect(res.body).toHaveProperty('message');

        // Message validation
        expect(res.body.message).toBe('You are not authorized to access this resource.');

        // Structure validation
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toBeNull();
        console.log('Users List for Employee User:',
             JSON.stringify(res.body, null, 2));
    });
});