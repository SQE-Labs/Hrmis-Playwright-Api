// import { APIRequestContext, request } from '@playwright/test';

// type Role = 'superadmin' | 'employee';

// const tokenCache: Record<Role, string | null> = {
//   superadmin: null,
//   employee: null,
// };

// export async function getAuthToken(role: Role): Promise<string> {
//   if (tokenCache[role]) return tokenCache[role]!;

//   const context: APIRequestContext = await request.newContext();

//   const credentials = {
//     superadmin: {
//       username: process.env.SUPERADMIN_SIGNIN_EMAIL!,
//       password: process.env.SUPERADMIN_SIGNIN_PASSWORD!,
//     },
//     employee: {
//       username: process.env.EMPLOYEE_SIGNIN_EMAIL!,
//       password: process.env.EMPLOYEE_SIGNIN_PASSWORD!,
//     },
//   }[role];

//   const response = await context.post(
//     `${process.env.BASE_URL}/HRMBackendTest/api/auth/signin`,
//     { data: credentials }
//   );
//   console.log(`Auth response status for role ${role}:`, request);
// //   console.log(`Auth response status for role ${role}:`, response.body());
//   console.log(`Auth response for role ${role}:`, await response.text());

//   if (!response.ok()) {
//     throw new Error(`Auth failed for role: ${role}`);
//   }

//   const body = await response.json();
//   tokenCache[role] = body.accessToken;

//   return tokenCache[role]!;
// }
import { APIRequestContext, request } from '@playwright/test';
import { createECDH } from 'node:crypto';

type Role = 'superadmin' | 'employee';

const tokenCache: Record<Role, string | null> = {
  superadmin: null,
  employee: null,
};

export async function getAuthToken(role: Role): Promise<string> {
  if (tokenCache[role]) return tokenCache[role]!;

  const context: APIRequestContext = await request.newContext();

  const credentials = {
    superadmin: {
      username: process.env.SUPERADMIN_SIGNIN_EMAIL!,
      password: process.env.SUPERADMIN_SIGNIN_PASSWORD!,
    },
    employee: {
      username: process.env.EMPLOYEE_SIGNIN_EMAIL!,
      password: process.env.EMPLOYEE_SIGNIN_PASSWORD!,
    },
  }[role];

  const response = await context.post(
    `${process.env.BASE_URL}/HRMBackendTest/api/auth/signin`,
     {data :{"email":"Vishal.thakur1@caeliusconsulting.com","password":"Test@123"}}
  );
  console.log(`Auth request sent for role ${role}`, { data: credentials });
  console.log(`auth url received for role ${role} :`, `${process.env.BASE_URL}/HRMBackendTest/api/auth/signin`);
  console.log(`Auth response status for role ${role}:`, response.status());
  const responseText = await response.text();
  //console.log(`Auth response body for role ${role}:`, responseText);

  if (!response.ok()) {
    throw new Error(`Auth failed for role: ${role}. Status: ${response.status()}, Body: ${responseText}`);
  }

  const body = await response.json();
  console.log(`Parsed body:`, body);
  console.log(`Token property:`, body.accessToken || body.token || Object.keys(body));
  
  tokenCache[role] = body.accessToken;

  if (!tokenCache[role]) {
    throw new Error(`No token found in response for role: ${role}`);
  }

  return tokenCache[role]!;
}