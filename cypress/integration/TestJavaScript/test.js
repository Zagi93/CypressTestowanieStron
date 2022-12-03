/// <reference types="cypress"/>


describe("E2E Test", () => {
    it("Test open web an login", () => {
        cy.visit("https://www.tvsmart.vectra.pl/")
        cy.get('input[class="sc-gqjmRU bLsdAF"]').eq(0).type("")

    })
})
