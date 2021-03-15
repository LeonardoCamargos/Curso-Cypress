/// <reference types="cypress" />

describe('Work with basic elements', () => {

    //Textos
    it('Text', () =>{
                //visit irá acessar uma página específica
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.get('body').should('contain','Cuidado')
        cy.get('span').should('contain','Cuidado')//Deixando mais profundo 
        cy.get('.facilAchar').should('contain','Cuidado')//class deixando mais profundo
        cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...')//class deixando mais profundo
    })
})