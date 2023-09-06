import {
  lerLocalStorage,
  desenharProdutoCarrinhoSimples,
} from "./src/utilidades";

function criarPedidoHistorico(pedidoComData) {
  const elementoPedido = `<p class="text-xl text-bold my-4">${new Date(
    pedidoComData.dataPedido
  ).toLocaleDateString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  })}</p>
  <section class="bg-stone-100 p-3 rounded-lg" id="container-pedidos-${
    pedidoComData.dataPedido
  }"></section>
  `;
  const main = document.getElementsByTagName("main")[0];
  main.innerHTML += elementoPedido;

  for (const idProduto in pedidoComData.pedido) {
    desenharProdutoCarrinhoSimples(
      idProduto,
      `container-pedidos-${pedidoComData.dataPedido}`,
      pedidoComData.pedido[idProduto]
    );
  }
}

function renderHitoricoPedidos() {
  const historico = lerLocalStorage("historico");

  for (const pedidoComData of historico) {
    criarPedidoHistorico(pedidoComData);
  }
}

renderHitoricoPedidos();
