import {ChainablePromiseElement} from "webdriverio"
import Page from "./page";


class Accountpage extends Page{

    public get headingSuccess () {
        return $('.maintext')
    }


}

export default new Accountpage()