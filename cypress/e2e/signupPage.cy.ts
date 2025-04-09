import SignUpPage from "cypress/support/pages/SignUpPage";
import LoginPage from "cypress/support/pages/LoginPage";
import { USER_INFO } from "cypress/support/constants";
import { SignupPageLocators } from "cypress/support/locators";


describe('Signup Test Suite Negative Testcase', () => {
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

    describe('Signup Complete Journey', () => {

        it('complete signup journey',() => {
            SignUpPage.visitSignUpPage();
            LoginPage.enterSignupName(`${USER_INFO.FIRST_NAME} ${USER_INFO.LAST_NAME}`);
            LoginPage.enterSignupEmail(USER_INFO.EMAIL);
            LoginPage.clickSignupButton();
            SignUpPage.selectMaleRadioButton();
            cy.get(SignupPageLocators.name).should('have.value', `${USER_INFO.FIRST_NAME} ${USER_INFO.LAST_NAME}`);
            SignUpPage.enterEmail();
            SignUpPage.enterPassword(USER_INFO.PASSWORD);
            // Fill Address Information
            SignUpPage.enterFirstName(USER_INFO.FIRST_NAME);
            SignUpPage.enterLastName(USER_INFO.LAST_NAME);
            SignUpPage.selectDay(USER_INFO.B_DAY);
            SignUpPage.selectMonth(USER_INFO.B_MONTH);
            SignUpPage.selectYear(USER_INFO.B_YEAR);
            SignUpPage.selectNewsletterCheckbox();
            SignUpPage.selectSpecialOffersCheckbox();
            SignUpPage.enterAddress1(USER_INFO.ADDRESS1);
            SignUpPage.enterAddress2(USER_INFO.ADDRESS2);
            SignUpPage.selectCountry(USER_INFO.COUNTRY);
            SignUpPage.enterState(USER_INFO.STATE);
            SignUpPage.enterCity(USER_INFO.CITY);
            SignUpPage.enterZipcode(USER_INFO.ZIPCODE);
            SignUpPage.enterMobileNumber(USER_INFO.MOBILE_NUMBER);
            SignUpPage.clickCreateAccountButton();
            SignUpPage.validateAccountCreatedText();
            SignUpPage.clickContinueButton();
            SignUpPage.validateLoggedInUserName(USER_INFO.FIRST_NAME, USER_INFO.LAST_NAME);
            LoginPage.clickLogoutButton();
        });

    });

    it('check if account exists', () => {
        SignUpPage.visitSignUpPage();
        LoginPage.enterSignupName(`${USER_INFO.FIRST_NAME} ${USER_INFO.LAST_NAME}`);
        LoginPage.enterSignupEmail(USER_INFO.EMAIL);
        LoginPage.clickSignupButton();
        SignUpPage.validateExistingAccountText();
    });

});