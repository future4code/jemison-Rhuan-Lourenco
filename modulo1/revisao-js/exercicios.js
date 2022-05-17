// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function (a, b) {
        return a - b
    })
}


// EXERCÍCIO 04
function retornaNumerosPares(array) {
    // const numerosPares = array.filter((numero) => {
    //     return numero % 2 === 0
    // })
    // return numerosPares

    const novoArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            novoArray.push(array[i])
        }
    }
    return novoArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    const numerosPares = array.filter((numero) => {
        return numero % 2 === 0
    })

    const numerosElevadosADois = numerosPares.map((numero) => {
        return Math.pow(numero, 2);
    })
    return numerosElevadosADois
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max(...array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const novoObjeto = { maiorNumero: "", maiorDivisivelPorMenor: "", diferenca: "" }

    if (num1 === num2) {
        novoObjeto.maiorNumero = num1
        novoObjeto.maiorDivisivelPorMenor = num1 % num2 === 0
        novoObjeto.diferenca = num1 - num2
    } else if (num1 > num2) {
        novoObjeto.maiorNumero = num1
        novoObjeto.maiorDivisivelPorMenor = num1 % num2 === 0
        novoObjeto.diferenca = num1 - num2
    } else {
        novoObjeto.maiorNumero = num2
        novoObjeto.maiorDivisivelPorMenor = num2 % num1 === 0
        novoObjeto.diferenca = num2 - num1
    }
    return novoObjeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const primeirosPares = []
    for (i = 0; primeirosPares.length < n; i++) {
        if (i % 2 === 0) {
            primeirosPares.push(i)
        }
    }
    return primeirosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero"
    } else if (ladoA === ladoB && ladoA != ladoC || ladoA === ladoC && ladoA != ladoB || ladoA != ladoB && ladoB === ladoC) {
        return "Isósceles"
    } else if (ladoA != ladoB && ladoB != ladoC) {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const menorValor = Math.min(...array)
    const maiorValor = Math.max(...array)
    let segundoMaior = 0
    let segundoMenor = maiorValor

    const retornaArray = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] < maiorValor && array[i] > segundoMaior) {
            segundoMaior = array[i]
        }
    }
    retornaArray.push(segundoMaior)

    for (let i = 0; i < array.length; i++) {
        if (array[i] > menorValor && array[i] < segundoMenor) {
            segundoMenor = array[i]
        }
    }
    retornaArray.push(segundoMenor)

    return retornaArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const pessoaAnonima = { ...pessoa, nome: "ANÔNIMO" }
    return pessoaAnonima
}


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const temPermissao = []
    for (let i = 0; i < pessoas.length - 1; i++) {
        const atual = pessoas[i]
        if (atual.altura >= 1.5 && atual.idade > 14 && atual.idade < 60) {
            temPermissao.push(atual)
        }
    }
    return temPermissao
}


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const naoTemPermissao = pessoas.filter((atual) => {
        return atual.altura < 1.5 || atual.idade <= 14 || atual.idade >= 60
    })
    return naoTemPermissao
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let i = 0; i < contas.length; i++) {
        const atual = contas[i]
        const somaCompras = atual.compras.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual, 0);
        atual.saldoTotal = atual.saldoTotal - somaCompras
        atual.compras = []
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function (a, b) {
        if (a.nome < b.nome) {
            return -1
        } else if (a.nome > b.nome) {
            return 1
        } else {
            return 0
        }
    })
    return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    consultas.sort(function (a, b) {
        const dataASeparados = a.dataDaConsulta.split("/")
        const dataBSeparados = b.dataDaConsulta.split("/")

        const dataA = new Date(dataASeparados[2], dataASeparados[1] - 1, dataASeparados[0])
        const dataB = new Date(dataBSeparados[2], dataBSeparados[1] - 1, dataBSeparados[0])

        if (dataA < dataB) {
            return -1
        } else if (dataA > dataB) {
            return 1
        } else {
            return 0
        }

    })
    return consultas
}