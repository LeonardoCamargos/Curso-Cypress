/// <reference types="cypress" />
let token 

describe('Should test at a functional level', () => {

//Pegando token do login via  função criada no arquivo commands  
before(() => {
    cy.getToken('leo@a.com', 'leo')
    .then(tkn => {
        token = tkn
    }) //armazena em uma variavel

    //Chama a função de logar e pegar o token do login na commands e armazena em uma variaval global
})

//Realizando o reset da conta via função criada no arquivo commands
beforeEach(()=>{
    cy.resetRest()
})

//Criando nova conta
it('Should create an account', () => {
    //Acessa url /coontas e realiza um post com nome na request passando o token pegado na variavel e valida o status 201 ok , o campo id do response e nome
    cy.request({
        url: '/contas',
        method: 'POST',
        headers: { Authorization: `JWT ${token}` },
        body: {
            nome: 'Conta leooo'
        }
    }).as('response')

    cy.get('@response').then(res => {
        expect(res.status).to.be.equal(201)
        expect(res.body).to.have.property('id')
        expect(res.body).to.have.property('nome', 'Conta leooo')
    })
})

//Atualizando nome das contas
it('Should update an account', () => {
    //Acessa url /coontas e realiza um post com nome na request passando o token pegado na variavel e valida o status 201 ok , o campo id do response e nome
    cy.request({
        method:'GET',
        url:'/contas',
        headers:{ Authorization: `JWT ${token}` },
        qs:{
            nome:'Conta para alterar'
        }
    }).then(res => console.log(res))

})

///Conta com mesmo nome
it.only('Should not create an account with same name' , () => {
    cy.request({
        url: '/contas',
        method: 'POST',
        headers: { Authorization: `JWT ${token}` },
        body: {
            nome: 'Conta mesmo nome'
        },
        failOnStatusCode:false
    }).as('response')

    cy.get('@response').then(res => {
        expect(res.status).to.be.equal(400)
        expect(res.body.error).to.be.equal('Já existe uma conta com esse nome!')
    })
})
})
