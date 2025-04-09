import { LoginPageLocators } from "../locators";
import { BASE_URL } from  "../constants";
import { ROUTES } from "../constants";

class LoginPage {
    

    static visitLoginPage = () => {
        cy.visit(`${BASE_URL}${ROUTES.LOGIN}}`)
            .url().should('eq', 'https://www.automationexercise.com/login')
    }

    static enterLoginEmail = (email: string) => {
        cy.get(LoginPageLocators.loginEmail)
            .should('be.visible')
            .type(email);
    }
    
    static enterLoginPassword = (password: string) => {
        cy.get(LoginPageLocators.loginPassword)
            .should('be.visible')
            .type(password);
    }

    static clickLoginButton = () => {
        cy.get(LoginPageLocators.loginButton)
            .should('be.visible')
            .click();
    }

    static enterSignupName = (name : string) => {
        cy.get(LoginPageLocators.signupName)
            .should('be.visible')
            .type(name);
    }

    static enterSignupEmail = (email : string) => {
        cy.get(LoginPageLocators.signupEmail)
            .should('be.visible')
            .type(email);
    }

    static clickSignupButton = () => {
        cy.get(LoginPageLocators.signupButton)
            .should('be.visible')
            .click();
    }

    static validateSignUpNameToaster = () => {
        cy.get(LoginPageLocators.signupName).should('exist').then(($input) => {
            const inputEl = $input[0] as HTMLInputElement;
            expect(inputEl.checkValidity()).to.be.false; //// The check should be FALSE since the field is empty and required
            expect(inputEl.validationMessage).to.contain('Please fill in this field');
        });
    }

    static validateSignUpEmailToaster = () => {
        cy.get(LoginPageLocators.signupEmail).should('exist').then(($input) => {
            const inputEl = $input[0] as HTMLInputElement;
            expect(inputEl.checkValidity()).to.be.false; //// The check should be FALSE since the field is empty and required
            expect(inputEl.validationMessage).to.contain('Please fill in this field');
        });
    }

    static validateinvalidSignUpEmailToaster = (email : string) => {
        cy.get(LoginPageLocators.signupEmail).should('exist').then(($input) => {
            const inputEl = $input[0] as HTMLInputElement;
            expect(inputEl.checkValidity()).to.be.false; //// The check should be FALSE since the field is empty and required
            const expectedMessage = `Please include an '@' in the email address. '${email}' is missing an '@'.`;
            expect(inputEl.validationMessage).to.contain(expectedMessage);
        });
    }
}

export default LoginPage;