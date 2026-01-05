/**
 * CartPage - Page Object Model for SauceDemo Cart Page
 * URL: https://www.saucedemo.com/cart.html
 */
class CartPage {
  // Element locators using data-test attributes
  elements = {
    cartContents: () => cy.get('[data-test="cart-contents"]'),
    cartItem: () => cy.get('[data-test="cart-item"]'),
    inventoryItemName: () => cy.get('[data-test="inventory-item-name"]'),
    checkoutButton: () => cy.get('[data-test="checkout"]'),
    continueShoppingButton: () => cy.get('[data-test="continue-shopping"]'),
    removeButton: (itemName) => cy.get(`[data-test="remove-${itemName.toLowerCase().replace(/\s+/g, '-')}"]`)
  };

  /**
   * Verify user is on the cart page
   */
  verifyOnCartPage() {
    cy.url().should('include', '/cart.html');
    // Verify cart page content is visible
    cy.get('.cart_list, #cart_contents_container').should('exist');
  }

  /**
   * Verify a specific item is in the cart
   * @param {string} itemName - The name of the item to verify
   */
  verifyItemInCart(itemName) {
    this.elements.inventoryItemName()
      .should('be.visible')
      .and('contain.text', itemName);
  }

  /**
   * Verify cart has items
   */
  verifyCartHasItems() {
    this.elements.cartItem().should('have.length.at.least', 1);
  }

  /**
   * Click the checkout button
   */
  clickCheckout() {
    this.elements.checkoutButton().click();
  }

  /**
   * Click continue shopping button
   */
  clickContinueShopping() {
    this.elements.continueShoppingButton().click();
  }

  /**
   * Remove an item from cart
   * @param {string} itemName - The name of the item to remove
   */
  removeItem(itemName) {
    this.elements.removeButton(itemName).click();
  }
}

// Export as singleton
module.exports = new CartPage();
