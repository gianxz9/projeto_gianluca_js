var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função dividir
  dividir();

});


//Função diviir
function dividir() {

  //Captura o que está dentro do primeiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let distancia_percorrida_por_km = Number(document.getElementById("distancia_percorrida_por_km").value);

  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  let tempo_em_horas = Number(document.getElementById("tempo_em_horas").value);

  //Realiza a soma do valor que está na variável "primeiro_numero_inteiro" com o valor que está na
  //variável "segundo_numero_inteiro"
  //E a variável "resultado_divisao" recebe o valor da soma
  let velocidade_media = distancia_percorrida_por_km / tempo_em_horas;

  //Aqui vai escrever no input "resultado_soma" o valor que está armazenado na variável "resultado_divisao"
  document.getElementById("velocidade_media").value = velocidade_media;


}
