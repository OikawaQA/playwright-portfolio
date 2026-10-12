import { Page, Locator } from '@playwright/test';

export class HeaderComponent {
  readonly page: Page;
  readonly logo: Locator;
  readonly homeButton: Locator;
  readonly signupLoginButton: Locator;
  readonly contactUsButton: Locator;
  readonly testCasesButton: Locator;
  constructor(page: Page) {
    this.page = page;


    const headerContainer = page.locator('header');

    this.logo = headerContainer.getByRole('img', { name: 'Website for automation practice' });
    this.homeButton = headerContainer.getByRole('link', { name: 'Home' });
    this.signupLoginButton = headerContainer.getByRole('link', { name: 'Signup / Login' });
    this.contactUsButton = headerContainer.getByRole('link', { name: 'Contact us' });
    this.testCasesButton = headerContainer.getByRole('link', { name: 'Test Cases' });
  }

  async clickHome() {
    await this.homeButton.click();
  }

  async clickSignupLogin() {
    await this.signupLoginButton.click();
  }

  async clickContactUs() {
    await this.contactUsButton.click();
  }

  async clickTestCases() {
    await this.testCasesButton.click();
  }
}