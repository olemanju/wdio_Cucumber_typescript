import {ChainablePromiseElement} from "webdriverio"
import Page from "./page"

class registerPage {

    private get firstName(){
        return $('#AccountFrm_firstname')
    }

    private get lastName(){
        return $('#AccountFrm_lastname')
    }
    private get emailbox(){
        return $('#AccountFrm_email')
    }
    private get telephoneNumber(){
        return $('#AccountFrm_telephone')
    }
    private get address_1(){
        return $('#AccountFrm_address_1')
    }
    private get city(){
        return $('#AccountFrm_city')
    }
    private get postCode(){
        return $('#AccountFrm_postcode')
    }
    private get loginName(){
        return $('#AccountFrm_loginname')
    }
    private get Password(){
        return $('#AccountFrm_password')
    }
    private get confirmPassword(){
        return $('#AccountFrm_confirm')
    }

    private get newsletterradio(){
        return $('#AccountFrm_newsletter0')
    }
    private get termsandCondition(){
        return $('#AccountFrm_agree')
    }
    private get continueButton(){
        return $('.lock-on-click')
    }

     get headerText(){
        return $('.heading4')
    }

    get reagiondropdown(){
        return $('#AccountFrm_zone_id')
    }

 async selectDropdown( value:string)
 {
    //async selectDropdown(element: WebdriverIO.ElementArray, value:string)
    await this.reagiondropdown.click()
    await this.reagiondropdown.selectByVisibleText(value)
    /*
    for (let i = 0; i < element.length; i++) {
        const ele = await element[i].getAttribute('value');
        if(ele === value)
        {
            await element[i].click()
            break;
        }
        
    }
    */
 }
    

    async enterFirstAndLastName(username:string,lastname:string)
    {
        await this.firstName.setValue(username)
        await this.lastName.setValue(lastname)
    }
/*
    async enterLastName(lastname:string)
    {
        await this.lastName.setValue(lastname)
    }
    */

    async enterEmailTelephoneAddressCitydetails(email:string, telphone:number,adress:string,city:string)
    {
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string = '';
        for(var ii=0; ii<15; ii++){
        string += chars[Math.floor(Math.random() * chars.length)];
        }
        await this.emailbox.setValue(string + '@domain.com')
        await browser.pause(3000)
        await this.telephoneNumber.setValue(telphone)
        await this.address_1.setValue(adress)
        await this.city.setValue(city)

    }

    /*
    async enterTelephoneNumber(telphone:number)
    {
        await this.telephoneNumber.setValue(telphone)
    }

    async enterAddress(adress:string)
    {
        await this.address_1.setValue(adress)
    }
    async enterCity(city:string)
    {
        await this.city.setValue(city)
    }
    */
    async enterPasscode(passcode:number)
    {
        await this.postCode.setValue(passcode)
    }
    
    async enterLoginName(loginname:string)
    {
        await this.loginName.setValue(loginname)
    }
    async enterPassword(password:string)
    {
        await this.Password.setValue(password)
    }
    async enterConfirmPassword(Conpassword:string)
    {
        await this.confirmPassword.setValue(Conpassword)
    }

    async SelectNewsletterAndLoginandPassword(loginname:string,password:string,Conpassword:string)
    {
        await this.loginName.setValue(loginname)
        await this.Password.setValue(password)
        await this.confirmPassword.setValue(Conpassword)
        await this.newsletterradio.click()
    }

    async termsAndCondition()
    {
        await this.termsandCondition.click()
    }

    async continuebtn()
    {
        await this.continueButton.click()
    }

    

    
}
export default new registerPage()