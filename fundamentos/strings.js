const escola = "texto"

console.log(escola.charAt(4))
// não gera erro
console.log(escola.charAt(5))

console.log(escola.charCodeAt(2))

console.log(escola.indexOf('x'))

console.log(escola.substring(1))
console.log(escola.substring(2, 4))

console.log('escola é um '.concat(escola).concat("!"))
console.log(escola.replace(1, 'l'))

console.log('ana,Maria,Pedro'.split(','))
