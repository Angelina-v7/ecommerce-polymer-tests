// tests/home.spec.ts
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Shop Now button navigates to /shop', async ({ page }) => {
  const home = new HomePage(page);

  await home.goto();
  await home.clickShopNow();

  await expect(page).toHaveURL(/.*shop/);
});