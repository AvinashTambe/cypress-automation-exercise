import { LoginPageLocators } from "../locators";
import { BASE_URL } from  "../constants";
import { ROUTES } from "../constants";

export const LoginPage = {

    visitLoginPage: () => {
        cy.visit(`${BASE_URL}${ROUTES.LOGIN}}`)
            .url().should('eq', 'https://www.automationexercise.com/login')
    },

    enterLoginEmail: (email: string) => {
        cy.get(LoginPageLocators.loginEmail)
            .should('be.visible')
            .type(email);
    },
    
    enterLoginPassword: (password: string) => {
        cy.get(LoginPageLocators.loginPassword)
            .should('be.visible')
            .type(password);
    },

    clickLoginButton: () => {
        cy.get(LoginPageLocators.loginButton)
            .should('be.visible')
            .click();
    },

    enterSignupName:  (name : string) => {
        cy.get(LoginPageLocators.signupName)
            .should('be.visible')
            .type(name);
    },

    enterSignupEmail:  (email : string) => {
        cy.get(LoginPageLocators.signupEmail)
            .should('be.visible')
            .type(email);
    },

    clickSignupButton:  () => {
        cy.get(LoginPageLocators.signupButton)
            .should('be.visible')
            .click();
    }

}