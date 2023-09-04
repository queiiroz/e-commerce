const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos() {
  const produtosEscondidos = Array.from(
    catalogoProdutos.getElementsByClassName("hidden")
  );

  for (const produto of produtosEscondidos) {
    produto.classList.remove("hidden");
  }
}

function esconderAllinone() {
  exibirTodos();
  const produtosAllinone = Array.from(
    catalogoProdutos.getElementsByClassName("all-in-one")
  );

  for (const produto of produtosAllinone) {
    produto.classList.add("hidden");
  }
}

function esconderControladora() {
  exibirTodos();
  const produtosControladora = Array.from(
    catalogoProdutos.getElementsByClassName("controladora")
  );

  for (const produto of produtosControladora) {
    produto.classList.add("hidden");
  }
}

export function inicializarFiltros() {
  document
    .getElementById("exibir-controladora")
    .addEventListener("click", esconderAllinone);

  document
    .getElementById("exibir-allinone")
    .addEventListener("click", esconderControladora);

  document
    .getElementById("exibir-todos")
    .addEventListener("click", exibirTodos);
}
