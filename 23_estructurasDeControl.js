/* Estructuras de Control */
const puntaje = 1000;

/* IF / IF-ELSE*/
if (puntaje == 1000){
    console.log("El Puntaje es 1000");
} else{
    console.log("El Puntaje No Es 1000");
}

//Ejercicio de Carrito 

let efectivo = 1000;
let carrito = 90;

if(efectivo >  carrito){
    console.log("Puedes pagar Esto.");
} else{
    console.log("No Puedes Pagar Esto");
}

// Ejercicio ByPass
const rol ="Administrador"
if(rol == "Administrador"){
    console.log("Access Guaranteed");
}

/* Switch */

const metodoPago = "Tarjeta";

switch(metodoPago){
    case 'Tarjeta':
        console.log("Harás tu pago con tarjeta");
        break;
    case 'Cheque':
        console.log("Revisando datos en el Banco");
        break;
    case 'Efectivo':
        console.log("Pagarás con Efectivo");
    default:
        console.log("No Has Elegido Un Metodo de Pago");
        break;
}