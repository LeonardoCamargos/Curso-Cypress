/// <reference types="cypress" />


describe('Work with PopUp', () => {

    it('deve testar frame diretamente ' , () => {
        cy.visit('https://www.wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert' , msg => {
            expect(msg).to.be.equal('Click OK!')

        })
        
            })

    it.only('deve verificar se o popUp foi invocado' , () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        //para que a janela do popup não aparece deve ser feito a partir de mocks

        cy.window().then(win => {
            cy.stub(win,'open').as('winOpen')
        })
        cy.get('#buttonPopUp').click()
        cy.get('@winOpen').should('be.called')
    })

}) 