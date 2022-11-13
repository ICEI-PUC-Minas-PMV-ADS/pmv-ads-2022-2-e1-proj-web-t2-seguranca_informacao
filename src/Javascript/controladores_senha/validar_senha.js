
let senha_element_html = document.getElementById("senha")
let senha = senha_element_html.value
senha_element_html.addEventListener('keyup', analisarsenha)

function analisarsenha() {
    senha = senha_element_html.value
    const nome = document.getElementById("nome").value
    const dataNasc = document.getElementById("data").value
    const telefone = document.getElementById("telefone").value

    const name = nome.toString()
    //document.getElementById("imprimeSenha").innerHTML = "Senha: " + senha
    let forca_senha = 0
    const tamanho = senha.length

    if (tamanho >= 4) {
        if (tamanho <= 7) {
            forca_senha += 10
            console.log("senha curta")
        } else if (tamanho > 7) {
            forca_senha += 25
            console.log("senhacurta maior que 7")
        }

        if (senha.match(/[a-z]+/) && senha.match(/[A-Z]+/)) {
            forca_senha += 10
            console.log("senha contem letras")
        }

        if (senha.match(/[!@#$%^&*()~;+?><:{}]+/)) {
            forca_senha += 25
            console.log("senha contem caracteres especiais")

        }

        if (nome_esta_contido(nome, senha) ||
            data_esta_contida(dataNasc, senha) ||
            telefone_esta_contido(telefone, senha)) {
            forca_senha -= 50
            console.log("senha contem informacoes pessoais")
        }


    }

    mostrarForcaSenha(forca_senha)

}

function telefone_esta_contido(telefone, senha) {
    if (telefone === "") return false
    if (senha.match(telefone)) return true
}

function nome_esta_contido(nomecompleto, senha) {
    let nomestring = nomecompleto.toLowerCase() + ""
    nomestring = nomestring.trim()
    senha = senha.toLowerCase()
    let nomesplit = nomestring.split(" ")

    if (nomestring === "") return false

    for (const nome of nomesplit) {
        console.log("dentro do for")
        if (senha.match(nome)) {
            return true
        }

    }
    return false
}

function data_esta_contida(databirth, senha) {
    let datastring = databirth + ""
    databirth = datastring.trim()
    let [ano, mes, dia] = datastring.split("-")

    if (datastring === "") {
        return false
    }


    if ((senha.match(ano) && senha.match(mes)) || (senha.match(ano) && senha.match(dia))
        || (senha.match(mes) && senha.match(dia))) {
        return true
    }
    return false
}

function mostrarForcaSenha(forca) {
    //document.getElementById("imprimeForcaSenha").innerHTML = "Força: " + forca
    const classific_senha = document.getElementById("classificaSenha")
    if (forca < 30) {
        classific_senha.innerHTML = "Fraca"
    } else if (forca >= 30 && forca < 60) {
        classific_senha.innerHTML = "Média"
    } else if (forca >= 60 && forca < 70) {
        classific_senha.innerHTML = "Forte"
    }
}


