/// <reference types="cypress" />



describe("E2E - Scroll", () => {
    it("Open and scroll website ", () => {
        cy.visit('https://blog.consdata.tech/');
        cy.get('[class="social-button-wrapper"]').parents('[class="item-content"]').scrollIntoView().invoke("prop","localName").then(name =>{
            cy.log(name)
        })
        
        
        
        
        
    })

    it("Asercja",()=>{
        cy.get('[class="copyright"]').should("contain","Copyrights © 2022 CONSDATA")
    })

    

})