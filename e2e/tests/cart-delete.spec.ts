import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { ShopPage } from '../pages/shop-page';
import { CartPage } from '../pages/cart-page';

test('Add item to cart, delete it, and verify cart is empty with icon message', async ({ page }) => {
  const home = new HomePage(page);
  const shop = new ShopPage(page);
  const cart = new CartPage(page);

  await home.goto();
  await shop.clickMensOuterwear();
  await shop.selectProduct('Anvil L/S Crew Neck - Grey');
  await shop.selectSize('M');
  await shop.selectQuantity('1');
  await shop.addToCart();
  await shop.viewCart();

  await expect(page).toHaveURL('https://shop.polymer-project.org/cart');
  await cart.expectItemInCart('Anvil L/S Crew Neck - Grey');
  await cart.removeItem(); 
  const emptyCart = page.locator('p.empty-cart');
  const cartIcon = page.locator('iron-icon[icon="shopping-cart"]');

  await expect(emptyCart).toBeVisible();
  await expect(emptyCart).toHaveText(/is empty/i);
  await expect(cartIcon).toBeVisible();
});
