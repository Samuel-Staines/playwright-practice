import { test, expect } from '@playwright/test';

test('open gmail from google apps', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1774711064224&no_sw_cr=1');
  await page.getByRole('button', { name: 'Google apps' }).click();
  await page.locator('iframe[name="app"]').contentFrame().getByRole('link', { name: 'Gmail, row 2 of 5 and column' }).click();
  await expect(page).toHaveURL('https://workspace.google.com/intl/en-US/gmail/');
});
