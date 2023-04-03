import { ChainablePromiseElement } from "webdriverio"
import Page from "./page";

class Homepage extends Page {

    public get heading() {
        return $('.heading')
    }

}

export default new Homepage()