
import { test, expect } from '@playwright/test';

test('verify home page', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.waitForSelector('nav');
  await page.screenshot({ path: 'final_verification.png', fullPage: true });
});
