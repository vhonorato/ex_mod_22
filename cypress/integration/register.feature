Feature: Register

    Scenario Outline: Register with valid credentials
        Given I visit the EBAC Store register
        When I register with email "<email>" and password "<password>"
        Then the account page should be displayed

        Examples:
            | email    | password     |
            | [random] | Hy%¨78asasyi |