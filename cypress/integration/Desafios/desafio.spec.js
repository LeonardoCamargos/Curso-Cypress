/// <reference types="cypress" />

describe('Desafio Aula 35 ....', () => {

    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })


    beforeEach(() => {
        cy.reload()
    })


    it('Desafio Cadastrar BOTÃO CADASTRAR SOLO...', () => {
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'))

        cy.get('#formNome').type('DESAFIO')
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'))


        cy.get('[data-cy=dataSobrenome]').type('Sobrenome')
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'))

        cy.get('#formSexoMasc').click()
        cy.get('#formCadastrar').click()

        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')




    })

})
