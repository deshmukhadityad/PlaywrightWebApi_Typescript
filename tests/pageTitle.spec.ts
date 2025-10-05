import { test, chromium, expect } from '@playwright/test';

test('has title', async ({ page }) => {
 const browser = await chromium.launch({ headless: true });
   page = await browser.newPage();
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});