import { test } from "../fixtures/fixture";

test.describe("Lead Generation Form Tests", () => {
  test("should successfully submit callback request with employee bonus", async ({
    formPage,
  }) => {
    await formPage.navigate();

    await formPage.fillForm({
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "0501234567",
      company: "Tech Solutions Inc.",
      website: "https://example.com",
    });

    await formPage.selectEmployeeCount("51-500");
    await formPage.takePageScreenshot("screenshots/before-submit.png");
    await formPage.submitForm();
    await formPage.verifyThankYouPage();
  });
});
