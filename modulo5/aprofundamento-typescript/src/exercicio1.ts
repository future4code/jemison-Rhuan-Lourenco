// EXERCICIO 01

//a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

const minhaString : string = "labenu"

// Caso tente atribuir algum dado que não seja uma string vai ser acusado um erro, pois a variavel foi tipada como string e recebe apenas valores que são considerados string.



//b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? 
//   Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

const meuNumero : number | string = 10

// Para as variáveis poderem assumir valores diferentes, podemos usar o chamado UNION TYPE, inserindo uma | entre os tipos.



//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:  `nome`, que é uma string;  `idade`, que é um número; `corFavorita`, que é uma string.

enum CoresArcoIris {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

const pessoa1 : Pessoa = {
    nome: "Rhuan",   
    idade: 29,
    corFavorita: CoresArcoIris.VIOLETA,
}

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

type Pessoa = {
    nome : string,
    idade : number,
    corFavorita : string
}

const pessoa2 : Pessoa = {
    nome: "Fernanda",   
    idade: 27,
    corFavorita: CoresArcoIris.ANIL,
}

const pessoa3 : Pessoa = {
    nome: "Rose",   
    idade: 54,
    corFavorita: CoresArcoIris.VERMELHO,
}

const pessoa4 : Pessoa = {
    nome: "Astrodev",   
    idade: 20,
    corFavorita: CoresArcoIris.AZUL,
}

//d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.
