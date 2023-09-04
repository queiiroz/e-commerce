export const catalogo = [
  {
    id: "1",
    nome: "OPUS-QUAD",
    marca: "Pioneer",
    preco: 28000,
    imagem: "produto-1.png",
    alt: "OPUS-QUAD Sistema tudo em um DJ profissional (preto)",
    controladora: false,
  },
  {
    id: "2",
    nome: "XDJ-RX3",
    marca: "Pioneer",
    preco: 18000,
    imagem: "produto-2.png",
    alt: "XDJ-RX3 Sistema DJ tudo-em-um profissional de 2 canais (preto)",
    controladora: false,
  },
  {
    id: "3",
    nome: "XDJ-XZ",
    marca: "Pioneer",
    preco: 22000,
    imagem: "produto-3.png",
    alt: "XDJ-XZ Sistema DJ tudo-em-um profissional de 4 canais",
    controladora: false,
  },
  {
    id: "4",
    nome: "XDJ-RR",
    marca: "Pioneer",
    preco: 10000,
    imagem: "produto-4.png",
    alt: "XDJ-RR Sistema DJ tudo-em-um profissional de 2 canais (preto)",
    controladora: false,
  },
  {
    id: "5",
    nome: "XDJ-RX2",
    marca: "Pioneer",
    preco: 14000,
    imagem: "produto-5.png",
    alt: "XDJ-RX2 2-channel performance all-in-one DJ system",
    controladora: false,
  },
  {
    id: "6",
    nome: "DDJ-1000SRT",
    marca: "Pioneer",
    preco: 12000,
    imagem: "produto-6.png",
    alt: "DDJ-1000SRT Controlador DJ de atuação de 4 canais para Serato DJ Pro",
    controladora: true,
  },
  {
    id: "7",
    nome: "DDJ-RZ",
    marca: "Pioneer",
    preco: 15000,
    imagem: "produto-7.png",
    alt: "DDJ-RZ 4-channel professional DJ controller for rekordbox",
    controladora: true,
  },
  {
    id: "8",
    nome: "DDJ-800",
    marca: "Pioneer",
    preco: 9000,
    imagem: "produto-8.png",
    alt: "DDJ-800 Controlador DJ de atuação de 2 canais para rekordbox",
    controladora: true,
  },
];

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}
