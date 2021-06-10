// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('clickAlert',(locator,message)=>{
    cy.get(locator).click()
    cy.on('window:alert', msg => {//pega eventos que aparece na tela criou um método
        console.log(msg)
        expect(msg).to.be.equal(message)
    })
})

//Pega token da aplicação BarrigaReact
Cypress.Commands.add('getToken', (user, passwd) => {
    cy.request({
        method: 'POST',
        url: '/signin',
        body: {
            email: user,
            redirecionar: false,
            senha: passwd
        }
    }).its('body.token').should('not.be.empty')
        .then(token => {
            Cypress.env('token', token)
            return token
        })
})


Cypress.Commands.add('resetRest',()=>{
    cy.getToken('leo@a.com', 'leo').then(token => {

        cy.request({
            method:'GET',
            url:'https://barrigarest.wcaquino.me/reset',
            headers: { Authorization: `JWT ${token}` },
        })

    })
})