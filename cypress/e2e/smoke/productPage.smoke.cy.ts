import ProductPage from "cypress/pages/ProductPage";
import { BASE_URL, PRODUCT } from "cypress/support/constants";
import { ProuctsPageLocators } from "cypress/locators/locators";
import CartPage from "cypress/pages/CartPage";

describe('Products Smoke Test Suite', () =>{
   
    
    beforeEach(()=>{
        ProductPage.visitProductPage()
    })

    it('Verify Search functionality with valid particular product name', () => {
        ProductPage.searchProduct(PRODUCT.NAME);
        ProductPage.clickSearchButton();
        cy.get(ProuctsPageLocators.brandHeader)
            .should('be.visible')
            .should('have.text', 'Searched Products');
        ProductPage.validateSearchedProduct(PRODUCT.NAME, PRODUCT.PRICE);
    });

    it('Verify Product Details', () => {
        ProductPage.searchProduct(PRODUCT.NAME);
        ProductPage.clickSearchButton();
        ProductPage.validateSearchedProduct(PRODUCT.NAME, PRODUCT.PRICE)
        ProductPage.clickViewProductDetailsButton();
        ProductPage.validateProductDetails(PRODUCT.NAME, PRODUCT.PRICE, PRODUCT.CATEGORY, PRODUCT.AVAILABILITY, PRODUCT.CONDITION, PRODUCT.BRAND);
    });

    it('Verify Add to Cart functionality', () =>{
        ProductPage.searchProduct(PRODUCT.NAME);
        ProductPage.clickSearchButton();
        ProductPage.validateSearchedProduct(PRODUCT.NAME, PRODUCT.PRICE)
        CartPage.clickAddtoCartButton();
    })

    it("Verify Gender based product filtering", () =>{
        ProductPage.expandMensCategory();
        ProductPage.menJeansButton();
        ProductPage.validateProductCounts(3);
    })

    it.only("Verify Brand based filtering", () =>{
        const brand = "Polo";
        ProductPage.viewBrandProducts(brand);
        ProductPage.validateBrandHeader(brand);
        ProductPage.getBrandProductCounts(brand).then((count:any) => {
            ProductPage.validateProductCounts(count);
          });
    })
    
});