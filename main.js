import { renderCatalogo } from "./src/cardProduto";
import { inicializarFiltros } from "./src/filtrosCatalogo";
import {
  atualizarPrecoCarrinho,
  inicializarCarrinho,
  renderProdutosCarrinho,
} from "./src/menuCarrinho";

inicializarCarrinho();
renderCatalogo();
atualizarPrecoCarrinho();
renderProdutosCarrinho();
inicializarFiltros();
