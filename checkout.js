import {
  desenharProdutoCarrinhoSimples,
  lerLocalStorage,
} from "./src/utilidades";

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
