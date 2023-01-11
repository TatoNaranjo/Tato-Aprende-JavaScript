/* Funciones*/ 

/* Declaración de una Funcion*/

function sumar (){
    console.log(10+10);
    
}
sumar();

/*Expresion de la funcion*/

const sumar2 = function(){
    console.log(3+3);
}

sumar2();

/*IIFE: Se llama a Si Misma*/
(function(){
    console.log("Esto es Una Función");
})();