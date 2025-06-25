import { Page } from "playwright";
import { expect } from "playwright/test";

export class LoginPage {
  private usernameField = this.page.getByRole('textbox', { name: 'Username' });
  private passwordField = this.page.getByRole('textbox', { name: 'Password' });
  private loginButton = this.page.getByRole('button', { name: 'Login' });
  private dashboardHeading = this.page.getByRole('heading', { name: 'Dashboard' });
  private alertMessage = this.page.getByRole('alert');

  errorMessage: string = "Invalid credentials";

  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/');
  }

  async enterUsername(username: string) {
     await this.usernameField.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordField.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async verifyLoginSuccess() {
   await expect(this.dashboardHeading).toBeVisible();
  }

  async verifyLoginFailed() {
    await expect(this.alertMessage).toBeVisible();
    await expect(this.alertMessage).toHaveText(this.errorMessage);
  }
}