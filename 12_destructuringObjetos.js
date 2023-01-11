
//Como Crear Objetos?
const producto ={
    nombreProducto:"Monitor 20 Pulgadas",
    precio: 300,
    disponible:true
 }

 //Seleccionar Un Precio y Crear Una Variable

// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;


//  console.log(precioProducto);
//  console.log(nombreProducto);

 /**Destructuring de Objetos: Sacar de una Estructura **/

 // Extrae el valor y crea una variable en un solo paso
 const{precio} = producto;
 const {nombreProducto} = producto;

 console.log(precio);
 console.log(nombreProducto);