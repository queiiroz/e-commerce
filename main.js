const catalogo = [
  {
    id: 1,
    nome: "OPUS-QUAD",
    marca: "Pioneer",
    preco: 28000,
    imagem: "produto-1.png",
    alt: "OPUS-QUAD Sistema tudo em um DJ profissional (preto)",
  },
  {
    id: 2,
    nome: "XDJ-RX3",
    marca: "Pioneer",
    preco: 18000,
    imagem: "produto-2.png",
    alt: "XDJ-RX3 Sistema DJ tudo-em-um profissional de 2 canais (preto)",
  },
  {
    id: 3,
    nome: "XDJ-XZ",
    marca: "Pioneer",
    preco: 22000,
    imagem: "produto-3.png",
    alt: "XDJ-XZ Sistema DJ tudo-em-um profissional de 4 canais",
  },
  {
    id: 4,
    nome: "XDJ-RR",
    marca: "Pioneer",
    preco: 10000,
    imagem: "produto-4.png",
    alt: "XDJ-RR Sistema DJ tudo-em-um profissional de 2 canais (preto)",
  },
  {
    id: 5,
    nome: "XDJ-RX2",
    marca: "Pioneer",
    preco: 14000,
    imagem: "produto-5.png",
    alt: "XDJ-RX2 2-channel performance all-in-one DJ system",
  },
  {
    id: 6,
    nome: "DDJ-1000SRT",
    marca: "Pioneer",
    preco: 12000,
    imagem: "produto-6.png",
    alt: "DDJ-1000SRT Controlador DJ de atuação de 4 canais para Serato DJ Pro",
  },
  {
    id: 7,
    nome: "DDJ-RZ",
    marca: "Pioneer",
    preco: 15000,
    imagem: "produto-7.png",
    alt: "DDJ-RZ 4-channel professional DJ controller for rekordbox",
  },
  {
    id: 8,
    nome: "DDJ-800",
    marca: "Pioneer",
    preco: 9000,
    imagem: "produto-8.png",
    alt: "DDJ-800 Controlador DJ de atuação de 2 canais para rekordbox",
  },
];

for (produtoCatalogo of catalogo) {
  const cardProduct = `<div class="border-solid border-2 border-sky-500 w-80 m-2" id="card-1">
<img
  src="./assets/img/${produtoCatalogo.imagem}"
  alt="${produtoCatalogo.alt}"
/>
<p class="marca">${produtoCatalogo.marca}</p>
<p>${produtoCatalogo.nome}</p>
<p>R$${produtoCatalogo.preco}</p>
<button>Comprar</button>
</div>`;

  document.getElementById("container-produto").innerHTML += cardProduct;
}
