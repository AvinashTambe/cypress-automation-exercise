import { CartLocators, ProuctsPageLocators } from "../locators";
import { BASE_URL, ROUTES, PRODUCT } from "../constants";

class ProductPage {

    static visitProductPage() {
        cy.visit(`${BASE_URL}${ROUTES.PRODUCTS}`)
            .url().should('eq', 'https://www.automationexercise.com/products')
            .title().should('eq', 'Automation Exercise - All Products')
    }

    //Search Product
    static searchProduct(searchkey : string) {
        cy.get(ProuctsPageLocators.searchBox)
            .should('be.visible')
            .type(searchkey)
    }

    static clickSearchButton() {
        cy.get(ProuctsPageLocators.searchButton)
            .should('be.visible')
            .click()
    }

    static validateSearchedProductName(product_name: string) {
        cy.get(ProuctsPageLocators.searchedProductName).each(($el) => {
          cy.wrap($el)
            .invoke('text')
            .then((text) => {
              expect(text.toLowerCase()).to.include(product_name.toLowerCase());
            });
        });
    }
      
      

    static validateSearchedProductPrice(product_price:string){
        cy.get(ProuctsPageLocators.searchedProductPrice)
            .should('be.visible')
            .invoke('text') 
            .should('eq',product_price)
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

    //View and Validate Product Details
    static clickViewProductDetailsButton() {
        cy.get(ProuctsPageLocators.viewProductDetailsbutton)
            .should('be.visible')
            .click()
    }

    static validateProductDetailsName(product_name:string){
        cy.get(ProuctsPageLocators.productName)
            .should('be.visible')
            .and('have.text', product_name)

    }
    static validateProductDetailsPrice(product_price:string){
        cy.get(ProuctsPageLocators.productPrice)
            .should('be.visible')
            .and('have.text', product_price);
    }

    static validateProductDetailsCategory(product_category:string){
        cy.get(ProuctsPageLocators.productCategory)
        .should('be.visible')
        .and('have.text', product_category)
    }

    static validateProductDetailsAvailiability(product_availability:string){
        cy.get(ProuctsPageLocators.productAvailability)
        .should('be.visible')
        .and('have.text', product_availability)
    }

    static validateProductDetailsCondition(product_condition:string){
        cy.get(ProuctsPageLocators.productCondition)
        .should('be.visible')
        .and('have.text', product_condition)
    }

    static validateProductDetailsBrand(product_brand:string){
        cy.get(ProuctsPageLocators.productBrand)
        .should('be.visible')
        .and('have.text', product_brand)
    }


    static validateProductDetails(product_name:string, product_price:string, category:string, availability:string, condition: string, brand: string){
        cy.get(ProuctsPageLocators.productName)
            .should('be.visible')
            .and('have.text', product_name)
        cy.get(ProuctsPageLocators.productCategory)
            .should('be.visible')
            //.invoke('text')
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

    static validateProductCounts(count:number){
        cy.get(ProuctsPageLocators.productlist)
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

    //Add to cart

    static clickProductAddtoCartButton(){
        cy.get(ProuctsPageLocators.productCartButton)
            .should('be.visible')
            .click()
    }
    
    // View Gender based Category
    static expandWomenCategory(){
        cy.get(ProuctsPageLocators.womenCategoryCollapseIcon)
            .should('be.visible')
            .click()
        cy.get("#Women li").should('have.length','3');
    } 

    static womenDressesButton(){
        cy.get(ProuctsPageLocators.womenDress)
            .should('be.visible')
            .click();
    }

    static womenTopsButton(){
        cy.get(ProuctsPageLocators.womenTops)
            .should('be.visible')
            .click();
    }

    static womenSareesButton(){
        cy.get(ProuctsPageLocators.womenSarees)
            .should('be.visible')
            .click();
    }

    static expandMensCategory(){
        cy.get(ProuctsPageLocators.menCategoryCollapseIcon)
            .should('be.visible')
            .click();
        cy.get("#Men li").should('have.length',2)
    }

    static menTshirtsButton(){
        cy.get(ProuctsPageLocators.menTshirts)
            .should('be.visible')
            .click();
    }

    static menJeansButton(){
        cy.get(ProuctsPageLocators.menJeans)
            .should('be.visible')
            .click();
    }

    static expandKidsCategory(){
        cy.get(ProuctsPageLocators.kidsCategoryCollapseIcon)
            .should('be.visible')
            .click();
        cy.get("#Kids li").should('have.length',2)
    }

    static kidsDressButton(){
        cy.get(ProuctsPageLocators.kidsDresses)
            .should('be.visible')
            .click();
    }

    static kidsTopButton(){
        cy.get(ProuctsPageLocators.KidsTops)
            .should('be.visible')
            .click();
    }

}

export default ProductPage;