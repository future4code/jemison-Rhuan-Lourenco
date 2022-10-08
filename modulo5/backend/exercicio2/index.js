// // EXERCICIO 01 = CADASTRO CLIENTE
const customers = [
    { id: 1, nome: 'Fulano' },
    { id: 2, nome: 'Ciclano' },
    { id: 3, nome: 'Beltrano' },
    { id: 4, nome: 'Fulana' }
]

const addCustomer = (customer) => {
    const lastCustomer = customers[customers.length - 1].id
    customers.push({ id: lastCustomer + 1, nome: customer })
    return customers
}

// //EXERCICIO 02 = GERADOR DE TABUADA

const multiplicationTable = []

const multiplier = (number) => {
    if (Number.isInteger(number)){
        if(number > 1 && number <= 10) {
            for (var i = 0; i <= 10; i++) {
                multiplicationTable.push(`${number} x ${i} = ${number * i}`)
            }
        } else {
            console.log (`Erro. Parâmetro inválido (número precisa valer entre 1 e 10).`)
        }
    } else {
        console.log(`Erro. Parâmetro inválido (deve ser um número).`) 
    }

}