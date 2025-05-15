window.onload = function () {
    numeroAleatorio();
};

const Numeros = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "J", "K", "A"];
const Palos = ["♦", "♥", "♠", "♣"];
// el boton
const boton = document.querySelector("#buttoncard")
// funcion que genera el numero aleatorio
function numeroAleatorio() {

    const numeroRandom = Numeros[Math.floor(Math.random() * Numeros.length)];
    const paloRandom = Palos[Math.floor(Math.random() * Palos.length)];

    const arrayNumeros = document.querySelector(".card");
    const arrayPalos = document.querySelector(".number").textContent = numeroRandom;
    const arrayPalos2 = document.querySelector(".card2");
    
    
   
    arrayNumeros.classList.add(paloRandom);
    arrayNumeros.textContent = paloRandom

    arrayPalos2.classList.add(paloRandom)
    arrayPalos2.textContent = paloRandom;






}
boton.addEventListener("click",numeroAleatorio);