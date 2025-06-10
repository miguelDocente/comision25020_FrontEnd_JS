/*
let miArray = [1, 2, 4, 5]
console.log(miArray)
// Objetos
let nombre = 'miguel'
const persona = {
    nombre: 'juan',
    edad: 30,
    saludar: function () { console.log(`Hola me llamo ${persona.nombre}`) }
}

console.log(persona.nombre)
console.log(persona.edad)
console.log(miArray[0])

persona.saludar();

*/

const productos = [
    {
        id: 1,
        nombre: "Laptop Dell XPS 13",
        precio: 1200,
        descripcion: "Laptop ultrabook con procesador Intel i7, 16GB RAM y 512GB SSD"
    },
    {
        id: 2,
        nombre: "Smartphone Samsung Galaxy S23",
        precio: 800,
        descripcion: "Teléfono inteligente con cámara de 50MP, 8GB RAM, 256GB almacenamiento"
    },
    {
        id: 3,
        nombre: "Auriculares Sony WH-1000XM4",
        precio: 350,
        descripcion: "Auriculares inalámbricos con cancelación de ruido, batería de 30 horas"
    },
    {
        id: 4,
        nombre: "Teclado Mecánico Logitech MX",
        precio: 120,
        descripcion: "Teclado mecánico inalámbrico con switches táctiles y retroiluminación"
    }
];

console.log(productos)
// funcionalidades del carrito de compras (consola)
// agregamos productos
// eliminar producto
// vaciar carrito
// mostrar carrito

let carrito = [];

// funcion para agregar producto
function agregarProducto(id, cantidad = 1) {
    let producto = productos.find(producto => producto.id === id)
    if (producto) {
        carrito.push(
            {
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                descripcion: producto.descripcion,
                cantidad: cantidad
            }
        )
    }
}

function mostrarCarrito() {
    if (carrito.length == 0) {
        console.log('no hay productos agreagados...')
    }
    else {
        console.log('Productos agregados')
        carrito.forEach(producto => console.log(`- ${producto.nombre}:$${producto.precio} cant:${producto.cantidad}`))

    }
}


agregarProducto(1, 2)
agregarProducto(4)
mostrarCarrito()

function eliminarTodos() {
    carrito = [];
}

// eliminar productos
function eliminarProducto(id) {
    const index = carrito.findIndex(producto => producto.id === id);
    console.log(`index: ${index}`)
    if (index !== -1) {
        // Modifica un array directamente. Puede eliminar, añadir o reemplazar elementos en cualquier posición.
        // Elimina 1 elemento del array 'carrito' comenzando desde el 'index' encontrado.
        carrito.splice(index, 1);

    }
}

console.log(carrito)
eliminarProducto(4)
mostrarCarrito()
console.log(carrito)
