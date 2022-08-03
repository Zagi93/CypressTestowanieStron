/// <reference types="cypress" />





describe("E2E - Home open", () => {
    it("SearchEngine ", () => {
        cy.visit('https://blog.consdata.tech/');
        cy.get('[onclick="expandInputDesktop()"]').click();
        cy.get('input[id="search-box"]').click().type("dadad{enter}",{delay: 1200}).invoke("prop","value").then(log =>{
            cy.log(log)
        })
        

        
        
        
        
        
    })

    

})
