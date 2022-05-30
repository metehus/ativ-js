/**
 * Scripts para atividade avaliativa de JS
 */

// elemento do resultado
let resultado = document.getElementById('resultado')

function atividade01() {
    let n1 = parseInt(prompt('Digite o número 1:'))
    let n2 = parseInt(prompt('Digite o número 2:'))

    if (isNaN(n1) || isNaN(n2)) { // checa se for numero invalido
        return alert('Insira dois números válidos!')
    }

    if (n2 < n1) {
        resultado.innerHTML = `${n2}<br/>${n1}`
    } else {
        resultado.innerHTML = `${n1}<br/>${n2}`
    }
}

function atividade02() {
    let genero = prompt('Digite seu gênero: (H)omem ou (M)ulher').toLowerCase()
    if (!(genero[0] === 'm' || genero[0] === 'h')) {
        return alert('Insira um valor válido: M ou H!')
    }
    let altura = parseFloat(prompt('Digite sua altura:'))
    if (isNaN(altura)) {
        return alert('Digite um número válido!')
    }

    let pesoIdeal = genero[0] === 'h' ? (72.7 * altura - 58) : (62.1 * altura - 44.7)

    resultado.innerHTML = `Peso ideal: <b>${pesoIdeal.toFixed(2)} kg</b>`
}

function atividade03() {
    let n1 = parseInt(prompt('Insira um número (1/3)'))
    let n2 = parseInt(prompt('Insira um número (2/3)'))
    let n3 = parseInt(prompt('Insira um número (3/3)'))

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        return alert('Insira números válidos!')
    }

    if (n1 > n2 && n1 > n3) {
        resultado.innerHTML = `Valor maior: <b>${n1}</b>`
    } else if (n2 > n1 && n2 > n3) {
        resultado.innerHTML = `Valor maior: <b>${n2}</b>`
    } else {
        resultado.innerHTML = `Valor maior: <b>${n3}</b>`
    }
}

function atividade04() {
    let numero = parseInt(prompt('Insira um número:'))
    if (isNaN(numero)) {
        return alert('Insira um número válido!')
    }

    if (numero === 0) {
        return resultado.innerHTML = '0 é um número neutro!'
    } else if (numero > 0) {
        let msg = numero % 2 === 0 ? 'par' : 'ímpar'
        return resultado.innerHTML = `<b>${numero}</b> é ${msg}!`
    } else {
        return resultado.innerHTML = `O número absoluto de <b>${numero}</b> é <b>${numero * -1}</b>!`
    }
}

function atividade05() {
    let numero = parseInt(prompt('Insira um número:'))
    if (isNaN(numero)) {
        return alert('Insira um número válido!')
    }

    let porDois = (numero % 2 === 0) ? 'É divisível por 2' : 'Não é divisível por 2'
    let porTres = (numero % 3 === 0) ? 'É divisível por 3' : 'Não é divisível por 3'

    resultado.innerHTML = `Número <b>${numero}</b>:<br/>${porDois}<br/>${porTres}`
}

function atividade06() {
    let numero = parseInt(prompt('Insira um número:'))
    if (isNaN(numero)) {
        return alert('Insira um número válido!')
    }

    if (numero % 2 === 0) {
        return resultado.innerHTML = `<b>${numero}</b> é divisível por <b>2</b>!`
    } else if (numero % 7 === 0) {
        return resultado.innerHTML = `<b>${numero}</b> é divisível por <b>7</b>!`
    } else {
        return resultado.innerHTML = `<b>${numero}</b> não é divisível por 2 ou por 7!`
    }
}

function atividade07() {
    let numero = parseInt(prompt('Insira um número:'))

    switch (numero) {
        case 1:
            resultado.innerHTML = 'Dia <b>1</b> é <b>Domingo</b>'
            break
        case 2:
            resultado.innerHTML = 'Dia <b>2</b> é <b>Segunda-feira</b>'
            break
        case 3:
            resultado.innerHTML = 'Dia <b>3</b> é <b>Terça-feira</b>'
            break
        case 4:
            resultado.innerHTML = 'Dia <b>4</b> é <b>Quarta-feira</b>'
            break
        case 5:
            resultado.innerHTML = 'Dia <b>5</b> é <b>Quinta-feira</b>'
            break
        case 6:
            resultado.innerHTML = 'Dia <b>6</b> é <b>Sexta-feira</b>'
            break
        case 7:
            resultado.innerHTML = 'Dia <b>7</b> é <b>Sábado</b>'
            break

        default:
            resultado.innerHTML = 'Número inválido! Insira um número entre 1 e 7'
            break;
    }
}

function atividade08() {
    let soma = 0
    for (let i = 2; i <= 20; i++) {
        if (i % 2 === 0) soma += i
    }

    resultado.innerHTML = `Soma dos pares: <b>${soma}</b>`
}

function atividade09() {
    let numero = parseInt(prompt('Insira um número:'))
    if (isNaN(numero)) {
        return alert('Insira um número válido!')
    }

    let tabuada = `<b>* Tabuada do ${numero} *</b><br/>`

    for (let i = 1; i <= 10; i++) {
        tabuada += `${numero} x ${i} = <b>${numero * i}</b><br/>`
    }

    resultado.innerHTML = tabuada
}

function atividade10() {
    let numero = parseInt(prompt('Insira um número positivo:'))
    if (isNaN(numero) || numero < 0) {
        return alert('Insira um número válido e positivo!')
    }

    let fatorial = 1

    if (numero > 0) {
        for (let i = numero; i !== 0; i--) {
            fatorial *= i
        }
    }

    resultado.innerHTML = `${numero}! = <b>${fatorial}</b>`
}