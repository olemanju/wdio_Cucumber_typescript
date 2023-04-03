import { ChainablePromiseElement } from "webdriverio"
import { clickOnButton, enterTextValue, selectDropdownByvisible } from "../utils/BasePage"
import Page from "./page"

class registerPage {

    private get firstName() { return $('#AccountFrm_firstname') }
    private get lastName() { return $('#AccountFrm_lastname') }
    private get emailbox() { return $('#AccountFrm_email') }
    private get telephoneNumber() { return $('#AccountFrm_telephone') }
    private get address_1() { return $('#AccountFrm_address_1') }
    private get city() { return $('#AccountFrm_city') }
    private get postCode() { return $('#AccountFrm_postcode') }
    private get loginName() { return $('#AccountFrm_loginname') }
    private get Password() { return $('#AccountFrm_password') }
    private get confirmPassword() { return $('#AccountFrm_confirm') }
    private get newsletterradio() { return $('#AccountFrm_newsletter0') }
    private get termsandCondition() { return $('#AccountFrm_agree') }
    private get continueButton() { return $('.lock-on-click') }
    get headerText() { return $('.heading4') }
    private get reagiondropdown() { return $$('#AccountFrm_zone_id') }
    private get reagiondropdown1() { return $('#AccountFrm_zone_id') }
    private get testomonial() { return $("//h2[text()='Testimonials']") }


    private get faxtextbox() { return $('#AccountFrm_fax') }
    private get company() { return $('#AccountFrm_company') }
    private get Address2() { return $('#AccountFrm_address_2') }

    async scrollIntoView() {
        await (await this.testomonial).scrollIntoView()
    }

    async selectDropdown(value: string) {
        //async selectDropdown(element: WebdriverIO.ElementArray, value:string)
        // await this.reagiondropdown.click()
        // await this.reagiondropdown.selectByVisibleText(value)
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

    async selectDropdown1(element: WebdriverIO.ElementArray, value: string) {
        //async selectDropdown(element: WebdriverIO.ElementArray, value:string)
        //await this.reagiondropdown1.click()
        await clickOnButton(this.reagiondropdown1)
        //await selectDropdownByvisible(this.reagiondropdown,value)
        await this.reagiondropdown1.selectByVisibleText(value)
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

    async selectreagion(region: string) {
        await this.selectDropdown1(await this.reagiondropdown, region)
    }


    async enterFirstAndLastName(username: string, lastname: string) {
        // await this.firstName.setValue(username)
        //  await this.lastName.setValue(lastname)
        await enterTextValue(this.firstName, username)
        await enterTextValue(this.lastName, lastname)


    }
    async enterFaxCompanyAddress(fax: string, company: string, address: string) {
        await enterTextValue(this.faxtextbox, fax)
        await enterTextValue(this.company, company)
        await enterTextValue(this.Address2, address)


    }

    /*
        async enterLastName(lastname:string)
        {
            await this.lastName.setValue(lastname)
        }
        */

    async enterEmailTelephoneAddressCitydetails(email: string, telphone: string, adress: string, city: string) {
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string = '';
        for (var ii = 0; ii < 15; ii++) {
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        //await this.emailbox.setValue(string + '@domain.com')
        await enterTextValue(this.emailbox, string + '@domain.com')
        await browser.pause(3000)
        // await this.telephoneNumber.setValue(telphone)
        await enterTextValue(this.telephoneNumber, telphone)
        // await this.address_1.setValue(adress)
        await enterTextValue(this.address_1, adress)
        await enterTextValue(this.city, city)
        // await this.city.setValue(city)

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
    async enterPasscode(passcode: string) {
        await this.postCode.setValue(passcode)
    }

    async enterLoginName(loginname: string) {

        await this.loginName.setValue(loginname)
    }
    async enterPassword(password: string) {
        await this.Password.setValue(password)
    }
    async enterConfirmPassword(Conpassword: string) {
        await this.confirmPassword.setValue(Conpassword)
    }

    async SelectNewsletterAndLoginandPassword(loginname: string, password: string, Conpassword: string) {
        // await this.loginName.setValue(loginname)
        //await this.Password.setValue(password)
        // await this.confirmPassword.setValue(Conpassword)
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string = '';
        for (var ii = 0; ii < 15; ii++) {
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        await enterTextValue(this.loginName, loginname + string)

        await enterTextValue(this.Password, password)
        await enterTextValue(this.confirmPassword, Conpassword)
        // await this.newsletterradio.click()
        await clickOnButton(this.newsletterradio)
        await browser.pause(3000)
    }

    async termsAndCondition() {
        // await this.termsandCondition.click()
        await clickOnButton(this.termsandCondition)
    }

    async continuebtn() {
        // await this.continueButton.click()
        await clickOnButton(this.continueButton)

    }




}
export default new registerPage()