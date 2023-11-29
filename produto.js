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

produto = new Produto("img/wiskey.jpg",
                        "Geladeira brastemp" , 500.00);

   img = document.createElement("img");
   img.setAttribute("class" , "card__imagem");


   img.src = "img/wiskey.jpg";   

   const itemLista = document.querySelector(".card__item-lista");

   let cardBlocoImg = itemLista.querySelector(".card__bloco-img");

   cardBlocoImg.appendChild(img);

   console.log(cardBlocoImg);


   // criarProduto(itemLista , produto);






//   criarProduto(itemLista , produto)

// passar o query selector dos cards
function criarProduto(itemLista , produto) {

   let itemListaArray = Array.from(itemLista);
    
   let li =  document.createElement("li");
   li.setAttribute("class" , "card__item-lista");
   
   a = document.createElement("a");
   a.setAttribute("class" , "card__link");

   let div2 = document.createElement("div");
   div2.setAttribute( "class" ,"card");

   let figure = document.createElement("figure");
   figure.setAttribute( "class" , "card__bloco-img");

 

   let img = document.createElement("img");
   img.setAttribute("class", "card__imagem")

   img.src = produto.getImagem();

   console.log(img)
   
   
   let figcapiton = document.createElement("figcaption");
   
   let cardCorpo = document.createElement("div");
   cardCorpo.setAttribute("class" , "card__corpo");

   let p = document.createElement("p");
   p.setAttribute("class" , "card__preco")
   p.innerHTML = "texto "

   console.log(li);


  

li.appendChild(a);
a.appendChild(div2);

div2.appendChild(figure);
div2.appendChild(cardCorpo);

figure.appendChild(img);
figure.appendChild(figcapiton);

cardCorpo.appendChild(p);



itemListaArray.push(li);



}

