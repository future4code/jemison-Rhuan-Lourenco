
// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//1.
//{nome: "Amanda Rangel", apelido: "Mandi"}, 0, {nome: "Amanda Rangel"}, apelido: "Mandi"}, {nome: "Laís Petra", apelido: "Laura"}, {nome: "Letícia Chijo", apelido: "Chijo"}
//{nome: "Laís Petra", apelido: "Laura"}, 1, {nome: "Amanda Rangel"}, apelido: "Mandi"}, {nome: "Laís Petra", apelido: "Laura"}, {nome: "Letícia Chijo", apelido: "Chijo"}
//{nome: "Letícia Chijo", apelido: "Chijo"}, 2, {nome: "Amanda Rangel"}, apelido: "Mandi"}, {nome: "Laís Petra", apelido: "Laura"}, {nome: "Letícia Chijo", apelido: "Chijo"}

//2.
//["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

//3.
//[{nome: "Amanda Rangel", apelido: "Mandi"}, {nome: "Laís Petra", apelido: "Laura"}]

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 
 //a)
 const nomesDoguinhos = pets.map((nome, raca) => {
    return nome.nome
 })
 console.log(nomesDoguinhos);

 //b)
 const cachorrosSalsichas = pets.filter((item, indice, array) => {
    return item.raca === "Salsicha"
 })
 console.log(cachorrosSalsichas);
 
 //c)
 const clientesPoodles = pets.filter((nome, raca, indice, array) => {
    return nome.raca === "Poodle"
 })
 const mensagemClientesPoodles = clientesPoodles.map((nome, raca) => {
    return "Você ganhou um cupom de desconto de 10% para tosar o/a " + nome.nome + "!"
 })
 console.log(mensagemClientesPoodles)
 
 //2.
 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 
 //a)
 const nomesProdutos = produtos.map((item) => {
    return item.nome
 })
 console.log(nomesProdutos)
 
 //b)
 const precoComDesconto = produtos.map((item) => {
    const precoCincoPorcento = item.preco * 0.95
    return "nome: " + item.nome + ", preço: " + precoCincoPorcento.toFixed(2)
 })
 console.log(precoComDesconto)
 
 //c)
 const categoriaBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
 })
 console.log(categoriaBebidas)
 
 //d)
 const produtosYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
 })
 console.log(produtosYpe)
 
 //e)
 const clientesYpe = produtosYpe.map((item) => {
    return "Compre " + item.nome + " por " + item.preco
 })
 console.log(clientesYpe)
 
 // DESAFIO
 
 const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
 
 //a)
 const ordemAlfabetica = pokemons.map((item) => {
    return item.nome
 })
 console.log(ordemAlfabetica.sort())
 
 //b)
 const tipoSemRepeticao = pokemons.map((item) => {
    return item.tipo
 })

 const semRepeticao = tipoSemRepeticao.filter((tipo, i) => {
    return tipoSemRepeticao.indexOf(tipo) === i
 })
 console.log(semRepeticao)