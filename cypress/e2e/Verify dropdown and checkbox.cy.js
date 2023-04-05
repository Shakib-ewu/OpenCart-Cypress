describe('phones and PDAs verify', () => {
    it ('Verifying phones dropdowns and options', () => {
        cy.visit('https://demo.opencart.com') 
        cy.get(':nth-child(6) > .nav-link').click()
        cy.get('#content >h2').should('have.text','Phones & PDAs')
        cy.get('#input-sort').select('https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=24&sort=pd.name&order=DESC').should('have.value', 'https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=24&sort=pd.name&order=DESC')
        cy.get('#input-limit').select('100')
      
    })
})