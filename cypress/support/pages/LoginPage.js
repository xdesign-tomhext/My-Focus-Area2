/**
 * LoginPage - Page Object Model for SauceDemo Login Page
 * URL: https://www.saucedemo.com/
 */
class LoginPage {
  // Element locators using data-test attributes
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
    errorMessage: () => cy.get('[data-test="error"]')
  };

  /**
   * Navigate to the login page
   */
  visit() {
    cy.visit('/');
  }

  /**
   * Enter username in the username field
   * @param {string} username - The username to enter
   */
  enterUsername(username) {
    this.elements.usernameInput().clear().type(username);
  }

  /**
   * Enter password in the password field
   * @param {string} password - The password to enter
   */
  enterPassword(password) {
    this.elements.passwordInput().clear().type(password);
  }

  /**
   * Click the login button
   */
  clickLogin() {
    this.elements.loginButton().click();
  }

  /**
   * Complete login flow - enter credentials and click login
   * @param {string} username - The username to login with
   * @param {string} password - The password to login with
   */
  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }

  /**
   * Verify error message is displayed
   */
  verifyErrorMessageDisplayed() {
    this.elements.errorMessage().should('be.visible');
  }
}

// Export as singleton
module.exports = new LoginPage();
