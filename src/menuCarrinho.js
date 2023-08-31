function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("right-[0]");
  document.getElementById("carrinho").classList.remove("right-[-20rem]");
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[0]");
  document.getElementById("carrinho").classList.add("right-[-20rem]");
}
