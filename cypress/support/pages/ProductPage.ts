import { ProuctsPageLocators } from "../locators";
import { BASE_URL, ROUTES } from "../constants";

class ProductPage {

    static visitProductPage() {
        cy.visit(`${BASE_URL}${ROUTES.PRODUCTS}`)
            .url().should('eq', 'https://www.automationexercise.com/products')
            .title().should('eq', 'Automation Exercise - All Products')
    }

    static clickViewProductButton() {
        cy.get(ProuctsPageLocators.viewProduct1button)
            .should('be.visible')
            .click()
    }

    static enterSearchkey( searchkey : string) {
        cy.get(ProuctsPageLocators.searchBox)
            .should('be.visible')
            .type(searchkey)
    }

    static clickSearchButton() {
        cy.get(ProuctsPageLocators.searchButton)
            .should('be.visible')
            .click()
    }

    static viewBrandProducts(brandname : string){
        cy.contains(ProuctsPageLocators.branditems, brandname, {matchCase : false})
            .should('be.visible')
            .click();
    }

    static validateBrandHeader(brandname : string){
        cy.get(ProuctsPageLocators.brandHeader)
            .should('be.visible')
            .and('have.text', `Brand - ${brandname} Products`)
        cy.url().should('eq', `${BASE_URL}${ROUTES.BRAND_PRODUCT}/${brandname}`)
    }

    static getBrandProductCounts(brandname : string){
        return cy.contains(ProuctsPageLocators.branditems, brandname).then(($brand) => {
            const text = $brand.text(); // Now definitely a string
            const match = text.match(/\((\d+)\)/);
            const expectedCount = match ? parseInt(match[1]) : 0;
            cy.log(`Expected product count for brand: ${expectedCount}`);
            return cy.wrap(expectedCount);
        });
    }

    static validateBrandProductCounts(count:number){
        cy.get(ProuctsPageLocators.brandproductlist)
            .should('have.length', count)
    }

    static viewProductPrice(price : string) {
        cy.get(ProuctsPageLocators.productPrice)
            .should('be.visible')
            .and('contain', price)
    }
    
    static clickAddtoCart() {
        cy.get(ProuctsPageLocators.cartButtononPP)
            .should('be.visible')
            .click();
    } 

    static newArrival() {
        cy.get(ProuctsPageLocators.newArrival)
            .should('be.visible')
            .and('contain', 'NEW')
    }

    static increaseProductQuantity(quantity : string) {
        cy.get(ProuctsPageLocators.productCounter)
            .should('be.visible')
            .type(quantity)
    }

}

export default ProductPage;