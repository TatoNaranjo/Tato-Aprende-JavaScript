/* Referencias Iniciales */
let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

/* Función para traer los datos desde la API */

let getMovie = ()=>{
    let movieName = movieNameRef.value;
    let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${key}`;


    /*Si el Campo Input está vacío */

    if(movieName.length <=0){
        result.innerHTML`<h3 class = "msg"> Por Favor Ingresa El Nombre de Una Película</h3>`
    }
   /* Si el Campo Input NO Está Vacío */

   else{
    fetch(url).then((resp) => resp.json())
    .then((data) =>{
        //Si La Pelicula Existe en la Base de Datos
        if(data.Response == 'True'){
        console.log(data);
        console.log(data.Poster);
        console.log(data.Title);
        console.log(data.imdbRating);
        console.log(data.Rated);
        console.log(data.Year);
        console.log(data.Runtime);
        console.log(data.Genre);
        console.log(data.Plot);
        console.log(data.Actors);

        result.innerHTML= `
        <div class = "info">
        <img src=${data.Poster} class = "poster">
            <div>
                <h2>${data.Title}</h2>
                <div class = "rating">
                <img src="star-icon.svg">
                <h4>${data.imdbRating}</h4>
                </div>
                <div class = "details">
                <span>${data.Rated}</span>
                <span>${data.Year}</span>
                <span>${data.Runtime}</span>
                </div>

                <div class = "genre">
                <div>${data.Genre.split(",").join("</div><div>")}</div>
                </div>
            </div>
        </div>

        <h3>Plot:<h3>
        <p>${data.Plot}</p>
        <h3>Cast:</h3>
        <p>${data.Actors}</p>
        `;
    }
    // Si la pelicula NO existe en la Base de Datos

    else{
        result.innerHTML=`<h3 class = 'msg'>${data.Error}</h3>`;
    }
    })
    //Si Algun Error Pasa
    .catch(()=>{
        result.innerHTML='<h3 class = "msg"> Error Ocurred </h3>'

    });
   }
};
searchBtn.addEventListener("click",getMovie);
window.addEventListener("load",getMovie);
