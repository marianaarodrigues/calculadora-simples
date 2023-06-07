function soma(num1, num2) {
    resultado = num1 + num2
    document.getElementById('resposta').innerHTML = 'Resultado: ' + resultado
}

function subtracao(num1, num2) {
    resultado = num1 - num2
    document.getElementById('resposta').innerHTML = 'Resultado: ' + resultado
}

function multiplicacao(num1, num2) {
    resultado = num1 * num2
    document.getElementById('resposta').innerHTML = 'Resultado: ' + resultado
}

function divisao(num1, num2) {
    if (num2 == 0) {
        document.getElementById('resposta').innerHTML = 'Resultado: Não existe divisão por zero.'
    }
    else {
        resultado = num1 / num2
        document.getElementById('resposta').innerHTML = 'Resultado: ' + resultado
    }
}

function principal() {
    let operador = document.getElementById('sinal').value
    let n1 = parseInt(document.getElementById('num1').value)
    let n2 = parseInt(document.getElementById('num2').value)
    switch (operador) {
        case '+':
            soma(n1, n2)
            break
        case '-':
            subtracao(n1, n2)
            break
        case '*':
            multiplicacao(n1, n2)
            break
        case '/':
            divisao(n1, n2)
            break
        default:
            document.getElementById('resposta').innerHTML = 'Resultado: Operação informada inválida.'
    }
}