Feature: The Internet Home Page
  Scenario Outline: As a user, I can navigate to Home page

    Given I open the browser and load the url <homepageurl>
    Then I should see header with text <headertext>

    Examples:
      | homepageurl                         | message                 |
      | https://the-internet.herokuapp.com/ | Welcome to the-internet |

