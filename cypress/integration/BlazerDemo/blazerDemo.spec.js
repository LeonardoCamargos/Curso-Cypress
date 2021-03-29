/// <reference types="cypress" />



describe('Iniciando Testes', () => {

    before(() => {
        cy.visit('https://seubarriga.wcaquino.me/cadastro')
    })

    it('Tela 1', () =>{
        
        cy.get('#nome')
            .type('Teste')
            .should('have.value','Teste')


    cy.get('#email')
        .type('leo@testt.com')
        .should('have.value','leo@testt.com')


    cy.get('#senha')
        .type('senhanovaconta123')

    cy.get('.btn').click()


    cy.get('#email').type('leo@testt.com')
    cy.get('#senha').type('senhanovaconta123')
    cy.get('.btn').click()

    cy.wait(2000)


    cy.get(':nth-child(3) > a').click()

    cy.get('#data_transacao').type('17/03/1999',{delay:100})
    cy.get('#data_pagamento').type('18/03/1999',{delay:100})
    cy.get('#descricao').type('teste',{delay:100})
    cy.get('#interessado').type('leo',{delay:100})
    cy.get('#valor').type('1000',{delay:100})
    // cy.get('#conta').type('654433-2')
    cy.get('#status_pago')
    .click()
    .should('be.checked')//assertiva feita para isso 
    cy.get('.btn').click()

    cy.reload() 

})

})    