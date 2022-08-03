/// <reference types="cypress" />



describe("E2E - Testy Api", () => {
    beforeEach(function() {
        cy.fixture("example").then(data =>{
            this.daneApi = data;
        })

    })
    
    it("Weryfikacja tagów Api", () => {
       cy.intercept("GET", "https://api.realworld.io/api/tags").as("requestTag");
       cy.visit("https://angular.realworld.io/");
       cy.wait("@requestTag")
       cy.get("@requestTag").then(res =>{
        console.log(res)
        expect(res.response.statusCode).to.equal(200)
        expect(res.response.body.tags).to.contain("welcome").and.to.contain("implementations")
       })
        


    })

    it("Niepoprawne logowanie", function() {
        cy.get("a.nav-link").contains("Sign in").click();
        // cy.get('input[placeholder="Email"]').type("dadsasdad@wp.pl");
        // cy.get('input[placeholder="Password"]').type("132412sda");
        // cy.get('[type="submit"]').click();
        cy.LoginAndPassword("dadad@wp.pl","dadadad")
        cy.intercept("POST", "https://api.realworld.io/api/users/login").as("requestLogin")
        cy.wait("@requestLogin")
        cy.get("@requestLogin").then(log => {
            console.log(log)
            expect(log.response.statusCode).to.equal(403)
            // cy.fixture("example").then(date =>{
             expect(log.response.statusMessage).to.equal(this.daneApi.statusMessage403)
            // })
            
        })

    })

    it("Poprawne Logowanie", function(){
        cy.intercept("GET", "https://api.realworld.io/api/tags", { fixture: 'tags.json'}).as("requestTag");
        cy.LoginAndPassword("atomix4@go2.pl","klatka93")
        cy.wait("@requestTag")
        // cy.get('a[class="tag-default tag-pill"]').contains("animals").should("contain", "animals")
        cy.get("@requestTag").then(log =>{
            expect(log.response.body.tags).to.contain("cats").and.to.contain("animals")
        })
        

    })

   

})