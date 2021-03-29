/// <reference types="cypress" />

describe('Helpers..',() => {

//METODO WRAP
    it('Wrap', ()=>{
        //criando um objeto
        const obj = {nome: 'User' ,idade:20} // Para fazer assertivas em um objeto deve ser em forma de expect
        expect(obj).to.have.property('nome') // se eu quiser executar pelo should direto NÃO VAI DAR CERTO pois o OBJ não tem o cypress para isso deve ser passado o wrap
        cy.wrap(obj).should('have.property','nome')
        console.log(obj.idade)

    //     //cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    // //     cy.get('#formNome').type('funciona') //fazendo diretamento

    // //     //FAZENDO VIA PROMISSE , iremos trazer o objeto par ao cypress ou seja com wrap
    // //     cy.get('#formNome').then($el => {
    // //         cy.wrap($el).type('funciona via converter com wrap')
    // //     })


      }) 


      it('Its..' , () => {
        const obj = {nome: 'User' ,idade:20} 
        cy.wrap(obj).should('have.property','nome')
        cy.wrap(obj).its('nome').should('be.equal' , 'User')//Dessa forma ele pegou o objeto completo , depois apenas a propriedade nome e fez a assertiva diretamente nela

        const obj2 = {nome: 'User' ,idade:20,endereco:{rua:'rua dos bobos'}} 
        cy.wrap(obj2).its('endereco').its('rua').should('contain' , 'bobos')
        cy.wrap(obj2).its('endereco.rua').should('contain' , 'bobos')//melhor jeito


        //EXEMPLO PRÁTICO

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.title().its('length').should('be.equal' ,20) //Título igual á 20 (Funciona sem o its)

      })


      //Aula 27 INVOKE

      it('Invoke', () => {
          const getValue = () => 1 ; //Função retornando 1 . Usando cypress para executar
          const soma  = (a,b) => a+b;
          
          
          //Colando a função acima em um objeto , invokando fn recebo 1
          cy.wrap({ fn : getValue }).invoke('fn').should('be.equal', 1)

          cy.wrap({ fn : soma }).invoke('fn', 5,5).should('be.equal', 10)


          cy.visit('https://www.wcaquino.me/cypress/componentes.html')
          cy.get('#formNome').invoke('val' , 'Texto via invoke')

          cy.window().invoke('alert','Da pra ver?')
      })


      //AULA 28 REUTILIZANDO O TITULO
      it.only('Aula 28 Pagando dividas', () => {

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        
        cy.title().then(title => { //Se utilizar o should vai ficar em loop infinito
         console.log(title)

         cy.get('#formNome').type(title)
        })

        //AULA 29 ESTÁ NO ARQUIVO ELEMENTS.JS

    })
})