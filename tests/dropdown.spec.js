import {test,expect} from '@playwright/test'
test(' dropdown', async ({ page, browser }) => {
    await page.goto('https://the-internet.herokuapp.com/');

    //select by index,value,label(visibletext)
    await page.getByRole('link',{name:'dropdown'}).click();
    //select by value
    await page.locator('#dropdown').selectOption('1');
    //select by text
    //await page.locator('#dropdown').selectOption({label:'Option 1'});

    await page.waitForTimeout(5000);




})