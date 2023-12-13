const btOperacaoSomar = document.getElementById("Opsomar")
const btOperacaoSubtrair = document.getElementById("Opsubtrair")
const btOperacaoMultiplicar = document.getElementById("Opmultiplicar")
const btOperacaoDividir = document.getElementById("Opdividir")

function somar() {
    let numero1 = parseFloat (document.querySelector("#numero1").value)
    let numero2 = parseFloat (document.querySelector("#numero2").value)

    let resultado = numero1 + numero2

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Valor fora do domínio da função. Informe um número válido.")
    } else {
        document.getElementById ("resultadoOperacao").innerHTML = resultado
    }
}

function subtrair() {
    let numero1 = parseFloat (document.querySelector("#numero1").value)
    let numero2 = parseFloat (document.querySelector("#numero2").value)

    let resultado = numero1 - numero2

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Valor fora do domínio da função. Informe um número válido.")
    } else {
        document.getElementById ("resultadoOperacao").innerHTML = resultado
    }
}

function multiplicar() {
    let numero1 = parseFloat (document.querySelector("#numero1").value)
    let numero2 = parseFloat (document.querySelector("#numero2").value)

    let resultado = numero1 * numero2

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Valor fora do domínio da função. Informe um número válido.")
    } else {
        document.getElementById ("resultadoOperacao").innerHTML = resultado
    }
}

function dividir() {
    let numero1 = parseFloat (document.querySelector("#numero1").value)
    let numero2 = parseFloat (document.querySelector("#numero2").value)

    let resultado = numero1 / numero2

    if (isNaN(numero1) || isNaN(numero2) || (numero2 === 0)) {
        alert("Valor fora do domínio da função. Informe um número válido.")
    }
    else {
        document.getElementById ("resultadoOperacao").innerHTML = (resultado)
    }
}

btOperacaoSomar.addEventListener ('click', somar)
btOperacaoSubtrair.addEventListener ('click', subtrair) 
btOperacaoMultiplicar.addEventListener ('click', multiplicar) 
btOperacaoDividir.addEventListener ('click', dividir) 