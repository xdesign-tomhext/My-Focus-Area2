/**
 * Step definitions for Login feature
 * Uses Page Object Model and environment variables from cypress.config.js
 */

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const loginPage = require('../pages/LoginPage');
const inventoryPage = require('../pages/InventoryPage');

// Given Steps
Given('I am on the login page', () => {
  loginPage.visit();
});

// When Steps
When('I enter valid credentials', () => {
  const username = Cypress.env('username');
  const password = Cypress.env('password');
  loginPage.enterUsername(username);
  loginPage.enterPassword(password);
});

When('I click the "Login" button', () => {
  loginPage.clickLogin();
});

// Then Steps
Then('I should be redirected to the product catalog page', () => {
  inventoryPage.verifyOnInventoryPage();
});

Then('I should see the product listings', () => {
  inventoryPage.verifyProductListingsVisible();
});
