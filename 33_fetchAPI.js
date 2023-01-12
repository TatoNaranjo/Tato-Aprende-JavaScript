/* Al igual que ajax permite enviar informacion al servidor u obtener informacion
                    de un servidor.

Podemos obtener un archivo local o una respuesta de un servidor (En formato texto o JSON)
   
Al igual que todas las API's Modernas de JavaScript utiliza Promises o Async / Await
   */               


/*JSON = JavaScript Object Notation: Lenguaje de Transporte de Datos

    Un JSON puede ser creado en cualquier lenguaje y se puede consumir en JavaScript
    por medio de Fetch API y mostrarlo en el sitio web
*/   

async function obtenerEmpleados(){
    const archivo = 'empleados.json';

    // fetch(archivo)
    //     .then(resultado =>resultado.json())
    //     //Aplicando destructuring para sacar los datos
    //     .then(datos =>{
           
    //         const {empleados} = datos;
    //          console.log(empleados);

    //         // empleados.forEach(empleado =>{
    //         //     console.log(empleado.id);
    //         //     console.log(empleado.nombre);
    //         //     console.log(empleado.puesto);

               
    //         // })
    //     })

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
   

}
obtenerEmpleados();
   

   
   
   
   
   