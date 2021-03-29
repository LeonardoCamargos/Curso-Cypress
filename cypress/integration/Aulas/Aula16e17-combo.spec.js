/// <reference types="cypress" />

describe('Aula Combo' ,() => {

    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })


     //Aula Combo

     it('Combo' ,() => {
        cy.get('[data-test=dataEscolaridade]')
            // .select('2o grau completo')//selecionando via valor
            .select('1graucomp')//selecionando via value do select do combo
            .should('have.value','1graucomp') 
        })



    //AulaComboMúltiplo

    it.only('Combo Multiplo',() => {
        cy.get('[data-testid=dataEsportes]')
        .select(['natacao','Corrida']) // Combo multiplo é via array com VALUE

        
    })


})