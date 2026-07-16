import {test,expect} from '@playwright/test';

 test('context menu', async ({page})=>{
//     page.on('dialog', async dialog =>{
//         console.log(dialog.message());
//         await dialog.accept();
//     })
await page.goto('https://the-internet.herokuapp.com/');
 await page.getByRole('link' ,{name : 'Context Menu'}).click();
 await page.locator ('#hot-spot').click({button: 'right'});
  await page.waitForTimeout(5000);



} ) ; 