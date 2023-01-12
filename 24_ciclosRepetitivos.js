/* For Loop */
// for(let i = 1; i<=100; i++){
//     if(i%2 == 0){
//         console.log(`El Número ${i} es par`);
//     }
// }


const carrito = [
    { nombre: "monitor 20 pulgadas", precio: 500 },
    { nombre: "television 50 pulgadas", precio: 800 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audifonos", precio: 100 },
    { nombre: "Teclado", precio: 200 },
    { nombre: "Celular", precio: 80 },
  ];

  for(let i = 0; i<carrito.length;i++){
    console.log(carrito[i]);
  }
/* While Loop */

let i = 0;
while (i<10){
  i++;
  console.log(i);
}

j = 0
while(j<carrito.length){
  console.log(carrito[j]);
  j++;
}

/* Do While Loop */

i = 0;

do{
  console.log(i);
  i++;
}while(i<10)