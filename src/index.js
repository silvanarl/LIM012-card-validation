import validator from './validator.js';
//import { directive } from '@babel/types';

const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");
let result ;

//Este fragmento hace algo cuando el usuaio da click, ahora debo hacer que ese algo sea ir al cuadro te texto input
let botonSí=document.getElementById("botonSí");
botonSí.addEventListener("click",()=>{
    console.log("hola");
});

let validarCardNumber = document.getElementById("validarCardNumber");
validarCardNumber.addEventListener("click",obtenerCardNumber);

function obtenerCardNumber(){
    let cardNumber = document.getElementById("idCardNumber").value;
    console.log('qué es cardNumber', cardNumber);
    let newCardNumber= [];
    for(let i= cardNumber.length-1; i>=0;i--){
        newCardNumber.push(parseInt(cardNumber[i]));
    }
    console.log(newCardNumber);

    let newCardNumberPorDos =[];
    for(let i= 0; i<newCardNumber.length; i++){
        if(i%2!==0){
            newCardNumberPorDos.push(newCardNumber[i]*2);
        }
        else{
            newCardNumberPorDos.push(newCardNumber[i]*1);
        }
    }
    console.log('Nuevo array x2 invertido',newCardNumberPorDos);
}
obtenerCardNumber();

console.log(validator);