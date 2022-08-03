/// <reference types="cypress" />



describe("E2E - Wgrywanie pliku", () => {
    it("Wgrywanie pliku  do inputa w conctact us", () => {
        cy.visit("/index.php?controller=contact")
        cy.get("#fileUpload").attachFile("../fixtures/DSC_6733a.jpg")
        cy.get("span.filename").should("contain","DSC_6733a.jpg");
        

    })
})
