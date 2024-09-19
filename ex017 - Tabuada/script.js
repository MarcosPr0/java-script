function tabuada() {
    // Usando estrutura: while(enquanto)
    let número = document.getElementById('n')
    let tab = document.getElementById('seltab') // > Tabuada

    if(número.value.length== 0){
        alert('Por favor, digite um número!')
    }else{
        let n = Number(número.value)
        let c = 1
        while(c <= 10){
            //Agora preciso adicionar elementos dentro do select!
            let item = document.createElement('option') // < para criar elemento dentro de JS. Dentro do select preciso ter opções, por isso crio um elemento do tipo 'option'
            item.text = `${n} x ${c} = ${n*c}`  
            //'item.text' > parte de dentro do option
            //'${n*c}' > para multiplicar o valor das varáveis 
            item.value = `tab${c}`  //O 'item' tem que ter um value. Isso acontece em muitas outras linguagens de programação. Mas em JS não tem tanto sentido usar
            c++
        }
    }
}


    // Usando estrutura: for
//function

