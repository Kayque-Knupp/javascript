var saida = document.getElementById('resultado')
function calculaNum(){
    var num = Number(document.getElementById('numero').value)
    if(num != ''){
        for(var c = 0; c <= 10; c++){
            var multiplicacao = c * num
            saida.innerHTML += ` <p> ${num} X ${c}   = ${multiplicacao}</p>`
        }
    }else{
        window.alert('Digite um valor')
    }
     }
     function limpar(){
        saida.innerHTML = "<p>resultado</p>"
     }