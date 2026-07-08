export class FormPage {
  constructor(page) {
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
    await this.page.goto("/");
  }

  async fillForm(details) {
    await this.nameInput.fill(details.name);
    await this.emailInput.fill(details.email);
    await this.phoneInput.fill(details.phone);
    await this.companyInput.fill(details.company);
    await this.websiteInput.fill(details.website);
  }

  async selectEmployeeCount(value) {
    await this.employeesSelect.selectOption({ label: value });
  }

  async takePageScreenshot(path) {
    await this.page.screenshot({ path, fullPage: true });
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async verifyThankYouPage() {
    await this.thankYouHeader.waitFor({ state: "visible" });
    console.log("Successfully reached the thank you page!");
  }
}
