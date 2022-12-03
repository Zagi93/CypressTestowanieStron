/// <reference types="cypress"/> 



describe("E2E Cookies",() => {
    it("cookies Alert",() => {
        cy.visit("https://www.nafrontendzie.pl/")
        cy.get('[class="cookie__text"]').should("contain"," Ta strona wykorzystuje ciasteczka! Więcej infomacji w ")
        cy.get("#cookie-button").click()





    })
})