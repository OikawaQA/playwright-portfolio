import { Page, Locator } from '@playwright/test'

export class LoginPage {
  readonly page: Page
  readonly signupNameInput: Locator
  readonly signupEmailInput: Locator
  readonly signupButton: Locator
  readonly loginEmailInput: Locator
  readonly loginPasswordInput: Locator
  readonly loginButton: Locator

  constructor(page: Page) {
    this.page = page
    this.signupNameInput = page.locator('input[data-qa="signup-name"]')
    this.signupEmailInput = page.locator('input[data-qa="signup-email"]')
    this.signupButton = page.getByRole('button', { name: 'Signup' })
    this.loginEmailInput = page.locator('input[data-qa="login-email"]')
    this.loginPasswordInput = page.locator('input[data-qa="login-password"]')
    this.loginButton = page.getByRole('button', { name: 'Login' })
  }

  async fillSignupForm(name: string, email: string) {
    await this.signupNameInput.fill(name)
    await this.signupEmailInput.fill(email)
    await this.signupButton.click()
  }

  async fillLoginForm(email: string, password: string) {
    await this.loginEmailInput.fill(email)
    await this.loginPasswordInput.fill(password)
    await this.loginButton.click()
  }

}

