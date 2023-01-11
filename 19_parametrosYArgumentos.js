function sumar(){
    console.log(10+10);
}
sumar();

function sumar2(){
    console.log(3+3);
}
sumar2();

function sumar3 (numero1 = 0,numero2 = 0){ //Numero1 y 2 son parametros, parametros por default
    console.log(numero1+numero2);
};
sumar3(2,3); //Argumentos o valores reales
sumar3(5,9);
sumar3(2,32);
sumar3(21,23);
sumar3(21,3);