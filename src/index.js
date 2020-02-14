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


function obtenerCardNumber(){
    let cardNumber = document.getElementById("idCardNumber").value;
    let size = cardNumber.length;
    let lastPosition = size-1;
    
    for(let i=0; i<cardNumber.length;i++){
        console.log(cardNumber[i]);
        }
    let invertido = '';
    for(let i= lastPosition; i>=0; i--){
        console.log(invertido = cardNumber[i]);
    }

    let cardDouble =[];
    for(let i=0; i<=invertido.length;i++){
    if([i]%2 !== 0){
            cardDouble = invertido*2;
            invertido = cardDouble;
    }
    else{
        
    }
    }
    console.log(cardDouble);

    let cadenaOculta = '';
    let lastFourPosition = size-5
    if(cardNumber.length>=1){
        for(let i= lastPosition; i<=lastFourPosition; i--){
            if(Number.isInteger(parseInt(cardNumber[i]))){
                if(i<5){
                    cadenaOculta = cadenaOculta + cardNumber[i];
                }
                else{
                    cadenaOculta = cadenaOculta + '#';
                }
            }
        }
    }
    console.log(cadenaOculta);
}
obtenerCardNumber();

console.log(validator);