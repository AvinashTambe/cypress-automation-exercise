import LoginPage from "cypress/support/pages/LoginPage";
import SignUpPage from "cypress/support/pages/SignUpPage";
import { USER_INFO } from "cypress/support/constants";


describe('Login Smoke Test Suite ', () => {
    it('complete login journey', () => {
        LoginPage.visitLoginPage();
        LoginPage.enterLoginEmail(USER_INFO.EMAIL);
        LoginPage.enterLoginPassword(USER_INFO.PASSWORD);
        LoginPage.clickLoginButton();

        // Validate successful login by checking if the user is redirected to the homepage
        cy.url().should('eq', 'https://www.automationexercise.com/');

        // Validate that the user is logged in by checking for the presence of the "Logged in as" text
       LoginPage.validateLoggedInUserName(USER_INFO.FIRST_NAME, USER_INFO.LAST_NAME);
    });
});