// EXERCICIOS DE INTERPRETACAO DE CODIGO
// 1. a. FALSE
//    b. FALSE
//    c. TRUE
//    d. BOOLEAN

// 2. Para resolver o problema, nas duas variáveis que utilizam o prompt deve ser feita a conversão para NUMBER, já que as informações inseridas no prompt sempre vão ser lidas como STRING.
// O valor impresso vai ser apenas a concatenação dos números e não a soma;

// 3. let primeiroNumero = Number(prompt("Digite um numero!"));
// let segundoNumero = Number(prompt("Digite outro numero!"));
// const soma = primeiroNumero + segundoNumero
// console.log(soma)


// EXERCICIOS DE ESCRITA DE CODIGO
//1.
let idadeUsuario = Number(prompt("Qual a sua idade?"));
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo ou melhor amiga?"));

let idadeMaior = idadeUsuario > idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMaior);

let idadeDiferenca = idadeUsuario - idadeAmigo
console.log("A diferença de idade é:", idadeDiferenca, "anos");

//2.
let numeroPar = Number(prompt("Insira um número PAR:"));
let divisaoNumero = numeroPar % 2

console.log("O resto da divisão é:", divisaoNumero);
// c.sempre que o número for multiplo do numero dividido, o resto sempre será 0, pois o resultado da divisão é um numero inteiro.
// d.Quando é colocado um número ímpar o resto da divisão é 1, já que numeros impares não são multiplos de 2.

//3.
let idadeAnos = Number(prompt("Qual a sua idade?:"));
let idadeMeses = idadeAnos * 12
let idadeDias = idadeAnos * 365.25
let idadeHoras = idadeDias * 24

console.log("A idade do usuário em meses é:", idadeMeses);
console.log("A idade do usuário em dias é:", idadeDias);
console.log("A idade do usuário em horas é:", idadeHoras);

//4.
let primeiroNumero = Number(prompt("Insira um número:"));
let segundoNumero = Number(prompt("Insira outro número:"));

console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero);

console.log("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero);

console.log("O primeiro numero é divisível pelo segundo?", primeiroNumero % segundoNumero === 0);

console.log("O segundo numero é divisível pelo primeiro?", segundoNumero % primeiroNumero === 0);
