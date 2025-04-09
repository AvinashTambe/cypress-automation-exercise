// cypress/support/index.d.ts

/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        launchApplication(): Chainable<void>;
    }
  }
  