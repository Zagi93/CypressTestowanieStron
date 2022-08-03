/// <reference types="cypress" />




import constPage from "../../support/page-object/constPage"


describe("E2E - Newsletter", () => {
    it("Verify Newsletter ", () => {
        cy.visit("https://app2.salesmanago.pl/mscf/e7yrrpjmxbm7bahc/default/Landing_page_newsletter_techniczny.htm")
        constPage.clickText();
        constPage.emailText();
        constPage.clickChekbox();
        constPage.newsLetter();
        //cy.get('input[name="sm-form-name"]').type("dadad dadad")
        // cy.get('input[name="sm-form-email"]').type("glupek@wp.pl")
        // cy.get('[type="checkbox"]').check()
        // cy.get('[class="btn"]').click()
        

   
        
    })

    it("Api newsletter", () => {
        cy.request("POST", "https://app2.salesmanago.pl/form/ye4vodnswfo6zp75/contact.htm").as("requestPOST").then(res =>{
             console.log(res)
            expect(res.status).to.equal(200)
         })
        
        
       

     })

    

})
