window.addEventListener("load",function(){
  console.log(localStorage);
    var usuario = localStorage.getItem("usuario")
    if (usuario.length>0) {
      var ingresarGrande = document.querySelector("a.login")
      var ingresarMobile = document.querySelector("div#myLinks a.login")
      var usuarioHeader = document.querySelector("p.nameUsuario")
      var usuarioMobile = document.querySelector("p.nameUsuarioMobile")
      var pelisFavs = document.querySelector ("a.pelisPrefes")
      var pelisFavsMobile = document.querySelector ("a.pelisPrefesMobile")
      ingresarGrande.style.display = "none";
      ingresarMobile.style.display = "none";
      usuarioHeader.style.display = "block";
      usuarioMobile.style.display = "block";
      pelisFavs.style.display = "block";
      pelisFavsMobile.style.display = "block";

      usuarioHeader.innerHTML +=  usuario
      usuarioMobile.innerHTML += usuario
    }

})
function menuFunction() {
  var b = document.querySelector("form.buscador");
  var x = document.getElementById("myLinks");
  var pelisFavs = document.querySelector ("a.pelisPrefes")
  if (x.style.display === "block") {
    x.style.display = "none";
    b.style.display = "block";
  } else {
    x.style.display = "block";
     b.style.display = "none";
  }
}
