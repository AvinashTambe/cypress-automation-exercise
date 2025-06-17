import  ProductPage  from "cypress/pages/ProductPage";
import { BRANDS, PRODUCT } from "cypress/support/constants";
import { ProuctsPageLocators } from "cypress/locators/locators";

describe('Products Regression Test Suite', () => {

    beforeEach( ()=> {
        ProductPage.visitProductPage();
    })
    
    BRANDS.forEach((brand) => {
      it(`Validate product count for brand: ${brand}`, () => {
        ProductPage.viewBrandProducts(brand);
        ProductPage.validateBrandHeader(brand);
        ProductPage.getBrandProductCounts(brand).then((count) => {
          ProductPage.validateProductCounts(count);
        });
      });
    });
  
    it("Verify search works with full product name", () => {
      ProductPage.searchProduct(PRODUCT.NAME);
      ProductPage.clickSearchButton();
      ProductPage.validateSearchedProductName(PRODUCT.NAME)
    })

    it("Verify search with partial keywords returns matching results", () => {
      const searchKey = "sleeveless";
      ProductPage.searchProduct(searchKey);
      ProductPage.clickSearchButton();
      ProductPage.validateSearchedProductName(searchKey);
    })

    it("Verify search is case-insensitive", () =>{
      const searchKey = "SLEEVELESS";
      ProductPage.searchProduct(searchKey);
      ProductPage.clickSearchButton();
      ProductPage.validateSearchedProductName(searchKey);
    })  

    it("Verify search result is cleared/reset when input is cleared", () =>{
      const searchKey = "SLEEVELESS";
      ProductPage.searchProduct(searchKey);
      ProductPage.clickSearchButton();
      ProductPage.validateSearchedProductName(searchKey);
      cy.get(ProuctsPageLocators.searchBox).clear();
      ProductPage.clickSearchButton();
      cy.url().should('eq', 'https://www.automationexercise.com/products?search=');

    })

    it.only("Verify product qunatity increases", () =>{
        ProductPage.searchProduct(PRODUCT.NAME);
        ProductPage.clickSearchButton();
        ProductPage.validateSearchedProduct(PRODUCT.NAME, PRODUCT.PRICE)
        ProductPage.clickViewProductDetailsButton();
        ProductPage.validateProductDetails(PRODUCT.NAME, PRODUCT.PRICE, PRODUCT.CATEGORY, PRODUCT.AVAILABILITY, PRODUCT.CONDITION, PRODUCT.BRAND);
        ProductPage.increaseProductQuantity("2");
    })
   

    it("Verify selecting 'Men' filters only mens products", ()=>{

    })

    it("Verify selecting 'Women' filters only womens products", ()=>{

    })

    it("Verify selecting one brand shows only related products", ()=>{

    })



});
