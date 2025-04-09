import { SignupPageLocators } from "../locators";
import { BASE_URL } from  "../constants";
import { ROUTES } from "../constants";

export const SignUpPage = {
    
    visitSignUpPage: () => {
        cy.visit(`${BASE_URL}${ROUTES.SIGNUP}`)
            .title().should('contain', 'Signup')
            .url().should('eq', 'https://www.automationexercise.com/signup');
    },

    selectMaleRadioButton: () => {
        cy.get(SignupPageLocators.mrradioButton)
            .should('be.visible')
            .click();
    },

    selectFemaleRadioButton:  () => {
        cy.get(SignupPageLocators.mrsradioButton)
            .should('be.visible')
            .click();
    },

    enterName: (name : string) => {
        cy.get(SignupPageLocators.name)
            .should('be.visible')
            .type(name);
    },

    enterEmail: (email : string) => {
        cy.get(SignupPageLocators.email)
            .should('be.disabled')
    },

    enterPassword: (password : string) => {
        cy.get(SignupPageLocators.password)
            .should('be.visible')
            .type(password);
    },

    selectDay: (day : string) => {
        cy.get(SignupPageLocators.day)
            .should('be.visible')
            .select(day);

    },

    selectMonth: (month : string) =>{
        cy.get(SignupPageLocators.month)
            .should('be.visible')
            .select(month);
    },

    selectYear: (year : string) => {
        cy.get(SignupPageLocators.year)
            .should('be.visible')
            .select(year);
    },

    selectNewsletterCheckbox: () => {
        cy.get(SignupPageLocators.newsletterCheckbox)
            .should('be.visible')
            .check();   
    },

    selectSpecialOffersCheckbox: () => {
        cy.get(SignupPageLocators.specialoffersCheckbox)
            .should('be.visible')
            .check();
    },

    enterFirstName: (firstName : string) => {
        cy.get(SignupPageLocators.firstName)
            .should('be.visible')
            .type(firstName);
    },

    enterLastName: (lastName : string) => {
        cy.get(SignupPageLocators.lastName)
            .should('be.visible')
            .type(lastName);
    },

    enterCompany: (company : string) => {
        cy.get(SignupPageLocators.company)
            .should('be.visible')
            .type(company);
    },

    enterAddress1: (address1 : string) => {
        cy.get(SignupPageLocators.address1)
            .should('be.visible')
            .type(address1);
    },

    enterAddress2: (address2 : string) => {
        cy.get(SignupPageLocators.address2)
            .should('be.visible')
            .type(address2);
    },

    selectCountry: (country : string) => {
        cy.get(SignupPageLocators.country)
            .should('be.visible')
            .select(country);
    },

    enterState: (state : string) => {
        cy.get(SignupPageLocators.state)
            .should('be.visible')
            .type(state);
    },

    enterCity: (city : string) =>{
        cy.get(SignupPageLocators.city)
            .should('be.visible')
            .type(city);
    },

    enterZipcode: (zipcode : string) => {
        cy.get(SignupPageLocators.zipcode)
            .should('be.visible')
            .type(zipcode);
    },

    enterMobileNumber: (mobileNumber : string) => {
        cy.get(SignupPageLocators.mobileNumber)
            .should('be.visible')
            .type(mobileNumber);
    },
    clickCreateAccountButton: () => {
        cy.get(SignupPageLocators.createAccountButton)
            .should('be.visible')
            .click();
    }
}