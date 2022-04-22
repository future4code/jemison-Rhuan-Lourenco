//EXERCICIOS DE INTERPRETACAO DE CODIGO

//1.a)
//  10 
//  50

// b) A função ia ser executada normalmente, mas não apareceria nada no console.

//2.a) Essa função recebe um texto do usúario, coloca ela toda minuscula e procura no texto se contem a palavra cenoura. Se tiver ela imprime true e se não tiver false.
//  b)
//  i. true
//  ii. true
//  iii. true


//EXERCICIOS DE ESCRITA DE CODIGO

// 1.
// a)
function minhasInfos() {
    console.log("Eu sou Rhuan, tenho 28 anos, moro em Uberaba e sou estudante.")
}

// b)

function retornaInfoPessoa(nome, idade, cidade, profissao) {
    console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e sou " + profissao + ".")
}

retornaInfoPessoa("Lais", 23, "Sao paulo", "instrutora");

// 2.
// a)
function somaDoisNumeros(numero1, numero2) { 
    const resultado = numero1 + numero2;

    return resultado;
}
somaDoisNumeros(5, 8);


// b)
function verificaNumeroMaior(numero3, numero4) { 
    const result = numero3 >= numero4

    return result;
}

//verificaNumeroMaior(7, 3);

// c)
function numeroEPar(num1) {
    const result1 = num1 % 2 === 0

    return result1;
}

//numeroEPar(9);

// d)
function mensagem(frase) {
    console.log(frase.length);
    console.log(frase.toLowerCase());
}

mensagem("Eu me chamo RHUAN");

//3.

function somaBasica(numero1, numero2) { 
    const resultado = numero1 + numero2;

    return resultado
}

function subtracaoBasica(numero1, numero2) { 
    const resultado = numero1 - numero2;

    return resultado
}

function multiplicacaoBasica(numero1, numero2) { 
    const resultado = numero1 * numero2;
    
    return resultado
}

function divisaoBasica(numero1, numero2) { 
    const resultado = numero1 / numero2;
    
    return resultado
}

const primeiroNumero = Number(prompt("Digite um numero:"));
const segundoNumero = Number(prompt("Digite outro numero:"));

console.log("Números inseridos: " + primeiroNumero + " e " + segundoNumero);
console.log("Soma:" + somaBasica(primeiroNumero, segundoNumero));
console.log("Diferença:" + subtracaoBasica(primeiroNumero, segundoNumero));
console.log("Multiplicação:" + multiplicacaoBasica(primeiroNumero, segundoNumero));
console.log("Divisao:" + divisaoBasica(primeiroNumero, segundoNumero));