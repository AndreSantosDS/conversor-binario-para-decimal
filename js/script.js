const binario = document.querySelector("#binario")
const btnConverter = document.querySelector("#btn-converter") 
const resultado = document.querySelector("#resultado")

btnConverter.addEventListener("click", function(event) {
    event.preventDefault(); 
    resultado.value = converterParaDecimal(binario.value)
})

function converterParaDecimal(binario){
    let converterDecimal = 0
    let soma = 0

    for(let i = 0; i < binario.length; i++){
        if(parseInt(binario[i]) === 1 || parseInt(binario[i]) === 0){
            converterDecimal = parseInt(binario[i]) * Math.pow(2,binario.length - 1 - i)
            soma += converterDecimal
        }else{
            return "Digite apenas 0 e 1"
        }
    }
    return soma
}
        