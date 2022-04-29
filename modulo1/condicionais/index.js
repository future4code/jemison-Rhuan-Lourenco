// EXERCICIOS DE INTERPRETACAO DE CODIGO

//1
//a) O teste verifica se o número que o usuario digitou é par.
//b) Números pares
//c) Números impares.

//2.
//a) O cógido serve para descobrir o preço de alguma fruta no mercado.
//b) O preço da fruta Maça é R$ 2.25
//c) O preço da fruta Pêra é R$ 5

//3.
//a) Ela pergunta um número ao usúario e o transforma de string para number.
//b) 10 = essa mensagem é secreta!!!. -10 = 
//c) vai ter erro pois a variavel mensagem não foi declarada fora do IF.

// EXERCICIOS DE ESCRITA DE CODIGO

//1.
//a) b)
const idadeUsuario = Number(prompt("Qual a sua idade?"));

if (idadeUsuario >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

//2.
const turnoDoDia = prompt("Qual turno do dia você estuda? M (matutino) ou V (Vespertino) ou N (Noturno)").toLowerCase();

if (turnoDoDia === "m") {
    console.log("Bom dia!");
} else if(turnoDoDia === "v") {
    console.log("Boa tarde!");
} else {
    console.log("Boa Noite!");
}

//3.
const turnoDia = prompt("Qual turno do dia você estuda? M (matutino) ou V (Vespertino) ou N (Noturno)").toLowerCase()

switch (turnoDia){
    case 'm':
        console.log("Bom dia!")
        break
    case 'v':
        console.log("Boa tarde!")
        break
    case 'n':
        console.log("Boa Noite!")
        break
}

//4.
const generoFilme = prompt("Qual o gênero de filme que vão assistir?").toLowerCase();
const precoIngresso = prompt("Qual o preço do ingresso?");

if (generoFilme === "fantasia" && precoIngresso < "15") {
    console.log("Bom filme!");
} else {
    console.log("Escolha outro filme :(");
}

// DESAFIO

//1.
const generoDoFilme = prompt("Qual o gênero de filme que vão assistir?").toLowerCase();
const precoDoingresso = Number(prompt("Qual o preço do ingresso?"));

if (generoDoFilme === "fantasia" && precoDoingresso < 15) {
    const lanchinho = prompt("Qual lanchinho vocês vão querer comprar? (pipoca, chocolate, doces, etc)").toLowerCase();
    console.log("Bom filme!");
    console.log("Aproveite o seu " + lanchinho)
} else {
    console.log("Escolha outro filme :(");
}

//2.
const nome = prompt("Digite seu nome completo:").toLowerCase();
const tipoDeJogo = prompt("Qual tipo de jogo? IN indica internacional; e DO indica doméstico;").toUpperCase();
const etapaDoJogo = prompt("Qual etapa do jogo? SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final").toUpperCase();
const categoria = Number(prompt("Qual categoria? Opções 1, 2, 3 ou 4"));
const quantidadeIngressos = Number(prompt("Qual a quantidade de ingressos?"));

const etapas = {
    SF: "Semi final",
    DT: "Terceiro Lugar",
    FI: "Final"
}

const precos = {
    SF: {
        1: 1320,
        2: 880,
        3: 550,
        4: 220
    },

    DT: {
        1: 660,
        2: 440,
        3: 330,
        4: 170
    },

    FI: {
        1: 1980,
        2: 1320,
        3: 880,
        4: 330
    }
}

const tipo = {
    IN: "Internacional",
    DO: "Nacional"
}

const dollar = 4.10
let precoUnitario = precos[etapaDoJogo][categoria];
let precoFinal = quantidadeIngressos * precoUnitario;


if (tipoDeJogo === "IN") {
    precoUnitario = precoUnitario * dollar
    precoFinal = precoFinal * dollar
} 


console.log("---Dados da compra---");
console.log("Tipo de jogo: " + tipo[tipoDeJogo]);
console.log("Etapa do jogo: " + etapas[etapaDoJogo]);
console.log("Categoria: " + categoria);
console.log("Quantidade de Ingressos: " + quantidadeIngressos);
console.log("---Valores---");
console.log("Valor do ingresso: " + precoUnitario.toFixed(2));
console.log("Valor total: " + precoFinal.toFixed(2));
