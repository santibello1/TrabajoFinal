window.addEventListener("load",function(){
  console.log(localStorage);
  console.log(localStorage.pelisPrefes);

  var arrayDePelisPrefes= JSON.parse(localStorage.pelisPrefes).carac;
console.log(arrayDePelisPrefes);
for (var i = 0; i < arrayDePelisPrefes.length; i++) {
  var idPelisPrefes= arrayDePelisPrefes[i]
  var url= "https://api.themoviedb.org/3/movie/"+ idPelisPrefes+ "?api_key=5d02a3447f4e9a0a8eaf7b743846e766&language=en-US"
  fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){

   var ul= document.querySelector('ul.pelisFavs');
   var li="";
   var a = "";
   var title = "";
   var poster = "";
   var id = "";
   var urlImagen = "https://image.tmdb.org/t/p/original"
   var arrayDePeliculas= data;
   var array=0;

     title = arrayDePeliculas.title;
     id= arrayDePeliculas.id;
     poster= arrayDePeliculas.poster_path

     a = "<a href='detallePelis?id="+ id + "'>"
       a += "<img src='" + urlImagen + poster + "'>"
       a += "<p class='movieTitle'>" + title + "</p>"
     a += "</a>"
     ul.innerHTML+= "<li class='mySlides1'>" + a + "</li>"

   showSlides(1, 0);


  })
   .catch(function(error){
     console.log("Error"+ error);
   })


}

































})
