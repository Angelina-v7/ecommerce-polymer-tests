import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { ShopPage } from '../pages/shop-page';

test('Click on "Men\'s Outerwear Shop Now" and verify category page', async ({ page }) => {
  const home = new HomePage(page);
  const shop = new ShopPage(page);

  await home.goto();
  await shop.clickMensOuterwear();

  await expect(page).toHaveURL('https://shop.polymer-project.org/list/mens_outerwear');
});
