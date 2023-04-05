describe('Opencart Registration', () => {
    it.skip ('Visit Homepage - Democart', () => {
      cy.visit('https://demo.opencart.com')        
        cy.get(':nth-child(2) > .dropdown > .dropdown-toggle > .d-none')
          .should('be.visible').click()
          cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item')
          .should('be.visible').click() 
          cy.get('.list-group > :nth-child(1)').click()
          cy.get('#input-email').type('Sarkar@gmail.com')
          cy.get('#input-password').type('123456')
          cy.get("button[type='submit']").should('be.visible').click()
          cy.get('#form-login > h2').should('be.visible')
          

    })
    it('Forgot Password', ()=>{
        cy.visit('https://demo.opencart.com')        
        cy.get(':nth-child(2) > .dropdown > .dropdown-toggle > .d-none')
          .should('be.visible').click()
          cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item')
          .should('be.visible').click() 
          cy.get('.list-group > :nth-child(1)').click()
          cy.get('#form-login > :nth-child(4) > a').click()
          cy.contains('a', 'Forgotten Password').should('have.attr', 'href')

    })
})