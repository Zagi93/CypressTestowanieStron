/// <reference types="cypress" />


describe("E2E - Asercje", () => {
    it("Asercje expect oraz should", () => {
        cy.visit("/")
        
        //Weryfikacja tekstu 
        cy.get('a[title="Contact Us"]').should("contain", "Contact us");
        cy.get('a[title="Contact Us"]').then(asercaj => {
            expect(asercaj).to.contain("Contact us")
        })
        
        //Sprawdzenie czy nie zawiera tekstu
        cy.get('a[title="Contact Us"]').should("not.contain", "adadad");
        cy.get('a[title="Contact Us"]').then(asercja => {
            expect(asercja).not.to.contain("sadadad")
        })
        
        //Weryfikacja czy znacznik posiada jakaś klase
        cy.get("#search_query_top").should("have.class", "form-control")
        cy.get("#search_query_top").then(wyszukiwarka => {
            expect(wyszukiwarka).to.have.class("form-control")
        })

        //czy element jest widoczny
        cy.get("#search_query_top").should("be.visible");
        // cy.get("#search_query_top").should("not.be.visible");
        cy.get("#search_query_top").then(wyszukiwarka => {
            expect(wyszukiwarka).to.be.visible
        })


        //Weryfikacja ilości pobranych elementów
        cy.get("ul.sf-menu").find("li").should("have.length", 14)
        cy.get("ul.sf-menu").find("li").then(dlugosc => {
            expect(dlugosc).to.have.length(14)
        })

        //Weryfukacja wartość css danego elemetnu
        cy.get("#search_query_top").should("have.css" , "line-height", "45px")
        cy.get("#search_query_top").then(css =>{
            expect(css).to.have.css("line-height", "45px")
        })







    })

})