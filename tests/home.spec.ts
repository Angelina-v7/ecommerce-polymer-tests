import { test, expect } from '@playwright/test';
import { HomePage } from '../e2e/pages/home-page';

test('Home page loads and URL is correct', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await expect(page).toHaveURL('https://shop.polymer-project.org/');
});
