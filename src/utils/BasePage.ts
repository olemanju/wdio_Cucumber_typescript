import{ChainablePromiseElement} from "webdriverio"

export const enterTextValue = async(element :Promise<WebdriverIO.Element>, value:string) =>
{
 await (await element).setValue(value)

}

export const selectDropdownByvisible =async (element:Promise<WebdriverIO.Element>, value:string) => {
    
  await (await element).selectByVisibleText(value)
}

export const clickOnButton  =async (element: Promise<WebdriverIO.Element>) => {
    await (await element).click()
}
    