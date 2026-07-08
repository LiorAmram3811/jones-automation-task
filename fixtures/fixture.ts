import { test as base } from "@playwright/test";
import { FormPage } from "../pages/page";

type MyFixtures = {
  formPage: FormPage;
};

export const test = base.extend<MyFixtures>({
  formPage: async ({ page }, use) => {
    const formPage = new FormPage(page);
    await use(formPage);
  },
});

export { expect } from "@playwright/test";
