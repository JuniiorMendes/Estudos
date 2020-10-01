// setTimeOut e setInterval

// O setTimeout seta o tempo que a variavel deve ser executada, já o setInterval serve como um loop Infinito.


// SetTimeout

function nome(e) {
    console.log(e)
}

setTimeout(() => {
    console.log('testando')
}, 5000)

// Utilizando com loops

// for(let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i++)
//     }, 1000)
// }

// Dessa forma ele executara tudo de uma vez e não um por vez, o certo é fazer o contador multiplicar pelo i, assim a cada looping, ele irá multiplicar pelo valor de i.

// for(let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i++)
//     }, 100 * i)
// }

// Obs: O setTimeout é um metodo do objeto Window, caso utilize uma função utilize com arrow functions, assim ele não irá pega o THIS no contexto global, mas sim ao seu objeto pai.


// SetInterval

function texto(text) {
    console.log(text)
}

// setInterval(texto, 1000, 'Passou 1s')

// loop a cada segundo

let i = 0
const loop = setInterval(() => {
    console.log(i++)
    if(i > 10) {
        clearInterval(loop)
    }
}, 300)


// ClearInterval

// Para utilizar o clearInterval você tem que armazenar o setInterval em uma variavel.

// const loop = setInterval(callback, 300)

// let i = 0
// function callback() {
//     console.log(i++)
//     if(i > 10) {
//         clearInterval(loop)
//     }
// }
