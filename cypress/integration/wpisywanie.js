/// <reference types="cypress" />



describe("E2E - Akcje wpisywania", () => {
    it("wpisywanie wartości w pole", () => {
        cy.visit("/");
        // cy.get("#search_query_top").type("przykładowy produkt {backspace}", {delay: 500})
        cy.searchPharse("Nowy tekst{backspace}", 1200);
        
        
        
        
    })

     it("Czyszczenie wartości z pola input", () =>{
        cy.get("#search_query_top").clear();

    })

})


