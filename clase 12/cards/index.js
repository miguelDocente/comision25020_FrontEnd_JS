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

// 2. Obtener el contenedor donde irán las cards
const productContainer = document.getElementById('product-container');

// 3. Crear una card por cada producto en el array
productos.forEach(producto => {
    // Crear el div principal de la card
    const card = document.createElement('div');
    card.classList.add('product-card'); // Añadirle la clase CSS

    // Crear los elementos internos de la card
    const image = document.createElement('img');
    image.src = producto.image;
    image.alt = producto.name;

    const name = document.createElement('h3');
    name.textContent = producto.name;

    const description = document.createElement('p');
    description.textContent = producto.description;

    const price = document.createElement('div');
    price.classList.add('price');
    price.textContent = `$${producto.price}`;

    // Añadir todos los elementos creados a la card
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(price);

    // Añadir la card completa al contenedor en el HTML
    productContainer.appendChild(card);

})

