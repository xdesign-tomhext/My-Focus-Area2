/**
 * CheckoutStepTwoPage - Page Object Model for SauceDemo Checkout Overview Page
 * URL: https://www.saucedemo.com/checkout-step-two.html
 */
class CheckoutStepTwoPage {
  // Element locators using data-test attributes
  elements = {
    checkoutSummaryContainer: () => cy.get('[data-test="checkout-summary-container"]'),
    cartItem: () => cy.get('[data-test="cart-item"]'),
    inventoryItemName: () => cy.get('[data-test="inventory-item-name"]'),
    paymentInformation: () => cy.get('[data-test="payment-info-value"]'),
    shippingInformation: () => cy.get('[data-test="shipping-info-value"]'),
    subtotalLabel: () => cy.get('[data-test="subtotal-label"]'),
    taxLabel: () => cy.get('[data-test="tax-label"]'),
    totalLabel: () => cy.get('[data-test="total-label"]'),
    finishButton: () => cy.get('[data-test="finish"]'),
    cancelButton: () => cy.get('[data-test="cancel"]')
  };

  /**
   * Verify user is on checkout step two page
   */
  verifyOnCheckoutStepTwoPage() {
    cy.url().should('include', '/checkout-step-two.html');
    this.elements.checkoutSummaryContainer().should('be.visible');
  }

  /**
   * Verify order summary is visible
   */
  verifyOrderSummaryVisible() {
    this.elements.paymentInformation().should('be.visible');
    this.elements.shippingInformation().should('be.visible');
    this.elements.subtotalLabel().should('be.visible');
    this.elements.totalLabel().should('be.visible');
  }

  /**
   * Verify a specific item is in the order summary
   * @param {string} itemName - The name of the item to verify
   */
  verifyItemInOrderSummary(itemName) {
    this.elements.inventoryItemName()
      .should('be.visible')
      .and('contain.text', itemName);
  }

  /**
   * Click the finish button to complete the order
   */
  clickFinish() {
    this.elements.finishButton().click();
  }

  /**
   * Click the cancel button
   */
  clickCancel() {
    this.elements.cancelButton().click();
  }
}

// Export as singleton
module.exports = new CheckoutStepTwoPage();
