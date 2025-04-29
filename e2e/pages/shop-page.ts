import { Page } from '@playwright/test';

export class ShopPage {
  constructor(private page: Page) {}

  async clickMensOuterwear() {
    await this.page.getByRole('link', { name: "Men's Outerwear Shop Now" }).click();
  }

  async selectProduct(productName: string) {
    await this.page.locator('div.title', { hasText: productName }).click();
  }

  async selectSize(size: 'S' | 'M' | 'L') {
    await this.page.getByLabel('Size').selectOption(size);
  }

  async selectQuantity(quantity: string) {
    await this.page.getByLabel('Quantity').selectOption(quantity);
  }

  async addToCart() {
    await this.page.getByRole('button', { name: 'Add this item to cart' }).click();
  }

  async viewCart() {
    await this.page.getByRole('link', { name: 'View Cart' }).click();
  }
}
