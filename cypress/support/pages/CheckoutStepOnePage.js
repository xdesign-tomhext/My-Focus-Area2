/**
 * CheckoutStepOnePage - Page Object Model for SauceDemo Checkout Information Page
 * URL: https://www.saucedemo.com/checkout-step-one.html
 */
class CheckoutStepOnePage {
  // Element locators using data-test attributes
  elements = {
    firstNameInput: () => cy.get('[data-test="firstName"]'),
    lastNameInput: () => cy.get('[data-test="lastName"]'),
    postalCodeInput: () => cy.get('[data-test="postalCode"]'),
    continueButton: () => cy.get('[data-test="continue"]'),
    cancelButton: () => cy.get('[data-test="cancel"]'),
    errorMessage: () => cy.get('[data-test="error"]')
  };

  /**
   * Verify user is on checkout step one page
   */
  verifyOnCheckoutStepOnePage() {
    cy.url().should('include', '/checkout-step-one.html');
  }

  /**
   * Enter first name
   * @param {string} firstName - The first name to enter
   */
  enterFirstName(firstName) {
    this.elements.firstNameInput().clear().type(firstName);
  }

  /**
   * Enter last name
   * @param {string} lastName - The last name to enter
   */
  enterLastName(lastName) {
    this.elements.lastNameInput().clear().type(lastName);
  }

  /**
   * Enter postal code
   * @param {string} postalCode - The postal code to enter
   */
  enterPostalCode(postalCode) {
    this.elements.postalCodeInput().clear().type(postalCode);
  }

  /**
   * Fill all shipping information fields
   * @param {string} firstName - The first name
   * @param {string} lastName - The last name
   * @param {string} postalCode - The postal code
   */
  fillShippingInformation(firstName, lastName, postalCode) {
    this.enterFirstName(firstName);
    this.enterLastName(lastName);
    this.enterPostalCode(postalCode);
  }

  /**
   * Click the continue button
   */
  clickContinue() {
    this.elements.continueButton().click();
  }

  /**
   * Click the cancel button
   */
  clickCancel() {
    this.elements.cancelButton().click();
  }

  /**
   * Verify error message is displayed
   */
  verifyErrorMessageDisplayed() {
    this.elements.errorMessage().should('be.visible');
  }
}

// Export as singleton
module.exports = new CheckoutStepOnePage();
