import { Page, Locator } from '@playwright/test'

export class SignupPage {
  readonly page: Page
  readonly signupNameInput: Locator
  readonly signupEmailInput: Locator
  readonly signupButton: Locator
  readonly genderMaleRadio: Locator
  readonly passwordInput: Locator
  readonly daysSelect: Locator
  readonly monthsSelect: Locator
  readonly yearsSelect: Locator
  readonly firstNameInput: Locator
  readonly lastNameInput: Locator
  readonly companyInput: Locator
  readonly addressInput: Locator
  readonly address2Input: Locator
  readonly countrySelect: Locator
  readonly stateInput: Locator
  readonly cityInput: Locator
  readonly zipcodeInput: Locator
  readonly mobileInput: Locator
  readonly createAccountButton: Locator
  readonly continueButton: Locator
  readonly deleteAccountButton: Locator

  constructor(page: Page) {
    this.page = page
    this.signupNameInput = page.locator('input[data-qa="signup-name"]')
    this.signupEmailInput = page.locator('input[data-qa="signup-email"]')
    this.signupButton = page.getByRole('button', { name: 'Signup' })
    this.genderMaleRadio = page.locator('#id_gender1')
    this.passwordInput = page.locator('input[data-qa="password"]')
    this.daysSelect = page.locator('select[data-qa="days"]')
    this.monthsSelect = page.locator('select[data-qa="months"]')
    this.yearsSelect = page.locator('select[data-qa="years"]')
    this.firstNameInput = page.locator('input[data-qa="first_name"]')
    this.lastNameInput = page.locator('input[data-qa="last_name"]')
    this.companyInput = page.locator('input[data-qa="company"]')
    this.addressInput = page.locator('input[data-qa="address"]')
    this.address2Input = page.locator('input[data-qa="address2"]')
    this.countrySelect = page.locator('select[data-qa="country"]')
    this.stateInput = page.locator('input[data-qa="state"]')
    this.cityInput = page.locator('input[data-qa="city"]')
    this.zipcodeInput = page.locator('input[data-qa="zipcode"]')
    this.mobileInput = page.locator('input[data-qa="mobile_number"]')
    this.createAccountButton = page.getByRole('button', { name: 'Create Account' })
    this.continueButton = page.getByRole('link', { name: 'Continue' })
    this.deleteAccountButton = page.getByRole('link', { name: 'Delete Account' })
  }

  
  

  async fillAccountDetails() {
    await this.genderMaleRadio.check()
    await this.passwordInput.fill('123456')
    await this.daysSelect.selectOption('18')
    await this.monthsSelect.selectOption('8')
    await this.yearsSelect.selectOption('1996')
  }

  async fillPersonalDetails() {
    await this.firstNameInput.fill('John')
    await this.lastNameInput.fill('Doe')
    await this.companyInput.fill('Playwright')
    await this.addressInput.fill('123 Main St')
    await this.address2Input.fill('Apt 4B')
    await this.countrySelect.selectOption('United States')
    await this.stateInput.fill('California')
    await this.cityInput.fill('Los Angeles')
    await this.zipcodeInput.fill('90001')
    await this.mobileInput.fill('+1 555 123 4567')
    await this.createAccountButton.click()
  }

  async deleteAccount() {
    await this.deleteAccountButton.click()
  }
}