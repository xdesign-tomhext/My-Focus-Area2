/**
 * CheckoutCompletePage - Page Object Model for SauceDemo Checkout Complete Page
 * URL: https://www.saucedemo.com/checkout-complete.html
 */
class CheckoutCompletePage {
  // Element locators using data-test attributes
  elements = {
    checkoutCompleteContainer: () => cy.get('[data-test="checkout-complete-container"]'),
    completeHeader: () => cy.get('[data-test="complete-header"]'),
    completeText: () => cy.get('[data-test="complete-text"]'),
    ponyExpressImage: () => cy.get('[data-test="pony-express"]'),
    backHomeButton: () => cy.get('[data-test="back-to-products"]')
  };

  /**
   * Verify user is on checkout complete page
   */
  verifyOnCheckoutCompletePage() {
    cy.url().should('include', '/checkout-complete.html');
    this.elements.checkoutCompleteContainer().should('be.visible');
  }

  /**
   * Verify order confirmation message is displayed
   */
  verifyOrderConfirmationMessage() {
    this.elements.completeHeader()
      .should('be.visible')
      .and('have.text', 'Thank you for your order!');
  }

  /**
   * Verify confirmation message contains specific text
   * @param {string} text - The text to verify in the confirmation message
   */
  verifyConfirmationMessageContains(text) {
    this.elements.completeHeader().should('contain.text', text);
  }

  /**
   * Verify complete text is visible
   */
  verifyCompleteTextVisible() {
    this.elements.completeText().should('be.visible');
  }

  /**
   * Click back home button to return to products page
   */
  clickBackHome() {
    this.elements.backHomeButton().click();
  }
}

// Export as singleton
module.exports = new CheckoutCompletePage();
