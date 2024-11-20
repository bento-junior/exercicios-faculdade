let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(number(n) >= 1 && Number(n) <= 100) {
        return true 
    } else {
        return false 
    }

}

function inLista(n, 1) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor $`
        lista.appendChild(item)

    } else {
        window.alert('Valor inválido ou encontrado na lista.')
    }

}