import { test, expect } from '@playwright/test';

test('Handle New Window', async ({ page, context }) => {

  // 1. Open the website
  await page.goto('https://the-internet.herokuapp.com/windows');

  // 2. Start waiting for a new page (window/tab) to open
  const newWindow = context.waitForEvent('page');

  // 3. Click the link that opens a new window
  await page.getByRole('link', { name: 'Click Here' }).click();

  // 4. Get the newly opened page
  const newPage = await newWindow;

  // 5. Wait until the new page is fully loaded
  await newPage.waitForLoadState();

  // 6. Verify the heading in the new window
  await expect(newPage.locator('h3')).toHaveText('New Window');

  // 7. Print the title of the new window
  console.log(await newPage.title());

  // 8. Return to the original page (optional)
  await page.bringToFront();

  // 9. Verify we are back on the original page
  await expect(page.locator('h3')).toHaveText('Opening a new window');

  console.log(await page.title());

});