import { test, expect } from '@playwright/test';

test.describe('Test group', () => {
  test('seed', async ({ page }) => {
    // use web site https://maaretp.com/app/
    await page.goto('https://maaretp.com/app/');
  });
});
