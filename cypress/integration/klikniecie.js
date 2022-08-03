/// <reference types="cypress" />


describe("E2E - Akcje klikniecia", () => {
    it("klikniecie na element", () => {
        cy.visit("/")
        //  cy.contains('[title="Contact Us"]', 'Contact us').click();
        //  cy.get('[title="Return to Home"]').click();
        // cy.contains('[title="Log in to your customer account"]', 'Sign in').click();
        // cy.get('[title="Return to Home"]').click();
        // cy.get("#search_query_top").type("dadadad", {delay: 500})
        // cy.get('[name="submit_search"]').click();
        cy.get("#block_top_menu").find("li").eq(0).click()
        



    })

})