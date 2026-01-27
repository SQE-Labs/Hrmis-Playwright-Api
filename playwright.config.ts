import 'dotenv/config';
import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30 * 1000,
    expect: { timeout: 5000 },
    use: {
        baseURL: process.env.BASE_URL,
        trace: 'on-first-retry',
        ignoreHTTPSErrors: true
    },
    reporter: [
        ['html', { open: 'on-failure' }] // Generates HTML report and opens on failure
    ]
});
