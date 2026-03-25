# My-Focus-Area2

Cypress BDD testing framework for SauceDemo - demonstrating automated testing with Behavior-Driven Development (BDD) using Cucumber and the Page Object Model (POM) design pattern.

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [User Stories](#user-stories)
- [Best Practices](#best-practices)
- [Verification](#verification)

## 🎯 Overview

This repository contains automated end-to-end tests for [SauceDemo](https://www.saucedemo.com) e-commerce application. The testing framework is built using:

- **Cypress** - Modern web testing framework
- **Cucumber/BDD** - Behavior-Driven Development with Gherkin syntax
- **Page Object Model** - Design pattern for maintainable test code
- **JavaScript** - Simple, readable test implementation

### Features Tested

1. **User Login** - Secure authentication with valid credentials
2. **Complete Purchase Flow** - End-to-end product purchase from selection to confirmation

## ✅ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** version 18.0.0 or higher
  - Check your version: `node --version`
  - Download from: [nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js)
  - Check your version: `npm --version`

## 🚀 Installation

1. **Clone the repository** (if not already done):

   ```bash
   git clone <repository-url>
   cd My-Focus-Area2
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

   This will install:
   - Cypress (v14.1.0+)
   - @badeball/cypress-cucumber-preprocessor
   - @bahmutov/cypress-esbuild-preprocessor
   - esbuild

   Installation takes approximately 15-30 seconds and downloads ~400 packages.

3. **Install Cypress binary** (if not automatically installed):

   ```bash
   npx cypress install
   ```

   This downloads and installs the Cypress application binary (~400MB). If you see an error like "Cypress executable not found" when running tests, this step is required.

   You should also install the Cucumber extension to your IDE to allow defined step definitions, giving the ability to jump from feature to step definitions.

4. **Verify installation**:

   ```bash
   npx cypress verify
   ```

   You should see: `✔ Verified Cypress!`

5. **Configure login credentials**:

   For security, login credentials are not committed to the repository. Create a local configuration file:

   ```bash
   cp cypress.env.json.example cypress.env.json
   ```

   Then edit `cypress.env.json` and add valid test credentials. You can find test user credentials on the [SauceDemo website](https://www.saucedemo.com/) - look for the login information displayed on the homepage.

   **Note:** The `cypress.env.json` file is listed in `.gitignore` and will never be committed to version control, keeping credentials secure.

## 🧪 Running Tests

### Interactive Mode (Recommended for Development)

Open Cypress Test Runner with a visual interface:

```bash
npm run cy:open
```

This allows you to:

- Select and run individual feature files
- See tests execute in a real browser
- Use time-travel debugging
- View detailed step execution

### Headless Mode (For CI/CD)

Run all tests in headless mode:

```bash
npm run cy:run
```

### Browser-Specific Testing

Run tests in specific browsers:

```bash
# Run in Chrome
npm run test:chrome

# Run in Firefox
npm run test:firefox

# Run in Edge
npm run test:edge

# Run in headed mode (visible browser)
npm run test:headed
```

### Run Specific Feature Files

```bash
# Run only login tests
npx cypress run --spec "cypress/e2e/features/login.feature"

# Run only purchase tests
npx cypress run --spec "cypress/e2e/features/purchase.feature"
```

### Key Files Explained

- **`cypress.config.js`** - Central configuration including base URL, viewport, environment variables, and Cucumber preprocessor setup
- **`*.feature`** - Gherkin syntax files describing test scenarios in plain English
- **`*.steps.js`** - JavaScript implementations of Gherkin steps using Given/When/Then
- **`*Page.js`** - Page Object classes containing element locators and page-specific methods

## 🔐 Environment Variables

Test configuration and credentials are managed in [`cypress.config.js`](cypress.config.js):

```javascript
env: {
  // Login credentials for SauceDemo
  username: 'standard_user',
  password: 'secret_sauce',

  // Checkout/shipping information
  firstName: 'John',
  lastName: 'Doe',
  postalCode: '12345'
}
```

### Accessing Environment Variables

In step definitions and page objects:

```javascript
const username = Cypress.env("username");
const password = Cypress.env("password");
```

### Overriding Variables (Optional)

You can override environment variables without modifying `cypress.config.js`:

1. **Create `cypress.env.json`** (gitignored):

   ```json
   {
     "username": "different_user",
     "password": "different_password"
   }
   ```

2. **Via command line**:
   ```bash
   npx cypress run --env username=problem_user,password=secret_sauce
   ```

## ✨ Best Practices Implemented

This project follows Cypress and BDD best practices:

### 1. **Behavior-Driven Development (BDD)**

- Feature files written in **Gherkin syntax** for readability
- Scenarios match user stories and acceptance criteria
- Plain English descriptions accessible to non-technical stakeholders

### 2. **Page Object Model (POM)**

- Separation of concerns: page structure vs test logic
- Reusable page methods across multiple tests
- Centralized element locators for easy maintenance
- Each page exported as a **singleton** for consistency

### 3. **Readable Selectors**

- Uses **`data-test` attributes** from SauceDemo
- Stable selectors that don't break with UI changes
- Example: `[data-test="username"]`, `[data-test="login-button"]`

### 4. **Environment Configuration**

- Centralized test data in `cypress.config.js`
- No hardcoded credentials in test files
- Easy to configure for different environments

### 5. **Test Independence**

- Each feature can run standalone
- Purchase feature includes login prerequisite
- No dependencies between test scenarios

### 6. **Code Reusability**

- Page objects eliminate code duplication
- Generic methods (e.g., `addItemToCart(itemName)`) support multiple products

### 7. **Clear Documentation**

- JSDoc comments on all page methods
- Descriptive test scenario names
- Comprehensive README with examples

### 8. **Video Recording & Screenshots**

- Videos automatically recorded during headless runs
- Screenshots captured on test failures
- Helpful for debugging and CI/CD pipelines

## 🔍 Verification

To verify the setup is working correctly:

1. **Check Node.js version**:

   ```bash
   node --version
   # Should be v18.0.0 or higher
   ```

2. **Install dependencies** (if not already done):

   ```bash
   npm install
   ```

3. **Open Cypress Test Runner**:

   ```bash
   npm run cy:open
   ```

   You should see:
   - Cypress Test Runner window opens
   - E2E Testing option available
   - Two feature files listed: `login.feature` and `purchase.feature`

4. **Run a test**:
   - Click on `login.feature`
   - Browser opens and test executes
   - All steps should pass (green checkmarks)

5. **Run all tests in headless mode**:

   ```bash
   npm test
   ```

   Expected output:

   ```
   Running:  login.feature
     ✓ Successful login with valid credentials

   Running:  purchase.feature
     ✓ Successfully complete a purchase...

   All specs passed!
   ```

6. **Check generated artifacts**:
   - Videos: `cypress/videos/`
   - Screenshots (if failures): `cypress/screenshots/`

### Troubleshooting

**Issue**: `npm install` fails  
**Solution**: Ensure Node.js 18+ is installed and try clearing npm cache: `npm cache clean --force`

**Issue**: "Cypress executable not found" or "No version of Cypress is installed"  
**Solution**: The Cypress binary wasn't installed. Run:

```bash
npx cypress install
npx cypress verify
```

This downloads the Cypress application binary (~400MB) which is separate from the npm package.

**Issue**: Tests fail with selector errors  
**Solution**: Verify SauceDemo website is accessible at https://www.saucedemo.com

**Issue**: Feature files not recognized  
**Solution**: Check that `specPattern` in `cypress.config.js` is set to `'cypress/e2e/features/**/*.feature'`

## 📝 Additional Notes

- **Test execution time**: Each feature takes approximately 10-15 seconds
- **Browser support**: Chrome, Firefox, Edge, Electron (Cypress default)
- **CI/CD ready**: Headless mode suitable for automated pipelines
- **Extensible**: Easy to add new features, scenarios, and page objects

## 🤝 Contributing

When adding new tests:

1. Create feature file in `cypress/e2e/features/`
2. Implement step definitions in `cypress/support/step_definitions/`
3. Create/update page objects in `cypress/support/pages/`
4. Follow existing naming conventions and patterns
5. Add JSDoc comments to new methods
6. Update this README if adding new functionality

## 📚 Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [Cucumber/BDD with Cypress](https://github.com/badeball/cypress-cucumber-preprocessor)
- [Page Object Model Pattern](https://martinfowler.com/bliki/PageObject.html)
- [SauceDemo Test Site](https://www.saucedemo.com/)

---

**Repository**: My-Focus-Area2  
**Purpose**: Demonstrate BDD testing skills with Cypress, Cucumber, and Page Object Model  
**Test Site**: [https://www.saucedemo.com](https://www.saucedemo.com)
