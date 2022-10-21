function person(name: string, birthDate:string): string {
    const data = birthDate.split("/")

    return `Olá me chamo ${name}, nasci no dia ${data[0]} do mês de ${data[1]} do ano de ${data[2]}`
}