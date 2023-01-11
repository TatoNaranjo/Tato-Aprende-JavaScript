"use strict"; //Hace que JavaScript se ejecute en modo Estricto

const producto ={
    nombreProducto:"Monitor 20 Pulgadas",
    precio: 300,
    disponible:true
 }
 // Object Freeze No permite Agregarle-Eliminarle Más Valores O Que El Objeto Sea Modificado
 Object.freeze(producto);
 producto.imagen = "imagen.jpg";

 //¿Como Saber si Un Objeto Está Congelado?

console.log(Object.isFrozen(producto));


//Object Seal si permite modificar los valores existentes

Object.seal(producto);
console.log(Object.isSealed(producto));
 console.log(producto);