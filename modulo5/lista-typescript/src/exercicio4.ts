enum Setor {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

const funcionarios = [
    { nome: "Marcos", salario: 2500, setor: Setor.MARKETING, presencial: true },
    { nome: "Maria", salario: 1500, setor: Setor.VENDAS, presencial: false },
    { nome: "Salete", salario: 2200, setor: Setor.FINANCEIRO, presencial: true },
    { nome: "João", salario: 2800, setor: Setor.MARKETING, presencial: false },
    { nome: "Josué", salario: 5500, setor: Setor.FINANCEIRO, presencial: true },
    { nome: "Natalia", salario: 4700, setor: Setor.VENDAS, presencial: true },
    { nome: "Paola", salario: 3500, setor: Setor.MARKETING, presencial: true }
]

type Person = {
    nome: string,
    salario: number,
    setor: Setor,
    presencial: boolean
}

function retornaFuncionario(f : Array<Person>) : Person[] {
    return f.filter((atual) => {
        return atual.setor === Setor.MARKETING && atual.presencial === true
    })
}