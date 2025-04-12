import  ProductPage  from "cypress/support/pages/ProductPage";
import { BRANDS } from "cypress/support/constants";

describe('Products Regression Test Suite', () => {

    beforeEach( ()=> {
        ProductPage.visitProductPage();
    })
    
    BRANDS.forEach((brand) => {
        it(`Validate product count for brand: ${brand}`, () => {
          ProductPage.viewBrandProducts(brand);
          ProductPage.validateBrandHeader(brand);
          ProductPage.getBrandProductCounts(brand).then((count) => {
            ProductPage.validateBrandProductCounts(count);
          });
        });
      });
    


});
