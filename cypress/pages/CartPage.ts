import { CartLocators } from "cypress/locators/locators";
import { cartHeaders } from "cypress/support/constants";

class CartPage {
    
    static clickAddtoCartButton() {
        cy.get(CartLocators.addtoCartbutton)
            .should('be.visible')
            .click();
    }
    
    static clickContinueShoppingButton(){
        cy.get(CartLocators.continueShoppingButton)
            .should('be.visible')
            .click()
    }

    static clickViewCartButton(){
        cy.get(CartLocators.viewCartButton)
            .should('be.visible')
    }

    static viewCartTableHeader(){
        cy.get(CartLocators.cartTableHeader).each(($el,index) =>{
            if(index < cartHeaders.length){
                cy.wrap($el).should('have.text', cartHeaders[index]);
            }
        });
    }

    static deleteCartItem(productName:string){
        cy.get(CartLocators.cartTableRows).each(($row) =>{
            cy.wrap($row).find(CartLocators.cartDescription).then(($desc)=>{
                if ($desc.text().trim() === productName) {
                    cy.wrap($row).find(CartLocators.cartDelete).click();
                  }
            })
        });
    }

    static viewAddedItemtoCart(){

    }

}

export default CartPage;