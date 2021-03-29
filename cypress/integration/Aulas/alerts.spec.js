/// <reference types="cypress" />


describe('Aula Alerts ...', () => {


    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })


    beforeEach(() => {
        cy.reload()
    })


    //aula 31 ALERT
    it('Teste ALERT', () => {

        cy.get('#alert').click()
        cy.on('window:alert', msg => {//pega eventos que aparece na tela criou um método
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })


    })


    //aula 32 ALERT COM MOCK
    it('Teste ALERT com mock', () => {
        //criando um objeto
        //const stub = cy.stub()
        const stub = cy.stub().as('Alerta')//dando nome ao stub
        cy.on('window:alert', stub)//substituiu o método acima ou seja toda vez que o enveto alert surgiu o método vai ser envocado
        cy.get('#alert').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
    })


    //AULA 33 CONFIRM
    it('Teste CONFIRM', () => {

        cy.on('window:confirm', msg => {//pega eventos que aparece na tela criou um método
            expect(msg).to.be.equal('Confirm Simples')
        })
        cy.on('window:alert', msg => {//pega eventos que aparece na tela criou um método
            expect(msg).to.be.equal('Confirmado')
        })

        cy.get('#confirm').click()

    })

    //AULA 33 confirm testando mensagem de negado
    it('Teste CONFIRM NEGADO', () => {

        cy.on('window:confirm', msg => {//pega eventos que aparece na tela criou um método
            expect(msg).to.be.equal('Confirm Simples')
            return false //para o cypress clicar em não em vez de OK que vem por default colocar sempre o return
        })
        cy.on('window:alert', msg => {//pega eventos que aparece na tela criou um método
            expect(msg).to.be.equal('Negado')
        })

        cy.get('#confirm').click()

    })

    //AULA 34 -PROMPT
    it.only('Teste PROMPT', () => {

        //tentar mockar o método prompt do window nativo
        //retorna o objeto window da página (Coloacndo em uma promise para sobrescrever o comportamento)
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('42')
        })


        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Era 42?')

        })


        cy.on('window:alert', msg => {
            expect(msg).to.be.equal(':D')

        })

        cy.get('#prompt').click()

    })
})