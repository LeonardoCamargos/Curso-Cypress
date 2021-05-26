/// <reference types="cypress" />

describe('Work with basic elements', () => {

    //PROCURAR NA DOCUMENTAÇÃO POR SELECTOR PLAYGROUND
    //jquery selector https://www.w3schools.com/jquery/jquery_ref_selectors.asp
    //Representa o teste interno apenas
    // //Representa o before all ou seja antes de todos os testes é rodado 
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

     //Representa o before Each ou seja antes de cada teste érodado 
     beforeEach(() => {
        cy.reload()
    })

    //AULA 41 MUITO IMPORTANTEE
    it('teste usando jquery selector', () => {
        //Usando o cyber
        //cy.get(':nth-child(2) > :nth-child(1) > :nth-child(3) > input')
        //usando localização
        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > input')

        cy.get("[value='Clique aqui']")

        cy.get("[onclick*='Francisco']")

        cy.get("#tabelaUsuarios td:contains('Doutorado'):eq(0) ~  td:eq(3) > input")

        cy.get("#tabelaUsuarios tr:contains('Doutorado'):eq(0) td:eq(6) > input")
        //Forma mais rápida de chegar no elemento : [value='Clique aqui']
        //Forma mais rápida de chegar no elemento : [onclick*='Francisco'] o asteristico no on click significa que ele irá buscar o unico que contem usar asplas duplas pois não permite duas aspas simples

        //campo mais complicado pois não tem id #tabelaUsuarios td:contains('Doutorado'):eq(0) ~  td:eq(3) > input
        //Sempre que for complicado pedir para equipe colocar o id caso não tenha
        //Outra forma por linha #tabelaUsuarios tr:contains('Doutorado'):eq(0) td:eq(6) > input


    })



    //AULA XPATH 42

    it.only('using', () =>{
        cy.xpath('//input[contains(@onclick,"Francisco")]')
        cy.xpath("//table[@id='tabelaUsuarios']//td[contains(..,'Francisco')]/..//input[@type='text']")
        cy.xpath("//td[contains(., 'Usuario A')]/following-sibling::td[contains(., 'Mestrado')]/..//input[@type='text']").type('funciona')
    })
})