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

    //Textos
    it('Text', () =>{
                //visit irá acessar uma página específica

        cy.get('body').should('contain','Cuidado')
        cy.get('span').should('contain','Cuidado')//Deixando mais profundo 
        cy.get('.facilAchar').should('contain','Cuidado')//class deixando mais profundo
        cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...')//class deixando mais profundo
    })


    
    it('links e botões' , () => {
        // cy.get('a').click()
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text' , 'Voltou!')

        cy.reload() // Refresh na tela 
        cy.get('#resultado').should('have.not.text' , 'Voltou!') //Verifique que NÃO TEM o texto voltou
        cy.contains('Voltar').click()//busca por texto
        cy.get('#resultado').should('have.text' , 'Voltou!')
    })


    //AUla 13 Campos de texto


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
        

     //Aula Combo

    it.only('Combo' ,() => {
    cy.get('[data-test=dataEscolaridade]')
        // .select('2o grau completo')//selecionando via valor
        .select('1graucomp')//selecionando via value do select do combo
        .should('have.value','1graucomp') 

        cy.get('[data-test=dataEscolaridade] option')
        .should('have.length',8)
        
        cy.get('[data-test=dataEscolaridade] option').then($arr => {
            const values = []
            $arr.each(function() {
                values.push(this.innerHTML)
            })
            expect(values).to.include.members(["Superior","Mestrado"])
        })

    })


    //AulaComboMúltiplo

    it('Combo Multiplo',() => {
        cy.get('[data-testid=dataEsportes]')
        .select(['natacao','Corrida']) // Combo multiplo é via array com VALUE

        
    })

})