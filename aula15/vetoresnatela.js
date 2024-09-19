let valores = [8,1,7,4,2,9]
console.log(valores)
valores.sort()
/*
for (let pos=0;pos < valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
//     FORMA SIMPLIFICADA!
for (let pos in valores) {    // se lê da seguinte maneira: 'for(para) cada posição dentro(em,na) da variável composta'
    console.log(`A posição ${pos} tem o valor ${valores[pos]}` )
}
// essa sintaxe da forma simplificada do for, só funciona para arrays e objetos.





