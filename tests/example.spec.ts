import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://plantingwithpea.vercel.app');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Planting with Pea/);
});

