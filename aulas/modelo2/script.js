    function  carregar() {
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var data =  new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        foto.src = 'manha.png'
       document.body.style.background = 'hsl(54, 84%, 61%)'
    }else if(hora >= 12 && hora <+ 18){
        foto.src = 'tarde.png'
        document.body.style.background = 'hsl(27, 38%, 55%)'
    }else{
        foto.src = 'noite.png'
        document.body.style.background = 'rgb(64, 83, 113)'
    }
}