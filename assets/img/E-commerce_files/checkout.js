import {
  desenharProdutoCarrinhoSimples,
  lerLocalStorage,
} from "/src/utilidades.js?t=1693956111091";

function desenharPordutosCheckout() {
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho");

  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoCarrinhoSimples(
      idProduto,
      "containe-praodutos-checkout",
      idsProdutoCarrinhoComQuantidade[idProduto]
    );
  }
}

desenharPordutosCheckout();
