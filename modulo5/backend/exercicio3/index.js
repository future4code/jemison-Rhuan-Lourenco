const contas = [
	{
		email: `astrodev@labenu.com`,
		password: `abc123`
	},
	{
		email: `bananinha@gmail.com`,
		password: `bananinha`
	}
]

const validation = (email, password) => {
	const confirmation = contas.find((element) => {
		return element.email === email && element.password === password
	},console.log(confirmation))

	if (confirmation === true) {
		return (`login bem-sucedido`)
	} else {
		return (`e-mail ou senha incorretos`)
	}
}

console.log(validation(`astrodev@labenu.com`, `abc123`))
