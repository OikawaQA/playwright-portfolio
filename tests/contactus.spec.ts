import { test, expect } from '../fixtures/base'
import { ContactUsPage } from '../pages/contactus.page.ts';
import { generateContact } from '../data/testdata.ts';



test('Contact Us Form Submission', async ({ page, homePage, header }) => {

    const contactUsPage = new ContactUsPage(page);


    await homePage.goto()
    await expect(page).toHaveURL('https://automationexercise.com/');
    await expect(header.logo).toBeVisible();
    await header.clickContactUs();
    await expect(page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();
    const contactData = generateContact();
    await contactUsPage.fillContactForm(contactData.name, contactData.email, contactData.subject, contactData.message);
    await contactUsPage.uploadFile('fixtures/testupload.txt');
    page.once('dialog', async dialog => {
        console.log('DIALOG:', dialog.type(), dialog.message());
        await dialog.accept();
    });
    await page.waitForTimeout(2000);
    await contactUsPage.submit();
    await expect(
        page.locator('#contact-page').getByText('Success! Your details have been submitted successfully.')
    ).toBeVisible();
    await page.locator('#contact-page').getByRole('link', { name: 'Home' }).click();

});

