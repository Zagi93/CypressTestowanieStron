/// <reference types="cypress" />


describe("E2E - Action Focuse Web", () => {
    it("TrigerFocuse", () => {
        cy.visit("https://consdata.com/pl#")
        cy.get('[class="dj-up itemid253 first fullsub parent"]').trigger("focus")
        


    })

it("Asercja", () => {
  cy.get('span[style="font-size: 16px;"]').eq(0).then(obiekt => {
    expect(obiekt).to.contain("Gotowe rozwiązanie — mówię tu o waszej platformie eximee — było praktycznie na wyciągnięcie ręki i wystarczyło po nie sięgnąć.")

    
cy.get('span[style="font-size: 16px;"]').eq(1).then(obiekt=>{
  expect(obiekt).to.contain("Obecnie na eximee mamy uruchomione wnioski kredytowe zintegrowane z e-commerce, a także pożyczkę gotówkową w całości online w aplikacji mobilnej oraz desktopowej, a także kilka mniejszych wniosków, jak np. formularz zamówienia kontaktu czy wniosek o przeniesienie konta.")
})
  
  })


  })




  
})

