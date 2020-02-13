import validator from './validator.js';
//import { directive } from '@babel/types';

const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");
let result ;

// container2.classList.add("hide")
// container3.classList.add("hide")

//Este fragmento hace algo cuando el usuaio da click, ahora debo hacer que ese algo sea ir al cuadro te texto input
let botonSí=document.getElementById("botonSí");
botonSí.addEventListener("click",()=>{
    console.log("hola");
});



let validarCardNumber = document.getElementById("validarCardNumber");
validarCardNumber.addEventListener("click",obtenerCardNumber);
let cardNumber = document.getElementById("idCardNumber");

function obtenerCardNumber(){
    const cardNumberValor = cardNumber.value; 
    console.log("Hola " + cardNumberValor);
}


// const cardN2 = cardNumber => [...`${cardNumber}`].map(element=>parseInt(element)); -->Esto hace que el string de entrada se vuelva un array
// console.log(cardN2());

// container1.classList.remove("container1");
// container2.classList.add("container2");
// container3.classList.add("hide");



console.log(validator);
