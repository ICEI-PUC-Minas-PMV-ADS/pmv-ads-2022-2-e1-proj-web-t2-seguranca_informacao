


senha_element_html.addEventListener('keyup', verificar_senha_contida)


function verificar_senha_contida() {
    senha = senha_element_html.value;


    const retorno_ehcomum = rainbowtable.includes(senha)



    mostrar_resultado(retorno_ehcomum)

}

function mostrar_resultado(eh_comum) {
    const verifica_senha_comum = document.getElementById("classificaComum")
    if (eh_comum) {
        verifica_senha_comum.innerHTML = "Senha muito comum!!! O que acha de trocar?"
    } else {
        verifica_senha_comum.innerHTML = "Parabéns!!! Sua senha não está na lista das mais comuns. Verifique os demais critérios de força!"

}
