/// <reference types="cypress"/>


describe("E2E verify work web", () => {
    it("verify click and focus",() => {
        cy.visit("https://www.nafrontendzie.pl/ ")
        cy.get("#menu-open").click()
        cy.get('[title="Programowanie"]').trigger("focus")

    })
})