import LoginPage from "cypress/support/pages/LoginPage";
import SignUpPage from "cypress/support/pages/SignUpPage";
import { USER_INFO } from "cypress/support/constants";


describe('Login Test Suite Negative Testcase', () => {

    beforeEach(() => {
        LoginPage.visitLoginPage();
    });

    it('should not allow login without entering email', () => {
        LoginPage.clickLoginButton();
        LoginPage.validateLoginEmailToaster();
    });

    it('should not allow login without entering password', () => {
        LoginPage.enterLoginEmail(USER_INFO.EMAIL);
        LoginPage.clickLoginButton();
        LoginPage.validateLoginPasswordToaster();
    });

    it('should not allow login with invalid email format', () => {
        const email = 'invalid-email'; // Invalid email format
        LoginPage.enterLoginEmail(email); // Entering invalid email format
        LoginPage.clickLoginButton();
        LoginPage.validateinvalidLoginEmailToaster(email);
    });

    it('should not allow login with invalid credentials', () => {
        LoginPage.enterLoginEmail(USER_INFO.EMAIL);
        LoginPage.enterLoginPassword('invalid-password');
        LoginPage.clickLoginButton();
        LoginPage.validateLoginCredentialsToaster(USER_INFO.EMAIL, 'invalid-password');
    });

});

describe('Login Test Suite Complete Journey', () => {
    it('complete login journey', () => {
        LoginPage.visitLoginPage();
        LoginPage.enterLoginEmail(USER_INFO.EMAIL);
        LoginPage.enterLoginPassword(USER_INFO.PASSWORD);
        LoginPage.clickLoginButton();

        // Validate successful login by checking if the user is redirected to the homepage
        cy.url().should('eq', 'https://www.automationexercise.com/');

        // Validate that the user is logged in by checking for the presence of the "Logged in as" text
       SignUpPage.validateLoggedInUserName(USER_INFO.FIRST_NAME, USER_INFO.LAST_NAME);
    });
});