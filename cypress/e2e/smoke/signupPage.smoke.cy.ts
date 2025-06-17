import SignUpPage from "cypress/pages/SignUpPage";
import LoginPage from "cypress/pages/LoginPage";
import { USER_INFO } from "cypress/support/constants";
import { SignupPageLocators } from "cypress/locators/locators";


describe('Signup Test Suite Negative Testcase', () => {

    it('complete signup journey', () => {
        SignUpPage.visitSignUpPage();
        SignUpPage.enterSignupName(`${USER_INFO.FIRST_NAME} ${USER_INFO.LAST_NAME}`);
        SignUpPage.enterSignupEmail(USER_INFO.EMAIL);
        SignUpPage.clickSignupButton();

        // 👉 Check if existing account error is shown
        cy.get('body').then($body => {
            if ($body.text().includes('Email Address already exist!')) {
                SignUpPage.validateExistingAccountText();
                return; // 👈 Exit the test early
            }

            // 👉 Continue with full signup only if no error
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
            LoginPage.validateLoggedInUserName(USER_INFO.FIRST_NAME, USER_INFO.LAST_NAME);
            LoginPage.clickLogoutButton();
        });
    });

});
