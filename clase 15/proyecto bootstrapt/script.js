// Función para cargar productos desde JSON
function cargarProductos() {
    fetch('./data/productos.json')
        .then(response => response.json())
        .then(data => dibujarProductos(data))
        .catch(error => {
            console.error('Error al cargar productos:', error);
            mostrarProductosEjemplo();
        });
}

// Función para dibujar los productos en el DOM
function dibujarProductos(productos) {
    const productosHTML = productos.map(producto => crearProductoHTML(producto));
    document.querySelector('.section-productos .row').innerHTML = productosHTML.join('');
}

// Función para crear el HTML de cada producto
function crearProductoHTML(producto) {
    return `
                <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
                    <div class="producto">
                        <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid">
                        <div class="producto-descripcion">
                            <span>${producto.categoria}</span>
                            <h5>${producto.nombre}</h5>
                            <h4>${producto.precio}</h4>
                        </div>
                        <a href="#" class="carrito" onclick="agregarAlCarrito(${producto.id})">
                            <i class="fas fa-shopping-cart"></i>
                        </a>
                    </div>
                </div>
            `;
}

// Función para agregar producto al carrito
function agregarAlCarrito(id) {
    console.log('Producto agregado al carrito:', id);
    // Aquí puedes implementar la lógica del carrito
}

// Cargar productos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', cargarProductos);