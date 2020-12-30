const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!' //na concatenação não pode pular linha
const template = ` 
    Olá
    ${nome}!` // No template podem ser usadas várias linhas
console.log(concatenacao, template)

// expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)