/**
 * Buscar elementos na Árvore DOM
 */
const header =document.getElementsByTagName("header");
    console.log(header);

    const tecnologiasSection = document.getElementById("tecnologias-web");
    console.log(tecnologiasSection);

    const lista = document.getElementsByClassName("lista")
    console.log(lista);

// Comandos modernos
const li = document.querySelector("li");
console.log(li);

const itentsDaLista = document.querySelectorAll("li");
console.log(itentsDaLista);
console.log(itentsDaLista.length);
console.log(itentsDaLista[0]);

/**
 * Criar Elementos
 */
let nav = document.createElement("nav");
document.querySelector("body")
    .appendChild(nav);

const body = document.querySelector("body");
const main = document.querySelector("main");
body.insertBefore(nav, main);

/**
 * Atualizar Elementos
 */
const section = document.querySelector("#tecnologias-web");
const ul = document.querySelector("ul");
let h2 = document.createElement("h2");

h2.innerText = "Tecnologias Web"
h2.lang = "pt-BR";
h2.setAttribute("Title", "Tecnologias Web");
h2.setAttribute("class", "subtitulo");

let listaNumeros = document.createElement("li");

for (let i = 0; i < 5 ; i++) {
    li.innerText = i + 1 ;
    listaNumeros.appendChild(li);
}

body.appendChild(listaNumeros);

/**
 * Excluir elementos
 */
const footer = document.querySelector("footer");
let footerRemovido = body.removeChild(footer);
console.log(footerRemovido);

// Apaga todos os itens da lista
itendsDaLista.forEach((d) => d.remove())

/**
 * Navegar nos elementos DOM
 */

// Navegar de m elemento para o seu elemento pai
console.log(main.parentNode);

// Navegar para o próximo elemnto irmão
console.log(main.nextElementSibling);

// Navegar para o elemento irmão anterior
console.log((main.previousElementSibling));

// Navegar para o primeiro elemento filho
console.log(body.firstElementChild);

// Navegar para o último elemento filho
console.log(body.lastElementChild);

// Obter todos os elementos filhos
let listaElementos = body.children;
console.log(listaElementos);





