Feature: Multiple login platforms
  In order to create/login the user
  Multiple platforms are available
  I want to verify that the login/registration flows are correct

  Scenario: Simple login
    Given I see "Login"
    Then I press "Login"
    And I see "E-Mail"
    
    
  Scenario: Simple login test fail
    Given I see "Login"
    Then I press "Login"
    And I see "E-Mail1"
