import { renderCatalogo } from "./src/cardProduto";
import {
  atualizarPrecoCarrinho,
  inicializarCarrinho,
  renderProdutosCarrinho,
} from "./src/menuCarrinho";

inicializarCarrinho();
renderCatalogo();
atualizarPrecoCarrinho();
renderProdutosCarrinho();
