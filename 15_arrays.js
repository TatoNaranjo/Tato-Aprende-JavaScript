/* Arreglos/Arrays */

const numeros = [10,20,30,40,50];



const meses = ["Enero","Febrero","Marzo","Abril"];
console.table(meses);

/* Como Acceder A Los Valores de Un Array*/

// console.log(numeros[2]);

//Posible Error: Undefined: Al acceder a una posicion del array que no tiene
// nada asignado


// Conocer la Extensión de un Array
// console.log(meses.length);


// meses.forEach(function(numero){

//     console.log(numero);
// })

/* ¿Como modificar un Array? */

// //Agregar Elementos a un Array
// numeros[5] = 45; // Metodo no-practico


// /*Push Agrega al inicio del arreglo*/
// numeros.push(60,70,80); //Metodo No-Practico Ya que modifica al array Original


// /*Unshift Agrega al inicio del arreglo*/
// numeros.unshift(-10,-20,-30);

// /*pop elimina el ultimo elemento del arreglo */
// numeros.pop();

// /*shift elimina el primer elemento del arreglo*/
// numeros.shift();

// /*Splice (desde que posición deseas empezar a eliminar, cuantos valores vas a eliminar)*/
// meses.splice(2,3);


/* Agregar Elementos Utilizando Rest Operator o Spread Operator*/
    /* Para Evitar la Modificación del Array Original */
    
const nuevoArreglo = [...meses,'junio'];
console.table(numeros);
