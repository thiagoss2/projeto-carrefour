class Produto {
   constructor(imagem, descricao, preco) {
       this.imagem = imagem;
       this.descricao = descricao;
       this.preco = preco;
   }

   getImagem() {
       return this.imagem;
   }

   getDescricao() {
       return this.descricao;
   }

   getPreco() {
       return this.preco;
   }
}

// Criando uma instância da classe Produto
const produto = new Produto("img/wiskey.jpg", "Geladeira Brastemp", 500.00);

// Função para criar um elemento HTML com uma classe específica
function insereElemento(tipoElemento, nomeClasse) {
   let elemento = document.createElement(tipoElemento);
   elemento.setAttribute("class", nomeClasse);
   return elemento;
}

// Função para criar um cartão de produto e anexá-lo ao itemLista fornecido
function criarProduto(itemLista, produto) {
   let itemListaArray = Array.from(itemLista);

   // Criando elementos HTML
   let li = insereElemento("li", "card__item-lista");
   let a = insereElemento("a", "card__link");
   let div = insereElemento("div", "card");
   let figure = insereElemento("figure", "card__bloco-img");
   let img = insereElemento("img", "card__imagem");
   let figcapiton = insereElemento("figcaption", "");
   let cardCorpo = insereElemento("div", "card__corpo");
   let p = insereElemento("p", "card__preco");

   // Definindo conteúdo e atributos
   img.src = produto.getImagem();
   figcapiton.textContent = produto.getDescricao();
   p.textContent = `Preço: R$ ${produto.getPreco().toFixed(2)}`;

   // Anexando elementos para criar a estrutura do cartão
   li.appendChild(a);
   a.appendChild(div);
   div.appendChild(figure);
   div.appendChild(cardCorpo);
   figure.appendChild(img);
   figure.appendChild(figcapiton);
   cardCorpo.appendChild(p);

   // Anexando o cartão ao itemLista

    
 for (let index = 0; index < itemListaArray.length; index++) {
   itemListaArray[index].appendChild(li);
   
 }
}

// Selecionando o elemento item-lista
const itemLista = document.querySelectorAll(".container-propio");

// Chamando a função para criar um cartão de produto
criarProduto(itemLista, produto);
