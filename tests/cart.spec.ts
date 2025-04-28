import { test, expect } from '@playwright/test';
import { HomePage } from '../e2e/pages/home-page';
import { ShopPage } from '../e2e/pages/shop-page';
import { CartPage } from '../e2e/pages/cart-page';

test('Add item to cart and verify it is present', async ({ page }) => {
  const home = new HomePage(page);
  const shop = new ShopPage(page);
  const cart = new CartPage(page);

  await home.goto();
  await shop.clickMensOuterwear(); // Navigate to product category
  await shop.selectProduct('Anvil L/S Crew Neck - Grey'); // Click product
  await shop.selectSize('M'); // Pick size
  await shop.selectQuantity('2'); // Pick quantity
  await shop.addToCart(); // Add to cart
  await shop.viewCart(); // View cart

  await expect(page).toHaveURL('https://shop.polymer-project.org/cart'); // URL check
  await cart.expectItemInCart('Anvil L/S Crew Neck - Grey'); // Assert product is in cart
});
