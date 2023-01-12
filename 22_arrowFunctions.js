 /* Como Crear Arrow Functions */
/*
  Simplificar la sintaxis de Creacion de funciones en JavaScript 
 */


// //Antes:
// let sumar2 = function(num1,num2){
//     console.log(num1+num2);
// }
// sumar2(5,10);

// //Despues: Cuando tienes solo una linea los paréntesis son Opcionales

// sumar2 = (num1,num2)=>
//     console.log(num1+num2);
// sumar2(5,10);

// /* Estructura basica para crear un Arrow Function */
// let aprendiendo = (tecnologia) =>{
//    return (`Aprendiendo ${tecnologia}`)
// }

// console.log(aprendiendo("JavaScript"));



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
meses.forEach((mes)=>{
    if(mes == 'Marzo'){

        console.log("Marzo Si Existe");
    }

});

/*Some es ideal para un arreglo de objetos como el carrito*/
resultado = carrito.some(producto=> producto.nombre == "Celular PRO");
console.log(resultado);

/* Reduce sirve como un acumulador que itera el precio del Carrito en
                          este caso                                  */

resultado = carrito.reduce((total,producto)=>{
    return total + producto.precio;
},0); //Valor Inicial

console.log(resultado);

/* Filter: Sirve para obtener un elemento segun una caracteristica filtrada */

resultado = carrito.filter(producto=>producto.precio > 400);
console.log(resultado)

resultado = carrito.filter(producto=> producto.nombre ==='teclado');
console.log(resultado)