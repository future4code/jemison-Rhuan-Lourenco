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

if (confirm("Bem-vinde ao jogo de Blackjack!" +
   "\n" +
   "Quer iniciar uma nova rodada?") === false) {
   confirm("O jogo acabou!");
} else {

   const jogadorUm = "Usuário";
   const jogadorDois = "Computador"

   const cartaJogadorUm = [];
   const cartaJogadorDois = [];

   cartaJogadorUm.push(comprarCarta(), comprarCarta());
   cartaJogadorDois.push(comprarCarta(), comprarCarta());

   let somaJogadorUm = 0;
   let somaJogadorDois = 0;

   for (let i = 0; i < cartaJogadorUm.length; i++) {
      somaJogadorUm = somaJogadorUm + cartaJogadorUm[i].valor
   }

   for (let i = 0; i < cartaJogadorDois.length; i++) {
      somaJogadorDois = somaJogadorDois + cartaJogadorDois[i].valor
   }

   function chamaCarta() {
      const naipeJogadorUm = cartaJogadorUm.map((naipe) => {
         return naipe.texto
      })

      const naipeJogadorDois = cartaJogadorDois.map((naipe) => {
         return naipe.texto
      })

      let resultado = ""

      if (somaJogadorUm <= 21 && somaJogadorDois <= 21) {
         if (somaJogadorUm > somaJogadorDois) {
            resultado = "O " + jogadorUm + " ganhou!"
         }
         else if (somaJogadorDois > somaJogadorUm) {
            resultado = "O " + jogadorDois + " ganhou!"
         } else {
            resultado = "Empate!"
         }

      } else {
         if (somaJogadorUm > 21) {
            resultado = "O " + jogadorDois + " ganhou!"
         }
         else if (somaJogadorDois > 21) {
            resultado = "O " + jogadorUm + " ganhou!"
         }
      }
      alert(jogadorUm + " - Cartas: " + naipeJogadorUm.join(" ") + " - Pontuação: " + somaJogadorUm +
         "\n" +
         jogadorDois + " - Cartas: " + naipeJogadorDois.join(" ") + " - Pontuação: " + somaJogadorDois +
         "\n" +
         resultado)
   }


   function compra() {
      const mapJogadorUm = cartaJogadorUm.map((naipe) => {
         return naipe.texto
      })

      return confirm(("Suas cartas são " + mapJogadorUm.join(" ") + ". A carta revelada do computador é " + cartaJogadorDois[0].texto +
         "\n" +
         "Deseja comprar mais uma carta?"))
   }

   while (somaJogadorUm <= 21) {
      if (compra() === true) {
         const comprando = comprarCarta()
         cartaJogadorUm.push(comprando)
         somaJogadorUm = somaJogadorUm + comprando.valor
      } else {
         break
      }
   }

   while (somaJogadorUm <= 21 && somaJogadorUm > somaJogadorDois) {
      const comprando = comprarCarta()
      cartaJogadorDois.push(comprando)
      somaJogadorDois = somaJogadorDois + comprando.valor
   }

   chamaCarta(somaJogadorUm, somaJogadorDois)

}