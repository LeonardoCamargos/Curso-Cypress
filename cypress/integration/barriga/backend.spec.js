/// <reference types="cypress" />


before(() => {

})

beforeEach(()=>{

})

it('Should create an acoount', () => {
    cy.request({
        //objeto com propriedades dentro leo@teste.com 12345
        method:'POST',
        url:'https://barrigarest.wcaquino.me/signin',
        body:{
            email: "a@a",   
            redirecionar: false,
            senha: "a"
        }
    }).its('body.token').should('not.be.empty')

    .then(token =>{
        cy.request({
            method:'POST',
            headers: { Authorization: `JWT ${token}` },
            url:'https://barrigarest.wcaquino.me/contas',
            body:{
                nome:'Conta via api'
            }
        }).as('response')
    })

    cy.get('@response').then(res => {
        expect(res.status).to.be.equal(201)
        expect(res.body).to.have.property('id')
        expect(res.body).to.have.property('nome','Conta via api')
    })


})

