import { catalogo } from "./utilidades";

function fecharCarrinho() {
  document.getElementById("carrinho").classList.add("right-[0]");
  document.getElementById("carrinho").classList.remove("right-[-24rem]");
}

function abrirCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[0]");
  document.getElementById("carrinho").classList.add("right-[-24rem]");
}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
  const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

  botaoAbrirCarrinho.addEventListener("click", fecharCarrinho);
  botaoFecharCarrinho.addEventListener("click", abrirCarrinho);
}

export function addCarrinho(idProduto) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");
  const cardCarrinho = `<article class="flex bg-stone-400 text-stone-900 rounded-lg relative">
  <button class="absolute top-1 right-2"><i class="fa-solid fa-xmark hover:text-black"></i></button>
  <img class="h-24" src="./assets/img/${produto.imagem}" 
  alt="${produto.alt}">
  <div class="flex flex-col justify-center p-1">
    <p class="text-xs">${produto.nome}</p>
    <p class="text-green-900 font-bold">${produto.preco}</p>
  </div>
</article>`;
  containerProdutosCarrinho.innerHTML += cardCarrinho;
}
