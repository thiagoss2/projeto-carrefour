
function getPrimeiraLetraEmMaiuscula(texto) {
    return texto.toUpperCase().charAt(0);
}

function removePrimeiroCaractereString(texto) {
    return texto.slice(1, texto.length);
}


function retornaListaDePalavras(texto, listaDePalavras) {

    const textoMinusculoQuebrado = removePrimeiroCaractereString(texto);
    const primeiroCaractere = getPrimeiraLetraEmMaiuscula(texto);
    const palavraJunta = primeiroCaractere + textoMinusculoQuebrado;

    const novaLista = [];


    for (let i = 0; i < listaDePalavras.length ;  i++) {

        let letra = listaDePalavras[i];
        if (letra.startsWith(palavraJunta)) {
            console.log(letra);
            novaLista.push(letra);
        }
    }

    return novaLista;
}


// const palavraBuscada = "L";
// const listaDePalavras = ["Baldurs gate", "Treads of fate", "Legend of legaia" ,"Balala"];

// let lista  = retornaListaDePalavras(palavraBuscada, listaDePalavras);

// console.log(lista)

const busca  =
        document.querySelector(".conteudo-principal-superior__busca-input").value;


const texto = "Thiago";

for(let i = 0 ; i < texto.length ; i++) {
    let letra = texto.charAt(i);
    console.log(letra);
    setTimeout()

}
