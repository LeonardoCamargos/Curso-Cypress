/// <reference types="cypress" />


describe('Aula Radio', () => {

    //Representa o teste interno apenas
    // //Representa o before all ou seja antes de todos os testes é rodado 
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

     //Representa o before Each ou seja antes de cada teste érodado 
     beforeEach(() => {
        cy.reload()
    })


     //RADIO AULA 14

     it('RadioButton', ()=>{
        cy.get('#formSexoFem')
        .click()
        .should('be.checked')//assertiva feita para isso 


        //Checando que o masculino não está marcado

        cy.get('#formSexoMasc').should('not.be.checked') //assertiva feita para isso  Verificando que não está marcado obs:Reload atuando para refresh

            //Pra buscar um elemento cujo valor seja x (nesse caso name) buscar por "[name='x']""
        cy.get("[name='formSexo']")//estava confundo as aspas por isso aspas duplas
        .should('have.length',2) //Verificando que á duas opções  

      
    })

})    