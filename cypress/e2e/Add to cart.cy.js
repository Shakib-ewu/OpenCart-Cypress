import 'cypress-file-upload';
describe('Opencart Checkout', () => {
    it ('Add to cart - Democart', () => {
        cy.visit('https://demo.opencart.com') 
        cy.get(':nth-child(3) > .dropdown-toggle').click()
        cy.get('.dropdown-menu >.dropdown-inner >ul>li:nth-child(2)').eq(2).click()
        cy.get('.button-group >:nth-child(1)').eq(0).click()
        cy.get('#input-option-value-6').click().should('be.checked')
        cy.get('#input-option-value-9').click().should('be.checked')
        cy.get('#input-option-208').type('Demo checkout Test')
        cy.get('#input-option-217').select('Blue(+$5.60)').should('have.value','3')
        cy.get('#input-option-209').type('12345')
        cy.get('#button-upload-222').attachFile('image.png').should('have.text',' Upload File')
        cy.get('#button-cart').click()

      
    })
})