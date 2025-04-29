import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async expectItemInCart(productName: string) {
    const item = this.page.locator('shop-cart-item div').filter({ hasText: productName }).nth(1);
    await expect(item).toBeVisible();
  }
  async removeItem() {
    const removeButton = this.page.getByRole('button', { name: /delete item/i });
    await removeButton.click();
  }
  

  async expectCartEmpty() {
    const emptyCart = this.page.locator('p.empty-cart');
    const cartIcon = this.page.locator('iron-icon[icon="shopping-cart"]');

    await expect(emptyCart).toBeVisible();
    await expect(emptyCart).toHaveText(/is empty/i);
    await expect(cartIcon).toBeVisible();
  }
}
