// cypress/support/commands.ts
import { BASE_URL } from "./constants";

Cypress.Commands.add('launchApplication', () => {
    cy.visit(BASE_URL)
        .title().should('contain', 'Automation Exercise')
        .url().should('eq', 'https://www.automationexercise.com/')
  });
  