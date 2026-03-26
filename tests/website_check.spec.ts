import { test, expect } from '@playwright/test';
test('check if website is up', async ({ page }) => {
  const response = await page.goto('https://google.com');
  // Check if response is OK (status 200–299)
  expect(response?.ok()).toBeTruthy();

  console.log('Website is up and running');
});