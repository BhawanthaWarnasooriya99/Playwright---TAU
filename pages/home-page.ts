import {type Locator, type Page , expect} from '@playwright/test';

export class HomePage {

    //varaibles
    readonly page:Page;
    //await page.getByRole('link', { name: 'Get started' }).click();
    readonly getStartedButton: Locator;
    //await expect(page).toHaveTitle(/Playwright/);
    readonly title: RegExp;

    //constrcutor
    constructor (page:Page){
        this.page =page
        this.getStartedButton = this.page.getByRole('link', { name: 'Get started' });
        this.title = /Playwright/;
    };

    //methods
    async clickGetStarted() {
        await this.getStartedButton.click();
    }

    async assertPageTitle() {
        await expect(this.page).toHaveTitle(this.title);
    }
}

export default HomePage;