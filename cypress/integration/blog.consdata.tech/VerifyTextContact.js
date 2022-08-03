/// <reference types="cypress" />



describe("E2E - ContactName", () => {
    it("VeryfiTextContact ", () => {
        cy.visit('https://blog.consdata.tech/');
        cy.get('[class="item-content"]').find("p").eq(0).then(tresc =>{
            expect(tresc).to.contain("K9OFFICE, UL. KRYSIEWICZA 9/17").and.contain("61-825 POZNAŃ").and.contain("POLSKA")
        })
        
        
        
        
        
    })

    it("VerifyTextContact2", () => {
        cy.visit("https://blog.consdata.tech/")
        cy.get('[class="copyright"]').then(text => {
            expect(text).to.contain("Copyrights © 2022 CONSDATA")
           
        })
    })

   

    

})