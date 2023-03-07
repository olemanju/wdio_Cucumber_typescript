Feature: Chai Register form

    Scenario Outline: Chai test register form
        Given I am on practice page "https://automationteststore.com/index.php?rt=account/create"
        Then I validate Page Header "Your Personal Details"
        When I enter firstname <fname> and lastname <lname>
        And I select email <email> telephone <Telephone> address <Address> and city <city>
        And I select zipcode <zipcode>
        Then  I agreed for terms and conditions
        And I select No subscribe and loginame "macbook" and password "password" and confirm "password"
        And I Clcik on Submit button
        And I should able to see "YOUR ACCOUNT HAS BEEN CREATED!"
        

        Examples:
            | fname | lname  | email            | Telephone | Address | city      | zipcode |
            | emma  | watson | abc123@gmail.com | 40150462  | red tea | melbourne | 3008    | 
