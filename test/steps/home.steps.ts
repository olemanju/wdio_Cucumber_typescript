import {Given,Then } from "@cucumber/cucumber"
import homePage from "../../src/pages/home.page";


Given(/^I open the browser and load the url (.+)$/, async(homepageurl) =>{
    await browser.url(homepageurl)
    await browser.maximizeWindow()
  });

  Then(/^I should see header with text (.+)$/, async(headertextk) =>{
    const heading = await homePage.heading.getText()
    expect(heading).toHaveText(headertextk)
    await browser.pause(3000)
    
  });