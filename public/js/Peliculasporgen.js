window.addEventListener("load",function(){

var QueryString = new URLSearchParams(location.search)
var nombre= QueryString.get("nombre")
var id= QueryString.get("id")
console.log(id,nombre);

var genreURL = "https://api.themoviedb.org/3/discover/movie?api_key=5d02a3447f4e9a0a8eaf7b743846e766&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=" + id
  fetch(genreURL)
  .then(function(response){
    return response.json();
  })

  .then (function (data) {
    console.log(data);
    var h1= document.querySelector("div.pelisporgenero h1");
    h1.innerHTML+=nombre;
    var ul = document.querySelector("div.pelisporgenero ul");
    var li = "";
    var a = "";
    var title = "";
    var poster = "";
    var id = "";
    var urlImagen = "https://image.tmdb.org/t/p/original"
    var arrayDePeliculas= data.results
    var array=0;
    for (var i = 0; i < arrayDePeliculas.length; i++) {
      title = arrayDePeliculas[i].title;
      id= arrayDePeliculas[i].id;
      poster= arrayDePeliculas[i].poster_path

      a = "<a href='detallePelis?id="+ id + "'>"
        a += "<img src='" + urlImagen + poster + "'>"
        a += "<p class='movieTitle'>" + title + "</p>"
      a += "</a>"
      ul.innerHTML+= "<li class='mySlides1'>" + a + "</li>"
    }
    showSlides(1, 0);
  })



  .catch(function(error){
    console.log("Error"+ error);
  })




























})
