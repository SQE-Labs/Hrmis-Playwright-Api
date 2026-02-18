import { test, expect } from '../../fixtures/role.fixtures';

test.describe("Master Leave - Dashboard", () => {

  test("IM-06 - Verify that the master leave is accessible and returns the correct information",async ({ apiAsSuperAdmin }) => {

      const res = await apiAsSuperAdmin.dashboard.getMasterLeave();

      // Status code validation
      expect(res.status).toBe(200);

      // Validate data object exists
      expect(res.body).toHaveProperty('data');
      expect(typeof res.body.data).toBe('object');

      const leave = res.body.data;

      // Basic fields
      expect(typeof leave.createdBy).toBe('number');
      expect(typeof leave.creationDate).toBe('string');
      expect(typeof leave.lastModifiedBy).toBe('number');
      expect(typeof leave.lastModifiedDate).toBe('string');
      expect(typeof leave.id).toBe('number');
      expect(typeof leave.employeeId).toBe('number');

      // Leave balances
      expect(typeof leave.quartelyLeave).toBe('number');
      expect(typeof leave.privilegeLeave).toBe('number');
      expect(typeof leave.workFromHomeLeave).toBe('number');
      expect(typeof leave.paternityLeave).toBe('number');
      expect(typeof leave.maternityLeave).toBe('number');
      expect(typeof leave.workFromHomeLeaveForQuarter).toBe('number');
      expect(typeof leave.shortLeave).toBe('number');
      expect(typeof leave.halfDayLeave).toBe('number');
      expect(typeof leave.halfYearlyLeave).toBe('number');
      expect(typeof leave.periodicLeave).toBe('number');
      expect(typeof leave.unpaidLeaveBalanceMonth).toBe('number');
      expect(typeof leave.unpaidLeaveBalanceYear).toBe('number');
      expect(typeof leave.negativeBalance).toBe('number');
      expect(typeof leave.casualLeave).toBe('number');
      expect(typeof leave.version).toBe('number');
    });

    test("IM-06 - Verify that the master leave enpoint is working for employee role",async ({ apiAsEmployee }) => {
        const res = await apiAsEmployee.dashboard.getMasterLeave();

        // ✅ Status code validation
        expect(res.status).toBe(200);

        // Validate data object exists
      expect(res.body).toHaveProperty('data');
      expect(typeof res.body.data).toBe('object');

      const leave = res.body.data;

      // Basic fields
      expect(typeof leave.createdBy).toBe('number');
      expect(typeof leave.creationDate).toBe('string');
      expect(typeof leave.lastModifiedBy).toBe('number');
      expect(typeof leave.lastModifiedDate).toBe('string');
      expect(typeof leave.id).toBe('number');
      expect(typeof leave.employeeId).toBe('number');

      // Leave balances
      expect(typeof leave.quartelyLeave).toBe('number');
      expect(typeof leave.privilegeLeave).toBe('number');
      expect(typeof leave.workFromHomeLeave).toBe('number');
      expect(typeof leave.paternityLeave).toBe('number');
      expect(typeof leave.maternityLeave).toBe('number');
      expect(typeof leave.workFromHomeLeaveForQuarter).toBe('number');
      expect(typeof leave.shortLeave).toBe('number');
      expect(typeof leave.halfDayLeave).toBe('number');
      expect(typeof leave.halfYearlyLeave).toBe('number');
      expect(typeof leave.periodicLeave).toBe('number');
      expect(typeof leave.unpaidLeaveBalanceMonth).toBe('number');
      expect(typeof leave.unpaidLeaveBalanceYear).toBe('number');
      expect(typeof leave.negativeBalance).toBe('number');
      expect(typeof leave.casualLeave).toBe('number');
      expect(typeof leave.version).toBe('number');

    });
});
