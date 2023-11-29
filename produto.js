class Produto {
   constructor(imagem  , descricao  , preco) {
       this.imagem = imagem;
       this.descricao = descricao;
       this.preco = preco;
   }

   getImagem() {
      return this.imagem;
   }

   getDescricao(){
      return this.descricao;
   }

   getPreco() {
      return this.preco;
   }
}

produto = new Produto("/img/imagem-geladeira.jpg" ,
                        "Geladeira brastemp" , 500.00);



const div = document.querySelector(".segundo-conteudo-principal");

// passar o query selector dos cards
function criarProduto(div) {
    
   let li =  document.createElement("li");
   li.setAttribute("card__item-lista");

   a = document.createElement("a");
   a.setAttribute("card__link");

   let div2 = document.createElement("div");
   div2.setAttribute("card");

   let figure = document.createElement("figure");
   figure.setAttribute("card__bloco-img");

   let img = document.createElement("img");
   img.setAttribute("card__imagem")
   
   
   let figcapiton = document.createElement("figcaption");
   
   let cardCorpo = document.createElement("card__corpo");

   let p = document.createElement("p");


   // card__corpo 
   // p card__preco



}