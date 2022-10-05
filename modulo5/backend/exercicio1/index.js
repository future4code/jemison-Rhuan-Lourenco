const temperatureConverter = (number, string) => {
    const Fahrenheit = ((number * 9 / 5) + 32)
    const Kelvin = (number + 273.15)

    if (Number.isInteger(number)) {
        if (string === "F") {
            return `${number}° Celsius é equivalente a ${Fahrenheit} Fahrenheit.`
        } else if (string === "K") {
            return `${number}° Celsius é equivalente a ${Kelvin} Kelvin.`
        } else {
            return `Erro. Parâmetro inválido (${string})`
        }
    } else {
        return `Erro. Parâmetro inválido (${number}).`
    }
}

console.log(temperatureConverter(30, "k"));
console.log(temperatureConverter(30, "F"));
console.log(temperatureConverter(30, "G"));
console.log(temperatureConverter("trinta", "F"));
console.log(temperatureConverter(35.5, "F"));
