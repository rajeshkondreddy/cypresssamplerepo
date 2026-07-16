import {test,expect} from '@playwright/test'

test('fileupload',async({page}) =>{
await page.goto('https://the-internet.herokuapp.com/')
await page.getByRole('link',{name:'File Upload'}).click()
await page.locator('#file-upload').setInputFiles('C:/Users/Rajes/Documents/code/downloads/snapshot.pdf')
await page.waitForTimeout(10000)
await page.locator('#file-submit').click()

})