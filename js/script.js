function cadastrar() {
    var anos = window.document.querySelector('input#txt1')
    var c100 = window.document.querySelector('div.cad')
    var bmvd = window.document.querySelector('div.bvd')
    var ns = window.document.querySelector('input#name')
    var nome = (ns.value)
    var idade = Number(anos.value)

    
    if (idade < 18) {
        bmvd.innerHTML = `Olá, ${nome}!<br> Não conseguimos concluir o seu cadastro pois você não tem a idade minima necessária`
    } else if (idade >= 18) {
        bmvd.innerHTML = `Olá, ${nome}! <br> O seu cadastro já foi concluído, em breve você irá receber um email com o código de segurança da sua conta`
    }
    }