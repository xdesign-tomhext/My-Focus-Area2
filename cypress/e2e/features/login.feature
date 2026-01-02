Feature: User Login
  As a returning user
  I want to securely log in to the SauceDemo website
  So that I can access the product catalog and proceed with my shopping experience

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid credentials
    And I click the "Login" button
    Then I should be redirected to the product catalog page
    And I should see the product listings
