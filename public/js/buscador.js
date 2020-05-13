window.addEventListener("load",function(){

// IDEA: tiene q quedar guardado lo que busque


  var urlParams = new URLSearchParams(window.location.search);
  var texto = urlParams.get('buscar');
console.log(texto);
fetch("https://api.themoviedb.org/3/search/movie?api_key=5d02a3447f4e9a0a8eaf7b743846e766&query="+texto+"&page=1&include_adult=true")
.then(function(response) {
return response.json()
})
.then(function(data){

    console.log(data)

    var ul= document.querySelector("ul.genbro")
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
      poster = peli.poster_path
      if (poster==null) {
        title = peli.title
        console.log(peli);
        id = peli.id
         ul.innerHTML += "<li class='mySlides1'><p class='movieTitle'>"+ title + "</p></li>";
      }
    else {
      poster = peli.poster_path

      title = peli.title
      console.log(peli);

      id = peli.id

      a = "<a href='detallePelis?id="+ id + "'>"
        a += "<img src='" + urlImagen + poster + "'>"
        a += "<p class='movieTitle'>" + title + "</p>"
      a += "</a>"
       ul.innerHTML += "<li class='mySlides1'>"+a+"</li>";
    }
    }
      showSlides(1, 0);
})
.catch(function(error) {
console.log("Error: " + error);
})





})
