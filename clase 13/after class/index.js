document.addEventListener('DOMContentLoaded', () => {
    const productosDisponibles = [
        { id: '1', nombre: 'Camiseta', precio: 25.00 },
        { id: '2', nombre: 'Pantalón', precio: 40.00 },
        { id: '3', nombre: 'Zapatillas', precio: 60.00 },
        { id: '4', nombre: 'Gorra', precio: 15.00 }
    ];

    const contenedorListaProductos = document.getElementById('contenedorListaProductos')

    function renderizarProductos() {
        // usamos map para transformar cada objeto producto en un string HTML
        const productosHtml = productosDisponibles.map(producto => {
            return `
                        <div class="item-producto">
                            <h2>${producto.nombre}</h2>
                            <p>Precio: $${producto.precio.toFixed(2)}</p>
                            <button class="btn-agregar-carrito" id="btn-agregar-${producto.id}">Agregar al Carrito</button>
                        </div>
                    `;
        });

        // unimos todos los strings HTML y los insertamos en el contenedor
        contenedorListaProductos.innerHTML = productosHtml.join('')

        // Una vez que el HTML está en el DOM,podemos seleccionar los botones y adjuntarles los eventos
        adjuntarEventosAgregarCarrito();
    }

    function adjuntarEventosAgregarCarrito() {
        // recorremos el array original de productos para adjuntar eventos
        // usamos el ID del producto para encontrar el botón correspondiente
        productosDisponibles.forEach(producto => {
            const boton = document.getElementById(`btn-agregar-${producto.id}`)
            if (boton) { // asegurarse que el boton exista
                boton.addEventListener('click', () => {
                    // cuando hace click,ya tenemos acceso al objeto 'producto' original
                    agregarProductoAlCarrito(producto);
                })
            }
        })
    }

    function agregarProductoAlCarrito(productoAAgregar) {
        let carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];

        const indiceProductoExistente = carrito.findIndex(item => item.id === productoAAgregar.id);

        if (indiceProductoExistente !== -1) {
            carrito[indiceProductoExistente].cantidad++;
        } else {
            carrito.push({
                id: productoAAgregar.id,
                nombre: productoAAgregar.nombre,
                precio: productoAAgregar.precio,
                cantidad: 1
            });
        }

        localStorage.setItem('carritoDeCompras',JSON.stringify(carrito));
        alert(`${productoAAgregar.nombre} agregado al carrito!`);

    }

    renderizarProductos()

})

// --- Explicación sobre JSON.stringify() y JSON.parse() ---
// localStorage solo puede almacenar cadenas de texto (strings).
// Si queremos guardar objetos o arrays (como nuestro carrito),
// necesitamos convertirlos a un string. Para esto, usamos JSON.stringify().
//
// Cuando recuperamos el string de localStorage, necesitamos convertirlo
// de nuevo a un objeto o array de JavaScript para poder trabajar con él.
// Para esto, usamos JSON.parse().
// -----------------------------------------------------------