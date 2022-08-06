import 'cypress-file-upload';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************



//
Cypress.Commands.add("LoginAndPassword", (email,password) =>{
    cy.get('input[placeholder="Email"]').clear();
    cy.get('input[placeholder="Password"]').clear();
    cy.get('input[placeholder="Email"]').type(email);
        cy.get('input[placeholder="Password"]').type(password);
        
        cy.get('[type="submit"]').click();


})
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add("openTishiertsTab", () => {
    cy.visit("http://automationpractice.com/index.php?id_category=5&controller=category")

})
//

Cypress.Commands.add("searchPharse", (text,delayValue) =>{
    cy.get("#search_query_top").type(text, {delay: delayValue})
})
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
