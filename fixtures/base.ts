import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { HeaderComponent } from '../components/header.component';

type CustomFixtures = {
  homePage: HomePage;
  header: HeaderComponent;
};

export const test = base.extend<CustomFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  header: async ({ page }, use) => {
    await use(new HeaderComponent(page));
  },
});

export { expect };