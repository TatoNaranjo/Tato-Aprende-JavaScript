//Metodos de Propiedad. Son funciones que tienen sintáxis de metodos

const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo Cancion con el ID: ${id}`);
    },
   
    pausar: function(){
        console.log(`Pausando...`)
        console.log(`Pausa Correcta`)
    },
    crearPlaylist: function(nombre){
        console.log(`Creando Una Playlist con el Nombre: ${nombre}`)
    },
    borrarPlaylist: function(nombre){
        console.log(`Borrando la Playlist con el Nombre: ${nombre}`)
    }
}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la canción: ${id}`);
}
reproductor.reproducir(3850);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist("Verano 2023");
reproductor.borrarPlaylist("Verano 2023");