import { APIRequestContext } from '@playwright/test';
import { RequestBuilder } from './requestBuilder';
import { AssetManagementService } from '../services/assetmanagement.service';
import { AttendanceAndLeave } from '../services/attendance&leave';
import { EmployeeManagementService } from '../services/employeemanagement.service';
import { DashboardService } from '../services/dashboard.service';

export class ApiClient {
  readonly assets!: AssetManagementService;
  readonly attendanceAndLeave!: AttendanceAndLeave;
  readonly employeeManagement!: EmployeeManagementService;
  readonly dashboard!: DashboardService;

  constructor(context: APIRequestContext, token: string) {
    const request = new RequestBuilder(context, {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    this.assets = new AssetManagementService(request);
    this.attendanceAndLeave = new AttendanceAndLeave(request);
    this.employeeManagement = new EmployeeManagementService(request);
    this.dashboard = new DashboardService(request);
  }
}