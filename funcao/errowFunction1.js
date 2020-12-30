let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //usado quando a função tem somente uma linha 
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // sem parâmetro 1
ola  = _ => 'Olá' // sem parâmetro 2
console.log(ola())