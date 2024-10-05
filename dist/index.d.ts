interface Especificacoes {
    destaque: string;
    [chave: string]: string | number | boolean;
}

interface Precificavel {
    precoBase: number;
    precoPromocional: number;
    menorPreco: number;
    maiorPreco: number;
    precoMedio: number;
}

interface Produto extends Precificavel {
    id: number;
    nome: string;
    descricao: string;
    marca: string;
    modelo: string;
    imagem: string;
    nota: number;
    videoReview: string;
    tags: string[];
    especificacoes: Especificacoes;
}

declare class FiltrarProdutos {
    executar(pesquisa: string, produto: Produto[]): Produto[];
}

interface ItemCarrinho {
    produto: Produto;
    quantidade: number;
}

declare class Carrinho {
    readonly itens: ItemCarrinho[];
    constructor(itens?: ItemCarrinho[]);
    adicionarItem(produto: Produto): Carrinho;
    removerItem(produto: Produto): Carrinho;
    removerProduto(produto: Produto): Carrinho;
    limpar(): Carrinho;
    get qtdeItens(): number;
    get valorTotal(): number;
    get valorTotalCheio(): number;
    private itemPorProduto;
    private alterarQuantidadeItem;
}

declare const produtos: Produto[];

declare const QTDE_MAX_PARCELAS = 12;
declare const TAXA_JUROS_MENSAL = 0.0167;

interface Parcelamento {
    valorTotal: number;
    valorParcela: number;
    qtdeParcelas: number;
    taxaJuros: number;
}

declare class CalcularParcelamento {
    executar(valor: number, qtdeParcelas?: number, taxaJuros?: number): Parcelamento;
    private calcularJurosCompostos;
    private comDuasCasasDecimais;
}

declare enum Status {
    RECEBIDO = "RECEBIDO"
}

declare enum FormaPagamento {
    PIX = "PIX",
    BOLETO = "BOLETO",
    CARTAO = "CARTAO"
}

interface ItemPedido {
    id: number;
    produto: Produto;
    quantidade: number;
    precoUnitario: number;
}

interface PedidoEntrega {
    id: number;
    nome: string;
    email: string;
    cpf: string;
    logradouro: string;
    complemento: string;
    cidade: string;
    estado: string;
}

interface Pedido {
    id: number;
    data: Date;
    itens: ItemPedido[];
    valorTotal: number;
    status: Status;
    formaPagamento: FormaPagamento;
    entrega: PedidoEntrega;
}

declare class Moeda {
    static formatar(valor: number, localizacao?: string, moeda?: string): string;
}

export { CalcularParcelamento, Carrinho, type Especificacoes, FiltrarProdutos, FormaPagamento, type ItemCarrinho, type ItemPedido, Moeda, type Parcelamento, type Pedido, type PedidoEntrega, type Precificavel, type Produto, QTDE_MAX_PARCELAS, Status, TAXA_JUROS_MENSAL, produtos };
