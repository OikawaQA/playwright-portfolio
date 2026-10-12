import { test, expect } from '../fixtures/base'



test('Verify Test Cases Page', async ({ page, homePage, header }) => {

    await homePage.goto()
    await expect(page).toHaveURL('https://automationexercise.com/')
    await expect(header.logo).toBeVisible()
    await header.clickTestCases()
    await expect(page).toHaveURL('https://automationexercise.com/test_cases')
}
)