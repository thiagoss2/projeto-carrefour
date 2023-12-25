const fs = require('fs');






// Função para aguardar um certo tempo
function aguardarTempo(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Função assíncrona que usa a função de espera
async function executar() {
  await aguardarTempo(20000); // Aguarda 2000 milissegundos (2 segundos)

}




function lerArquivosNaPasta(caminhoDaPasta) {
  try {
    // Obtém a lista de arquivos na pasta
    const arquivos = fs.readdirSync(caminhoDaPasta);

    // Retorna o array de nomes de arquivos
    return arquivos;
  } catch (erro) {
    console.error('Erro ao ler arquivos na pasta:', erro);
    return [];
  }
}


function ultimoElemento(arquivos) {
  let arquivo = arquivos[arquivos.length - 1];
  return arquivo;
}

function retornaSempreOultimo(arquivos) {


  let arrayAntigo = arquivos;


  executar(); // espera um tempo

  let arrayNovo = arquivos;



  for (let index = 0; index < arquivos.length; index++) {


    if (arrayAntigo[index] != arrayNovo[index]) {

      console.log(arrayNovo[index]);


    }


  }
}



const caminhoDaPasta = './img';
const caminhoDaPasta2 = './img2';
const pasta1 = lerArquivosNaPasta(caminhoDaPasta);
const pasta2 = lerArquivosNaPasta(caminhoDaPasta2);

// console.log(pasta1);
// console.log(pasta2);

let arrayCopiaPasta2 = pasta2;

for (let i = 0; i < pasta1.length; i++) {

  let item = pasta1[i];

  for (let j = 0; j < arrayCopiaPasta2.length; j++) {
    // se o item for diferente
    if (item ===  arrayCopiaPasta2[j]) {
   //   let element = arrayCopiaPasta2[j];
  //    console.log(element);
      arrayCopiaPasta2.splice(j , 1);
      
    }
  }
}

console.log(arrayCopiaPasta2);









