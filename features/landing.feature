Feature: Landing page
  In order to create/login the user
  As a user
  I want to verify login/registration and settings menu are working
  
  Background: open app correctly
    And I see "Kid-Coins"

  @runThis
  Scenario: All login and registration options are available
    Then I see "Motivation, Spaß und mehr"
    Then I see "Mit Apple anmelden"
    Then I see "Mit Google anmelden"
    Then I see "Mit dem Handy anmelden"
    Then I see "Registrieren"
    Then I see "Login"
    
  @TKC-16 @androidOnly
  Scenario: Login with Apple ID and cancel on apple id sign in
    And I press "Mit Apple anmelden"
    Then I see "Sign In with your Apple ID"
    And I press "Settings"
    Then I see "Apple ID"
    And I press "Cancel"
    And I press "back to App"
    Then I see "Apple-Authentifizierungsfehler"
    And I press "Ok"
	Then I see "Motivation, Spaß und mehr"
	
  @TKC-16 @androidOnly
  Scenario: Login with Apple ID and cancel immediately
    And I press "Mit Apple anmelden"
    Then I see "Sign In with your Apple ID"
    And I press "Close"
    Then I see "Apple-Authentifizierungsfehler"
    And I press "Ok"
	Then I see "Motivation, Spaß und mehr"
    
  Scenario: Login with Google and cancel
    And I press "Mit Google anmelden"
    Then I see "This allows the app and website to share information about you."
    And I press "Cancel"
    Then I see "Google-Anmeldung vom Nutzer abgebrochen"
    And I press "Ok"
	Then I see "Motivation, Spaß und mehr"
    
  Scenario: Login with Google and continue
    And I press "Mit Google anmelden"
    Then I see "This allows the app and website to share information about you."
    And I press "Continue"
    Then I see "Anmeldung"
    And I press "Cancel"
    Then I see "Google-Anmeldung vom Nutzer abgebrochen"
    And I press "Ok"
	Then I see "Motivation, Spaß und mehr"
	
  @TKC-17	
  Scenario: Login with Google and finish process
    And I press "Mit Google anmelden"
    Then I see "Allow app"
    And I press "Continue"
    Then I type "jtime002@gmail.com" in "email"
    

    
    

