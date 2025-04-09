import { SignUpPage } from "cypress/support/pages/SignUpPage";
import { LoginPage } from "cypress/support/pages/LoginPage";
import { BASE_URL, ROUTES } from "cypress/support/constants";


describe('Signup without entering Name and Email', () => {

    cy.visit('${BASE_URL}${ROUTES.SIGNUP}')
    cy.url().should('eq', 'https://www.automationexercise.com/signup')

});