class token {

    pegarGetToken(user,passwd){
        cy.request({
            //objeto com propriedades dentro leo@teste.com 12345
            method:'POST',
            url:'https://barrigarest.wcaquino.me/signin',
            body:{
                email: user,   
                redirecionar: false,
                senha: passwd
            }
        }).its('body.token').should('not.be.empty')
        .then(token => {
            return token
        
    })
    }
}