import 'dotenv/config';
import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30 * 1000,
    expect: { timeout: 5000 },
    use: {
        baseURL: process.env.API_BASE_URL || 'https://topuptalent.com/HRMBackendTest/api/',
        trace: 'on-first-retry',
        ignoreHTTPSErrors: true
    }
});
