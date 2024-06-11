var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função somar
    somar();
  }


  function somar() {

    var valorlido
    function lerletra() {
        valorlido = document.getElementById("primeiro_numero_inteiro").value;
        return console.log(valorlido);

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




  }
