import { test as base, request, APIRequestContext, expect } from '@playwright/test';
import { getAuthToken } from '../src/utils/auth';
import { ApiClient } from '../src/api/apiClinet';

type Role = 'superadmin' | 'employee' | 'employee1' | 'employee2';

type RoleFixtures = {
  role: Role;
  apiAsSuperAdmin: ApiClient;
  apiAsEmployee: ApiClient;
  apiAsEmployee1: ApiClient;
  apiAsEmployee2: ApiClient;
  
};

export const test = base.extend<RoleFixtures>({
  // Default role (can be overridden using test.use)
  role: ['employee', { option: true }],

  apiAsSuperAdmin: async ({ }, use) => {
    const token = await getAuthToken('superadmin');

    const api = await request.newContext({
      baseURL: process.env.BASE_URL,
      extraHTTPHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    const apiClient = new ApiClient(api, token);
    await use(apiClient);
    await api.dispose();
  },

  apiAsEmployee: async ({ }, use) => {
    const token = await getAuthToken('employee');

    const api = await request.newContext({
      baseURL: process.env.BASE_URL,
      extraHTTPHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    const apiClient = new ApiClient(api, token);
    await use(apiClient);
    await api.dispose();
  },
  apiAsEmployee1: async ({ }, use) => {
    const token = await getAuthToken('employee1');

    const api = await request.newContext({
      baseURL: process.env.BASE_URL,
      extraHTTPHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    const apiClient = new ApiClient(api, token);
    await use(apiClient);
    await api.dispose();
  },
  apiAsEmployee2: async ({ }, use) => {
    const token = await getAuthToken('employee2');

    const api = await request.newContext({
      baseURL: process.env.BASE_URL,
      extraHTTPHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    const apiClient = new ApiClient(api, token);
    await use(apiClient);
    await api.dispose();
  },
});

export { expect };
