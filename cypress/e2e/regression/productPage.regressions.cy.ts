import  ProductPage  from "cypress/support/pages/ProductPage";

describe('Products Regression Test Suite', () => {

    beforeEach( ()=> {
        ProductPage.visitProductPage();
    })
    
    it('Validate all products are displayed for each product', ()=> {
        const brandname = 'Polo';
        ProductPage.viewBrandProducts(brandname);
        ProductPage.validateBrandHeader(brandname);
        ProductPage.getBrandProductCounts(brandname).then((expectedCount) => {
            ProductPage.validateBrandProductCounts(expectedCount);
        })
        
    });


});
