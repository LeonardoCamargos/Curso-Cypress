/// <reference types="cypress" />


describe('Work with Iframe', () => {



    it('deve preencher campo de texto ' , () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe => {
            //contenst trás os filhos dos elementos pega0ndo uma tag atras do find
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield')
                .type('funciona')
                .should('have.value' ,'funciona') // have .value pois se trata de um elemento
        
            })

    })

    it('deve testar frame diretamente ' , () => {
        cy.visit('https://www.wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert' , msg => {
            expect(msg).to.be.equal('Click OK!')

        })
        
            })

}) 