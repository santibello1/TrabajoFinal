// window.onload = function () {
window.addEventListener("load",function(){
  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// IDEA: HEADER DE BARRITAS PARA MEDIA MOBILE

// IDEA: pelis populares
  var url = "https://api.themoviedb.org/3/movie/popular?api_key=5d02a3447f4e9a0a8eaf7b743846e766&language=en-US&page=1"
  fetch(url)
    .then(function(response){
      return response.json();
    })
    .then (function(data){
       //console.log(data);
       //console.log(data.results);

       var ul = document.querySelector("ul.peliculaspopu");
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

         a = "<a href='movies/detallePelis?id="+ id + "'>"
           a += "<img src='" + urlImagen + poster + "'>"
           a += "<p class='movieTitle'>" + title + "</p>"
         a += "</a>"

         ul.innerHTML += "<li class='mySlides1'>" + a + "</li>"

         //console.log(peli.title);
         //console.log(peli.poster_path);
       }
       // IDEA: cree el array que va a ayudarme a elegir cada una de los tres carruselles que voy a crear
        showSlides(1, 0);
    })
    .catch(function(error){
      console.log("Error"+ error);
    })


// IDEA: pelis mas puntuadas

    var url = "https://api.themoviedb.org/3/movie/upcoming?api_key=5d02a3447f4e9a0a8eaf7b743846e766&language=en-US&page=1"
    fetch(url)
      .then(function(response){
        return response.json();
      })
      .then (function(data){
         //console.log(data);
         //console.log(data.results);

         var ul = document.querySelector("ul.proxpeliculas");
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

           a = "<a href='movies/detallePelis?id="+ id + "'>"
             a += "<img src='" + urlImagen + poster + "'>"
             a += "<p class='movieTitle'>" + title + "</p>"
           a += "</a>"

           ul.innerHTML += "<li class='mySlides2'>" + a + "</li>"

           //console.log(peli.title);
           //console.log(peli.poster_path);
         }
         // IDEA: cree el array que va a ayudarme a elegir cada una de los tres carruselles que voy a crear. Esta info agarra lo que el fech puso en la pag y lo oculta. Me aseguroque existan despues del fech porque la respuesta es asincronica
          showSlides(1, 1);
      })
      .catch(function(error){
        console.log("Error"+ error);
      })


  // IDEA: proximos Estrenos


  var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=5d02a3447f4e9a0a8eaf7b743846e766&language=en-US&page=1"
  fetch(url)
    .then(function(response){
      return response.json();
    })
    .then (function(data){
       //console.log(data);
       //console.log(data.results);

       var ul = document.querySelector("ul.peliculasmaspun");
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

         a = "<a href='movies/detallePelis?id="+ id + "'>"
           a += "<img src='" + urlImagen + poster + "'>"
           a += "<p class='movieTitle'>" + title + "</p>"
         a += "</a>"

         ul.innerHTML += "<li class='mySlides3'>" + a + "</li>"

         //console.log(peli.title);
         //console.log(peli.poster_path);
       }
       // IDEA: cree el array que va a ayudarme a elegir cada una de los tres carruselles que voy a crear
        showSlides(1, 2);
    })
    .catch(function(error){
      console.log("Error"+ error);
    })



})
