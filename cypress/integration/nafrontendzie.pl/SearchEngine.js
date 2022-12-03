/// <reference types="cypress" />


describe("E2E SearchEngine",()=>{
    it("Verify SearchEngine",()=>{
        cy.visit("https://www.nafrontendzie.pl/")
        cy.get("#search-button").click()
        cy.get("#search-input").type("dadad{backspace}", {delay:222}).invoke("prop","checked").then(wartos =>{
            cy.log(wartos)
        })
        
    })
})