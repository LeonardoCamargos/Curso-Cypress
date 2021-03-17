/// <reference types="cypress" />


describe('Aula Campo', () =>{

//Representa o teste interno apenas
    // //Representa o before all ou seja antes de todos os testes é rodado 
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

     //Representa o before Each ou seja antes de cada teste érodado 
     beforeEach(() => {
        cy.reload()
    })


    it('Text Fields',()=>{

        cy.get('#formNome').type('Test Cypress')
        cy.get('#formNome').should('have.value','Test Cypress')//Assertiva no atributo value
    
        //cy.get('#elementosForm\:sugestoes')Pode dar erro nesse comando com : para reconhecer colocar \\:
        cy.get('#elementosForm\\:sugestoes')
        .type('Leonardo Camargos')
        .should('have.value','Leonardo Camargos')
        
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
        .type('Leonardo')

        //backspace
        cy.get('[data-cy=dataSobrenome]')
        .type('Teste12345{backspace}')

        //Limpar campo
        cy.get('#elementosForm\\:sugestoes')
        .clear()
        .type('Erro{selectall}acerto',{delay:100}) //delay para ficar mais facil acompanhar
        .should('have.value','acerto')
    })


})
