Feature: Settings on landing page
  In order to personalize the app 
  As a user
  I want to change themes and languages
  
  Background: open app correctly
	Given I press "settings"

  Scenario: Settins Menu opens correctly and options are available
    Then I see "Einstellungen"
    Then I see "Themenauswahl"
    Then I see "Sprachauswahl"
    Then I see "Hinzufügen"
    
  Scenario: Change color to pink
    And I press "Blau"
    And I press "Rosa"
    Then I see "Rosa"
    And I press "Hinzufügen"
    And I press "settings"
    Then I see "Rosa"
    
  Scenario: Change color to green
    And I press "Blau"
    And I press "Grün"
    Then I see "Grün"
    And I press "Hinzufügen"
    And I press "settings"
    Then I see "Grün"
    
  Scenario: Change color to orange
    And I press "Blau"
    And I press "Orange"
    Then I see "Orange"
    And I press "Hinzufügen"
    And I press "settings"
    Then I see "Orange"
    
  Scenario: Change color to lilac
    And I press "Blau"
    And I press "Lila"
    Then I see "Lila"
    And I press "Hinzufügen"
    And I press "settings"
    Then I see "Lila"
    
  Scenario: Change color to blue
    And I press "Blau"
    And I press "Rosa"
    Then I see "Rosa"
    And I press "Hinzufügen"
    And I press "settings"
    And I press "Rosa"
    And I press "Blau"
    Then I see "Blau"
    And I press "Hinzufügen"
    And I press "settings"
    Then I see "Blau"
    
  Scenario: Change language to English
    And I press "DE"
    And I press "EN"
    Then I see "Blue"
    And I press "Add"
    Then I see "Motivation, Fun & more"
    
  Scenario: Change language to Spanish
    And I press "DE"
    And I press "ES"
    Then I see "Azul"
    And I press "Añade"
    Then I see "Motivación, diversión y más"
    
  Scenario: Change language to Turkish
    And I press "DE"
    And I press "TR"
    Then I see "Mavi"
    And I press "Ekle"
    Then I see "Motivasyon, eğlence ve daha fazlası"
    
  Scenario: Change language to German
    And I press "DE"
    And I press "EN"
    Then I see "Blue"
    And I press "Add"
    Then I see "Motivation, Fun & more"
    And I press "settings"
    And I press "EN"
    And I press "DE"
    Then I see "Blau"
    And I press "Hinzufügen"
    Then I see "Motivation, Spaß und mehr"
    
