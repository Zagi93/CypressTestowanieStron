/// <reference types="cypress" />



describe("E2E - Wgrywanie pliku", () => {
    it("Wgrywanie pliku  do inputa w conctact us", () => {
        cy.visit("/index.php?controller=contact")
        cy.get("#fileUpload").attachFile("../fixtures/1_thumb_kitten-g559594313_640.jpg")
        cy.get("span.filename").should("contain","DSC_6733a.jpg");
        

    })
})
