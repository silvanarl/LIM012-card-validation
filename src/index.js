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
    let cardNumberValor = cardNumber.value; 
    let cardNumberInvertida = [];
    let e = 0;
    for(let i= cardNumberValor.length-1; i>=0;--i){
        cardNumberInvertida[e] = cardNumberValor[i]*1;
        e = e+1;

    }
    console.log(cardNumberInvertida);
    
    let cardDouble =[];
    for(let i=0; i<=cardNumberInvertida.length;i++){
        if(i%2 !== 0){
             cardDouble = cardNumberInvertida[i.value]*2;
             cardNumberInvertida[1] = cardDouble;
        }
        else{
        }
    }
    console.log(cardDouble);
}
obtenerCardNumber();


// container1.classList.remove("container1");
// container2.classList.add("container2");
// container3.classList.add("hide");



console.log(validator);