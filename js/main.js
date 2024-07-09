const txtInput = document.getElementById('txt_input')
const txtInputEncriptado = document.getElementById('txt_input-encriptado')
const btnEncriptar = document.getElementById('btn_encriptar')
const btnDesencriptar = document.getElementById('btn_desencriptar')
const btnCopiarTexto = document.getElementById('btn-copiar')
const infoEncriptadoBefore = document.querySelector('.info-encriptado-before')
const infoEncriptadoAfter = document.querySelector('.info-encriptado-after')

function ajustarInput(elemento) {
    elemento.style.height = 'auto'
    elemento.style.height = `${elemento.scrollHeight}px`
}

btnEncriptar.addEventListener('click', () => {
    let txtValorInicial = txtInput.value.toLowerCase()

    if (txtInput.value !== '') {
        let txtEncriptado = txtValorInicial.replaceAll('e', 'enter').replaceAll('i', 'imes')
            .replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat')
        txtInputEncriptado.value = txtEncriptado

        if (infoEncriptadoBefore.style.display = 'flex') {
            infoEncriptadoBefore.style.display = 'none'
            infoEncriptadoAfter.style.display = 'flex'
        }

        limpiar()
    } else {
        alert('Por favor ingrese un texto')
    }
    ajustarInput(txtInputEncriptado)
})

btnDesencriptar.addEventListener('click', () => {
    let txtValorInicial = txtInput.value.toLowerCase()

    if (txtValorInicial !== '') {
        let txtEncriptado = txtValorInicial.replaceAll('enter', 'e').replaceAll('imes', 'i')
            .replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u')

        txtInputEncriptado.value = txtEncriptado

        if (infoEncriptadoBefore.style.display = 'none') {
            infoEncriptadoBefore.style.display = 'none'
            infoEncriptadoAfter.style.display = 'flex'
        }
        limpiar()
    } else {
        alert('Por favor ingrese un texto')
    }
    ajustarInput(txtInputEncriptado)
})

btnCopiarTexto.addEventListener('click', () => {
    let txtValorEncriptado = txtInputEncriptado.value
    navigator.clipboard.writeText(txtValorEncriptado)
})

function limpiar() {
    txtInput.value = ''
}
