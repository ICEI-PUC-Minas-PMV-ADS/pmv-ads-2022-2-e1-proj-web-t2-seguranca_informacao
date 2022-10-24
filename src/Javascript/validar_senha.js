
function analisarsenha() {
    let senha = document.getElementById("senha").value
    let nome = document.getElementById("nome").value
    let dataNasc = document.getElementById("data").value
    let telefone = document.getElementById("telefone").value

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

        if (nome_esta_contido(nome, senha) || data_esta_contida(dataNasc, senha) || senha.match(telefone)) {
            forca_senha -= 50
            console.log("senha contem informacoes pessoais")
        }

    }

    mostrarForcaSenha(forca_senha)

}

function nome_esta_contido(nomecompleto, senha) {
    let nomestring = nomecompleto.toLowerCase() + ""
    senha = senha.toLowerCase()
    nomestring = nomestring.trim()
    let nomesplit = nomestring.split(" ")
    for (const nome of nomesplit) {
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

    if ((senha.match(ano) && senha.match(mes)) || (senha.match(ano) && senha.match(dia))
        || (senha.match(mes) && senha.match(dia))) {
        return true
    }
    return false
}



function mostrarForcaSenha(f) {
    //document.getElementById("imprimeForcaSenha").innerHTML = "Força: " + f

    if (f < 30) {
        document.getElementById("classificaSenha").innerHTML = "Fraca: Sua senha pode ser decifrada rapidamente!"
    } else if (f >= 30 && f < 60) {
        document.getElementById("classificaSenha").innerHTML = "Média: É hora de trocar a sua senha!"
    } else if (f >= 60 && f < 70) {
        document.getElementById("classificaSenha").innerHTML = "Forte: Sua senha cumpre requisitos de segurança"
    }
}

