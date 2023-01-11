//Objetos

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;

//Como Crear Objetos?
const producto ={
   nombreProducto:"Monitor 20 Pulgadas",
   precio: 300,
   disponible:true
}



// // Como Acceder A La Propiedad de Un Objeto
// console.log(producto.precio); // Sintaxis 1


// console.log(producto['nombreProducto']); //Sintaxis 2


// Crear Una Propiedad Del Producto Así No Exista
producto.imagen = 'imagen.jpg';

//Eliminar Propiedades

delete producto.disponible;


console.log(producto);