
interface produto{
    id: number;
    nome: string;
    preco: number;
    emEstoque:boolean;
}

function exibirProduto(produto: produto):void{
    console.log(`Detalhes do produto: 
                 ${produto.id}
                 ${produto.nome}
                 ${produto.preco}
                 ${produto.emEstoque}`)
}

exibirProduto({
    id: 1,
    nome: "daniel",
    preco: 344,
    emEstoque: true,
})