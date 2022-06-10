  const elem = require('./elements').elements;
  
  class 477740A7D2767539028A {
  
  buscar(){
        cy.get(elem.buscar).type('477740A7D2767539028A{enter}')
        cy.get(elem.listagem).contains('477740A7D2767539028A')
        .should('be.visible')
    }
    
  }
