// EXERCICIO 1
// a) como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// Basta utilizar process. argv[2]. Essa propriedade irá armazenar uma cópia, somente leitura,
// do valor original de argv[0] passado quando o arquivo. js for iniciado.

//b)
const nickName = process.argv[2]
const age = Number(process.argv[3])

function message(nome, idade) {
	return console.log(`%cOlá, ${nome}! Você tem ${idade} anos.`, `color: red`)
}

//c)
function futureMessage(nome, idade) {
	return console.log(`%cOlá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}.`, `color: blue`)
}