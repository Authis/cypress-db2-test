Feature: Connect to DB2

  I want to Connect to DB2 from Cypress

  @Success
  Scenario: Connecting IBM DB2
    Given To connect IBM_db2
    Then DB2 Connection should give success
 