import { catalogo, salvarLocalStorage, lerLocalStorage } from "./utilidades";

const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};

function fecharCarrinho() {
  document.getElementById("carrinho").classList.add("right-[0]");
  document.getElementById("carrinho").classList.remove("right-[-24rem]");
}

function abrirCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[0]");
  document.getElementById("carrinho").classList.add("right-[-24rem]");
}

function irParaCheckout() {
  if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
    return;
  }
  window.location.href = window.location.origin + "/checkout/index.html";
}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
  const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");
  const botaoIrParaCheckout = document.getElementById("finalizar-compra");

  botaoAbrirCarrinho.addEventListener("click", fecharCarrinho);
  botaoFecharCarrinho.addEventListener("click", abrirCarrinho);
  botaoIrParaCheckout.addEventListener("click", irParaCheckout);
}

function removerDoCarrinho(idProduto) {
  delete idsProdutoCarrinhoComQuantidade[idProduto];
  atualizarPrecoCarrinho();
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  renderProdutosCarrinho();
}

function incrementarQuantidadeProduto(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]++;
  atualizarPrecoCarrinho();
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  atualizarInfoQuantidade(idProduto);
}

function decrementarQuantidadeProduto(idProduto) {
  if (idsProdutoCarrinhoComQuantidade[idProduto] === 1) {
    removerDoCarrinho(idProduto);
    return;
  }
  idsProdutoCarrinhoComQuantidade[idProduto]--;
  atualizarPrecoCarrinho();
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  atualizarInfoQuantidade(idProduto);
}

function atualizarInfoQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText =
    idsProdutoCarrinhoComQuantidade[idProduto];
}

function desenharProdutoCarrinho(idProduto) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");

  const elemtentoArticle = document.createElement("article");
  const articleClasses = [
    "flex",
    "bg-stone-400",
    "text-stone-900",
    "rounded-lg",
    "relative",
  ];
  for (const articleClasse of articleClasses) {
    elemtentoArticle.classList.add(articleClasse);
  }

  const cardCarrinho = `<button id="remove-item-${produto.id}"
    class="absolute top-1 right-2">
  <i class="fa-solid fa-xmark hover:text-black"></i>
  </button>
  <img
  class="h-24 pl-2" 
  src="./assets/img/${produto.imagem}" 
  alt="${produto.alt}">
  <div class="flex flex-col justify-center p-1">
    <p class="text-xs">${produto.nome}</p>
    <p class="text-green-900 font-bold">R$${produto.preco}</p>
  </div>
  <div class="flex items-end absolute bottom-10 right-10 text-lg">
    <button id="decrementar-${produto.id}">-</button>
    <p id="quantidade-${produto.id}" class="ml-2">${
    idsProdutoCarrinhoComQuantidade[produto.id]
  }</p>
    <button class="ml-2" id="incrementar-${produto.id}">+</button>
    
  </div>`;

  elemtentoArticle.innerHTML = cardCarrinho;
  containerProdutosCarrinho.appendChild(elemtentoArticle);

  document
    .getElementById(`decrementar-${produto.id}`)
    .addEventListener("click", () => decrementarQuantidadeProduto(produto.id));

  document
    .getElementById(`incrementar-${produto.id}`)
    .addEventListener("click", () => incrementarQuantidadeProduto(produto.id));

  document
    .getElementById(`remove-item-${produto.id}`)
    .addEventListener("click", () => removerDoCarrinho(produto.id));
}

export function renderProdutosCarrinho() {
  const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");
  containerProdutosCarrinho.innerHTML = "";

  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoCarrinho(idProduto);
  }
}

export function addCarrinho(idProduto) {
  if (idProduto in idsProdutoCarrinhoComQuantidade) {
    incrementarQuantidadeProduto(idProduto);
    return;
  }
  idsProdutoCarrinhoComQuantidade[idProduto] = 1;
  desenharProdutoCarrinho(idProduto);
  atualizarPrecoCarrinho();
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
}

export function atualizarPrecoCarrinho() {
  const precoCarrinho = document.getElementById("preco-total");
  let precoTotalCarrinho = 0;
  for (const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade) {
    precoTotalCarrinho +=
      catalogo.find((p) => p.id === idProdutoNoCarrinho).preco *
      idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];
  }
  precoCarrinho.innerText = `Total: $${precoTotalCarrinho}`;
}
