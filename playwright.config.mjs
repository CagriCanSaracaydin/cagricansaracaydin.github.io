import { defineConfig } from '@playwright/test';

const baseURL = 'http://127.0.0.1:4173';

export default defineConfig({
  testDir: './tests/smoke',
  testMatch: '**/*.pw.js',
  use: {
    baseURL,
    browserName: 'chromium',
  },
  webServer: {
    command: 'npm run preview',
    url: baseURL,
    reuseExistingServer: false,
    timeout: 30_000,
  },
});
