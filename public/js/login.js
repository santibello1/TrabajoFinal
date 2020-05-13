window.onload = function () {
  var usuarioLogueado = localStorage.getItem("usuario")

  if (usuarioLogueado != null) {
    location.href = ""
}

window.localStorage.clear();
  var iniciarSesion = document.querySelector("button.iniciarSesion")
  iniciarSesion.onclick = function (event) {

    var usuario = document.querySelector("input.usuario").value
    var mail = document.querySelector("input.mail").value
    var genero = document.querySelector("select.genero").value

    console.log(usuario);
    console.log(mail);
    console.log(genero);
    if (usuario.length>0 && mail.length>0 && genero.length>0) {
      console.log("entro al if");
      window.localStorage.removeItem("usuario")

      window.localStorage.setItem("usuario" , usuario)
      window.localStorage.setItem("mail" , mail)
      window.localStorage.setItem("genero" , genero)

      console.log(window.localStorage.getItem('genero'));
      console.log(window.localStorage);
    }
    else {
      event.preventDefault();
      alert("completa todos los datos")
      console.log(window.localStorage);
    }

  }


}
