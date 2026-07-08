import { expect, type Page, type Locator } from "@playwright/test";

export class FormPage {
  private readonly page: Page;
  private readonly nameInput: Locator;
  private readonly emailInput: Locator;
  private readonly phoneInput: Locator;
  private readonly companyInput: Locator;
  private readonly websiteInput: Locator;
  private readonly employeesSelect: Locator;
  private readonly submitButton: Locator;
  private readonly thankYouHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.getByRole("textbox", { name: /name/i });
    this.emailInput = page.getByRole("textbox", { name: /email/i });
    this.phoneInput = page.getByRole("textbox", { name: /phone/i });
    this.companyInput = page.getByRole("textbox", { name: /company/i });
    this.websiteInput = page.getByRole("textbox", { name: /website/i });
    this.employeesSelect = page.getByRole("combobox", { name: /employees/i });
    this.submitButton = page.getByRole("button", {
      name: /request a call back/i,
    });
    this.thankYouHeader = page.getByRole("heading", { name: /thank you/i });
  }

  async navigate() {
    await this.page.goto("https://test.netlify.app/");
  }

  async fillForm(details: {
    name: string;
    email: string;
    phone: string;
    company: string;
    website: string;
  }) {
    await this.nameInput.fill(details.name);
    await this.emailInput.fill(details.email);
    await this.phoneInput.fill(details.phone);
    await this.companyInput.fill(details.company);
    await this.websiteInput.fill(details.website);
  }

  async selectEmployeeCount(value: string) {
    await this.employeesSelect.selectOption({ label: value });
  }

  async takePageScreenshot(path: string) {
    await this.page.screenshot({ path, fullPage: true });
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async verifyThankYouPage() {
    await expect(this.thankYouHeader).toBeVisible();
    console.log("Successfully reached the thank you page!");
  }
}
