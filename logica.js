document.getElementById('botaoSim').addEventListener('click', function() {
  const mensagemContainer = document.getElementById('mensagem-container');

  // Cria um novo parágrafo
  const novaMensagem = document.createElement('p');
  novaMensagem.textContent = 'BORAAAAA S2';
  mensagemContainer.appendChild(novaMensagem);

  // Remove o parágrafo após 5 segundos
  setTimeout(function() {
    mensagemContainer.removeChild(novaMensagem);
  }, 5000);
});

// Seleciona o botão "Não"
const botaoNao = document.getElementById('botaoNao');
const container = document.querySelector('.container');

// Adiciona um ouvinte de evento para quando o mouse passa sobre o botão
botaoNao.addEventListener('mouseover', () => {
  // Obtém as dimensões do container
  const containerRect = container.getBoundingClientRect();

  // Obtém as dimensões do botão "Não"
  const botaoRect = botaoNao.getBoundingClientRect();
  
  // Calcula os limites do movimento dentro do container
  const limiteEsquerdo = 0;
  const limiteSuperior = 0;
  const limiteDireito = containerRect.width - botaoRect.width;
  const limiteInferior = containerRect.height - botaoRect.height;

  // Gera uma posição aleatória para o botão "Não" dentro do container
  const novoLeft = Math.random() * (limiteDireito - limiteEsquerdo) + limiteEsquerdo;
  const novoTop = Math.random() * (limiteInferior - limiteSuperior) + limiteSuperior;

  // Aplica a nova posição ao botão "Não"
  botaoNao.style.left = novoLeft + 'px';
  botaoNao.style.top = novoTop + 'px';
});

