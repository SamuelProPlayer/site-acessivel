document.addEventListener('DOMContentLoaded', function(){

    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    
    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
    })
    
    let tamanhoAtualFonte = 1;
    
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
        const diminuiFonteBotao = document.getElementById('diminuir-fonte');
        aumentaFonteBotao.addEventListener('click', function(){
            tamanhoAtualFonte += 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`
        })
    
        diminuiFonteBotao.addEventListener('click', function(){
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    
        })
        })

        ScrollReveal().reveal('#inicio', { delay: 500 });
        ScrollReveal().reveal('#tropicalia', { delay: 500 });
        ScrollReveal().reveal('#galeria', { delay: 500 });
        ScrollReveal().reveal('#contato', { delay: 500 });