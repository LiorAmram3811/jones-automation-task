# Jones Compliance - Automation Assessment

This repository contains a clean, scalable End-to-End (E2E) automation test developed for the Jones technical task using **Playwright JS**.

## Architecture & Best Practices Implemented

- **Page Object Model (POM):** Encapsulates page locators and interaction methods inside `RequestCallbackPage.js`, decoupling UI details from test flows.
- **Custom Fixtures:** Utilizes Playwright's native dependency injection (`form.fixture.ts`) to manage page initialization cleanly and efficiently without hardcoded setup in the spec file.
- **Resilient Selectors:** Elements are queried using user-facing attributes (`getByRole`) rather than brittle CSS classes, adhering to Playwright's official core guidelines.
- **Asynchronous Flow Control:** Uses Playwright's native auto-waiting assertions (`toHaveURL` with Regex) instead of hardcoded timeouts to eliminate flakiness.

---

## Project Structure

```text
├── pages/
│   └── RequestCallbackPage.js   # POM class containing locators & form interactions
├── fixtures/
│   └── fixture.js               # Custom fixture extending Playwright base test
├── tests/
│   └── RequestCallback.spec.js  # Declarative E2E test execution file
├── screenshots/
│   └── before-submit.png        # Captured page state prior to clicking submit
├── playwright.config.js         # Core Playwright configuration
└── package.json                 # Project dependencies & automated scripts
```

## Setup & Installation

(Ensure you have Node.js installed.)

1. Clone the repository:

   ```bash
   git clone https://github.com/LiorAmram3811/jones-automation-task
   cd jones-automation-task
   ```

2. Install dependencies and Playwright browsers:

   ```bash
   npm install
   npx playwright install

   ```

3. Running the Test
   ```bash
   npx playwright test --headed
   ```
