/// <reference types="cypress"/>


describe("E2E Select menu",() => {
    it("Select menu",() => {
        cy.visit("https://www.nafrontendzie.pl/")
        cy.get("#menu-open").click()
        cy.get('ul[class="hidden-menu__list"]').find("li").eq(1).trigger("focus").should("contain","Kurs React")
        
         
        
    })
})