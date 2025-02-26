const prompt = require('prompt-sync')();

const producto = {pizza:20, papas:15, hamburguesa:25}




// pedido //
const menu = prompt ('¿Que desea ordenar? pizza, papas, hamburguesa:  ').toLowerCase(); 


if (menu == 'pizza'){
    console.log (`El valor de la pizza es de ${producto.pizza}`)
    console.log (`Su compra es de ${producto.pizza}`)
}
else if (menu == 'papas'){
    console.log (`El valor de las papas es de ${producto.papas}`)
    console.log (`Su compra es de ${producto.papas}`)
}
else if (menu == 'hamburguesa'){
    console.log (`El valor de la hamburguesa es de ${producto.hamburguesa}`)
    console.log (`Su compra es de ${producto.hamburguesa}`)
}
else {
    console.log ('No tenemos ese producto')
}

    


// propina //


console.log ( '¿desea agregar propina?')
const propina = prompt ('si o no ').toLowerCase();

if (propina == 'si') {
    console.log ('se le cobrara 10% adicional de su pedido')
    console.log (`su total es de ${parseInt(producto[menu])+parseInt(producto[menu]) * 0.10}`)


}
else {
    console.log ('Gracias por su compra')
}

//.toLowerCase(); sirve para que el usuario pueda escribir en mayusculas o minusculas y el programa lo lea igual.