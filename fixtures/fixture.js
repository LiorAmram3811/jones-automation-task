import { test as base } from "@playwright/test";
import { FormPage } from "../pages/RequestCallbackPage";

export const test = base.extend({
  formPage: async ({ page }, use) => {
    const formPage = new FormPage(page);
    await formPage.navigate();
    await use(formPage);
  },
});

export { expect } from "@playwright/test";
