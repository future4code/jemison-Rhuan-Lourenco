//Exercícios de interpretação de código
//1. 10
//   10, 5

//2. 10, 10, 10

//3. let horasTrabalhadasPorDia = prompt("Quantas horas você trabalha por dia?")
//   let salarioPorDia = prompt("Quanto você recebe por dia?")
//   alert(`Voce recebe ${salarioPorDia/horasTrabalhadasPorDia} por hora`)


//Exercícios de escrita de código

//1.
let nome
let idade
    
console.log(typeof nome);
console.log(typeof idade);
//d)resultado foi undefined pois não tem nada declarado na variável, então o programa mantém como indefinido.

nome = prompt("Qual é o seu nome?");
idade = prompt("Qual a sua idade?");
//f)nesse caso o resultado mudou para string pois quando utilizamos o prompt o sistema guarda toda informação como string.

console.log(typeof nome);
console.log(typeof idade);

console.log("Olá", nome,", você tem", idade, "anos")

//2.
const cafeHoje = "Você já tomou café da manhã hoje?";
const almocoHoje = "Você já almoçou hoje?";
const jantaHoje = "Você já jantou hoje?";

let respostaCafe = prompt(cafeHoje);
let respostaAlmoco = prompt(almocoHoje);
let respostaJanta = prompt(jantaHoje);

console.log(cafeHoje, respostaCafe);
console.log(almocoHoje, respostaAlmoco);
console.log(jantaHoje, respostaJanta);

//3.
let a = 10
let b = 25
let c = b
b = a
a = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

//DESAFIO
let primeiroNumero = Number(prompt("Digite um numero"));
let segundoNumero = Number(prompt("Digite um numero"));

console.log(primeiroNumero, "+" ,segundoNumero, "=" ,primeiroNumero+segundoNumero);
console.log(primeiroNumero, "x" ,segundoNumero, "=" ,primeiroNumero*segundoNumero);
