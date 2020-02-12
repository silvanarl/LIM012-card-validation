import validator from './validator.js';

let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");
let result ;

container2.style.display= 'none';
container3.style.display= 'none';

let botonSí = document.getElementById("botonSí");
let cardNumber = document.getElementById("cardNumber");

botonSí.addEventListener("click",obtenerCardNumber);


function obtenerCardNumber(){
    alert("Que bien!");
}
obtenerCardNumber();

console.log(validator);
