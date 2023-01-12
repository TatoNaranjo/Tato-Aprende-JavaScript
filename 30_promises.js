/* Promises en JavaScript */

const usuarioAutenticado = new Promise((resolve,reject)=>{
    const auth = true;

    if(auth){
        resolve('Usuario Autenticado'); // El Promise se cumple
    } else{
        reject('No Se Pudo Iniciar Sesion'); // El Promise no se cumple
    }
});

console.log(usuarioAutenticado);

usuarioAutenticado
.then(resultado=>{console.log(resultado)})
.catch(error=>{console.log(error)})
/* 
    En Los Promises Existen 3 valores posibles:
    
    Pending: No se ha cumplido pero tampoco rechazado.
    Fulfilled: Ya se cumplió el promise.
    Rejected: Se ha rechazado o no se pudo cumplir el Promise
*/