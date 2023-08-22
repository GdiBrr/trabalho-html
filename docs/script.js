const productsData = [
    { id: 1, name: "Parafuso de Aço", price: 1.99 },
    { id: 2, name: "Parafuso de Latão", price: 2.49 },
    { id: 3, name: "Parafuso de Madeira", price: 0.99 }
];

// Função para exibir os produtos na página
function displayProducts() {
    const productsSection = document.querySelector('.products');

    productsData.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Preço: R$ ${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>…