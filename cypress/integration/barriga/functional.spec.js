/// <reference types="cypress" />

describe('Work with basic elements', () => {

    before(() => {
        //login
        cy.visit('http://barrigareact.wcaquino.me/')
        cy.get('[data-test=email]').type('a@a')
        cy.get('[data-test=passwd]').type('a')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain','Bem vindo')
    })

    it('Deve inserir uma conta....',()=>{

        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()
        cy.get('h2').should('contain','Contas')
        cy.get('[data-test=nome]').type('Conta de Teste')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain' ,'Conta inserida com sucesso!')
    })

    // it.only('Alterar conta ....',()=>{
        
    //     cy.get('[data-test=menu-settings]').click()
    //     cy.get('[href="/contas"]').click()
    //     cy.xpath("//table//td[contains(.,'Conta de Teste')]/..//i[@class='far fa-edit']").click()
    //     cy.get('[data-test=nome]').clear().type('Conta Alterada')
    //     cy.get('.btn').click()
    //     cy.get('.toast-message').should('contain' ,'Conta atualizada com sucesso!')
    // })
    
})
