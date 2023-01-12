/* Query Selector es la forma en la que se seleccionan elementos de html */

const boton = document.querySelector('#boton');
boton.addEventListener('click',()=>{
    Notification.requestPermission()
    .then(resultado => console.log(`El resultado es: ${resultado}`))
})

if (Notification.permission == 'granted'){
    new Notification('Esta es una notificacion:',{
        body: 'TatoNaranjo FreeLancer'
    })
}