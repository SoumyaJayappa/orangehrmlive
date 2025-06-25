import { Page } from "playwright";

export class DashboardPage {
  private userDropdown = this.page.locator('.oxd-userdropdown-tab');
  private logoutButton = this.page.getByRole('menuitem', { name: 'Logout' });
  private loginButton = this.page.getByRole('button', { name: 'Login' });

  constructor(private page: Page) {}

  async logout() {
    await this.userDropdown.click();
    await this.logoutButton.waitFor({ state: 'visible' });
    await this.logoutButton.click();
  }

  async verifyLogoutSuccess() {
    // Verify login page is visible (for example, check login button)
    await this.loginButton.waitFor({ state: 'visible' });
  }
}