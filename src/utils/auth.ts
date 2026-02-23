import { APIRequestContext, request } from '@playwright/test';

type Role = 'superadmin' | 'employee' | 'employee1' | 'employee2';

const tokenCache: Record<Role, string | null> = {
  superadmin: null,
  employee: null,
  employee1: null,
  employee2: null,
};

export async function getAuthToken(role: Role): Promise<string> {
  if (tokenCache[role]) return tokenCache[role]!;

  const context: APIRequestContext = await request.newContext();

  const credentials = {
    superadmin: {
      email: process.env.SUPERADMIN_SIGNIN_EMAIL!,
      password: process.env.SUPERADMIN_SIGNIN_PASSWORD!,
    },
    employee: {
      email: process.env.EMPLOYEE_SIGNIN_EMAIL!,
      password: process.env.EMPLOYEE_SIGNIN_PASSWORD!,
    },
    employee1: {
      email: process.env.EMPLOYEE_SIGNIN_EMAIL1!,
      password: process.env.EMPLOYEE_SIGNIN_PASSWORD1!,
    },
    employee2: {
      email: process.env.EMPLOYEE_SIGNIN_EMAIL2!,
      password: process.env.EMPLOYEE_SIGNIN_PASSWORD2!,
    },
  }[role];

  const response = await context.post(
    `${process.env.BASE_URL}/HRMBackendTest/api/auth/signin`,
     {data :{"email": credentials.email, "password": credentials.password}}
  );
  
  
  const responseText = await response.text();

  if (!response.ok()) {
    throw new Error(`Auth failed for role: ${role}. Status: ${response.status()}, Body: ${responseText}`);
  }

  const body = await response.json();
  
  tokenCache[role] = body.accessToken;

  if (!tokenCache[role]) {
    throw new Error(`No token found in response for role: ${role}`);
  }

  return tokenCache[role]!;
}