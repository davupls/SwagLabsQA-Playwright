# SwagLabs.com using Playwright - Test Cases

Positive Test Cases:

    TC01: Enter valid username and valid password, then click on the login button. Expected: User should be successfully logged in and redirected to the dashboard or main page.
    TC02: Check if there's a "Forgot Password" link. Expected: Link should be present and direct users to the password recovery page.

Negative Test Cases:

    TC03: Enter a valid username and invalid password, then click on the login button. Expected: Authentication should fail with an appropriate error message.
    TC04: Enter an invalid username and valid password. Expected: Authentication should fail with an appropriate error message.
    TC05: Leave the username field blank and enter a password, then click on the login button. Expected: User should see an error prompting them to enter a username.
    TC06: Leave the password field blank and enter a username, then click on the login button. Expected: User should see an error prompting them to enter a password.
UI/UX Test Cases:
    
    TC10: Check if the password is masked (shown as asterisks or dots). Expected: Password should not be visible in plain text.

Performance:

    TC12: Measure the time taken from clicking the login button to the user being logged in (for valid credentials). Expected: It should be within acceptable limits, e.g., 1-2 seconds depending on the system.
