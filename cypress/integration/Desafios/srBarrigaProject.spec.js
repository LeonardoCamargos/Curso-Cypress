/// <reference types="cypress" />

describe('Fluxo SrBarriga', () => {

    before(() => {
        cy.visit('http://barrigareact.wcaquino.me/')
    })


    it('Login' , () => {

    cy.get('[data-test=email]').type('leoteste@gmail.com')
    cy.get('[data-test=passwd]').type('123456')
    cy.xpath("//button[contains(.,'Entrar')]").click()
    cy.get('.toast-message').should('exist')

    })

    it('Inserir conta...' , () => {
    
    cy.get('[data-test=menu-settings]').click()
    cy.xpath("//a[contains(.,'Contas')]").click()
    cy.get('[data-test=nome]').type('Teste')
    cy.xpath("//button[@class='btn btn-primary btn-block']").click()
    cy.get('.toast-message').should('exist')

     })

})