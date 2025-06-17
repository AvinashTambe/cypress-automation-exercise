import SignUpPage from "cypress/pages/SignUpPage";
import { USER_INFO } from "cypress/support/constants";
import { SignupPageLocators } from "cypress/locators/locators";


describe('Signup Regression Test Suite', () => {

    beforeEach( ()=> {
        SignUpPage.visitSignUpPage();
    })
    

    it('Attempt signup without entering name', () => {
        SignUpPage.clickSignupButton();
        SignUpPage.validateSignUpNameToaster();
    });

    it('Attempt signup without entering email', () => {
        SignUpPage.enterSignupName('Test User');
        SignUpPage.clickSignupButton();
        SignUpPage.validateSignUpEmailToaster();
    });

    it('Attempt signup with invalid email format', () => {
        SignUpPage.enterSignupName(`${USER_INFO.FIRST_NAME}${USER_INFO.LAST_NAME}`);
        const email = 'invalid-email'; // Invalid email format
        SignUpPage.enterSignupEmail(email); // Entering invalid email format
        SignUpPage.clickSignupButton();
        SignUpPage.validateInvalidSignUpEmailToaster(email);
    });

    it('Attempt sign with missing doamin', () => {
        SignUpPage.enterSignupName(`${USER_INFO.FIRST_NAME}${USER_INFO.LAST_NAME}`);
        const email = 'avinash.test@';
        SignUpPage.enterSignupEmail(email);
        SignUpPage.clickSignupButton();
        SignUpPage.validateMissingDomainToaster(email);
    });

});