"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  CalcularParcelamento: () => CalcularParcelamento,
  Carrinho: () => Carrinho,
  FiltrarProdutos: () => FiltrarProdutos,
  FormaPagamento: () => FormaPagamento,
  Moeda: () => Moeda,
  QTDE_MAX_PARCELAS: () => QTDE_MAX_PARCELAS,
  Status: () => Status,
  TAXA_JUROS_MENSAL: () => TAXA_JUROS_MENSAL,
  produtos: () => produtos_default
});
module.exports = __toCommonJS(src_exports);

// src/carrinho/Carrinho.ts
var Carrinho = class _Carrinho {
  constructor(itens = []) {
    this.itens = itens;
  }
  adicionarItem(produto) {
    const item = this.itemPorProduto(produto);
    if (item) {
      return new _Carrinho(this.alterarQuantidadeItem(this.itens, produto, 1));
    } else {
      return new _Carrinho([...this.itens, { produto, quantidade: 1 }]);
    }
  }
  removerItem(produto) {
    const item = this.itemPorProduto(produto);
    if (!item) return this;
    return new _Carrinho(this.alterarQuantidadeItem(this.itens, produto, -1));
  }
  removerProduto(produto) {
    const item = this.itemPorProduto(produto);
    if (!item) return this;
    return new _Carrinho(this.itens.filter((item2) => item2.produto.id !== produto.id));
  }
  limpar() {
    return new _Carrinho();
  }
  get qtdeItens() {
    return this.itens.map((item) => item.quantidade).reduce((a, b) => a + b, 0);
  }
  get valorTotal() {
    return this.itens.map((item) => item.produto.precoPromocional * item.quantidade).reduce((a, b) => a + b, 0);
  }
  get valorTotalCheio() {
    return this.itens.map((item) => item.produto.precoBase * item.quantidade).reduce((a, b) => a + b, 0);
  }
  itemPorProduto(produto) {
    return this.itens.find((item) => item.produto.id === produto.id);
  }
  alterarQuantidadeItem(itens, produto, diferenca) {
    return itens.map(
      (i) => i.produto.id === produto.id ? { ...i, quantidade: i.quantidade + diferenca } : i
    ).filter((i) => i.quantidade > 0);
  }
};

// src/constants/produtos.ts
var produtos = [
  {
    id: 1,
    nome: "Notebook Gamer Acer Nitro 5",
    descricao: "O Acer Nitro 5 \xE9 um notebook gamer poderoso, ideal para jogos pesados e multitarefas.",
    marca: "Acer",
    modelo: "AN515-54-58CL",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Facer-nitro-5.png?alt=media&token=094ba6a8-1a4d-414a-b32c-c176bfeaca8e",
    nota: 4.5,
    videoReview: "https://www.youtube.com/embed/8NQFr9De3lU?si=s_lN2KTQresD-36Y",
    tags: ["Baixou"],
    precoBase: 6499.99,
    precoPromocional: 5999.99,
    menorPreco: 4850.9,
    maiorPreco: 9800.8,
    precoMedio: 6503.7,
    especificacoes: {
      destaque: "NVIDIA GeForce RTX 2060",
      Processador: "Intel Core i5-9300H",
      Mem\u00F3ria: "16GB DDR4",
      Armazenamento: "512GB SSD",
      "Placa de V\xEDdeo": "NVIDIA GeForce RTX 2060",
      Tela: "15.6 polegadas Full HD",
      Peso: "2.5 Kg"
    }
  },
  {
    id: 2,
    nome: "Notebook Gamer Dell G5",
    descricao: "O Dell G5 oferece uma experi\xEAncia de jogo fluida e gr\xE1ficos de alta qualidade.",
    marca: "Dell",
    modelo: "G5-5590-A30B",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fdell-g5.png?alt=media&token=ac1cb3fa-4cc4-4f30-a831-19bca5b85644",
    nota: 5,
    videoReview: "https://www.youtube.com/embed/N5C1ALQkv1Q?si=KuVr4V6-A02Z23XK",
    tags: [],
    precoBase: 7299.99,
    precoPromocional: 6799.99,
    menorPreco: 4850,
    maiorPreco: 9800,
    precoMedio: 6500,
    especificacoes: {
      destaque: "NVIDIA GeForce GTX 1660 Ti",
      Processador: "Intel Core i7-9750H",
      Mem\u00F3ria: "16GB DDR4",
      Armazenamento: "1TB HDD + 256GB SSD",
      "Placa de V\xEDdeo": "NVIDIA GeForce GTX 1660 Ti",
      Tela: "15.6 polegadas Full HD",
      Peso: "2.68 Kg"
    }
  },
  {
    id: 3,
    nome: "Notebook Gamer Lenovo Legion Y540",
    descricao: "O Lenovo Legion Y540 \xE9 um notebook gamer de alta performance com design elegante.",
    marca: "Lenovo",
    modelo: "Legion Y540-15IRH",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Flegion-y540.png?alt=media&token=b36f6c61-8b7d-4454-9940-d945b89d44f8",
    nota: 4.5,
    videoReview: "https://www.youtube.com/embed/knhriyVTMpA?si=3RduZcEVx4mjEwER",
    tags: ["Recomendado"],
    precoBase: 6999.99,
    precoPromocional: 6499.99,
    menorPreco: 4850,
    maiorPreco: 9800,
    precoMedio: 6500,
    especificacoes: {
      destaque: "NVIDIA GeForce GTX 1660 Ti",
      Processador: "Intel Core i7-9750H",
      Mem\u00F3ria: "16GB DDR4",
      Armazenamento: "512GB SSD",
      "Placa de V\xEDdeo": "NVIDIA GeForce GTX 1660 Ti",
      Tela: "15.6 polegadas Full HD",
      Peso: "2.3 Kg"
    }
  },
  {
    id: 4,
    nome: "Notebook Gamer HP Pavilion",
    descricao: "O HP Pavilion \xE9 um notebook gamer com desempenho s\xF3lido e design moderno, perfeito para jogadores que buscam custo-benef\xEDcio.",
    marca: "HP",
    modelo: "Pavilion 15-dk0010",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fhp-pavilion-dk0010.png?alt=media&token=6f0d7c8d-0612-4ca9-9ee8-1849971ae8c4",
    nota: 4,
    videoReview: "https://www.youtube.com/embed/dCvvugSjnZ4?si=zOMGbydgNdkB9QwY",
    tags: [],
    precoBase: 5499.99,
    precoPromocional: 4999.99,
    menorPreco: 4133,
    maiorPreco: 7990.9,
    precoMedio: 5107.9,
    especificacoes: {
      destaque: "NVIDIA GeForce GTX 1650",
      Processador: "Intel Core i5-9300H",
      Mem\u00F3ria: "8GB DDR4",
      Armazenamento: "256GB SSD",
      "Placa de V\xEDdeo": "NVIDIA GeForce GTX 1650",
      Tela: "15.6 polegadas Full HD",
      Peso: "2.25 Kg"
    }
  },
  {
    id: 5,
    nome: "Notebook Gamer ASUS TUF A15",
    descricao: "O ASUS TUF Gaming A15 combina durabilidade militar com um desempenho excelente para jogos.",
    marca: "ASUS",
    modelo: "TUF A15 FA506IV",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fasus-tuf-a15.png?alt=media&token=989d3375-f26b-4ada-a920-afa41dfdb8de",
    nota: 5,
    videoReview: "https://www.youtube.com/embed/v-LmH_Gfnn8?si=IGQmsvb-eZyDInwV",
    tags: ["Oportunidade"],
    precoBase: 7499.99,
    precoPromocional: 6999.99,
    menorPreco: 4133,
    maiorPreco: 7990.9,
    precoMedio: 5107.9,
    especificacoes: {
      destaque: "NVIDIA GeForce RTX 2060",
      Processador: "AMD Ryzen 7 4800H",
      Mem\u00F3ria: "16GB DDR4",
      Armazenamento: "512GB SSD",
      "Placa de V\xEDdeo": "NVIDIA GeForce RTX 2060",
      Tela: "15.6 polegadas Full HD 144Hz",
      Peso: "2.3 Kg"
    }
  },
  {
    id: 6,
    nome: "Notebook Gamer MSI GL65 Leopard",
    descricao: "O MSI GL65 Leopard oferece um desempenho superior com design agressivo e teclado RGB personaliz\xE1vel.",
    marca: "MSI",
    modelo: "GL65 Leopard 10SFK-062",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmsi-gl65.png?alt=media&token=24798828-8546-4720-bfe7-f813f4e78507",
    nota: 4,
    videoReview: "https://www.youtube.com/embed/uT-YHREKDaE?si=Z7e2lk9G-H7-cghs",
    tags: ["Melhor RTX 2070"],
    precoBase: 8999.99,
    precoPromocional: 8499.99,
    menorPreco: 4133,
    maiorPreco: 7990.9,
    precoMedio: 5107.9,
    especificacoes: {
      destaque: "NVIDIA GeForce RTX 2070",
      Processador: "Intel Core i7-10750H",
      Mem\u00F3ria: "16GB DDR4",
      Armazenamento: "512GB SSD",
      "Placa de V\xEDdeo": "NVIDIA GeForce RTX 2070",
      Tela: "15.6 polegadas Full HD 144Hz",
      Peso: "2.3 Kg"
    }
  },
  {
    id: 7,
    nome: "Notebook Gamer Razer Blade 15",
    descricao: "O Razer Blade 15 \xE9 um notebook gamer premium com design ultrafino e hardware de ponta.",
    marca: "Razer",
    modelo: "Blade 15 Base",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Frazer-blade-15.png?alt=media&token=6e23866d-56d0-4da9-94e8-feb1b57d8fac",
    nota: 5,
    videoReview: "https://www.youtube.com/embed/7kpreUxmHvA?si=wj5A9bw4F8zm_w_Y",
    tags: [],
    precoBase: 12499.99,
    precoPromocional: 11999.99,
    menorPreco: 6850,
    maiorPreco: 13500,
    precoMedio: 10900.9,
    especificacoes: {
      destaque: "NVIDIA GeForce RTX 2070",
      Processador: "Intel Core i7-10750H",
      Mem\u00F3ria: "16GB DDR4",
      Armazenamento: "512GB SSD",
      "Placa de V\xEDdeo": "NVIDIA GeForce RTX 2070",
      Tela: "15.6 polegadas Full HD 144Hz",
      Peso: "2.1 Kg"
    }
  },
  {
    id: 8,
    nome: "Notebook Gamer Alienware m15",
    descricao: "O Alienware m15 \xE9 um notebook gamer de alto desempenho com design futurista e recursos avan\xE7ados.",
    marca: "Dell",
    modelo: "m15 R3",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Falienware-m15.png?alt=media&token=85df89d1-3db1-4978-9581-4802b42d7c6e",
    nota: 4.5,
    videoReview: "https://www.youtube.com/embed/OywbZPwHJBw?si=cZmqJESmXGh-D1Bw",
    tags: ["Sem juros"],
    precoBase: 14999.99,
    precoPromocional: 13999.99,
    menorPreco: 4133,
    maiorPreco: 7990.9,
    precoMedio: 5107.9,
    especificacoes: {
      destaque: "NVIDIA GeForce RTX 2080 Super",
      Processador: "Intel Core i7-10875H",
      Mem\u00F3ria: "16GB DDR4",
      Armazenamento: "1TB SSD",
      "Placa de V\xEDdeo": "NVIDIA GeForce RTX 2080 Super",
      Tela: "15.6 polegadas Full HD 240Hz",
      Peso: "2.5 Kg"
    }
  },
  {
    id: 9,
    nome: "Processador AMD Ryzen 7 5700X3D",
    descricao: "Desfrute de velocidades supers\xF4nicas com 8 n\xFAcleos e 16 threads de processamento, prontos para enfrentar os t\xEDtulos mais desafiadores. Frequ\xEAncia base de 3,0GHz e boost din\xE2mico de at\xE9 4,1GHz para eliminar qualquer engasgo.",
    marca: "AMD",
    modelo: "100-100001503WOF",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fryzen-7-5700x3d.png?alt=media&token=62caf240-b3c6-41d9-889a-c4ca882822d9",
    nota: 4.5,
    videoReview: "https://www.youtube.com/embed/ic8a_L15Z98&t=67s",
    tags: ["Sem juros", "Mais Vendidos", "Custo Benef\xEDcio"],
    precoBase: 2499.99,
    precoPromocional: 1189.99,
    menorPreco: 999.99,
    maiorPreco: 3290.9,
    precoMedio: 1699.9,
    especificacoes: {
      destaque: "AMD Ryzen 7 5700X3D",
      "N\xBA de n\xFAcleos de CPU": 8,
      "N\xBA de threads": 16,
      "Clock de Max Boost": 4.1,
      "Clock b\xE1sico": 3,
      "Total de Cache L2": "4MB",
      "Cach\xEA L3 total": "96MB",
      Soquete: "AM4",
      "Temperatura m\xE1xima": "90\xB0C",
      peso: "243 g"
    }
  },
  {
    id: 10,
    nome: "Processador Intel Core i9-13900K",
    descricao: "O Intel Core i9-13900K \xE9 o processador ideal para gamers e profissionais que precisam de desempenho extremo. Equipado com 24 n\xFAcleos e 32 threads, alcan\xE7a frequ\xEAncias de at\xE9 5,8 GHz em modo turbo, oferecendo desempenho inigual\xE1vel.",
    marca: "Intel",
    modelo: "BX8071513900K",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fcore-i9-13900k.png?alt=media&token=9d185bf6-64ca-48bf-bdb7-acd0de317f09",
    nota: 4.8,
    videoReview: "https://www.youtube.com/embed/tV-FbmLJejg",
    tags: ["Desempenho M\xE1ximo", "Recomendado para Jogos", "Overclock"],
    precoBase: 3899.99,
    precoPromocional: 3299.99,
    menorPreco: 2999.99,
    maiorPreco: 4199.9,
    precoMedio: 3599.9,
    especificacoes: {
      destaque: "Intel Core i9-13900K",
      "N\xBA de n\xFAcleos de CPU": 24,
      "N\xBA de threads": 32,
      "Clock de Max Boost": 5.8,
      "Clock b\xE1sico": 3,
      "Total de Cache L2": "32 MB",
      "Cach\xEA L3 total": "36 MB",
      Soquete: "LGA 1700",
      peso: "101 g"
    }
  },
  {
    id: 11,
    nome: "Processador AMD Ryzen 9 7950X3D",
    descricao: "O processador AMD Ryzen 9 7950X3D redefine o desempenho de jogos e produtividade, com 16 n\xFAcleos e 32 threads e cache total de 128MB. Frequ\xEAncia de boost de at\xE9 5,7 GHz, ideal para cargas intensas de trabalho e multitarefa.",
    marca: "AMD",
    modelo: "100-100001700WOF",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fryzen-9-7950x3d.png?alt=media&token=74ab9ea8-1250-42b8-b653-db430969d3cf",
    nota: 4.9,
    videoReview: "https://www.youtube.com/embed/3XFI1jhZMEU",
    tags: ["Performance Extrema", "Topo de Linha", "Gamer"],
    precoBase: 5899.99,
    precoPromocional: 4599.99,
    menorPreco: 4199.99,
    maiorPreco: 5999.9,
    precoMedio: 4999.9,
    especificacoes: {
      destaque: "AMD Ryzen 9 7950X3D",
      "N\xBA de n\xFAcleos de CPU": 16,
      "N\xBA de threads": 32,
      "Clock de Max Boost": 5.7,
      "Clock b\xE1sico": 4.2,
      "Total de Cache L2": "16 MB",
      "Cach\xEA L3 total": "128 MB",
      Soquete: "AM5",
      "Temperatura m\xE1xima": "95\xB0C",
      peso: "190 g"
    }
  },
  {
    id: 12,
    nome: "Teclado Mec\xE2nico Gamer Razer BlackWidow V3",
    descricao: "O Razer BlackWidow V3 \xE9 equipado com switches mec\xE2nicos Razer Green para uma resposta t\xE1til precisa e feedback auditivo satisfat\xF3rio. Possui ilumina\xE7\xE3o RGB Razer Chroma e estrutura em alum\xEDnio para maior durabilidade.",
    marca: "Razer",
    modelo: "RZ03-03540100-R3U1",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fteclado-razer-blackwidow-v3.png?alt=media&token=41cf33c1-66d7-4c4f-a36f-a358d9061d29",
    nota: 4.7,
    videoReview: "https://www.youtube.com/embed/HVPSyfIs-84",
    tags: ["RGB Personaliz\xE1vel", "Durabilidade", "Switch T\xE1til"],
    precoBase: 1299.99,
    precoPromocional: 999.99,
    menorPreco: 799.99,
    maiorPreco: 1599.99,
    precoMedio: 999.99,
    especificacoes: {
      destaque: "Switch Razer Green",
      "Tipo de Switch": "Mec\xE2nico",
      Conectividade: "Cabo USB",
      Ilumina\u00E7\u00E3o: "Razer Chroma RGB",
      Estrutura: "Alum\xEDnio",
      "Anti-Ghosting": "Sim, N-Key Rollover",
      peso: "1130 g"
    }
  },
  {
    id: 13,
    nome: "Teclado Mec\xE2nico Gamer Corsair K70 RGB MK.2",
    descricao: "Com switches Cherry MX Red, o Corsair K70 RGB MK.2 oferece resposta linear e silenciosa. Constru\xEDdo em alum\xEDnio escovado, ideal para sess\xF5es longas de gameplay, e com ilumina\xE7\xE3o RGB din\xE2mica.",
    marca: "Corsair",
    modelo: "CH-9109010-NA",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fteclado-corsair-k70.png?alt=media&token=3dbe507e-1df9-4743-b8c4-cd782cfe6c63",
    nota: 4.8,
    videoReview: "https://www.youtube.com/embed/1ABIgPdZrkI?si=7HUrXG7JD-vkQR5_",
    tags: ["RGB Din\xE2mico", "Estrutura em Alum\xEDnio", "Switch Silencioso"],
    precoBase: 1799.99,
    precoPromocional: 1349.99,
    menorPreco: 1199.99,
    maiorPreco: 2299.9,
    precoMedio: 1249.9,
    especificacoes: {
      destaque: "Switch Cherry MX Red",
      "Tipo de Switch": "Mec\xE2nico",
      Conectividade: "Cabo USB",
      Ilumina\u00E7\u00E3o: "RGB por tecla",
      Estrutura: "Alum\xEDnio escovado",
      "Anti-Ghosting": "Sim, N-Key Rollover",
      peso: "1250 g"
    }
  },
  {
    id: 14,
    nome: "Teclado Mec\xE2nico Gamer Redragon Draconic K530",
    descricao: "O Redragon Draconic K530 \xE9 um teclado mec\xE2nico compacto, sem fio, projetado para m\xE1xima portabilidade e desempenho. Equipado com switches Outemu Brown, ideal para quem busca um equil\xEDbrio entre feedback t\xE1til e sil\xEAncio, al\xE9m de conectividade Bluetooth.",
    marca: "Redragon",
    modelo: "K530-RGB",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fteclado-redragon-draconic-k530.png?alt=media&token=d456ac67-d742-40ed-9a99-2c3281b9a2c2",
    nota: 4.6,
    videoReview: "https://www.youtube.com/embed/6sAqSwcjjt0",
    tags: ["Bluetooth", "Compacto", "Port\xE1til", "Switch T\xE1til"],
    precoBase: 549.99,
    precoPromocional: 429.99,
    menorPreco: 399.99,
    maiorPreco: 599.99,
    precoMedio: 499.99,
    especificacoes: {
      destaque: "Switch Outemu Brown",
      "Tipo de Switch": "Mec\xE2nico",
      Conectividade: "Bluetooth 5.0 / Cabo USB-C",
      Ilumina\u00E7\u00E3o: "RGB",
      Estrutura: "Pl\xE1stico ABS refor\xE7ado",
      Teclas: "61(Layout 60 %)",
      "Anti-Ghosting": "Sim, N-Key Rollover",
      peso: "600 g"
    }
  },
  {
    id: 15,
    nome: "Mouse Gamer Logitech G403 Hero",
    descricao: "O Logitech G403 Hero \xE9 equipado com o sensor HERO 25K, oferecendo precis\xE3o m\xE1xima com at\xE9 25.600 DPI ajust\xE1veis. Design ergon\xF4mico, estrutura leve e peso ajust\xE1vel, ideal para quem busca conforto e alto desempenho em jogos.",
    marca: "Logitech",
    modelo: "910-005631",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmouse-logitech-g403-hero.png?alt=media&token=869b7dff-b08e-449f-b35c-c16d95d5cbe3",
    nota: 4.8,
    videoReview: "https://www.youtube.com/embed/SjxHa-hv_2c",
    tags: ["Ergon\xF4mico", "Peso Ajust\xE1vel", "Sensor HERO", "Custo Benef\xEDcio"],
    precoBase: 399.99,
    precoPromocional: 299.99,
    menorPreco: 279.99,
    maiorPreco: 449.9,
    precoMedio: 349.99,
    especificacoes: {
      destaque: "HERO 16K / 25K",
      "DPI M\xE1ximo": 25600,
      Conectividade: "Cabo USB",
      "Bot\xF5es Program\xE1veis": 6,
      Ilumina\u00E7\u00E3o: "RGB LIGHTSYNC",
      "Tempo de Resposta": "1ms",
      Estrutura: "Pl\xE1stico ABS e borracha texturizada",
      peso: "87 g (com peso ajust\xE1vel de 10 g)"
    }
  },
  {
    id: 16,
    nome: "Mouse Gamer Razer DeathAdder V2",
    descricao: "O Razer DeathAdder V2 possui o sensor \xF3tico Focus+ de 20.000 DPI, com switches \xF3pticos para cliques mais r\xE1pidos e durabilidade de at\xE9 70 milh\xF5es de cliques. Design ergon\xF4mico e leve, com cabo SpeedFlex para movimentos sem arrasto.",
    marca: "Razer",
    modelo: "RZ01-03210100-R3U1",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmouse-razer-deathadder-v2.png?alt=media&token=6b3d7cf9-334d-4950-8c66-a15d136216a6",
    nota: 4.7,
    videoReview: "https://www.youtube.com/embed/jlmeKfzu_is",
    tags: ["Ergonomia", "Sensor \xD3ptico", "Switches \xD3pticos"],
    precoBase: 499.99,
    precoPromocional: 399.99,
    menorPreco: 349.99,
    maiorPreco: 549.9,
    precoMedio: 449.99,
    especificacoes: {
      destaque: "Sensor Focus+",
      "DPI M\xE1ximo": 2e4,
      Conectividade: "Cabo USB SpeedFlex",
      "Bot\xF5es Program\xE1veis": 8,
      Ilumina\u00E7\u00E3o: "Razer Chroma RGB",
      "Tempo de Resposta": "0.2ms (switch \xF3ptico)",
      Estrutura: "Pl\xE1stico ABS texturizado",
      peso: "88 g"
    }
  },
  {
    id: 17,
    nome: "Mouse Gamer HyperX Pulsefire FPS Pro",
    descricao: "O HyperX Pulsefire FPS Pro \xE9 ideal para jogadores que buscam precis\xE3o e conforto. Equipado com o sensor Pixart 3389 de at\xE9 16.000 DPI e bot\xF5es Omron com alta durabilidade. Ilumina\xE7\xE3o RGB personaliz\xE1vel e design ergon\xF4mico.",
    marca: "HyperX",
    modelo: "HX-MC003B",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmouse-hyperxppulsefire-fps-pro.png?alt=media&token=8b0edce3-1eef-412e-be5f-bc701646b23f",
    nota: 4.5,
    videoReview: "https://www.youtube.com/embed/sJAM6Pxa4PI",
    tags: ["Alta Precis\xE3o", "Sensor Pixart", "Ergon\xF4mico"],
    precoBase: 349.99,
    precoPromocional: 249.99,
    menorPreco: 219.99,
    maiorPreco: 399.9,
    precoMedio: 299.99,
    especificacoes: {
      destaque: "Sensor Pixart 3389",
      "DPI M\xE1ximo": 16e3,
      Conectividade: "Cabo USB",
      "Bot\xF5es Program\xE1veis": 6,
      Ilumina\u00E7\u00E3o: "RGB",
      "Tempo de Resposta": "1ms",
      Estrutura: "Pl\xE1stico ABS com laterais texturizadas",
      peso: "95 g"
    }
  },
  {
    id: 18,
    nome: "Headset Gamer HyperX Cloud II",
    descricao: "O HyperX Cloud II \xE9 um headset projetado para m\xE1ximo conforto e qualidade de som. Possui drivers de 53mm e som surround virtual 7.1, ideal para gamers que buscam imers\xE3o completa em jogos.",
    marca: "HyperX",
    modelo: "KHX-HSCP-RD",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fheadset-gamer-hyperx-cloud-II.png?alt=media&token=82dce4ef-75c7-4c75-9e1a-ccf20aac1af7",
    nota: 4.8,
    videoReview: "https://www.youtube.com/embed/BT6NFjvRNu0",
    tags: ["Confort\xE1vel", "Surround 7.1", "Microfone Remov\xEDvel"],
    precoBase: 899.99,
    precoPromocional: 699.99,
    menorPreco: 649.99,
    maiorPreco: 949.99,
    precoMedio: 799.99,
    especificacoes: {
      destaque: "Surround Virtual 7.1",
      Drivers: "53mm",
      Conectividade: "USB / P2 3.5mm",
      Microfone: "Remov\xEDvel com cancelamento de ru\xEDdo",
      Compatibilidade: "PC, PS4, Xbox One",
      peso: "320 g"
    }
  },
  {
    id: 19,
    nome: "Headset Gamer Razer Kraken X",
    descricao: "O Razer Kraken X \xE9 um headset ultraleve com som surround 7.1 e almofadas em espuma com mem\xF3ria para m\xE1ximo conforto. Microfone cardioide e estrutura refor\xE7ada para durabilidade.",
    marca: "Razer",
    modelo: "RZ04-02890100-R3U1",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fheadset-razer-kraken-x-lite.png?alt=media&token=d1219f2a-2199-4e17-9dca-5b7db5537f55",
    nota: 4.6,
    videoReview: "https://www.youtube.com/embed/L3lW1P0rr_M",
    tags: ["Leve", "Surround 7.1", "Microfone Flex\xEDvel"],
    precoBase: 299.99,
    precoPromocional: 229.99,
    menorPreco: 199.99,
    maiorPreco: 349.99,
    precoMedio: 269.99,
    especificacoes: {
      destaque: "Surround Virtual 7.1",
      Drivers: "40mm",
      Conectividade: "P2 3.5mm",
      Microfone: "Cardioide n\xE3o remov\xEDvel",
      Compatibilidade: "PC, PS4, Xbox One, Switch",
      peso: "250 g"
    }
  },
  {
    id: 20,
    nome: 'Monitor Gamer Samsung Odyssey G7 27"',
    descricao: "O Samsung Odyssey G7 possui taxa de atualiza\xE7\xE3o de 240Hz e tempo de resposta de 1ms. Com painel curvo QHD e tecnologia G-Sync, \xE9 ideal para gamers que buscam desempenho e imers\xE3o.",
    marca: "Samsung",
    modelo: "LC27G75TQSNXZA",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmonitor-gamer-samsung-led-27-odyssey-curvo.png?alt=media&token=98f062fb-4c3a-4e87-895d-61ecdd7f7609",
    nota: 4.9,
    videoReview: "https://www.youtube.com/embed/-xrNbdySG-Y",
    tags: ["240Hz", "Curvo", "G-Sync"],
    precoBase: 3499.99,
    precoPromocional: 2999.99,
    menorPreco: 2799.99,
    maiorPreco: 3999.99,
    precoMedio: 3299.99,
    especificacoes: {
      destaque: "Painel Curvo QHD",
      Tamanho: "27 polegadas",
      "Taxa de Atualiza\xE7\xE3o": "240Hz",
      "Tempo de Resposta": "1ms",
      Tecnologia: "QLED",
      Conectividade: "HDMI, DisplayPort, USB",
      peso: "6.5 kg"
    }
  },
  {
    id: 21,
    nome: 'Monitor Gamer LG UltraGear 34"',
    descricao: 'O LG UltraGear 34" \xE9 um monitor ultra-wide com resolu\xE7\xE3o WQHD (3440x1440), taxa de atualiza\xE7\xE3o de 160Hz e suporte a G-Sync. Ideal para quem busca um monitor para jogos e produtividade.',
    marca: "LG",
    modelo: "34GN850-B",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmonitor-gamer-lg-ultragear-lg-34-curvo.png?alt=media&token=7f00d9ba-f2ef-416e-bf01-0b84962e099b",
    nota: 4.7,
    videoReview: "https://www.youtube.com/embed/YUbQODIro2k",
    tags: ["Ultra-Wide", "144Hz", "G-Sync"],
    precoBase: 2999.99,
    precoPromocional: 2399.99,
    menorPreco: 2199.99,
    maiorPreco: 3999.99,
    precoMedio: 2899.99,
    especificacoes: {
      destaque: "Painel WQHD",
      Tamanho: "34 polegadas",
      "Taxa de Atualiza\xE7\xE3o": "160Hz",
      "Tempo de Resposta": "1ms",
      Tecnologia: "IPS",
      Conectividade: "HDMI, DisplayPort, USB",
      peso: "7.3 kg"
    }
  },
  {
    id: 22,
    nome: "Placa de V\xEDdeo NVIDIA GeForce RTX 3060 Ventus 2X MSI",
    descricao: "A RTX 3060 Ventus 2X MSI \xE9 equipada com 12GB GDDR6, oferecendo desempenho de \xFAltima gera\xE7\xE3o para jogos 4K e Ray Tracing. Possui suporte a DLSS e tecnologias avan\xE7adas da NVIDIA para m\xE1xima performance.",
    marca: "MSI",
    modelo: "RTX 3060 Ventus",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fplaca-de-video-msi-nvidia-geforce-rtx-3060-ventus-2x-12gb.png?alt=media&token=ee112ada-6ac9-4f1c-9766-586caae1713a",
    nota: 4.9,
    videoReview: "https://www.youtube.com/embed/a_u2HPe2Cqg",
    tags: ["4K Gaming", "Ray Tracing", "DLSS", "NVidia", "GeForce"],
    precoBase: 2399.99,
    precoPromocional: 1999.99,
    menorPreco: 1599.99,
    maiorPreco: 3899.99,
    precoMedio: 2199.99,
    especificacoes: {
      destaque: "12GB GDDR6",
      "CUDA Cores": 3584,
      Conectividade: "HDMI 2.1, DisplayPort 1.4a",
      TDP: "170 W",
      peso: "1.03 kg"
    }
  },
  {
    id: 23,
    nome: "Placa de V\xEDdeo AMD Radeon RX 6800 XT",
    descricao: "A RX 6800 XT possui 16GB GDDR6 e arquitetura RDNA 2, proporcionando excelente desempenho em jogos 1440p e 4K. Inclui suporte a Ray Tracing e tecnologia Smart Access Memory para CPUs Ryzen.",
    marca: "ASRock",
    modelo: "90-GA28ZZ-00UANF",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Famd-radeon-6800-xt.png?alt=media&token=f2fdddc2-fc6b-4286-8452-10add1ff37f8",
    nota: 4.7,
    videoReview: "https://www.youtube.com/embed/ddbpej8sM9s",
    tags: ["Ray Tracing", "16GB GDDR6", "Smart Access Memory"],
    precoBase: 6449.99,
    precoPromocional: 5799.99,
    menorPreco: 5499.99,
    maiorPreco: 8199.99,
    precoMedio: 5999.99,
    especificacoes: {
      destaque: "16GB GDDR6",
      "Stream Processors": 4608,
      Conectividade: "HDMI 2.1, DisplayPort 1.4",
      TDP: "300W",
      peso: "2,52 kg"
    }
  },
  {
    id: 24,
    nome: "Placa M\xE3e ASUS ROG Strix Z590-E",
    descricao: "A ROG Strix Z590-E \xE9 uma placa-m\xE3e premium para processadores Intel de 11\xAA gera\xE7\xE3o, com suporte a overclock, Wi-Fi 6E integrado e ilumina\xE7\xE3o RGB ASUS Aura Sync.",
    marca: "ASUS",
    modelo: "ROG STRIX Z590-E GAMING WIFI",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fplaca-mae-asus-rog-strix-z590.png?alt=media&token=85f6951d-ff10-4a86-8000-089162c2f689",
    nota: 4.8,
    videoReview: "https://www.youtube.com/embed/toHoH4j25yo",
    tags: ["Wi-Fi 6E", "Overclocking", "RGB"],
    precoBase: 2999.99,
    precoPromocional: 2799.99,
    menorPreco: 2599.99,
    maiorPreco: 3299.99,
    precoMedio: 2899.99,
    especificacoes: {
      destaque: "Chipset Z590",
      Socket: "LGA 1200",
      "RAM Suportada": "DDR4 at\xE9 5333MHz",
      peso: "1.2 kg"
    }
  },
  {
    id: 25,
    nome: "Placa M\xE3e MSI MAG B550 Tomahawk",
    descricao: "A MAG B550 Tomahawk \xE9 uma placa-m\xE3e robusta para CPUs AMD Ryzen, oferecendo suporte a PCIe 4.0 e design t\xE9rmico otimizado com dissipadores estendidos para maior estabilidade.",
    marca: "MSI",
    modelo: "B550 TOMAHAWK",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fplaca-mae-msi-mag-b550.png?alt=media&token=d605f0ca-bac9-4fde-89c6-879909542a03",
    nota: 4.7,
    videoReview: "https://www.youtube.com/embed/mv-HByOFJG0",
    tags: ["PCIe 4.0", "Dissipa\xE7\xE3o Avan\xE7ada", "Suporte Ryzen"],
    precoBase: 1399.99,
    precoPromocional: 999.99,
    menorPreco: 899.99,
    maiorPreco: 1599.99,
    precoMedio: 1199.99,
    especificacoes: {
      destaque: "Chipset B550",
      Socket: "AM4",
      "RAM Suportada": "DDR4 at\xE9 4866MHz",
      peso: "2.01 kg"
    }
  },
  {
    id: 26,
    nome: "Mem\xF3ria RAM Corsair Vengeance RGB Pro 16GB (2x8GB)",
    descricao: "O kit Corsair Vengeance RGB Pro oferece desempenho de alto n\xEDvel para jogadores e criadores de conte\xFAdo, com 16GB de capacidade, frequ\xEAncia de 3200MHz e ilumina\xE7\xE3o RGB din\xE2mica.",
    marca: "Corsair",
    modelo: "CMW16GX4M2C3200C16",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmemoria-corsair-vengeance-rgb-pro-16gb-2x8gb-3200mhz.png?alt=media&token=7dd6698e-8da9-4b0d-9e80-84b716da0c1a",
    nota: 4.8,
    videoReview: "https://www.youtube.com/embed/XRkJAV6-gFw",
    tags: ["Alto Desempenho", "RGB", "Dual-Channel"],
    precoBase: 649.99,
    precoPromocional: 299.99,
    menorPreco: 299.99,
    maiorPreco: 749.99,
    precoMedio: 599.99,
    especificacoes: {
      destaque: "16GB (2x8GB)",
      Frequ\u00EAncia: "3200MHz",
      Compatibilidade: "Intel e AMD",
      peso: "120 g"
    }
  },
  {
    id: 27,
    nome: "Mem\xF3ria RAM Kingston Fury Beast 32GB (2x16GB)",
    descricao: "A Kingston Fury Beast \xE9 projetada para usu\xE1rios que necessitam de capacidade extra. Com 32GB e frequ\xEAncia de 3200MHz, \xE9 ideal para multitarefa avan\xE7ada e jogos pesados, mantendo baixa lat\xEAncia.",
    marca: "Kingston",
    modelo: "KF436C18BBK2/32",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmemoria-kingston-fury-beast-rgb-32gb-2x16gb-3200mhz.png?alt=media&token=533ffeb2-499b-4e72-87fb-238282dd20da",
    nota: 4.7,
    videoReview: "https://www.youtube.com/embed/MTvBo2pSBgQ",
    tags: ["Alta Capacidade", "3200MHz", "Heatsink"],
    precoBase: 999.99,
    precoPromocional: 699.99,
    menorPreco: 549.99,
    maiorPreco: 1199.99,
    precoMedio: 799.99,
    especificacoes: {
      destaque: "32GB (2x16GB)",
      Frequ\u00EAncia: "3200MHz",
      Compatibilidade: "Intel e AMD",
      peso: "150 g"
    }
  },
  {
    id: 28,
    nome: "Sony PlayStation 5 Slim",
    descricao: "O PlayStation 5 Slim oferece gr\xE1ficos de nova gera\xE7\xE3o com suporte a Ray Tracing, tempos de carregamento r\xE1pidos com seu SSD customizado e jogos exclusivos que definem a plataforma.",
    marca: "Sony",
    modelo: "CFI-1015A",
    imagem: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fps5-slim.png?alt=media&token=ed2ca61f-61c6-46bf-bc75-b4155132ca97",
    nota: 4.9,
    videoReview: "https://www.youtube.com/embed/bMFC-TM-t5E",
    tags: ["Nova Gera\xE7\xE3o", "Ray Tracing", "Exclusivos"],
    precoBase: 3999.99,
    precoPromocional: 3499.99,
    menorPreco: 2999.99,
    maiorPreco: 5999.99,
    precoMedio: 3899.99,
    especificacoes: {
      destaque: "SSD Customizado",
      CPU: "AMD Ryzen Zen 2 8 n\xFAcleos",
      Armazenamento: "1TB SSD",
      peso: "4.05 kg"
    }
  }
];
var produtos_default = produtos;

// src/constants/index.ts
var QTDE_MAX_PARCELAS = 12;
var TAXA_JUROS_MENSAL = 0.0167;

// src/parcelamento/CalcularParcelamento.ts
var CalcularParcelamento = class {
  executar(valor, qtdeParcelas = QTDE_MAX_PARCELAS, taxaJuros = TAXA_JUROS_MENSAL) {
    if (qtdeParcelas < 2 || qtdeParcelas > QTDE_MAX_PARCELAS) {
      throw new Error(`Quantidade de parcelas deve ser entre 2 e ${QTDE_MAX_PARCELAS}`);
    }
    const totalComJuros = this.calcularJurosCompostos(valor, taxaJuros, qtdeParcelas);
    return {
      valorParcela: this.comDuasCasasDecimais(totalComJuros / qtdeParcelas),
      valorTotal: this.comDuasCasasDecimais(totalComJuros),
      qtdeParcelas,
      taxaJuros
    };
  }
  calcularJurosCompostos(valorTotal, taxaMensal, qtdeParcelas) {
    return valorTotal * Math.pow(1 + taxaMensal, qtdeParcelas);
  }
  comDuasCasasDecimais(valor) {
    return Math.round(valor * 100) / 100;
  }
};

// src/pedido/Status.ts
var Status = /* @__PURE__ */ ((Status2) => {
  Status2["RECEBIDO"] = "RECEBIDO";
  return Status2;
})(Status || {});

// src/pedido/FormaPagamento.ts
var FormaPagamento = /* @__PURE__ */ ((FormaPagamento2) => {
  FormaPagamento2["PIX"] = "PIX";
  FormaPagamento2["BOLETO"] = "BOLETO";
  FormaPagamento2["CARTAO"] = "CARTAO";
  return FormaPagamento2;
})(FormaPagamento || {});

// src/produto/FiltrarProdutos.ts
var FiltrarProdutos = class {
  executar(pesquisa, produto) {
    const palavras = pesquisa.toLowerCase().split(" ");
    return produto.filter((produto2) => {
      const texto = `
                ${produto2.nome}
                ${produto2.descricao}
                ${Object.values(produto2.especificacoes).join(" ")}
                ${produto2.marca}
            `.toLowerCase();
      return palavras.every((palavra) => texto.includes(palavra));
    });
  }
};

// src/utils/Moeda.ts
var Moeda = class {
  static formatar(valor, localizacao = "pt-BR", moeda = "BRL") {
    return (valor ?? 0).toLocaleString(localizacao, {
      style: "currency",
      currency: moeda
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CalcularParcelamento,
  Carrinho,
  FiltrarProdutos,
  FormaPagamento,
  Moeda,
  QTDE_MAX_PARCELAS,
  Status,
  TAXA_JUROS_MENSAL,
  produtos
});
