import LoginPage from "cypress/support/pages/LoginPage";
import SignUpPage from "cypress/support/pages/SignUpPage";
import { BASE_URL, USER_INFO } from "cypress/support/constants";
import { LoginPageLocators } from "cypress/support/locators";


describe('Login Regression Test Suite', () => {

    beforeEach(() => {
        LoginPage.visitLoginPage();
    });

    //Negative Test Scenarios and Edge Cases

    it('Attempt login without entering email', () => {
        LoginPage.clickLoginButton();
        LoginPage.validateLoginEmailToaster();
    });

    it('Attempt login without entering password', () => {
        LoginPage.enterLoginEmail(USER_INFO.EMAIL);
        LoginPage.clickLoginButton();
        LoginPage.validateLoginPasswordToaster();
    });

    it('Attempt login with invalid email format', () => {
        const email = 'invalid-email'; // Invalid email format
        LoginPage.enterLoginEmail(email); // Entering invalid email format
        LoginPage.clickLoginButton();
        LoginPage.validateinvalidLoginEmailToaster(email);
    });

    it('Attempt login with invalid credentials', () => {
        LoginPage.enterLoginEmail(USER_INFO.EMAIL);
        LoginPage.enterLoginPassword('invalid-password');
        LoginPage.clickLoginButton();
        LoginPage.validateLoginCredentialsToaster();
    });

    it('Attempt login with whitespace in email', () => {
        const email = '   USER_INFO.EMAIL   '; // Email with leading and trailing whitespace
        LoginPage.enterLoginEmail(email); // Entering email with whitespace
    });

    it('Attempt login with whitespace in password', () => {
        const password = '   USER_INFO.PASSWORD   '; // Password with leading and trailing whitespace
        LoginPage.enterLoginEmail(USER_INFO.EMAIL); // Entering email
        LoginPage.enterLoginPassword(password); // Entering password with whitespace
        LoginPage.clickLoginButton();
        LoginPage.validateLoginCredentialsToaster();
    });

    // UI Behavior & Post-Login Validations
    it('After successful login, ensure correct user name is shown', () => {
        LoginPage.enterLoginEmail(USER_INFO.EMAIL);
        LoginPage.enterLoginPassword(USER_INFO.PASSWORD);
        LoginPage.clickLoginButton();
        LoginPage.validateLoggedInUserName(USER_INFO.FIRST_NAME, USER_INFO.LAST_NAME);
        cy.url().should('eq', {BASE_URL})
        LoginPage.clickLoginButton();
    });

    it('Validate that user remains logged in after page reload', () => {
        LoginPage.enterLoginEmail(USER_INFO.EMAIL);
        LoginPage.enterLoginPassword(USER_INFO.PASSWORD);
        LoginPage.clickLoginButton();
        // Refresh the page
        cy.reload();
        
        // Validate that the user is still logged in
        LoginPage.validateLoggedInUserName(USER_INFO.FIRST_NAME, USER_INFO.LAST_NAME);
        cy.url().should('eq', {BASE_URL})
        LoginPage.clickLoginButton();
    });

    it('User should not be able to go back to login page after logging in', () => {
        LoginPage.enterLoginEmail(USER_INFO.EMAIL);
        LoginPage.enterLoginPassword(USER_INFO.PASSWORD);
        LoginPage.clickLoginButton();
        
        // Go back to the login page
        cy.go('back');
        
        // Validate that the user is redirected to the home page
        cy.url().should('eq', {BASE_URL});
    });

});
