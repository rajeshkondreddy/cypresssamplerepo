import {test,expect} from '@playwright/test'

test('dynamic controls',async({page}) =>{
await page.goto('https://the-internet.herokuapp.com/')
await page.getByRole('link',{name:'Dynamic Controls'}).click()
await page.locator('input[type="checkbox"]').click()
await page.getByRole('button',{name:'Remove'}).click()
await page.getByRole('button',{name: 'Enable'}).click()
await page.waitForTimeout(5000);

})