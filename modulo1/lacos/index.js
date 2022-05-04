// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//1. Enquanto o valor de i for menor que 5, ele soma o valor de i na variável valor. 10.

//2. a) 19 21 23 25 27 30
//   b) Sim, é suficiente. Poderiamos utilizar o indexOf.

//3. *
//   **
//   ***
//   ****

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1. 
const bichinhoEstimacao = Number(prompt("Quantos bichinhos de estimação você tem?"))
const arrayNomePet = []

if (bichinhoEstimacao === 0) {
    console.log("Que pena! Você pode adotar um pet!")
    } else {
    for(let i = 0; i < bichinhoEstimacao; i++) {
    let nomePet = prompt("Qual nome do seu pet?")

    arrayNomePet.push(nomePet)
    }
}
console.log(arrayNomePet)

//2.
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//a)
for(let i = 0; i < array.length; i++) {
    const elemento = array[i]
    console.log(elemento)
}

//b)
for(let i = 0; i < array.length; i++) {
    const elemento = array[i] / 10
    console.log(elemento)
}

//c)
const arrayNumerosPares = []
for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0){
    arrayNumerosPares.push(array[i])
    }
}
console.log(arrayNumerosPares)

//d)
const arrayString = []

for(let i = 0; i < array.length; i++) {
    const adicionarArray = "O elemento do índex " + array.indexOf(array[i]) + " é " + array[i]
    arrayString.push(adicionarArray)
}

console.log(arrayString);

//e)
let maiorValor = 0
let menorValor = array[0]

for(let i = 0; i < array.length; i++) {
    if (array[i] > maiorValor){
    maiorValor = array[i]
    }
}
for(let i = 0; i < array.length; i++) {
    if (array[i] < menorValor){
    menorValor = array[i]
    }
}
console.log("O maior número é " + maiorValor + " e o menor é " + menorValor)

// DESAFIO

//1.
//a)
const primeiroJogador = Number(prompt("Digite um número"));
console.log("Vamos jogar!");

//b)
let segundoJogador = ""
for(i = 1; segundoJogador != primeiroJogador ; i++) {
    segundoJogador = Number(prompt("Tente adivinhar o número do primeiro jogador:"));

    if (segundoJogador != primeiroJogador) {
        console.log("O número chutado foi: " + segundoJogador);
	    if (segundoJogador < primeiroJogador) {
	        console.log("Errou. O número escolhido é menor")
	    } else {
	        console.log("Errou. O número escolhido é maior")
	    }
    } else {
        console.log("Acertou")
        console.log("O número de tentativas foi: " + i)
    }
}

//2.

function sorteadorNumero(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroSorteado = sorteadorNumero(1, 100);

console.log("Vamos jogar!");

let segundoPlayer = ""
for(i = 1; segundoPlayer != numeroSorteado ; i++) {
    segundoPlayer = Number(prompt("Tente adivinhar o número do computador:"));

    if (segundoPlayer != numeroSorteado) {
        console.log("O número chutado foi: " + segundoPlayer);
	    if (segundoPlayer < numeroSorteado) {
	        console.log("Errou. O número escolhido é menor")
	    } else {
	        console.log("Errou. O número escolhido é maior")
	    }
    } else {
        console.log("Acertou")
        console.log("O número de tentativas foi: " + i)
    }
}
