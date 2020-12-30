function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1 // valor fixo direto no objeto
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('Ipad', 2199.49))
console.log(criarProduto('TV Sansung', 1700.50))
console.log(criarProduto('Celular Motorolo', 1300.96))