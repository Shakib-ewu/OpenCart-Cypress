describe('Opencart Registration', () => {
  it('Visit Homepage - Democart', () => {
    cy.visit('https://demo.opencart.com')        
      cy.get(':nth-child(2) > .dropdown > .dropdown-toggle > .d-none')
        .should('be.visible').click()
        cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item')
        .should('be.visible').click()   
    cy.get('#input-firstname').type('Sakib')
    cy.get('#input-lastname').type('Sarkar')
    cy.get('#input-email').type('Sarkar@gmail.com')
    cy.get('#input-password').type('123456')
    cy.get('#input-newsletter-yes').click()
    cy.get('.float-end > .form-check > .form-check-input').click()
    cy.get('.float-end > .btn').click()

  })
})


