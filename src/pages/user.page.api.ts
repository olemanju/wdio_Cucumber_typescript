import { APICalls } from "../enums/APICalls";
import { clickOnButton, enterTextValue, selectDropdownByvisible } from "../utils/BasePage";
import Page from "./page"

class UserpageApi {
    private get url_textbox() { return $('#urlvalue'); }
    private get ajax_btn() { return $('#submitajax'); }
    private get success_elem() { return $('.alert-success'); }
    private get status_text() { return $('#statuspre'); }
    private get output_result() { return $('#outputpre'); }

    private get method_dropdown() { return $('#httpmethod') }
    private get addParam_Btn() { return $('#addprambutton') }

    private get paramName1_textbox() { 
        return $("//div[@id='allparameters']//input[contains(@class,'fakeinputname') and @value]") 
    }
    private get paramValue1_textbox() { 
        return $("//div[@id='allparameters']//input[contains(@class,'realinputvalue') and @value]") 
    }
    private get paramName2_textbox() { 
        return $("(//div[@id='allparameters']//input[contains(@class,'fakeinputname') and @value])[2]") 
    }
    private get paramValue2_textbox() { 
        return $("(//div[@id='allparameters']//input[contains(@class,'realinputvalue') and @value])[2]") 
    }
    
    async openAPIUrl(pageurl: string)
    {
        await browser.url(pageurl)
        await browser.maximizeWindow()
    }
    async endPointUrl(apiendpoint : string)
    {
        await enterTextValue(this.url_textbox, apiendpoint)
    }

    async clickonAjacBtn(){
        await clickOnButton(this.ajax_btn)
        await browser.pause(4000)
    }
    async getStatusText():Promise<string>{
        (await this.success_elem).waitForDisplayed()
        return (await this.status_text).getText()
    }

    async getOutputText():Promise<string>{
        await (await this.output_result).waitForDisplayed()
        return (await this.output_result).getText()
       
    }

    async selectMethod(apitype:APICalls){
        await selectDropdownByvisible( this.method_dropdown, apitype)
    }

    async clickOnADDParm(){
        await clickOnButton(this.addParam_Btn)
    }

    async enterFirstParam(key: string, value: string)
    {
        await enterTextValue(this.paramName1_textbox, key)
        await enterTextValue(this.paramValue1_textbox,value)
    }

    async enterSecondParam(key: string, value: string)
    {
        await enterTextValue(this.paramName2_textbox, key)
        await enterTextValue(this.paramValue2_textbox,value)
    }

}

export default new UserpageApi()