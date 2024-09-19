function verificar() {
    let data =  new Date()
    let ano = data.getFullYear()                  // 'getFullYear' > para pegar 4 dígitos
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {        // 'fano.value.length == 0' > verifica se a caixa está vazia
        alert('[ERRO]Verifique os dados e tente novamente!')

    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)        // O 'ano atual' - 'ano de nascimento' == idade
        let gênero = ''                             // < Variável sem valor
        let img = document.createElement('img')     /*Criação de img dinamicamente*/  // Para colocar a foto, é necessário criar uma 'var img'. / Isso pode ser feito tanto em html como em JS
        img.setAttribute('id', 'foto')              // < 'img' recebe 'id=foto' como um atributo

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'Foto-bêbe-m.png')         
            } else if (idade  < 21) {
                //Jovem
                img.setAttribute('src', 'Foto-jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'Foto-adulto-m.png')
            } else {
                //Idoso 
                img.setAttribute('src', 'Foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'Foto-bêbe-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'Foto-jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'Foto-adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'Foto-idoso-f.png')
            }
                /*img.setAttribute('src', 'Foto-*****-**.png')  > // Comando para mostrar a imagem de acordo com a condição dada */ 
        }
        res.style.textAlign = 'center'                 // para centralizar em JS
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)               // Comando pra adicionar um elemento
    }
}







