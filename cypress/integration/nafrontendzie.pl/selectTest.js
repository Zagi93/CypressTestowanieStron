/// <reference types="cypress"/>




describe("E2E test",() => {
    it("test select option",() => {
        cy.visit("https://www.javascripttutorial.net/javascript-dom/javascript-select-box/")
        
        
         cy.get('iframe[src="/sample/dom/selectbox/selected-index.html"]').its('0.contentDocument.body').find('#framework').then(select =>{
            cy.wrap(select).find("option").each(option => {
                cy.wrap(select).select(option.text())
            })
         })
                


        
        
        

    })
})