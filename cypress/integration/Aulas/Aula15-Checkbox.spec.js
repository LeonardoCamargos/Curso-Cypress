/// <reference types="cypress" />


describe('Work with basic elements', () => {

    //Representa o teste interno apenas
    // //Representa o before all ou seja antes de todos os testes é rodado 
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

     //Representa o before Each ou seja antes de cada teste érodado 
     beforeEach(() => {
        cy.reload()
    })     
      
      
      
      //AULA 15 CHEKCBOX
      //DETALHE DA PARA PEDIR PARA CLICAR EM TODOS OS CHECKBOX DE UMA VEZ BASTA USAR A ESTRATÉGIA DA ACIMA USAR O MESMO NAME
      it('Aula checkbox', ()=> {

        cy.get('#formComidaPizza')
        .click() // PODE CLICAR EM APENAS 1 ELEMENTO
        .should('be.checked')
 
      })


    //clicando em tudo
     it('Aula checkbox clicando em todos', ()=> {

    cy.get('[name="formComidaFavorita"]')
    .click({multiple:true})//adicionando um objeto com multiple true conforme propria orientação do cypress
    .should('be.checked')
         
     })
        

    })