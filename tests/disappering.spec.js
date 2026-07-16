import {test,expect} from '@playwright/test';
test('disappearing elements', async ({ page, browser }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link',{name:'Disappearing Elements'}).click();
 await page.getByRole('link',{name:'Home'}).click();
 await page.waitForTimeout(5000);

});