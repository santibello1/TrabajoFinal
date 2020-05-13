window.addEventListener("load",function(){

// IDEA: DETALLE PELICULA

var urlParams = new URLSearchParams(window.location.search);
var query = urlParams.get('id');

var url = "https://api.themoviedb.org/3/movie/" + query + "/videos?api_key=5d02a3447f4e9a0a8eaf7b743846e766&language=en-US"
var urlTrailer = ""

fetch(url)
  .then(function(response) {
    return response.json()
  })
  .then(function(peli) {
    var trailer = peli.results[0].key

    urlTrailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + trailer + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  })


var url = "https://api.themoviedb.org/3/movie/"+ query +"?api_key=5d02a3447f4e9a0a8eaf7b743846e766&language=en-US"

fetch(url)
    .then(function(response){
      return response.json();
    })
    .then (function(peli){
       console.log(peli);
       //console.log(data.results);

        var ul = document.querySelector("ul.detallepelis");
        var li = "";
        var p =  "";
        var a = "";

        var title = "";
        var generos = "";
        var idioma = "";
        var sinopsis = "";
        var estreno = "";
        var poster = "";
        var trailer = "";
        var id = 0
        var urlImagen = "https://image.tmdb.org/t/p/original";
        var arrayDeGeneros = peli.genres
        console.log(arrayDeGeneros);



          title = peli.title
          idioma = peli.original_language
          sinopsis = peli.overview
          estreno = peli.release_date
          poster = peli.poster_path
          id = peli.id

         li = "<li>"
         li += "<p class='movieTitle'>" + title + "</p>"
         li += "<p><img src='" + urlImagen + poster + "'></p>"
         li += "<p class='movieData'>" + "<b>Generos:</b>"
         for (var i = 0; i < arrayDeGeneros.length; i++) {
           var gen = arrayDeGeneros[i]
           var nombreGeneros = gen.name
           var idGeneros = gen.id
           li += nombreGeneros
         }

         li += "</p>"
         li += "<p class='movieData'>" + "<b>Idioma original:</b> " + idioma + "</p>"
         li += "<p class='movieData'>" + "<b>Sinapsis:</b> " + sinopsis + "</p>"
         li += "<p class='movieData'>" + "<b>Fecha de estreno:</b> " + estreno + "</p>"
         li += urlTrailer
         li += "</li>"
         ul.innerHTML += li





    })
    .catch(function(error){
      console.log("Error"+ error);
    })


  // IDEA: RECOMENDACIONES


  var boton = document.querySelector("button.recomendaciones")
  boton.addEventListener("click",function(){
    document.querySelector("ul.recomendaciones").style.display = "block";

  })


  var QueryString = new URLSearchParams(location.search)
  var id= QueryString.get("id")

  var url = "https://api.themoviedb.org/3/movie/" + id + "/recommendations?api_key=5d02a3447f4e9a0a8eaf7b743846e766&language=en-US&page=1"
    fetch (url)
    .then(function(response){
      return response.json();
    })
    .then (function(data){
       // console.log(data);
       console.log(data.results);

       var ul = document.querySelector("ul.recomendaciones");
       var li = "";
       var p =  "";
       var a = "";
       var arrayDePelis = data.results;
       var peli = "";
       var title = "";
       var poster = "";
       var id = 0
       var urlImagen = "https://image.tmdb.org/t/p/original";

       for (var i = 0; i < arrayDePelis.length; i++) {
         peli = arrayDePelis[i]
         title = peli.title
         poster = peli.poster_path
         id = peli.id

         a = "<a href='detallePelis?id="+ id + "'>"
           a += "<p class='movieTitle'>" + title + "</p>"
           a += "<p><img src='" + urlImagen + poster + "'></p>"
         a += "</a>"

         ul.innerHTML += "<li class='mySlides1'>" + a + "</li>"

         // console.log(peli.title);
         // console.log(peli.poster_path);
       }
        showSlides(1, 0);
    })
    .catch(function(error){
      console.log("Error"+ error);
    })


// IDEA: pelis favs

// IDEA: BLOQUE 1

// Obtengo la info de local storage
var json = localStorage.getItem("pelisPrefes")

// Si ya habia favoritos..
if (json != null) {
  // Desempaquetar el string JSON
  var objLit = JSON.parse(json)

  // De todo el objeto literal me interesa EL ARRAY
  var favoritos = objLit.carac

}
else {
  // Si no habia creo el listado como VACIO
  var favoritos = []
}

// IDEA: BLOQUE 2

if (favoritos.indexOf(id) != -1) {


    document.querySelector("img.corazonVacio").style.display = "none";
    document.querySelector("img.corazonLleno").style.display="block";

}

document.querySelector("img.corazonVacio").onclick = function() {
  // IDEA: BLOQUE 3

    favoritos.push(id)


  // IDEA: BLOQUE 4

  // Lo vuelvo a pasar a OBJ literal

  obj = {
    carac: favoritos
  }

  // LO transformo en JSON
  json = JSON.stringify(obj)

  // Lo guardo en Local Storage
  localStorage.setItem("pelisPrefes", json)

  document.querySelector("img.corazonVacio").style.display = "none";
  document.querySelector("img.corazonLleno").style.display="block";
}

document.querySelector("img.corazonLleno").onclick = function() {
  // IDEA: BLOQUE 3


    // La quita
    var posicion = favoritos.indexOf(id)
    favoritos.splice(posicion,1)


  // IDEA: BLOQUE 4

  // Lo vuelvo a pasar a OBJ literal

  obj = {
    carac: favoritos
  }

  // LO transformo en JSON
  json = JSON.stringify(obj)

  // Lo guardo en Local Storage
  localStorage.setItem("pelisPrefes", json)

  document.querySelector("img.corazonVacio").style.display = "block";
  document.querySelector("img.corazonLleno").style.display="none";
}


})
