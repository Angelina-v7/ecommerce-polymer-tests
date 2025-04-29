import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { ShopPage } from '../pages/shop-page';
import { CartPage } from '../pages/cart-page';

test('Add item to cart and verify it is present', async ({ page }) => {
  const home = new HomePage(page);
  const shop = new ShopPage(page);
  const cart = new CartPage(page);

  await home.goto();
  await shop.clickMensOuterwear();
  await shop.selectProduct('Anvil L/S Crew Neck - Grey');
  await shop.selectSize('M');
  await shop.selectQuantity('2');
  await shop.addToCart();
  await shop.viewCart();

  await expect(page).toHaveURL('https://shop.polymer-project.org/cart');
  await cart.expectItemInCart('Anvil L/S Crew Neck - Grey');
});
