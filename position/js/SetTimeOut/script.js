// const body = document.querySelector('body')

// setTimeout(() => {w
//     body.classList.toggle('azul')
// }, 2000)

// setInterval(callback, 2000)
// function callback() {
//     body.classList.toggle('vermelho')
// }

const botoes = document.querySelectorAll('.botoes button')
const numeros = document.querySelector('.ponteiros')

let i = 1
let timer

function iniciarTempo() {
    timer = setInterval(() => {
        numeros.innerText = i++ 
    }, 1000)
}

function pausarTempo() {
    clearInterval(timer)
}

function resetarTempo() {
    numeros.innerText = 0
    i = 0
    pausarTempo()
}

botoes[0].addEventListener('click', iniciarTempo)
botoes[1].addEventListener('click', pausarTempo)
botoes[1].addEventListener('dblclick', resetarTempo)




