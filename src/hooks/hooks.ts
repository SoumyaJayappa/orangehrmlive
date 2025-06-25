import { Before, After, setWorldConstructor, IWorldOptions, World, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from 'playwright';

setDefaultTimeout(60 * 1000); // 1 minute timeout for steps

// Extend World for type-safe browser and page sharing
class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
}

setWorldConstructor(CustomWorld);

let browser: Browser;
let context: BrowserContext;
let page: Page;

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  await this.page.close();
  await this.browser.close();
});