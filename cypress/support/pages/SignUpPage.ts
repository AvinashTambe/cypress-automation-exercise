import { SignupPageLocators, LoginPageLocators } from "../locators";
import { BASE_URL } from  "../constants";
import { ROUTES } from "../constants";

class SignUpPage {
    
    static visitSignUpPage = () => {
        cy.visit(`${BASE_URL}${ROUTES.SIGNUP}`)
            .title().should('eq', 'Automation Exercise - Signup / Login')
            .url().should('eq', 'https://www.automationexercise.com/signup');
    }

    //Sign Up Form Actions

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
    
    //Sign Up Form Actions

    static selectMaleRadioButton = () => {
        cy.get(SignupPageLocators.mrradioButton)
            .should('be.visible')
            .click();
    }

    static selectFemaleRadioButton =  () => {
        cy.get(SignupPageLocators.mrsradioButton)
            .should('be.visible')
            .click();
    }

    static enterName = (name : string) => {
        cy.get(SignupPageLocators.name)
            .should('be.visible')
            .type(name);
    }

    static enterEmail = () => {
        cy.get(SignupPageLocators.email)
            .should('be.disabled')
    }

    static enterPassword = (password : string) => {
        cy.get(SignupPageLocators.password)
            .should('be.visible')
            .type(password);
    }

    static selectDay = (day : string) => {
        cy.get(SignupPageLocators.day)
            .should('be.visible')
            .select(day);
    }

    static selectMonth = (month : string) =>{
        cy.get(SignupPageLocators.month)
            .should('be.visible')
            .select(month);
    }

    static selectYear = (year : string) => {
        cy.get(SignupPageLocators.year)
            .should('be.visible')
            .select(year);
    }

    static selectNewsletterCheckbox = () => {
        cy.get(SignupPageLocators.newsletterCheckbox)
            .should('be.visible')
            .check();   
    }

    static selectSpecialOffersCheckbox = () => {
        cy.get(SignupPageLocators.specialoffersCheckbox)
            .should('be.visible')
            .check();
    }

    static enterFirstName = (firstName : string) => {
        cy.get(SignupPageLocators.firstName)
            .should('be.visible')
            .type(firstName);
    }

    static enterLastName = (lastName : string) => {
        cy.get(SignupPageLocators.lastName)
            .should('be.visible')
            .type(lastName);
    }

    static enterCompany = (company : string) => {
        cy.get(SignupPageLocators.company)
            .should('be.visible')
            .type(company);
    }

    static enterAddress1 = (address1 : string) => {
        cy.get(SignupPageLocators.address1)
            .should('be.visible')
            .type(address1);
    }

    static enterAddress2 = (address2 : string) => {
        cy.get(SignupPageLocators.address2)
            .should('be.visible')
            .type(address2);
    }

    static selectCountry = (country : string) => {
        cy.get(SignupPageLocators.country)
            .should('be.visible')
            .select(country);
    }

    static enterState = (state : string) => {
        cy.get(SignupPageLocators.state)
            .should('be.visible')
            .type(state);
    }

    static enterCity = (city : string) =>{
        cy.get(SignupPageLocators.city)
            .should('be.visible')
            .type(city);
    }

    static enterZipcode = (zipcode : string) => {
        cy.get(SignupPageLocators.zipcode)
            .should('be.visible')
            .type(zipcode);
    }

    static enterMobileNumber = (mobileNumber : string) => {
        cy.get(SignupPageLocators.mobileNumber)
            .should('be.visible')
            .type(mobileNumber);
    }

    static clickCreateAccountButton = () => {
        cy.get(SignupPageLocators.createAccountButton)
            .should('be.visible')
            .click();
    }

    static validateAccountCreatedText = () => {
        cy.get(SignupPageLocators.accountCreatedText)
            .should('be.visible')
            .and('have.text', 'Account Created!')
    }

    static clickContinueButton = () => {
        cy.get(SignupPageLocators.continueButton)
            .should('be.visible')
            .click();
    }

    static validateExistingAccountText = () => {
        cy.get(SignupPageLocators.emailExistsText)
            .and('have.text','Email Address already exist!');
    }

    static clickDeleteAccountButton = () => {
        cy.get(SignupPageLocators.deleteAccountButton)
            .should('be.visible')
            .click();
    }

    static validateAccountDeletedText = () => {
        cy.get(SignupPageLocators.accountDeletedText)
            .should('be.visible')
            .and('have.text','ACCOUNT DELETED!');   
    }

}

export default SignUpPage;