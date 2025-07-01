let productosGlobales = []; // Para almacenar todos los productos obtenidos
const API_URL = 'https://fakestoreapi.com/products';

// 1. Función para realizar la petición a la API
async function llamarAPI(API) {
    try {
        const response = await fetch(API);
        if (!response.ok) {
            throw new Error(`Error HTTP! estado: ${response.status}`);
        }
        productosGlobales = await response.json(); // Almacenamos todos los productos
        return productosGlobales;
    } catch (error) {
        console.error('Error al obtener los productos de la API:', error);
        return [];
    }
}

// 2. Función que recibe un producto y crea su elemento HTML como una cadena de texto

function Producto(producto) {
    //substring() extrae una parte de una cadena de texto.
    //Se le indican dos posiciones: una donde empieza a cortar y otra donde termina (sin incluir ese último carácter).
    const displayTitle = producto.title.substring(0, 20) + '...';

    // Se utiliza un template literal para construir todo el HTML del producto directamente como una cadena.
    return `
    <div class="producto">
        <img src="${producto.image}" alt="${producto.title}">
        <div class="producto-descripcion">
            <span>${producto.category}</span>
            <h5>${displayTitle}</h5>
            <h4>$${producto.price.toFixed(2)}</h4>
        </div>
        <a id="btn-agregar-${producto.id}" class="carrito">
            <i class="fal fa-shopping-cart"></i>
        </a>
    </div>
    `;
}

// 3. Función que inserta los productos en el contenedor HTML y luego adjunta los eventos
function dibujarDatos(json) {
    const filas = json.map(obj => Producto(obj));
    document.querySelector('.productos-container').innerHTML = filas.join('');

    // IMPORTANTE: Adjuntar los eventos DESPUÉS de que el HTML esté en el DOM
    adjuntarEventosCarrito();
}

// 4. Agregamos productos a localStorage
// adjuntamos los eventos al boton
function adjuntarEventosCarrito() {
    
    productosGlobales.forEach(producto => {
        const boton = document.getElementById(`btn-agregar-${producto.id}`);
        if (boton) { // Asegurarse de que el botón exista
            boton.addEventListener('click', () => {
                // Cuando se hace clic, ya tenemos acceso al objeto 'producto' original
                agregarProductoAlCarrito(producto); // Llama a la función para agregar al carrito
            });
        }
    });
}

//5. agregamos productos a localStorage
function agregarProductoAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];

    const indiceProductoExistente = carrito.findIndex(item => item.id === producto.id);

    if (indiceProductoExistente !== -1) {
        carrito[indiceProductoExistente].cantidad++;
    } else {
        carrito.push({
            id: producto.id,
            title: producto.title,
            price: producto.price,
            image: producto.image,
            cantidad: 1
        });
    }

    localStorage.setItem('carritoDeCompras', JSON.stringify(carrito));
    alert(`${producto.title} agregado al carrito!`);
    // Opcional: Puedes emitir un evento o actualizar un contador de carrito aquí
}

// Llamar a la función principal para que se ejecute cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', async () => {
    await llamarAPI(API_URL); // Esperar a que se carguen los productos
    if (productosGlobales.length > 0) {
        console.log(productosGlobales)
        dibujarDatos(productosGlobales); // Dibujar y adjuntar eventos
    }
});