# Cypress Test for OrangeHRM  

This repository contains automated test cases for the OrangeHRM web application using Cypress and JavaScript. The test suite covers various scenarios, including login, profile updates, and searching for accounts.  

## Test Cases  

The test cases included in this project are:  

1. **Test Login with Valid Credentials**: Validates the login functionality using valid credentials.  
2. **Test Login with Invalid Credentials**: Validates the login functionality using invalid credentials.  
3. **Test Update Nickname**: Tests the ability to update the user's nickname.  
4. **Test Update Profile Picture**: Tests the process of updating the user's profile picture.  
5. **Test Search with Existing Person**: Tests searching for an existing person in the system.  
6. **Test Search with Non-Existing Person**: Tests searching for a non-existing person in the system.
   
## Demo  
  
You can watch a sample demo of the tests using Cypress UI here .  

https://github.com/emanmhmd/Ui-Api-Testing-by-Cypress/assets/63087099/6a3b5c02-23ab-46c3-be7f-ea8112b5e2ea

You can watch a sample demo of the tests using Cypress cli here .  

https://github.com/emanmhmd/Ui-Api-Testing-by-Cypress/assets/63087099/c6b0d0f2-6d2c-4ba5-99d3-e77ad2e17ce3


## Environment  

- **Cypress Version**: 12.16.0 (stable)  
- **System Platform**: Linux (Ubuntu 22.04)  
- **Browser**: Google Chrome Version 114.0.5735.198  

## Getting Started  

To run the tests, follow these steps:  

1. Clone this repository to your local machine.  
2. Navigate to the project directory.  
3. Install Cypress if you haven't already using `npm install cypress`.  
4. Start Cypress by running `npx cypress open`.  
5. In the Cypress test runner, click on the test spec file you want to run (e.g., `LoginPage.cy.js`) to execute the tests.  

## Configuration  

To configure the test data, update the values in the Fixtures files, typically found in the `/cypress/fixtures` directory.  

```JSON
// Example of configuring login credentials in data.json
{
    "url":"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    "login":{
            "username": "Admin",  //add your new username
            "password": "admin123"  // add your new password
    },
    "diffdata":{
        "nickname":"Bebo",
        "keyword":"Sara.Tencrady"
    }

}
