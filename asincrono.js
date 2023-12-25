console.log('Início do programa');

// Função para aguardar um certo tempo
function aguardarTempo(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Função assíncrona que usa a função de espera
async function executar() {
  console.log('Antes da espera');
  await aguardarTempo(2000); // Aguarda 2000 milissegundos (2 segundos)
  console.log('Após 2 segundos');
  console.log('Fim do programa');
}

executar();
