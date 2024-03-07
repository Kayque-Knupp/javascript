function verificador(){
    var data = new Date()
    var anoatual = data.getFullYear()
    var anoform = document.getElementById('ano')
    var saida = document.getElementById('resultado')
    if(anoform.length < 4 || anoform.value > anoatual){
        window.alert('O ano informado apresenta erro')
    }else{
        var sexo = document.getElementsByName('sexo')
        var idade = anoatual - Number(anoform.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', './imagens/homem-crianca.jpg')
            }else if(idade < 30 ){
                img.setAttribute('src', './imagens/homem-adolescente.jpg')
            } else{
                img.setAttribute('src', './imagens/homem-idoso.jpg')
            }
        }else if(sexo[1].checked){
            genero = "Mulher"
            if(idade >=0 && idade < 10){
                img.setAttribute('src', './imagens/mulher-crianca.jpg')
            }else if(idade < 21 ){
                img.setAttribute('src', './imagens/mulher-adolescente.jpg')
            } else{
                img.setAttribute('src', './imagens/mulher-idosa.jpg')
            }
        }
        saida.innerHTML = ` Detectamos    ${genero} com ${idade} anos.`
        saida.appendChild(img)
    }
}