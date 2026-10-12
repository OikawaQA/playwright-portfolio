import { Page, Locator } from "@playwright/test";

export class ProductsPage {
    readonly page: Page;
    readonly productsList: Locator;
    readonly product: Locator;