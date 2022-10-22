const customers = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

type Customers = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

function searchBalance(client : Customers[]) : Customers[]{
    const findBalance : Customers[] = client.map((current) => {
        const sumDebit : number = current.debitos.reduce((previousValue, currentValor) => previousValue + currentValor, 0)
        current.saldoTotal = current.saldoTotal - sumDebit
        current.debitos = []

        return current
    })

    return findBalance.filter((current) => {
        return current.saldoTotal < 0
    })
}