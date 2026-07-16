// @ts-check
import { test, expect } from '@playwright/test';

 test('has title', async ({ page }) => {
 await page.goto('https://the-internet.herokuapp.com/');
 
 
 });

// test('get started link', async ({ page, browser }) => {
    
//   const context = await browser.newContext({
//         httpCredentials: {
//             username: 'admin',
//             password: 'admin'
//         }
//     });

//     const page1 = await context.newPage();
//     //await page.waitForTimeout(5000);

    //await page1.goto('https://the-internet.herokuapp.com/basic_auth');

  
    
 

