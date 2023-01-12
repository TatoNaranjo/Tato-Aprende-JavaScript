/**  Programacion Orientada a Objetos**/

/** Object Literal **/
const producto ={
    nombre: 'Tablet',
    precio:  400
}

/** Object Constructor **/

function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;

    
}

function formatearProducto(Producto){
    return `El Producto ${Producto.nombre} tiene un precio de ${Producto.precio}`;
}

function Cliente(nombre,apellido){
    this.nombre = nombre;
    this.apellido=apellido;
}

function formatearCliente(Cliente){
    return `El Cliente ${Cliente.nombre} ${Cliente.apellido}`
}

/* Prototipe: Crea una función que solo se utiliza en un objeto específico */

//Prototype para Producto
Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de $ ${this.precio}`
}

//Prototype para Cliente
Cliente.prototype.formatearCliente = function(){
    return `El Cliente ${this.nombre} ${this.apellido}`;
}



const producto2 = new Producto('Monitor de 49"',400);
const producto3 = new Producto ('Ipad 6th Generation',5000);
const cliente = new Cliente('Santiago','Naranjo');

console.log(cliente);
console.log(cliente.formatearCliente());
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
