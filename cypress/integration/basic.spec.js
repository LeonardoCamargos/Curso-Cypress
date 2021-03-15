/// <reference types="cypress" />


describe('Cypress basics' ,() =>{
    it.only('Quero visitar a página e fazer a assertiva do título', () => {
        //variavel cy tem uma api poderosa o suficiente para fazer tudo por ela
        //visit irá acessar uma página específica
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        //Pegar título (Lembrar da promisse)
        // const title = cy.title()
        // console.log(title) 

        //Retorna promisse should cria uma assertiva até dar time out
        cy.title().should('be.equal','Campo de Treinamento')
        cy.title().should('contain','Treinamento')//Contem algo com a palavra x

        //Outra maneira de fazer
        cy.title()
        .should('be.equal','Campo de Treinamento')
        .should('contain','Treinamento')

        //Outra maneira de fazer
        cy.title()
        .should('be.equal','Campo de Treinamento')
        .and('contain','Treinamento')
    })

    //Econtrar e interagir com elemento

    it('Deve visitar e interagir com um elemento',() => {

    //visit irá acessar uma página específica
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    //LOLIZAR ELEMENTO
    cy.get('#buttonSimple').click()
    //assertiva no botão para conferir status mudado
    cy.get('#buttonSimple').should('have.value','Obrigado!')
    //Outra forma 

    // cy.get('#buttonSimple')
    // .click()
    // .should('have.value','Obrigado!')

    })


})