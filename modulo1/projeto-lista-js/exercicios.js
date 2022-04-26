// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let alturaRetangulo = Number(prompt("Insira a altura do retângulo:"));
  let larguraRetangulo = Number(prompt("insira a largura do retângulo:"));

  console.log(alturaRetangulo * larguraRetangulo);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Insira o ano atual:"));
  let anoNascimento = Number(prompt("Insira o seu ano de nascimento:"));

  console.log(anoAtual - anoNascimento);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let imc = peso / (altura * altura);

  return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nomeUsuario = prompt("Qual seu nome?");
  let idadeUsuario = prompt("Qual a sua idade?");
  let emailUsuario = prompt("Qual seu e-mail?");

  console.log("Meu nome é " + nomeUsuario + ", tenho " + idadeUsuario + " anos, e o meu email é " + emailUsuario + ".");
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let primeiraCor = prompt("Qual sua primeira cor favorita?");
  let segundaCor = prompt("Qual sua segunda cor favorita?");
  let terceiraCor = prompt("Qual sua terceira cor favorita?");

  const coresFAvoritas = [primeiraCor, segundaCor, terceiraCor];

  console.log(coresFAvoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

    return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let ultimo = array[array.length - 1];
   return ultimo;
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  let primeiraPalavra = array[0];
  let ultimaPalavra = array[array.length - 1];
  let trocaPalavra = primeiraPalavra;
  
  primeiraPalavra = ultimaPalavra;
  ultimaPalavra = trocaPalavra;

  array[0] = primeiraPalavra;
  array[array.length - 1] = ultimaPalavra;

  return array;
  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Insira o ano atual:")); // 2007
  let anoNascimento = Number(prompt("Insira o seu ano de nascimento:")); // 1989
  let anoIdentidade = Number(prompt("Qual ano sua carteira de identidade foi emitida?")); // 2002

  let idade = anoAtual - anoNascimento;
  let idadeIdentidade = anoAtual - anoIdentidade;
 
  let menorVinte = idade <= 20 && idadeIdentidade / 5 >= 1;
  let entreVinteECinquenta = idade > 20 && idade <= 50 && idadeIdentidade / 10 >= 1;
  let maiorCinquenta = idade > 50 && idadeIdentidade / 15 >= 1;

  console.log(menorVinte || entreVinteECinquenta || maiorCinquenta);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}