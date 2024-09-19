var agora = new Date()  // new Date() : Para pegar a hora, data atual do sistema
var hora = agora.getHours()  // getHours() : Para mostrar a hora
console.log(`Agora são exatamente ${hora}hs.`)
if (hora < 12) {
    console.log('Bom dia!')
}else if (hora <= 18) {
    console.log('Boa tarde!')
}else if (hora > 18) {
    console.log('Boa noite!')
}

/* Outra maneira de fazer utilizando o horário da madrugada:

var hora = 18
console.log(`Agora são exatamente ${hora}hs.`)
if (hora > 4 && hora <= 12) {
    console.log('Bom dia!')
}else if (hora > 4 && hora <= 18) {
    console.log('Boa tarde!')
}else if (hora > 18) {
    console.log('Boa noite!')
}else if (hora <= 4){
    console.log('Boa madrugada!')
}
*/ 