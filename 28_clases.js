/* Clases En JavaScript */

class Producto{

    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de $ ${this.precio}`;
    }

    precioProducto(){
        return `${this.nombre} vale: ${this.precio}$ `
    }
}

const producto2 = new Producto('Monitor Curvo de 49"',800);
const producto3 = new Producto('Laptop',300);

// console.log(producto2);
// console.log(producto3);

// console.log(producto2.formatearProducto());
// console.log(producto2.precioProducto());

/* Herencia */

class Libro extends Producto{
    constructor(nombre,precio,isbn){
        super(nombre,precio);
        this.isbn = isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es: ${this.isbn}`;
    }
    obtenerPrecio(){
        
        return `${super.precioProducto()}`;
    }
}
const libro = new Libro("La Revolucion de JavaScript",300,'13123141');
console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());