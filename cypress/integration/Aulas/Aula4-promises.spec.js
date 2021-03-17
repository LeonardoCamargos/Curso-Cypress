// it('sem testes, ainda',() =>{})
// //metodo
// const getSomething = callback => {
//     setTimeout(() => {
//         callback(12);
//     },1000)
// }



// //Forma antiga
// //sincrono
// //sistema que vai usar o metodo
// const system = () => {
//     console.log('init');
//     getSomething(some => {
//     console.log (`Something is ${some}`)
//     console.log('end');
//     })
// }

// //envocando metodo acima
// system();


//PROMISSES


it('sem testes, ainda',() =>{})
//metodo
const getSomething = callback => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(13);
        },1000)
    })
}



//Forma antiga
//sincrono
//sistema que vai usar o metodo
const system = () => {
    console.log('init');
    //retorna uma promisse
    const prom = getSomething ();
    //aguarda até a promise ser resolvida até o 13 ser envolcado
    prom.then(some =>{
        console.log(`Something is ${some}`)
        console.log('end')
    })
}

//envocando metodo acima
system();

