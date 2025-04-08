// pages/HomePage.ts
import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly shopButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shopButton = page.locator('text=Shop Now');
  }

  async goto() {
    await this.page.goto('https://shop.polymer-project.org/');
  }

//  async clickShopNow() {
//    await this.shopButton.click();
//  }
// async clickShopNow() {
//   await this.shopButton.click();
//   await this.page.waitForURL(/.*shop/);
//   await this.page.pause(); // Pauses and opens dev tools
// }
    
    async clickShopNow() {
        await this.shopButton.click();
        await this.page.waitForURL(/.*shop/);
    }
    }
