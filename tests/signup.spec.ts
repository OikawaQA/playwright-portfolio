import { test, expect } from '../fixtures/base'
import { LoginPage } from '../pages/login.page.ts'
import { SignupPage } from '../pages/signup.page.ts'
import { existingUser, generateUser, invalidUser } from '../data/users.ts'

test('Register a new user', async ({ page, homePage, header }) => {
 
  const loginPage = new LoginPage(page)
  const signupPage = new SignupPage(page)
  const user = generateUser();

  await homePage.goto()
  await expect(page).toHaveURL('https://automationexercise.com/')
  await expect(header.logo).toBeVisible()

  await header.clickSignupLogin()
  await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible()

  await loginPage.fillSignupForm(user.name, user.email)
  await signupPage.fillAccountDetails()
  await signupPage.fillPersonalDetails()

  await expect(page.getByRole('heading', { name: 'Account Created!' })).toBeVisible()
  await signupPage.continueButton.click()
  await expect(page.getByText(/Logged in as/i)).toBeVisible()
  await signupPage.deleteAccount()
  await expect(page.getByText(/Account Deleted!/i)).toBeVisible()
  await signupPage.continueButton.click()
})

test('Register a new user with existing email', async ({ page, homePage, header }) => {
  
  const loginPage = new LoginPage(page)
  const signupPage = new SignupPage(page)
  const { email } = existingUser;


  await homePage.goto()
  await expect(page).toHaveURL('https://automationexercise.com/')
  await expect(header.logo).toBeVisible()

  await header.clickSignupLogin()
  await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible()
  await loginPage.fillSignupForm('John Doe', email)
  await expect(page.getByText('Email Address already exist!')).toBeVisible()
})
