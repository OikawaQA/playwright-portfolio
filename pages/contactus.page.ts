import { Page, Locator } from '@playwright/test';

export class ContactUsPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly subjectInput: Locator;
  readonly messageInput: Locator;
  readonly uploadFileInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page
    this.page = page;
    this.nameInput = page.locator('input[data-qa="name"]');
    this.emailInput = page.locator('input[data-qa="email"]');
    this.subjectInput = page.locator('input[data-qa="subject"]');
    this.messageInput = page.locator('textarea[data-qa="message"]');
    this.uploadFileInput = page.locator('input[name="upload_file"]');
    this.submitButton = page.locator('input[data-qa="submit-button"]');

  }


  async fillContactForm(name: string,
    email: string,
    subject: string,
    message: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.subjectInput.fill(subject);
    await this.messageInput.fill(message);
  }

  async uploadFile(filePath: string) {

    await this.uploadFileInput.setInputFiles(filePath);

  }

  async submit() {
    // this.page.once('dialog', async dialog => {
    //   await dialog.accept();
    // });


    await this.submitButton.click();

  }

}
