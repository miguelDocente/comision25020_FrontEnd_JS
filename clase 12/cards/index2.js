// 1. Array con la información de los productos
const productos = [
    {
        name: "Smartphone X",
        description: "Cámara Pro, batería duradera.",
        price: "999.99",
        image: "https://placehold.co/600x400"
    },
    {
        name: "Smartwatch",
        description: "Salud y notificaciones al instante.",
        price: "249.00",
        image: "https://placehold.co/600x400"
    },
    {
        name: "Auriculares BT",
        description: "Sonido claro, cancelación de ruido.",
        price: "129.50",
        image: "https://placehold.co/600x400"
    },
    {
        name: "Notebook Dell",
        description: "Ideal para trabajo y estudio.",
        price: "1250.75",
        image: "https://placehold.co/600x400"
    }
];

const productContainer = document.getElementById('product-container');

const cardsHtml = productos.map(producto => {
    // comillas invertidas ` ` 
    // Las variables se insertan con ${variable}
    // Usamos template strings

    return `
            <div class="product-card">
            <img src="${producto.image}" alt="${producto.name}">
            <h3>${producto.name}</h3>
            <p>${producto.description}</p>
            <div class="price">$${producto.price}</div>
            </div>
             `;

})

console.log(cardsHtml)
// Unimos todos los strings HTML de las cards y los insertamos en el contenedor
productContainer.innerHTML = cardsHtml.join('')
