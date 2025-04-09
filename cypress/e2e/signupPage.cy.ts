import SignUpPage from "cypress/support/pages/SignUpPage";
import LoginPage from "cypress/support/pages/LoginPage";
import { BASE_URL, ROUTES } from "cypress/support/constants";


describe('Signup Test Suite', () => {
    it('should not allow signup without entering name', () => {
        SignUpPage.visitSignUpPage();
        LoginPage.clickSignupButton();
        LoginPage.validateSignUpNameToaster();
    });

    it('should not allow signup without entering email', () => {
        SignUpPage.visitSignUpPage();
        LoginPage.enterSignupName('Test User');
        LoginPage.clickSignupButton();
        LoginPage.validateSignUpEmailToaster();
    });

    it('should not allow signup with invalid email format', () => {
        SignUpPage.visitSignUpPage();
        const email = 'invalid-email'; // Invalid email format
        LoginPage.enterSignupEmail(email); // Entering invalid email format
        LoginPage.clickSignupButton();
        LoginPage.validateinvalidSignUpEmailToaster(email);
    });

});