import { Given, When, Then } from "@wdio/cucumber-framework"; 
import { BASE_URI } from "../../src/config/APIConfig";
import userPageApi from "../../src/pages/user.page.api";

import supertest from 'supertest'
import { clickOnButton } from "../../src/utils/BasePage";
import { APICalls } from "../../src/enums/APICalls";

const request = supertest(BASE_URI)
let response : supertest.Response

const payload ={
  "name": "manju",
  "job": "tester"
}

Given(/^I am on the login page (.+)$/, async (pageurl: string ) => {
    await userPageApi.openAPIUrl(pageurl)
    
  });

  When(/^I perform (.+) user search$/, async (endpoint: string) => {
    
    await userPageApi.endPointUrl(BASE_URI+endpoint)
    await userPageApi.clickonAjacBtn()
  });

  Then(/^I make the (.+) api call$/, async (endpoint: string)=>  {
   
    response =  await request.get(endpoint)
    const GET_API_RESPONSE = JSON.stringify(response.body)
    console.log("API Response is :" + GET_API_RESPONSE )

  });

  Then(/^I validate the search results$/, async ()=> {

    const api_ui_statuscode = await userPageApi.getStatusText()
    const api_ui_response =  JSON.parse(await userPageApi.getOutputText())


    console.log("The UI Response for GET CALL is :" + JSON.stringify(api_ui_response))


    expect(response.statusCode).toHaveValueContaining(api_ui_statuscode)
    expect(response.body).toEqual(api_ui_response)

    console.log("The Email address in UI API " + api_ui_response.data.email)

    console.log("The Email address in Supertest API " +response.body.data.email)
    expect(response.body.data.email).toEqual(api_ui_response.data.email)
    await browser.pause(1000)
  })

  

  When(/^I perform create use search for api (.+)$/, async (endpoint) =>{

    await userPageApi.selectMethod(APICalls.POST)
    await userPageApi.endPointUrl(BASE_URI+endpoint)

    await userPageApi.clickOnADDParm()
   await userPageApi.enterFirstParam("name",payload.name)
   await userPageApi.clickOnADDParm()
   await userPageApi.enterSecondParam("job",payload.job)
   await userPageApi.clickonAjacBtn()
  
  });

  Then(/^I make POST (.+) api call$/, async (endpoint) => {
    
   response =  await request
                  .post(endpoint)
                  .send(payload)
                  .set('content-type','application/json')
          
    console.log("API Response Status Code: " + response.statusCode)
    console.log("API Response Body: " + await JSON.stringify(response.body))

  });

  Then(/^I validate the create user search results$/, async () =>{

    const ui_status = await userPageApi.getStatusText()
    console.log("UI status " + ui_status)
    const ui_response =  JSON.parse(await userPageApi.getOutputText())
    const ui_string_response = JSON.stringify(ui_response)
    console.log("UI Response body " + ui_string_response)

    expect(response.statusCode).toHaveValueContaining(ui_status)
    expect(ui_response.name).toEqual(response.body.name)
    expect(ui_response.job).toEqual(response.body.job)

    
  });

