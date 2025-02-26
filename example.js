const prompt = require('prompt-sync')(); //sirve para recibir datos del usuario


// arroz, aceite, pan.
// precio arroz = 
// precio aceite =
// total = 



const arroz = prompt('Ingresa el precio del arroz: '); //el prompt sirve para recibir datos del usuario
console.log(`el valor del arroz es de: ${arroz} `)
const aceite  = prompt('Ingresa el precio del aceite: ');
console.log(`el valor del aceite es de: ${aceite} `)
const pan = prompt('Ingresa el precio del pan: ');
console.log(`el valor del pan es de: ${pan}` ) 

console.log (`PARA UN TOTAL DE: ${parseInt(arroz) + parseInt(aceite) + parseInt(pan)}`)

console.log ('¿DESEA CONTINUAR COMPRANDO?')

const compra = prompt("si o no");

if (compra == 'si') {
    console.log ('¿Que producto desea agregar?')
    console.log ('lentejas, huevos')

    let si = prompt('Ingresa el producto ') 
    if (si == 'lentejas'){
    console.log ('no hay lentejas')}
    else if (si == 'huevos'){
        console.log ('No hay huevos')
    }

}
else {
    console.log ('GRACIAS POR SU COMPRA VIEJO SABROSO')
}

