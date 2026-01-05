/**
 * Step definitions for Purchase feature
 * Uses Page Object Model and environment variables from cypress.config.js
 */

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const loginPage = require('../pages/LoginPage');
const inventoryPage = require('../pages/InventoryPage');
const cartPage = require('../pages/CartPage');
const checkoutStepOnePage = require('../pages/CheckoutStepOnePage');
const checkoutStepTwoPage = require('../pages/CheckoutStepTwoPage');
const checkoutCompletePage = require('../pages/CheckoutCompletePage');

// Given Steps
Given('I am logged in and on the product catalog page', () => {
  // Login to the application
  loginPage.visit();
  const username = Cypress.env('username');
  const password = Cypress.env('password');
  loginPage.login(username, password);
  
  // Verify we're on the inventory page
  inventoryPage.verifyOnInventoryPage();
});

// When Steps
When('I click the "Add to cart" button for "Sauce Labs Backpack"', () => {
  inventoryPage.addItemToCart('Sauce Labs Backpack');
});

When('I click the shopping cart icon', () => {
  inventoryPage.clickShoppingCart();
});

When('I click the "Checkout" button', () => {
  cartPage.clickCheckout();
});

When('I enter valid shipping information', () => {
  const firstName = Cypress.env('firstName');
  const lastName = Cypress.env('lastName');
  const postalCode = Cypress.env('postalCode');
  
  checkoutStepOnePage.fillShippingInformation(firstName, lastName, postalCode);
});

When('I click the "Continue" button', () => {
  checkoutStepOnePage.clickContinue();
});

When('I review the order summary', () => {
  checkoutStepTwoPage.verifyOrderSummaryVisible();
});

When('I click the "Finish" button', () => {
  checkoutStepTwoPage.clickFinish();
});

// Then Steps
Then('the shopping cart icon should show a "1"', () => {
  inventoryPage.verifyCartBadgeCount('1');
});

Then('I should be navigated to the "Your Cart" page', () => {
  cartPage.verifyOnCartPage();
});

Then('I should see the selected item listed in my cart', () => {
  cartPage.verifyItemInCart('Sauce Labs Backpack');
});

Then('I should be navigated to the "Checkout: Your Information" page', () => {
  checkoutStepOnePage.verifyOnCheckoutStepOnePage();
});

Then('I should be navigated to the "Checkout: Overview" page', () => {
  checkoutStepTwoPage.verifyOnCheckoutStepTwoPage();
});

Then('I should be navigated to the "Checkout: Complete!" page', () => {
  checkoutCompletePage.verifyOnCheckoutCompletePage();
});

Then('I should see a confirmation message', () => {
  checkoutCompletePage.verifyOrderConfirmationMessage();
});
