var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a function verificarVogal
    verificarVogal();
  });


  function verificarVogal() {

    var  letra = document.getElementById("insira_uma_letra").value.toLowerCase();



    switch (letra) {
        case "a": document.getElementById("resultado").value = "É uma vogal";
        break;
        case "e": document.getElementById("resultado").value = "É uma vogal";
        break;
        case "i": document.getElementById("resultado").value = "É uma vogal";
        break;
        case "o": document.getElementById("resultado").value = "É uma vogal";
        break;
        case "u": document.getElementById("resultado").value = "É uma vogal";
        break
        default:
    }





    /*
    if  (letra  == /[aeiou]/.test(letra)) {

      document.getElementById("resultado").innerText = "É uma vogal";
    }else{
      document.getElementById("resultado").innerText = "Não é uma vogal";
    }
    */

}


        //return console.log(valorlido);





  /*
    function isvogal(caracter) {
        switch (caracter) {
            case "a":
            case "A":
            case "e":
            case "E":
            case "i":
            case "I":
            case "o":
            case "O":
            case "u":
            case "U":
            break
            return true
            default:
            return false
        }
  }
        var letra
        lerletra ();
        if (isvogal(letra) == true) {
            alert("A letra é Vogal")
        } else {
            alert("A letra é consoante")
        }
    */
