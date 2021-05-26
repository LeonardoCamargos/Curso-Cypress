/// <reference types="cypress" />


describe('Work with alerts ...', () => {


    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })


    it('Testes voltando ao passado ... ' , () => {

        // cy.get('#buttonNow').click()

        // cy.get('#resultado > span').should('contain' , '03/04/2021' )


        //USANDO CLOCK


        const dt = new Date(2012,3,10,15,23,50)
        cy.clock(dt.getTime())
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain' , '10/04/2012' )
    })


})