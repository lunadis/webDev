const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
// verificando se as variaveis recebeu numero
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1+peso2)
// toFixed reduz as casas decimais
console.log(media.toFixed(2))
/* toString converte em bases numéricas
    ou em texto
*/ 
console.log(media.toString())
console.log(typeof media)
console.log(typeof Number)

