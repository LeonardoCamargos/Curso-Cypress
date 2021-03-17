/// <reference types="cypress" />


// it('Equality',() =>{
// const a =1;

// // expect(a).equal(1);
// // expect(a,'Deveria ser 1').equal(2);
// // expect(a).to.be.equal(1);
// expect('a').not.to.be.equal('b');

// })



// it('Thuthy', () => {
//     const a =  true ;
//     const b = null;
//     let c;

//     expect(a).to.be.true;
//     expect(false).to.be.true;
//     expect(b).to.be.null;
//     expect(a).to.be.not.null;
//     expect(c).to.be.undefined;
// })



// it('Object Equality',() => {
//     const obj ={
//         a:1,
//         b:2,
//     }

//     expect(obj).equal(obj) // Comparar ele com ele mesmo
//     expect(obj).equals(obj)
//     expect(obj).eq(obj)
//     expect(obj).to.be.equal(obj)
//     expect(obj).to.be.deep.equal({a:1 , b:2})
//     expect(obj).include({a:1}) //verifqiue que nesse objeto á uma propriedade a1
//     expect(obj).to.have.property('b',2)
//     expect(obj).to.not.be.empty
//     expect({}).to.not.be.empty //verificar que o obejto não esta vazio
// })


// it ('Arrays',() => {
//     const arr = [1,2,3]
//     expect(arr).to.have.members([1,2,3]) // Espere que o array possua os seguintes membros
//     expect(arr).to.include.members([1,2]) //verificar se alguns membros estão incluidos
//     expect(arr).to.not.be.empty //verificar se o array não está vazio
//     expect([]).to.be.empty //verificar se o array  está vazio
// })

// it('Type',() => {
//     const num =1 
//     const str ='String'

//     expect(num).to.be.a('number') // verificque se a variavel é um numero
//     expect(str).to.be.a('string')// verificque se a variavel é uma strin
//     expect({}).to.be.an('object')// verificque se a variavel é um objet
//     expect([]).to.be.an('array')// verificque se a variavel é um array
// })

// it('String',() => {
//     const str = 'String de teste'

//     expect(str).to.be.equal('String de teste')//Se a string está de acordo
//     expect(str).to.have.length(15)//tamanho da string em caracter
//     expect(str).to.have.contain('de')//verificar apenas um pedaço
//     expect(str).to.match(/String/)// deve iniciar com String simbolo /^/
//     expect(str).to.match(/teste$/)// deve finalizar com String teste /$/
//     expect(str).to.match(/.{15}/) //tamanho /{}/
//     expect(str).to.match(/\w+/ )//Só contem letra
//     expect(str).to.match(/\D+/ )//Não contem numeros

// })

it('Numbers', () => {
    const number = 4
    const floatNumber = 5.2123

    expect(number).to.be.equal(4) //Este numero é igual a 4 
    expect(number).to.be.above(3)//verificar é acima de 3
    expect(number).to.be.below(7)//verificar se esta abaixo de 7
    expect(floatNumber).to.be.equal(5.2123)
    expect(floatNumber).to.be.closeTo(5.2,0.1)//SEJA PROXIMO DE 5.2
    expect(floatNumber).to.be.above(5)//verificar é 5
})