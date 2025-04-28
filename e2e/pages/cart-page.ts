import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async expectItemInCart(productName: string) {
    const item = this.page.locator('shop-cart-item div').filter({ hasText: productName }).nth(1);
    await expect(item).toBeVisible();
  }
}
