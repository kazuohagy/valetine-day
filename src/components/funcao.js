
// Executa o código JavaScript apenas quando a tela inteira for carregada
window.addEventListener('load', function() {
    // Obtém uma referência para o botão
    const botao = document.querySelector('#luigi');
    const botao2 = document.querySelector('#peach');

    // Função para variar a posição do botão
    function variarPosicaoBotao() {
        botao.style.position = 'absolute';
        // Obtém a largura e altura da janela do navegador
        const larguraJanela = window.innerWidth;
        const alturaJanela = window.innerHeight;

        // Gera coordenadas aleatórias para a posição do botão
        const novaPosicaoX = Math.random() * (larguraJanela - botao.offsetWidth);
        const novaPosicaoY = Math.random() * (alturaJanela - botao.offsetHeight);

        

        // Define a nova posição do botão
        botao.style.left = novaPosicaoX + 'px';
        botao.style.top = novaPosicaoY + 'px';
    }

    // Adiciona um evento de clique ao botão para variar sua posição quando clicado
    botao.addEventListener('click', variarPosicaoBotao);
    botao2.addEventListener('click', posso);

    function posso() {
        alert("Parabens você fez uma boa escolha ❤️💘💖");
    }
});
