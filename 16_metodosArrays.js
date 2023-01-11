const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const carrito = [
  { nombre: "monitor 20 pulgadas", precio: 500 },
  { nombre: "television 50 pulgadas", precio: 800 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 100 },
  { nombre: "Teclado", precio: 200 },
  { nombre: "Celular", precio: 80 },
];

// forEach Accede a cada elemento del array. Como un for
meses.forEach(function(mes){
    if(mes == 'Marzo'){

        console.log("Marzo Si Existe");
    }

});

/*Comprobar si un elemento existe o no en un arreglo*/
             /*Includes es ideal para un arreglo plano como el de meses*/
let resultado = meses.includes("Marzo");
console.log(resultado);

/*Some es ideal para un arreglo de objetos como el carrito*/
resultado = carrito.some(function(producto){
    return producto.nombre == "Celular PRO"
});
console.log(resultado);

/* Reduce sirve como un acumulador que itera el precio del Carrito en
                          este caso                                  */

resultado = carrito.reduce(function(total,producto){
    return total + producto.precio;
},0); //Valor Inicial

console.log(resultado);

/* Filter: Sirve para obtener un elemento segun una caracteristica filtrada */

resultado = carrito.filter(function(producto){
    return producto.precio > 400
});
console.log(resultado)

resultado = carrito.filter(function(producto){
    return producto.nombre ==='teclado'
});
console.log(resultado)