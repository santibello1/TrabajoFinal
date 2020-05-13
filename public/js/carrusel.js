
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}


  var slideIndex = [1,1,1];
  var slideId = ["mySlides1", "mySlides2", "mySlides3"];

  // IDEA: cada una de estas showSlides es un n y un no
  function showSlides(n,no){
    var i;
    var x=document.getElementsByClassName(slideId[no]);
    // IDEA: aca va a salir el mySlides en el que yo estoy parada
    // IDEA: si estoy parada en el no=0 estoy en el mySlides1, si estoy parada en el no=1 estoy en el mySlides2...
    // console.log(x);
      if (n > x.length) {slideIndex[no] = 1}
    // IDEA: aca vuelve a mostar la primera slide. Cuando 1 es mayor a la cantidad de slides que tiene, vuelve a aparecer la primera.

    if (n < 1) {slideIndex[no] = x.length}
    // IDEA: aca muestra la ultima slide, cuando la cantidad de slides de mySlidesX es menor a 1, aparece la ultima slide

    for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
      }
    // IDEA: oculta TODO
    console.log(x[slideIndex[no]-1]);
    x[slideIndex[no]-1].style.display = "block";
    // IDEA: del el elemento que estoy muestro el que aprete el boton, es -1 porque es un array y es el primero.
  }
