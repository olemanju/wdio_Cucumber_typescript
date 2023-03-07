Feature: APi integration
@get
  Scenario Outline: As a user,I hit the get call and validate the UI

    Given I am on the login page <PageUrl>
    When I perform <EndPoint> user search
    Then I make the <EndPoint> api call
    Then I validate the search results

    Examples:
      | PageUrl                 | EndPoint     |
      | http://resttesttest.com | /api/users/2 |

@post
  Scenario Outline: Validate End to End Create user function

    Given I am on the login page <PageUrl>
    When I perform create use search for api <EndPoint>
    Then I make POST <EndPoint> api call
    Then I validate the create user search results

    Examples:
      | PageUrl                 | EndPoint     |
      | http://resttesttest.com | /api/users |
