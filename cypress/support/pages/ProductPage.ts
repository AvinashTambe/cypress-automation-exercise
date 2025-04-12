import { ProuctsPageLocators } from "../locators";
import { BASE_URL, ROUTES } from "../constants";

class ProductPage {

    static visitProductPage() {
        cy.visit(`${BASE_URL}${ROUTES.PRODUCTS}`)
            .url().should('eq', 'https://www.automationexercise.com/products')
            .title().should('eq', 'Automation Exercise - All Products')
    }

    //Search Product
    static searchProduct( searchkey : string) {
        cy.get(ProuctsPageLocators.searchBox)
            .should('be.visible')
            .type(searchkey)
    }

    static clickSearchButton() {
        cy.get(ProuctsPageLocators.searchButton)
            .should('be.visible')
            .click()
    }

    static validateSearchedProduct(product_name:string, product_price:string){
        cy.get(ProuctsPageLocators.searchedProductName)
            .should('be.visible')
            .should('have.text', product_name)
        cy.get(ProuctsPageLocators.searchedProductPrice)
            .should('be.visible')
            .invoke('text') 
            .should('eq',product_price)
    }

    //View Product Details
    static clickViewProductButton() {
        cy.get(ProuctsPageLocators.viewProductDetailsbutton)
            .should('be.visible')
            .click()
    }

    static viewProductDetails(product_name:string, product_price:string, category:string, availability:string, condition: string, brand: string){
        cy.get(ProuctsPageLocators.productName)
            .should('be.visible')
            .and('have.text', product_name)
        cy.get(ProuctsPageLocators.productCategory)
            .should('be.visible')
            .and('have.text', category)
        cy.get(ProuctsPageLocators.productPrice)
            .should('be.visible')
            .and('have.text', product_price);
        cy.get(ProuctsPageLocators.productQuantity)
            .should('be.visible')
        cy.get(ProuctsPageLocators.productCartButton)
            .should('be.visible')
        cy.get(ProuctsPageLocators.productAvailability)
            .should('be.visible')
            .and('have.text', availability)
        cy.get(ProuctsPageLocators.productBrand)
            .should('be.visible')
            .and('have.text', brand)
    }


    //View Brand's product
    static viewBrandProducts(brandname : string){
        cy.contains(ProuctsPageLocators.branditems, brandname, {matchCase : false})
            .should('be.visible')
            .click();
    }

    static validateBrandHeader(brandname : string){
        cy.get(ProuctsPageLocators.brandHeader)
            .should('be.visible')
            .and('have.text', `Brand - ${brandname} Products`)
        //cy.url().should('eq', `${BASE_URL}${ROUTES.BRAND_PRODUCT}/${brandname}`)
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

    

    static newArrival() {
        cy.get(ProuctsPageLocators.newArrival)
            .should('be.visible')
            .and('contain', 'NEW')
    }

    static increaseProductQuantity(quantity : string) {
        cy.get(ProuctsPageLocators.productQuantity)
            .should('be.visible')
            .type(quantity)
    }

}

export default ProductPage;