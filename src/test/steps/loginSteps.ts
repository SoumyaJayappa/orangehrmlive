import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { chromium, Page, Browser, BrowserContext } from "playwright";
import { users } from '../data/users';
import { DashboardPage } from "../../pages/DashboardPage";

let loginPage: LoginPage;
let dashboardPage: DashboardPage;


Given('User logs in as {string}', async function (userType: string) {
  const user = users[userType as keyof typeof users];
  loginPage = new LoginPage(this.page);
  dashboardPage = new DashboardPage(this.page);
  await loginPage.goto();
  await loginPage.enterUsername(user.username);
  await loginPage.enterPassword(user.password);
  await loginPage.clickLogin();
});

Then('Login should be success', async function () {
  await loginPage.verifyLoginSuccess();
});

Then('Login should fail', async function () {
  await loginPage.verifyLoginFailed();
});

When('User logs out', async function () {
  await dashboardPage.logout();
});

Then('Logout should be success', async function () {
  await dashboardPage.verifyLogoutSuccess();
});