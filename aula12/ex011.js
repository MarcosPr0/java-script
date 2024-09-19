var idade = 67
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('Não vota')
  }else if (idade < 18 || idade > 65) {  // Opcionalmente posso escrever a condição(idade >= 16 && idade < 18 || idade > 65)  
        console.log('Voto opcional')
  }else {
        console.log('Voto obrigatório')
  }

    /* Outra forma de fazer esse código:
var idade = 67
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('Não vota')
  }else if (idade < 18) {   
    console.log('Voto opcional')
  }else if (idade >= 67){
    console.log('Voto opcional')
  }else {
        console.log('Voto obrigatório')
  }
 */