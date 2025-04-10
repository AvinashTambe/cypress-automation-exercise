import { LoginPageLocators } from "../locators";
import { BASE_URL } from  "../constants";
import { ROUTES } from "../constants";

class LoginPage {
    
    static visitLoginPage = () => {
        cy.visit(`${BASE_URL}${ROUTES.LOGIN}`)
            .title().should('eq', 'Automation Exercise - Signup / Login')
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

    static validateLoginEmailToaster = () => {
        cy.get(LoginPageLocators.loginEmail).should('exist').then(($input) => {
            const inputEl = $input[0] as HTMLInputElement;
            expect(inputEl.checkValidity()).to.be.false; //// The check should be FALSE since the field is empty and required
            expect(inputEl.validationMessage).to.contain('Please fill in this field');
        });
    }

    static validateinvalidLoginEmailToaster = (email: string) => {
        cy.get(LoginPageLocators.loginEmail).should('exist').then(($input) => {
            const inputEl = $input[0] as HTMLInputElement;
            expect(inputEl.checkValidity()).to.be.false; //// The check should be FALSE since the field is empty and required
            const expectedMessage = `Please include an '@' in the email address. '${email}' is missing an '@'.`;
            expect(inputEl.validationMessage).to.contain(expectedMessage);
        });
    }

    static validateLoginPasswordToaster = () => {
        cy.get(LoginPageLocators.loginPassword).should('exist').then(($input) => {
            const inputEl = $input[0] as HTMLInputElement;
            expect(inputEl.checkValidity()).to.be.false; //// The check should be FALSE since the field is empty and required
            expect(inputEl.validationMessage).to.contain('Please fill in this field');
        });
    }

    static validateLoginCredentialsToaster = () => {
        cy.get(LoginPageLocators.loginCredentialsToaster)
            .should('be.visible')
            .and('contain', 'Your email or password is incorrect!')
    }

    static validateLoggedInUserName = (firstname : string, lastname : string) => {
            const expectedText = `Logged in as ${firstname} ${lastname}`;
            cy.get(LoginPageLocators.loggedInText)
                .should('be.visible')
                .invoke('text')
                .then((text) => {
                    const trimmedText = text.trim();
                    expect(trimmedText).to.include(expectedText);
                });
        }

    static clickLogoutButton = () => {
        cy.get(LoginPageLocators.logoutButton)
            .should('be.visible')
            .click();
        cy.url().should('eq','https://www.automationexercise.com/login');
    }
}

export default LoginPage;