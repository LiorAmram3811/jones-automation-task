import { test, expect } from "../fixtures/fixture";

test("should successfully submit callback request with employee bonus", async ({
  formPage,
}) => {
  await formPage.navigate();

  await formPage.fillForm({
    name: "Testy Test",
    email: "test@example.com",
    phone: "0501234567",
    company: "Jones Software",
    website: "https://example.com",
  });

  await formPage.selectEmployeeCount("51-500");
  await formPage.takePageScreenshot("screenshots/before-submit.png");
  await formPage.submitForm();
  await formPage.verifyThankYouPage();
  await expect(formPage.page).toHaveURL(/.*thank-you/);
});
