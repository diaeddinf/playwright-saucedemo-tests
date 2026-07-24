const { test, expect } = require('@playwright/test');

test('Verify successful login on Swag Labs', async ({ page }) => {
    // 1. Navigate to the e-commerce demo page
    await page.goto('https://www.saucedemo.com/');

    // 2. Fill in username and password
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');

    // 3. Click the Login button
    await page.locator('#login-button').click();

    // 4. Assert that the URL changed to the inventory page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // 5. Assert that the header title says "Products"
    const title = page.locator('.title');
    await expect(title).toHaveText('Products');
});