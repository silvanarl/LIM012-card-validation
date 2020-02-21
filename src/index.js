import validator from './validator.js';

const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");
const volver = document.getElementById("texto");
let text;
let continueToValidation = document.getElementById("continue");
continueToValidation.addEventListener("click",()=>{
    container2.classList.remove("ocultar");
    container1.classList.add("ocultar");
    
});
    
let validateCardNumber = document.getElementById("validarCardNumber");
validateCardNumber.addEventListener("click",()=>{

container3.classList.remove("ocultar");
container2.classList.add("ocultar");

let ingresado =document.getElementById("idCardNumber").value;
if(ingresado==0){
    alert('Por favor ingresa un número de tarjeta.');
    container3.classList.add("ocultar");
    container2.classList.remove("ocultar");
}
let resultado1 = validator.isValid(ingresado);
if(resultado1===true){
    text = 'válida';
    }
else{
    text = 'inválida';
    }
let enmascarado = validator.maskify(ingresado);
volver.innerHTML = `Estimado usuario su tarjeta N° ${enmascarado} es ${text}`;



});
const backButton = document.getElementById("buttonback");
backButton.addEventListener("click", ()=>{
container2.classList.remove("ocultar");
container3.classList.add("ocultar");
});
