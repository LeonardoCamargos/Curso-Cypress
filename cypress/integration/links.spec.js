/// <reference types="cypress" />


describe('Aula Links e Botões', () =>  {

    it('links e botões' , () => {

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        // cy.get('a').click()
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text' , 'Voltou!')

        cy.reload() // Refresh na tela 
        cy.get('#resultado').should('have.not.text' , 'Voltou!') //Verifique que NÃO TEM o texto voltou
        cy.contains('Voltar').click()//busca por texto
        cy.get('#resultado').should('have.text' , 'Voltou!')
    })
})