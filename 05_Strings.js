// Strings o Cadenas de Texto

const producto = 'Monitor de 20"';
const producto2 = 'Monitor de 30"';

// console.log(producto);
// console.log(producto2);

/* Algunos Metodos de Strings */

// length: Para Saber Cuántos Caracteres Tiene Un String
const tweet = "Aprendiendo JavaScript con el Curso de Desarrollo Web Completo";
const tweet2 = "Tablet";
console.log(tweet.length);

//IndexOf Para Comprobar Si una Palabra Existe
//Cuando Bota un numero Menor a 0 Es Porque La Palabra No Existe
console.log(tweet.indexOf("JavaScript")); //Retorna 12
console.log(tweet2.indexOf("JavaScript")); //Retorna -1

//Includes Retorna True Or False

console.log(tweet.includes("JavaScript")); //Retorna True
console.log(tweet2.includes("JavaScript")); //Retorna False
