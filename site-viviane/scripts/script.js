let data = new Date();
let ano = data.getFullYear();
let hora = data.getHours();
let minutos = data.getMinutes();
let anosite = document.getElementById('anosite');


let card01 = document.getElementById('card01')
let card02 = document.getElementById('card02')
let card03 = document.getElementById('card03')
let card04 = document.getElementById('card04')
let ulparte02h1 = document.querySelector('.ulparte02h1')
let card02h1 = document.getElementById('card02h1')
let card03h1 = document.getElementById('card03h1')
let card04h1 = document.getElementById('card04h1')
card01.addEventListener('mouseover', mouseulparte02);
card01.addEventListener('mouseout', mouseulparte02sair);
card02.addEventListener('mouseover', card02on);
card02.addEventListener('mouseout', card02off);
card03.addEventListener('mouseover', card03on);
card03.addEventListener('mouseout', card03off);
card04.addEventListener('mouseover', card04on);
card04.addEventListener('mouseout', card04off);

function mouseulparte02() {
    ulparte02h1.style.transition = '.2s'
    ulparte02h1.style.color = '#EC855C'
}

function mouseulparte02sair() {
    ulparte02h1.style.color = 'white'
}

function card02on() {
    card02h1.style.transition = '.2s'
    card02h1.style.color = '#EC855C'
}

function card02off() {
    card02h1.style.color = 'white'
}

function card03on() {
    card03h1.style.transition = '.2s'
    card03h1.style.color = '#EC855C'
}

function card03off() {
    card03h1.style.color = 'white'
}

function card04on() {
    card04h1.style.transition = '.2s'
    card04h1.style.color = '#EC855C'
}

function card04off() {
    card04h1.style.color = 'white'
}

anosite.innerHTML = ano

function contato() {
    alert(`Olá, agora são ${hora} horas e ${minutos} minutos`)
}