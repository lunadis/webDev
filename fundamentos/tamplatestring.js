const nome = "Lucca"
const concatenacao =  'Olá ' + nome + '!'

const template = `Olá 
${nome} 
!`

console.log(concatenacao)
console.log(template)

console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`ei... ${up('cuidado')}!`)