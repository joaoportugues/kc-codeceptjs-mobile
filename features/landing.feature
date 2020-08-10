Feature: Landing page
  In order to create/login the user
  As a user
  I want to verify login/registration and settings menu are working
  
  Background: open app correctly
    And I see "Kid-Coins"
    And I see "logo"

  Scenario: All login and registration options are available
    Then I see "Motivation, Spaß und mehr"
    Then I see "Mit Apple anmelden"
    Then I see "Mit Google anmelden"
    Then I see "Mit dem Handy anmelden"
    Then I see "Registrieren"
    Then I see "Login"
    
    

