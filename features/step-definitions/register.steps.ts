import { Given, When, Then } from "@cucumber/cucumber";
import registerPage from "../pageobjects/register.page";
import accountPage from "../pageobjects/account.page";

Given(/^I am on practice page \"([^\"]*)\"$/, async (openurl) => {

    await browser.url(openurl)
    await browser.maximizeWindow()
    
});

Then(/^I validate Page Header \"([^\"]*)\"$/, async (header) => {

    console.log("details :" + await registerPage.headerText.getText())
    expect(await registerPage.headerText.getText()).toHaveText(header)
});

When(/^I enter firstname (.+) and lastname (.+)$/, async (fname, lname) => {

    await registerPage.enterFirstAndLastName(fname,lname)
});

When(/^I select email (.+) telephone (.+) address (.+) and city (.+)$/, async (email, telephone, address, city) => {
    await registerPage.enterEmailTelephoneAddressCitydetails(email,telephone,address,city)
    await registerPage.selectDropdown("Bristol" )
    await browser.pause(1000)
});

When(/^I select zipcode (.+)$/, async (zipcode) => {
    await registerPage.enterPasscode(zipcode)

});
Then(/^I agreed for terms and conditions$/, async () => {
 await registerPage.termsAndCondition()
});

When(/^I select No subscribe and loginame \"([^\"]*)\" and password \"([^\"]*)\" and confirm \"([^\"]*)\"$/, async (macbook, password, confirm)=> {
    await registerPage.SelectNewsletterAndLoginandPassword(macbook,password,confirm)
    await browser.pause(1000)
  });


When(/^I Clcik on Submit button$/, async () => {
await registerPage.continuebtn()
await browser.pause(3000)
});

When(/^I should able to see \"([^\"]*)\"$/, async (accountcreated) => {
    console.log("Text is: " + await accountPage.headingSuccess.getText())
    expect (await accountPage.headingSuccess.getText()).toHaveText(accountcreated)
});
