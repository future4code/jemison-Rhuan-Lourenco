// EXERCICIO 2

const n1 = Number(process.argv[3])
const n2 = Number(process.argv[4])

const math = process.argv[2]

const add = n1 + n2
const sub = n1 - n2
const multi = n1 * n2
const divi = n1 / n2


switch (math) {
    case "add":
        console.log(`Resposta:${add}`)
        break;
    case "sub":
        console.log(`Resposta:${sub}`)
        break;
    case "multi":
        console.log(`Resposta:${multi}`)
        break;
    case "divi":
        console.log(`Resposta:${divi}`)
        break;
}