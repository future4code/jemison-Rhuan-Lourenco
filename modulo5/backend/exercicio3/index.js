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
	})

	if (confirmation) {
		return (`login bem-sucedido`)
	} else {
		return (`e-mail ou senha incorretos`)
	}
}