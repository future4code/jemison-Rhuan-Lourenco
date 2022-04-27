// EXERCICIOS DE INTERPRETACAO DE CODIGO

//1.
//a)
// Matheus Nachtergaele
// Virginia Cavendish
// canal: 'Globo', horario: '14h'

//2.
//a)
// nome: 'Juca', idade: 3, raca: 'SRD'
// nome: 'Juba', idade: 3, raca: 'SRD'
// nome: 'Jubo', idade: 3, raca: 'SRD'

//b) ele faz uma cópia do objeto, e essa cópia podemos manipular como quisermos.

//3.
//a)
// false
// undefined

//b) console.log(minhaFuncao(pessoa, "backender")) = nesse console.log a função fez a busca pela propriedade backender e retornou false.
// console.log(minhaFuncao(pessoa, "backender")) - já nesse console.log a função fez a busca mas retornou UNDEFINED pois não tem essa propriedade no objeto.


// EXERCICIOS DE ESCRITA DE CODIGO

//1.
//a)
const pessoa = {
    nome: "Rhuan",
    apelidos: ["erreaga", "erre", "chewie"]
}
    
function recebeObjeto(nome, apelidos) {
    console.log("Eu sou " + nome + ", mas pode me chamar de: " + apelidos)
}
    
console.log(recebeObjeto(pessoa.nome, pessoa.apelidos));
    
//b) 
const outraPessoa = {
    nome: pessoa.nome,
    apelidos: ["rhuanzera", "narigudo", "rhurhu"]
}
    
console.log(recebeObjeto(outraPessoa.nome, outraPessoa.apelidos));
    
//2.
//a)
const cadastroUm = {
    nome: "Rhuan",
    idade: 28,
    profissao: "auxiliar de escritorio"
}
    
const cadastroDois = {
    nome: "Fernanda",
    idade: 27,
    profissao: "designer de interiores"
}
    
function retornaArray(pessoa) {
    return [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]
}
    
retornaArray(cadastroUm);
retornaArray(cadastroDois);

//3.
//a)
const carrinho = [];

//b)
const frutaUm = {
    nome: "Laranja",
    disponibilidade: true
}

const frutaDois = {
    nome: "Limão",
    disponibilidade: true
}

const frutaTres = {
    nome: "Abacaxi",
    disponibilidade: true
}

//c)
function adicionarCarrinho(fruta) {
    carrinho.push(fruta);
}

adicionarCarrinho(frutaUm);
adicionarCarrinho(frutaDois);
adicionarCarrinho(frutaTres);

console.log(carrinho);

//DESAFIO

//1.
function usuario() {
    const nome = prompt("Qual seu nome?");
    const idade = prompt("Qual sua idade?");
    const profissao = prompt("Qual sua profissão?");

    dadosUsuario = {
        nome: nome,
        idade: idade,
        profissao: profissao
    }
    console.log(dadosUsuario);
    console.log(typeof dadosUsuario);
}

usuario();

//2.
const primeiroFilme = {
    nome: "Avengers",
    lancamento: 2012
}

const segundoFilme = {
    nome: "O Hobbit",
    lancamento: 2012
}

function filmes(filmeUm, filmeDois) {
    const maior = filmeUm.lancamento < filmeDois.lancamento;
    const igual = filmeUm.lancamento === filmeDois.lancamento;

    console.log("O primeiro filme foi lançado antes do segundo? " + maior);
    console.log("O primeiro filme foi lançado no mesmo ano do segundo? " + igual);
}

filmes(primeiroFilme, segundoFilme);

//3.
function controleEstoque(fruta) {
    return !fruta.disponibilidade  
}
controleEstoque(frutaUm);