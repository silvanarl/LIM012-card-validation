import validator from './validator.js';

const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");
let text;

let validarCardNumber = document.getElementById("validarCardNumber");
validarCardNumber.addEventListener("click",()=>{
let ingresado =document.getElementById("idCardNumber").value;
let resultado1 = validator.isvalid(ingresado);

if(resultado1===true){
    console.log(resultado1);
    text = 'válida';
    }
else{
    text = 'inválida';
    }
let valorIngresado = document.getElementById("idCardNumber").value;
let enmascarado = validator.maskify(valorIngresado);


const seeResult = document.getElementById('container3');
container3.innerHTML = `Estimado usuario su tarjeta N° ${enmascarado} es ${text}`;
});



console.log(validator);