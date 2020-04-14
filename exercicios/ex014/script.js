function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var title = window.document.getElementById ('title')
    //var hora = data.getHours()
    var hora = 21
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        title.innerHTML = 'Bom dia!' // Adicionei por minha conta essa linha que altera o título.
        img.src = 'fotos/fotoManha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >=12 && hora <18) {
        //BOA TARDE!
        title.innerHTML = 'Boa Tarde!'// Adicionei por minha conta essa linha que altera o título.
        img.src = 'fotos/fotoTarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE!
        title.innerHTML = 'Boa Noite!'// Adicionei por minha conta essa linha que altera o título.
        img.src = 'fotos/fotoNoite.png'
        document.body.style.background = '#515154'
    }
}