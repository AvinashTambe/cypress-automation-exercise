import ProductPage from "cypress/support/pages/ProductPage";
import { BASE_URL } from "cypress/support/constants";
import { ProuctsPageLocators } from "cypress/support/locators";

describe('Products Smoke Test Suite', () =>{
   
    beforeEach(()=>{
        ProductPage.visitProductPage()
    })
    
    it('Verify Search + View Product Details flow', () => {
        const product_name = 'Blue Top';
        const product_price = 'Rs. 500';
        const category = 'Category: Women > Tops';
        const availability = 'Availability: In Stock';
        const condition = 'New';
        const brand = 'Brand: Polo';
    
        ProductPage.searchProduct(product_name);
        ProductPage.clickSearchButton();
    
        cy.get(ProuctsPageLocators.brandHeader)
            .should('be.visible')
            .should('have.text', 'Searched Products');
    
        ProductPage.validateSearchedProduct(product_name, product_price);
        ProductPage.clickViewProductButton();
    
        ProductPage.viewProductDetails(product_name, product_price, category, availability, condition, brand);
    });
    
    
});