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

let cardNumber = document.getElementById("idCardNumber").value;
    console.log('qué es cardNumber', cardNumber);
function obtenerCardNumber(){
    let newCardNumber= [];
    for(let i= cardNumber.length-1; i>=0;i--){
        newCardNumber.push(parseInt(cardNumber[i]));
    }
    console.log(newCardNumber);

    let newCardNumberPorDos =[];
    let newCardNumberImpar =[];
    for(let i= 0; i<newCardNumber.length; i++){
        if(i%2!==0){
            newCardNumberPorDos.push(newCardNumber[i]*2);
        }
        else{
            newCardNumberPorDos.push(newCardNumber[i]*1);
        }
    }
    console.log('Nuevo array x2 invertido',newCardNumberPorDos);

    let numerosMultiplicar=[];
    for(let i=0; i<newCardNumberPorDos.length; i++){
        if(newCardNumberPorDos[i]>=10){
            numerosMultiplicar.push((newCardNumberPorDos[i]-10)+1);
        }
        else{
            numerosMultiplicar.push(newCardNumberPorDos[i]*1);
        }
    }
    console.log(numerosMultiplicar);

    const totalSuma = numerosMultiplicar.reduce((sum, current) => sum + current, 0);
    console.log('Suma de todo es:',totalSuma);

    let resultado = false;
    if(totalSuma%10===0){
        resultado = true;
    }
    console.log(resultado);

    
}
obtenerCardNumber();

function maskify(){
    let cardNumber = document.getElementById("idCardNumber").value;
    console.log('qué es cardNumberForMaskify', cardNumber);
    let newCardNumberForMaskify= [];
    for(let i=0;i<cardNumber.length;i++){
        console.log(i);
        newCardNumberForMaskify.push(parseInt(cardNumber[i]));
    }
    console.log(newCardNumberForMaskify);
}
maskify();
console.log(validator);