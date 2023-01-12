/* Async / Await 
    Bloquear el codigo hasta esperar que se cumpla una condición y luego
    arrojar los datos.
*/

//Ej:

function descargarNuevosClientes(){
    return new Promise(resolve => {
        console.log('Descargando Clientes... Espere...')
        setTimeout(() =>{
            resolve('Los Clientes Fueron Descargados');
        },5000);
    })
}


/* Cuando hay un llamado independiente a la funcion con la que utilizamos el 
            await hay que aumentar el performance del sitio */

function descargarUltimosPedidos(){
    return new Promise(resolve => {
        console.log('Descargando pedidos... Espere...')
        setTimeout(() =>{
            resolve('Los pedidos Fueron Descargados');
        },3000);
    })
}
/* Como hacer que el codigo instantaneo se ejecute de forma más lenta? */

// setTimeout(function(){
//     console.log(`set timeout...`)
// },5000)

/*A Diferencia del timeout, set interval espera el tiempo especificado para 
        mandar todas las operaciones en un lapso de tiempo durante intervalos. */
// setInterval(()=>{
//     console.log(`Set Interval...`)
// })



async function app(){
    try{
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);

        //Manera de optimizar el rendimiento cuando tenemos 2 funciones con async await
        //                          Ejecutandolas al mismo tiempo
        const resultado = await Promise.all([descargarNuevosClientes(),descargarUltimosPedidos()]);
        console.log(resultado['0']);
        console.log(resultado['1']);
    } 
    catch(error){
        console.log(error);
    }
  
}
app();