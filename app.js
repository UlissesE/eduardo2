let listaDeNumerosSorteados = []
let limiteDaListaDeNumeros = 10
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

function textoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

function mensagemInicial() {
textoNaTela('h1', 'Jogo do bicho');
textoNaTela('p', 'Selecione um numero de 1 a 10');
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemAcerto = `Você acertou o número secreto com ${tentativas} ${palavraTentativas}!`;
        textoNaTela('h1', 'Parabéns!');
        textoNaTela('p', mensagemAcerto);
        console.log('Acertou o número secreto');

        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (chute > numeroSecreto) {
            textoNaTela('p', `O número secreto é menor do que ${chute}.`);
        }
        else {
            textoNaTela('p', `O número secreto é maior do que ${chute}.`);
        }
        tentativas++
        limparCampo()
    }
}

function novoJogo() {
    numeroSecreto = gerarNumeroSecreto()
    tentativas = 1;
    limparCampo();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * limiteDaListaDeNumeros + 1);
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length

        if (quantidadeDeNumerosNaLista == limiteDaListaDeNumeros) {
            listaDeNumerosSorteados = []
        }

        if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
            return gerarNumeroSecreto();
        }   else {
            listaDeNumerosSorteados.push(numeroEscolhido);
            console.log(listaDeNumerosSorteados);
            return numeroEscolhido;
        }
        
}