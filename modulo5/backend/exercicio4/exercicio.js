const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	}
]

const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	}
]

const terceiraLista = [...primeiraLista, ...segundaLista]

const filteredArray = terceiraLista.filter(function(current, next){
    return terceiraLista.findIndex(item => item.nome === current.nome) == next
}) 