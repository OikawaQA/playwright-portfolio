import { test, expect } from '../fixtures/base';
import { LoginPage } from '../pages/login.page.ts';
import { SignupPage } from '../pages/signup.page.ts';
import { existingUser, generateUser, invalidUser } from '../data/users.ts';


test('Login User with valid credentials', async ({ page, homePage, header }) => {

    const loginPage = new LoginPage(page)
    const { email, password } = existingUser;

    await homePage.goto()
    await expect(page).toHaveURL('https://automationexercise.com/')
    await expect(header.logo).toBeVisible()
    await header.clickSignupLogin()
    await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible()
    await loginPage.fillLoginForm(email, password)
    await expect(page.getByText(/Logged in as/i)).toBeVisible()
    
})


test('Login User with invalid credentials', async ({ page, homePage, header }) => {
    
    const loginPage = new LoginPage(page)
    const signupPage = new SignupPage(page)
    const { email, password } = invalidUser;
    

    await homePage.goto()
    await expect(page).toHaveURL('https://automationexercise.com/')
    await expect(header.logo).toBeVisible()
    await header.clickSignupLogin()
    await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible()
    await loginPage.fillLoginForm(email, password)
    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible()
})

test('Logout User', async ({ page, homePage, header }) => {
    
    const loginPage = new LoginPage(page)
    const signupPage = new SignupPage(page)
    const { email, password } = existingUser;   

    await homePage.goto()
    await expect(page).toHaveURL('https://automationexercise.com/')
    await expect(header.logo).toBeVisible()
    await header.clickSignupLogin()
    await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible()
    await loginPage.fillLoginForm(email, password)
    await expect(page.getByText(/Logged in as/i)).toBeVisible()
    await page.getByRole('link', { name: ' Logout' }).click()
    await expect(page).toHaveURL('https://automationexercise.com/login ')

})