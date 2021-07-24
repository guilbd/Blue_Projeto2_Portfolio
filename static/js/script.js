const logo1 = document.getElementById('proj-logo')
const btn1 = document.getElementById('btn')
const text1 = document.getElementById('texto')
const img1 = document.getElementById('img')

let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')
let btnEnviar = document.getElementById("btn")
let nomeOk = false
let emailOk = false
let msgOk = false
btnEnviar.disabled = true

nome.addEventListener('keyup', () => {
   if (nome.value.length < 3) {
      nome.style.borderColor = 'red'
      nomeOk = false
   } else {
      nome.style.borderColor = 'green'
      nomeOk = true
   }

   if (nomeOk && emailOk && msgOk) {
      btnEnviar.disabled = false
   } else {
      btnEnviar.disabled = true
   }
})

email.addEventListener('keyup', () => {
   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
      email.style.borderColor = 'red'
      emailOk = false
   } else {
      email.style.borderColor = 'green'
      emailOk = true
   }

   if (nomeOk && emailOk && msgOk) {
      btnEnviar.disabled = false
   } else {
      btnEnviar.disabled = true
   }
})

mensagem.addEventListener('keyup', () => {
   if (mensagem.value.length > 500) {
      mensagem.style.borderColor = 'red'
      msgOk = false
   } else {
      mensagem.style.borderColor = 'green'
      msgOk = true
   }

   if (nomeOk && emailOk && msgOk) {
      btnEnviar.disabled = false
   } else {
      btnEnviar.disabled = true
   }
})


//ok

btn1.onclick = function change() {
    if(btn1.value === "1"){
        img1.src = 'static/img/Screenshot_1.png';
        btn1.value = "2";
        text1.innerHTML = 'Projeto JOKENPO - clássico jogo "Pedra, Papel, Tesoura", desenvolvido em Python, utilizando as bibliotecas RANDOM, TIME, RICH. O jogador define quantas rodadas ele deseja jogar e ao final é exibido quem ganhou mais rodadas.';
    }
    else if(btn1.value === "2"){
        img1.src = "static/img/Screenshot_2.png";
        btn1.value = "3";
        text1.innerHTML = 'Projeto JOGO DE DADOS - Simulação de um jogos de dados com 4 jogadores. Foram utilizadas neste projeto as bibliotecas RANDOM, OPERATOR, TIME, TQDM  e RICH. Além de estruturas condicionais foram utilizados os conceitos de LISTAS e DICIONÁRIOS. Ao final do jogo, o jogador tem a opção de consultar todos as rodadas'
    }
    else if(btn1.value === "3"){
        img1.src = "static/img/Screenshot_4.png";
        btn1.value = "4";
        text1.innerHTML = 'Projeto SIMULADOR DE URNA ELETRÔNICA - simulação de uma URNA ELETRÔNICA", desenvolvido em Python, utilizando as bibliotecas, TIME, RICH, OS, TQDM e PYGAME. Foram utilizados os conceitos de Funções, estruturas de decisão e repetição. O usuário informa a data de nascimento e uma função valida se ele pode ou não votar, após votar ele tem a opção de continuar ou não a votação. AO encerrar ele mostra o resultado de quem ganhou a eleição.'
    }
    else if(btn1.value === "4"){
        img1.src = "static/img/Screenshot_5.png";
        logo1.src='static/img/JS-removebg-preview.png'
        btn1.value = "5";
        text1.innerHTML = 'Projeto MUDANÇA DE HUMOR - Javascript'
    }
    else if(btn1.value === "5"){
        img1.src = "static/img/detetive.png";
        logo1.src='static/img/logo_python-removebg-preview.png'
        btn1.value = "1";
        text1.innerHTML = 'Projeto desenvolvido no Colab, utilizando Python e estruturas condicionais.'
    }
}