import {test,expect} from '@playwright/test'

test('file download',async({page}) =>{
await page.goto('https://the-internet.herokuapp.com/')

await page.getByRole('link',{name:'File Download'}).first().click();
const downloadpromise= page.waitForEvent('download');
await page.getByRole('link',{name:'selenium-snapshot.png'}).click();
const download= await downloadpromise;
await download.saveAs("downloads/snapshot.pdf")
await page.waitForTimeout(5000);
})