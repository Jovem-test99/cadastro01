function cadastrar() {
    var anos = window.document.querySelector('input#txt1')
    var c100 = window.document.querySelector('div.cad')
    var bmvd = window.document.querySelector('div.bvd')
    var ns = window.document.querySelector('input#name')
    var nome = (ns.value)
    var idade = Number(anos.value)
    var email = window.document.querySelector('input#email')
    var codemail = (email.value)

    
    if (idade < 18) {
        bmvd.innerHTML = `Olá, ${nome}!<br> Não conseguimos concluir o seu cadastro pois você não tem a idade minima necessária`
    } else if (idade >= 18) {
        bmvd.innerHTML = `<p>Olá, ${nome}! <br> O seu cadastro já foi concluído, em breve você irá receber o código de segurança da sua conta no email <span>${codemail}</span></p>`
    }
    }