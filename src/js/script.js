const containerPerguntas = document.querySelectorAll('.container-pergunta');

function fecharPerguntas() {
    containerPerguntas.forEach((pergunta) => {
        pergunta.classList.remove('aberto');
    });
}

function abrirPergunta(pergunta) {
    pergunta.classList.add('aberto');
}

containerPerguntas.forEach((pergunta) => {
    pergunta.addEventListener('click', () => {
        if (pergunta.classList.contains('aberto')) {
            fecharPerguntas();
        } else {
            fecharPerguntas();
            abrirPergunta(pergunta);
        }
    });
});