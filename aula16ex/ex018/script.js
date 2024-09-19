let num = document.querySelector('input#fnum') //Com 'querySelector' é preciso sempre selecionar a tag de Html, e colocar uma '#' após
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true //Não escreve nada na tela. Apenas tem um retorno verdadeiro
    }else{
        return false  //Não escreve nada na tela. Apenas tem um retorno falso
    }
}

function inLista(n, l){ // Verificar se o número está na lista
    if (l.indexOf(Number(n)) != -1) { //Se o valor de 'n' não for encontrado na lista \\ '-1' valor não encontrado na lista
        return true 
    }else {
        return false 
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)) {  // << só vai ser adicionado um número se as duas condições forem verdades
// isNumero(num.value): isso é, se for um número, será adicionado.
// isLista(num.value): isso é, se não estiver na lista, será adicionado. 
// PARA ADICIONAR ELEMENTO AQUI COMO UM COMANDO, PRECISO CRIAR MAIS DUAS FUNÇÕES( inNumero e inLista).
        valores = (num.value)
        let valor = document.createElement('option')
        valor.text = `Valor ${num.value} adicionado`

    }else{
    alert('Valor inválido ou já encontrado na lista.')
}
}


/*function finalizar(){

}*/