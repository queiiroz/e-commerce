import { addCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cardProduct = `<div class=" shadow-lg shadow-stone-500 rounded-lg flex flex-col  w-60 h-full p-2 m-2 justify-between item-center group ${produtoCatalogo.controladora} " 
    id="card-1 ">
<img 
  src="./assets/img/${produtoCatalogo.imagem}"
  alt="${produtoCatalogo.alt}"
  class="group-hover:scale-110 duration-300 mx-2"
/>
<p class="marca text-stone-500">${produtoCatalogo.marca}</p>
<p class="font-bold">${produtoCatalogo.nome}</p>
<p class="text-green-900">R$${produtoCatalogo.preco}</p>
<button id="adicionar-${produtoCatalogo.id}" class="bg-stone-900 hover:bg-stone-950 text-stone-200 p-1"><i class="fa-solid fa-cart-plus"></i></button>
</div>`;

    document.getElementById("container-produto").innerHTML += cardProduct;
  }

  for (const produtoCatalogo of catalogo) {
    document
      .getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener("click", () => addCarrinho(produtoCatalogo.id));
  }
}
