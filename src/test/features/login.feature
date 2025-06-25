Feature: User Authentication tests

  Scenario: Login should be success
    Given User logs in as "admin"
    Then Login should be success
    When User logs out
    Then Logout should be success

  Scenario: Login should not be success
    Given User logs in as "invalid"
    Then Login should fail

  Scenario: Guest user cannot login
    Given User logs in as "guest"
    Then Login should fail