/// <reference types="cypress" />

describe('Esperas...',()=>{

        //Representa o teste interno apenas
    // //Representa o before all ou seja antes de todos os testes é rodado 
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

     //Representa o before Each ou seja antes de cada teste érodado 
     beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar um elemento estar disponivel' , ()=> {

        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').type('Funciona')
    })


    //AULA RETENTATIVAS - CYPRESS.IO  -> DOCS -> PROCURAR SHOULD E YIELDS
    it('Deve fazer retrys ou seja retentativs' , ()=> {

        cy.get('#buttonDelay').click()
        // cy.get('#novoCampo').should('not.exist')//PARA PASSAR DESCOMENTAR ESSA ASSERTIVA
        cy.get('#novoCampo').should('exist').should('not.exist') // ELE NÃO ACEITA PORQUE ELE FICA RETENTANDO ATÉ QUE TODAS AS ASSERTIVAS ASSOCIADAS A ELA SEJA VERDADEIRAS SE ALGUMAS DELA FALHA ELE VAI REFAZER TODA AS TENTATIVAS 


    })


    //AULA 20 CUIDADO COM O QUE BUSCA

    it('Uso do fin',() => {
        cy.get('#buttonListDOM').click()
        //Compondo nossa busca pega um elemento dom descendende do seletor especifico
        cy.get('#lista li') //Composiçao de comandos pode dar problema
        .find('span')
        .should('contain','Item 1')//caminho serve tanto para item 1 tanto para 2 , mas ele não acha por conta de refazer o comando anterior a ele checando as assertivas

        //BUSCANDO LISTA 2

        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })
 

    //AULA 21 USO DO TIMEOUT E WAIT
    it('Uso do timeout' ,() =>{
        // cy.get('#buttonDelay').click()
        // cy.get('novoCampo',{ timeout:1000}).should('exist') // mudando tempo
        // cy.get('novoCampo').should('exist')//PARA MUDAR O TEMPO PADRÃO DO CYPRESS BASTAR ALTERAR O ARQUIVO JSON cypres.json ("defaultCommandTimeout":1000)


        //PARTE 2 DA AULA wait
        // cy.get('#buttonListDOM').click()
        // cy.wait(5000) // Para toda execução e espera o tempo necessário ele não olha a aplicação  Evitar
        // //cy.get('#lista li span', { timeout:30000})
        // .should('contain', 'Item 2')

        //BRINCADO COM RETRAYS E TIME OUT

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span', {timeout:30000})
        .should('have.length',2)
    })


    //Aula 22
    //OS COMANDOS QUE ALTERAM O HTML NÃO SÃO RETENTANDOS

    it('click retry', () => {
    cy.get('#buttonCount')
    .click()
    .click()
    .should('have.value','111') //Mostra que retenta até dar o erro , mas não clica novamente
    })

    //Aula 23 Imprimindo o titulo no console

    it('Aparecendo titulo' , () =>{
        cy.title().then(title =>{ // Trabalhando com promisses conforme aula de promisse
            console.log(title)
        })
    })

    // AULA 24

    it.only('Should VS then ' , () =>{

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').then($el=>{  //trocar para .should para ver diferença
            //.should('have.length',2)
            console.log($el)
            expect($el).to.have.length(1)
        }) //vai fazer a buscar depois pagaremos a busca

    })

})