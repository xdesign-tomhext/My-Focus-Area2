/**
 * InventoryPage - Page Object Model for SauceDemo Inventory/Products Page
 * URL: https://www.saucedemo.com/inventory.html
 */
class InventoryPage {
  // Element locators using data-test attributes
  elements = {
    inventoryContainer: () => cy.get('[data-test="inventory-container"]'),
    inventoryItem: () => cy.get('[data-test="inventory-item"]'),
    inventoryItemName: () => cy.get('[data-test="inventory-item-name"]'),
    shoppingCartBadge: () => cy.get('[data-test="shopping-cart-badge"]'),
    shoppingCartLink: () => cy.get('[data-test="shopping-cart-link"]'),
    // Generic add to cart button
    addToCartButton: (itemName) => cy.get(`[data-test="add-to-cart-${itemName.toLowerCase().replace(/\s+/g, '-')}"]`),
    removeButton: (itemName) => cy.get(`[data-test="remove-${itemName.toLowerCase().replace(/\s+/g, '-')}"]`)
  };

  /**
   * Verify user is on the inventory page
   */
  verifyOnInventoryPage() {
    cy.url().should('include', '/inventory.html');
    this.elements.inventoryContainer().should('be.visible');
  }

  /**
   * Verify product listings are visible
   */
  verifyProductListingsVisible() {
    this.elements.inventoryItem().should('have.length.at.least', 1);
  }

  /**
   * Add a specific item to cart by name
   * @param {string} itemName - The name of the item (e.g., "Sauce Labs Backpack")
   */
  addItemToCart(itemName) {
    this.elements.addToCartButton(itemName).click();
  }

  /**
   * Verify shopping cart badge shows specific count
   * @param {string} count - The expected count as a string
   */
  verifyCartBadgeCount(count) {
    this.elements.shoppingCartBadge().should('have.text', count);
  }

  /**
   * Verify shopping cart badge is visible
   */
  verifyCartBadgeVisible() {
    this.elements.shoppingCartBadge().should('be.visible');
  }

  /**
   * Click the shopping cart icon to go to cart page
   */
  clickShoppingCart() {
    this.elements.shoppingCartLink().click();
  }

  /**
   * Remove a specific item from cart by name
   * @param {string} itemName - The name of the item to remove
   */
  removeItemFromCart(itemName) {
    this.elements.removeButton(itemName).click();
  }
}

// Export as singleton
module.exports = new InventoryPage();
