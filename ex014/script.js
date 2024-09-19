function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'Foto-manhã.png'             // Quando for manhã, irá mostrar a foto-manhã
        document.body.style.background = '#d9bcb3'    // Irá mudar dinamicamente a cor do fundo.
    } else if (hora >= 12 && hora <= 18) {
        console.log('Boa tarde!') 
        img.src = 'Foto-tarde.png'             // Quando for tarde, irá mostrar a foto-tarde
        document.body.style.background = '#faba8d'    // Irá mudar dinamicamente a cor do fundo.
    } else {
        //Boa noite!
        img.src = 'Foto-noite.png'             // Quando for noite, irá mostrar a foto-noite
        document.body.style.background = '#5c4060'    // Irá mudar dinamicamente a cor do fundo.
    }
}

