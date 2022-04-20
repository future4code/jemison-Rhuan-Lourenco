// EXERCICIOS DE INTERPRETACAO DE CODIGO
// 1.
// a. undefined
// b. null
// c. 11
// d. 3
// e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
// f. 9

//2.SUBI NUM ONIBUS EM MIRROCOS

//EXERCICIOS DE ESCRITA DE CODIGO

//1.
let nomeDoUsuario = prompt("Qual seu nome?");
let emailDoUsuario = prompt("Qual seu e-mail?");

console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario + "!");

//2.
let array = ["hamburguer", "pizza", "churrasco", "estrogonofe", "japa"];
//a.
console.log(array);
//b.
console.log("Essas são as minhas comidas preferidas: ");
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

//c.
let comidaFavorita = prompt("Qual sua comida favorita?");
array[1] = comidaFavorita;

console.log(array);

//3.
//a.
let listaDeTarefas = [];

//b.
let primeiraTarefa = prompt("Digite a primeira tarefa que você precisa realizar hoje:");
let segundaTarefa = prompt("Digite a segunda tarefa que você precisa realizar hoje:");
let terceiraTarefa = prompt("Digite a terceira tarefa que você precisa realizar hoje:");

listaDeTarefas.push(primeiraTarefa, segundaTarefa, terceiraTarefa);

//c.
console.log(listaDeTarefas);

//d.
let tarefaRealizada = prompt("Digite o índice da tarefa que já realizou: 0, 1 ou 2:");

//e.
listaDeTarefas.splice(tarefaRealizada, 1);

//f.
console.log(listaDeTarefas);

//DESAFIO
//1.
let frase = prompt("Digite uma frase:");
let arrayFrase = frase.split(" ");
console.log(arrayFrase);

//2.
const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
const indiceAbacaxi = frutas.indexOf("Abacaxi");

console.log("O índice da palavra Abacaxi é: " + indiceAbacaxi);
console.log("O tamanho do array é: " + frutas.length);