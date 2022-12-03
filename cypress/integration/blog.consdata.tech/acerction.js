/// <reference types="cypress" />


describe("E2E - Asercje", () => {
    it("Asercje expect oraz should", () => {
        cy.visit("https://blog.consdata.tech/")

        // cy.get('[class="post-title no-breaking-word"]').parents('[class="col-1-3 big-post-tile-content"]').eq(0).should("contain","Czy wiesz, że w ES2021 zostały wprowadzone operatory logicznego przypisania oraz nullish coalescing?")

        cy.get('p[class="post-description no-breaking-word"]').should("contain","                    Od kilku miesięcy dostępna jest nowa generacja Google Cloud Function (2nd gen), początkowo w wersji poglądowej (public preview) a dzisiaj również w wersji ogólnodostępnej (general availability). Jakie zmiany zostały wprowadzone względem poprzedniej generacji?")
    




    })

})