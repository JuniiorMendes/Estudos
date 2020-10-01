const menu = document.querySelector('#menu')
const botaoMenu = document.querySelector('[data-menu="button"]')

function ativo() {
  menu.classList.toggle('ativo')
  botaoMenu.classList.toggle('ativando')
}

botaoMenu.addEventListener('click', ativo)

