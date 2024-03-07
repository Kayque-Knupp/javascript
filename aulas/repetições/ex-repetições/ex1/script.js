
function contaPasso(){
    var inicio =  document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var resultado = document.getElementById('resultado') 
       // resultado.innerHTML = Number(inicio.value)
       if(Number(inicio.value) == 0 || Number(passo.value) == 0){
        window.alert('números inválidos, por favor digite outros')
       }else {
            var conti = Number(inicio.value)
            var contf = Number(fim.value)
            var contp = Number(passo.value)
            while(conti<=contf){
                resultado.innerHTML += `${conti} 👉🏼 `
                conti += contp
               
            }
            resultado.innerHTML += '🏁'
       }
      
        
    }