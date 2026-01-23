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
  // console.log(`Auth request sent for role ${role}`, { data: credentials });
  // console.log(`auth url received for role ${role} :`, `${process.env.BASE_URL}/HRMBackendTest/api/auth/signin`);
  // console.log(`Auth response status for role ${role}:`, response.status());
  const responseText = await response.text();
  //console.log(`Auth response body for role ${role}:`, responseText);

  if (!response.ok()) {
    throw new Error(`Auth failed for role: ${role}. Status: ${response.status()}, Body: ${responseText}`);
  }

  const body = await response.json();
  // console.log(`Parsed body:`, body);
  // console.log(`Token property:`, body.accessToken || body.token || Object.keys(body));
  
  tokenCache[role] = body.accessToken;

  if (!tokenCache[role]) {
    throw new Error(`No token found in response for role: ${role}`);
  }

  return tokenCache[role]!;
}