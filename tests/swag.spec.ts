import {test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Swag Labs/);
});

// TC01: Validate login works
test('valid login',async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // wait for selectors to load
    await page.waitForSelector('[data-test="username"]');
    await page.waitForSelector('[data-test="password"]');
    await page.waitForSelector('[data-test="login-button"]');

    // Fill username and password inputs with valid data
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', "secret_sauce");

    // click login button
    await page.click('[data-test="login-button"]');

    console.log('TC01: Successful');
});

// TC02: Validate locked account message alert works
test('lock out alert',async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // wait for selectors to load
    await page.waitForSelector('[data-test="username"]');
    await page.waitForSelector('[data-test="password"]');
    await page.waitForSelector('[data-test="login-button"]');

    // Fill username and password with locked account data
    await page.fill('[data-test="username"]', 'locked_out_user');
    await page.fill('[data-test="password"]', "secret_sauce");

    // click login button
    await page.click('[data-test="login-button"]');

    // wait for error selector to load
    await page.waitForSelector('[data-test="error"]');
    await page.waitForSelector('.error-message-container');
    

    // check alert element message
    const alertElementContainer = page.locator('.error-message-container');
    const alertElement =  page.locator('[data-test="error"]');
    await expect(alertElement).toContainText('Epic sadface: Sorry, this user has been locked out.');

    // check contain background color
    await expect(alertElementContainer).toHaveCSS('background-color', 'rgb(226, 35, 26)');

    console.log('TC02: Successful');
});


// TC03: Verify correct username & incorrect password works
test('incorrect password',async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // wait for selectors to load
    await page.waitForSelector('[data-test="username"]');
    await page.waitForSelector('[data-test="password"]');
    await page.waitForSelector('[data-test="login-button"]');

    // Fill username and password with locked account data
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', "sauce_incorrect");

    // click login button
    await page.click('[data-test="login-button"]');

    // wait for error selector to load
    await page.waitForSelector('[data-test="error"]');
    await page.waitForSelector('.error-message-container');

    

    // check alert element message
    const alertElementContainer = page.locator('.error-message-container');
    const alertElement =  page.locator('[data-test="error"]');
    await expect(alertElement).toContainText('Epic sadface: Username and password do not match any user in this service');

    // check contain background color
    await expect(alertElementContainer).toHaveCSS('background-color', 'rgb(226, 35, 26)');

    console.log('TC03: Successful');
});

// TC04: Verify incorrect username & correct password
test('incorrect username',async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // wait for selectors to load
    await page.waitForSelector('[data-test="username"]');
    await page.waitForSelector('[data-test="password"]');
    await page.waitForSelector('[data-test="login-button"]');

    // Fill username and password with locked account data
    await page.fill('[data-test="username"]', 'stAndArd_usEr');
    await page.fill('[data-test="password"]', "secret_sauce");

    // click login button
    await page.click('[data-test="login-button"]');

    // wait for error selector to load
    await page.waitForSelector('[data-test="error"]');
    await page.waitForSelector('.error-message-container');

    

    // check alert element message
    const alertElementContainer = page.locator('.error-message-container');
    const alertElement =  page.locator('[data-test="error"]');
    await expect(alertElement).toContainText('Epic sadface: Username and password do not match any user in this service');

    // check contain background color
    await expect(alertElementContainer).toHaveCSS('background-color', 'rgb(226, 35, 26)');

    console.log('TC04: Successful');
});

// TC05: Verify empty username & correct password
test('empty username',async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');  

    // wait for selectors to load
    await page.waitForSelector('[data-test="username"]');
    await page.waitForSelector('[data-test="password"]');
    await page.waitForSelector('[data-test="login-button"]');

    // Fill username and password with locked account data
    await page.fill('[data-test="password"]', "secret_sauce");

    // click login button
    await page.click('[data-test="login-button"]');

    // wait for error selector to load
    await page.waitForSelector('[data-test="error"]');
    await page.waitForSelector('.error-message-container');

    

    // check alert element message
    const alertElementContainer = page.locator('.error-message-container');
    const alertElement =  page.locator('[data-test="error"]');
    await expect(alertElement).toContainText('Epic sadface: Username is required');

    // check contain background color
    await expect(alertElementContainer).toHaveCSS('background-color', 'rgb(226, 35, 26)');
    console.log('TC05: Successful');
});

// TC06: Verify empty username & correct password
test('empty password',async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');  

    // wait for selectors to load
    await page.waitForSelector('[data-test="username"]');
    await page.waitForSelector('[data-test="password"]');
    await page.waitForSelector('[data-test="login-button"]');

    // Fill username and password with locked account data
    await page.fill('[data-test="username"]', "standard_user");

    // click login button
    await page.click('[data-test="login-button"]');

    // wait for error selector to load
    await page.waitForSelector('[data-test="error"]');
    await page.waitForSelector('.error-message-container');

    

    // check alert element message
    const alertElementContainer = page.locator('.error-message-container');
    const alertElement =  page.locator('[data-test="error"]');
    await expect(alertElement).toContainText('Epic sadface: Password is required');

    // check contain background color
    await expect(alertElementContainer).toHaveCSS('background-color', 'rgb(226, 35, 26)');
    console.log('TC06: Successful');
});


// TC10: Verify empty username & correct password
test('password masking',async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');  

    // wait for selectors to load
    await page.waitForSelector('[data-test="username"]');
    await page.waitForSelector('[data-test="password"]');
    await page.waitForSelector('[data-test="login-button"]');

    // Fill username and password with locked account data
    await page.fill('[data-test="password"]', "secret_sauce");

    const passwordInput = await page.waitForSelector('[data-test="password"]');
    const inputValue = await passwordInput.evaluate(input => input.value);


    if (inputValue === '●●●●●●●●●●●●') {
        console.log('Password input is correctly masked.');
    } else {
        console.log('Password input is not correctly masked.');
    }

    // console.log(inputValue);
    console.log('TC10: Successful');
});


// TC12: How long it takes to login

test('page load performance after login', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://www.saucedemo.com/'); // Replace with the actual URL

    // wait for selectors to load
    await page.waitForSelector('[data-test="username"]');
    await page.waitForSelector('[data-test="password"]');
    await page.waitForSelector('[data-test="login-button"]');

    // Enter credentials and click the login button
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]'); // Replace with the actual selector

    // Measure the time it takes for the page to load after login
    await page.waitForLoadState(); // Wait for the page to load completely
    await page.evaluate(() => {
        performance.mark('loginEnd'); // Mark the end of login
    });

    // Measure the duration between navigation and loginEnd marks
    const measureEntries = await page.evaluate(() => {
        performance.measure('loginDuration', 'navigationStart', 'loginEnd');
        return performance.getEntriesByName('loginDuration');
    });

    // Get the duration from the measure entries
    const loadTime = measureEntries[0].duration;

    // Output the load time
    console.log(`Page load time after login: ${loadTime} milliseconds`);

    // Assert the load time meets your performance expectations
    expect(loadTime).toBeLessThanOrEqual(5000); // Example: 5000 milliseconds
});
