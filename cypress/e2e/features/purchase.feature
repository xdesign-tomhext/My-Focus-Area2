Feature: Complete Purchase
  As a logged-in user
  I want to complete the purchase of an item from the product catalog
  So that I can receive my desired product

  Scenario: Successfully complete a purchase from product selection to order confirmation
    Given I am logged in and on the product catalog page
    When I click the "Add to cart" button for "Sauce Labs Backpack"
    Then the shopping cart icon should show a "1"
    
    When I click the shopping cart icon
    Then I should be navigated to the "Your Cart" page
    And I should see the selected item listed in my cart
    
    When I click the "Checkout" button
    Then I should be navigated to the "Checkout: Your Information" page
    
    When I enter valid shipping information
    And I click the "Continue" button
    Then I should be navigated to the "Checkout: Overview" page
    
    When I review the order summary
    And I click the "Finish" button
    Then I should be navigated to the "Checkout: Complete!" page
    And I should see a confirmation message
