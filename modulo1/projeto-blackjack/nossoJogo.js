/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// console.log("Boas vindas ao jogo de BlackJack!");


// if(confirm("Quer iniciar uma nova rodada?") === false) {
//    console.log("O jogo acabou!");
//    } else {
//    console.log("Iniciando nova rodada!")

//    const jogadorUm = "Usuário";
//    const jogadorDois = "Computador";

//    const primeiraCartaJogadorUm = comprarCarta()
//    const segundaCartaJogadorUm = comprarCarta()
//    const primeiraCartaJogadorDois = comprarCarta()
//    const segundaCartaJogadorDois = comprarCarta()

//    const pontuacaoJogadorUm = primeiraCartaJogadorUm.valor + segundaCartaJogadorUm.valor
//    const pontuacaoJogadorDois = primeiraCartaJogadorDois.valor + segundaCartaJogadorDois.valor

//    console.log(jogadorUm + " - cartas: " + primeiraCartaJogadorUm.texto + " " + segundaCartaJogadorUm.texto + " - pontuação " + pontuacaoJogadorUm)
//    console.log(jogadorDois + " - cartas: " + primeiraCartaJogadorDois.texto + " " + segundaCartaJogadorDois.texto + " - pontuação " + pontuacaoJogadorDois)

//    if (pontuacaoJogadorUm > pontuacaoJogadorDois) {
//          console.log("O usuário ganhou!");
//    } else if (pontuacaoJogadorUm === pontuacaoJogadorDois) {
//       console.log("Empate!");
//    } else {
//       console.log("O computador Ganhou!")
//    }
// }
