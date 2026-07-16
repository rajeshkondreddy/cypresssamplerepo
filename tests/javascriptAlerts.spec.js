import {test,expect} from '@playwright/test'

test('alertshandling',async({page}) =>{
await page.goto('https://the-internet.herokuapp.com/')
await page.getByRole('link',{name:'JavaScript Alerts'}).click()
page.on('dialog', async dialog =>{
console.log(dialog.type())
console.log(dialog.message())

await dialog.accept();
} )
await page.getByRole('button',{name:'Click for JS Alert'}).click();
await page.getByRole('button',{name:'Click for JS Confirm'}).click();
await page.getByRole('button',{name:'Click for JS Prompt'}).click();

})