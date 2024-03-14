import { test, expect } from '@playwright/test';

test('google search', async({ page }) => {
  await page.goto('https://google.com');

  // Search input locator
  const searchInput = page.locator('[name=q]');

  // Search flow
  await searchInput.fill('playwright');
  await searchInput.press('Enter')
  await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
  await page.getByRole('link', { name: 'Get started' }).click();

  // Assert
  await expect(page.getByRole('heading', { name: 'IntroductionDirect link to' })).toBeVisible();
});
