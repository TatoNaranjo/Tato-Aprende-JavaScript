
const carrito = [
    { nombre: "monitor 20 pulgadas", precio: 500 },
    { nombre: "television 50 pulgadas", precio: 800 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audifonos", precio: 100 },
    { nombre: "Teclado", precio: 200 },
    { nombre: "Celular", precio: 80 },
  ];

  /* For Each: Por Cada elemento de la lista haces una iteracion
                Se usa cuando quieres mostrar los elementos en pantalla o consola */

  carrito.forEach(producto=>console.log(producto));


  /* Map: Se utiliza cuando queremos crear un nuevo arreglo */
  const arreglo = carrito.map(producto => `${producto.nombre}-${producto.precio}`);
  console.log(arreglo);

  