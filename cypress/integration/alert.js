/// <reference types="cypress" />


import alertPage from "../support/page-object/alertPage";


describe("E2E - Alerty", () => {
    it("Alerty", () => {
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/")
        alertPage.clickOnBtnAlert1();
        alertPage.verifyAlertText();    
        
        // cy.get("#alert").click();
        // cy.on("window:alert", tresc =>{
        //     expect(tresc).to.equal("Przykładowa treść alertu")
        // })


    })

    it("alert confirm", () =>{
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/")
        alertPage.clickOnBtnAlert2();
        alertPage.verifyAlertConfirmText();
        alertPage.acceptAlert();
        
        // cy.get("#alert-confirm").click();
        // cy.on("window:confirm", tresc => {
        //     expect(tresc).to.equal("Zaakceptuj aby kontynuować!")
        // })

        // cy.on("window:confirm", () => false)

    })


    // cy.get("#alert-confirm").click();
    // cy.on("window:alert", tresc => {
    //     expect(tresc).to.equal("Przykładowa treść alertu")
    // })
    // cy.on("window:alert",() => true)
})