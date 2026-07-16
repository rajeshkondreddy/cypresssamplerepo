import {test,expect} from '@playwright/test';
test('Auth popups', async ({ page, browser }) => {
    const context= await browser.newContext({
    httpCredentials:{
        username:'admin',
        password:'admin'
    }
 })
 
  const page1 =await context.newPage();
 await page1.goto('https://the-internet.herokuapp.com/digest_auth')
 await page1.waitForTimeout(5000);
 

})