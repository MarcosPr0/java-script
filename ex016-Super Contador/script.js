let inicio = document.getElementById('início')
let fim = document.getElementById('fim')
let passo = document.getElementById('passo')
let res = document.getElementById('res')

function contar() {
    if(inicio.value.length==0 || fim.value.length==0 || passo.value.length==0){  
    //Variável: 'inicio', 'fim', 'passo'
    //Valor da variável: 'value'
    //Quantidade de letras dentro, ou comprimento: 'length'        
    //Se o valor da variável 'inicio' ou 'fim' ou 'passo' estiverem vazias, ou seja, sem nenhuma letra dentro(length==0), será executado o comando abaixo:
        alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = `Contando: <br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
    /*Embora as caixas de textos (representadas pelas variáveis: 'inicio', 'fim', 'passo') sejam numéricas, é preciso converter os valores para "number" */
    if(p <= 0){     
        //Se a quantidade de passos for igual ou menor que zero, irá executar o comando:                             
        alert('[PASSO INVÁLIDO]! Considerando PASSO = 1')
        p = 1
    }
     if(i < f) {                                 //O comando de baixo só irá funcionar, se o valor inicial for menor do que o fim de baixo > Lógica 
    /*Contagem crescente */    
        for(let c = i; c <= f; c += p){          //É preciso criar uma variável, na qual vai ser o contador.Ex: 'let c'
            res.innerHTML += ` ${c} \u{1F449}`   /*Esse '+=' não é adição, é concatenação. NESSE CASO, vai servir pra mostrar uma
    sequência de valores até que a condição dada não seja mais verdadeira. Algo vai ser adicionado ao que eu já tenho sem alterar o valor anterior. */       
        }
    }else{
    /*Contagem regressiva */
        for(let c = i; c >= f; c -= p){         //Se o valor de 'i' for maior ou igual a fim, eu vou perder um 'p'
            res.innerHTML += ` ${c} \u{1F449} `  // Formatação para mostrar emoji em JS: \u{} 
        }
        }
        res.innerHTML += ` \u{1F3C1}` //Emoji: bandeirinha xadrez
    }
    
    }    





