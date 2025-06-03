/*Ejemplo 1: Filtrado de Productos en una Tienda Online (Simulado)
Imaginemos que tenemos una lista de productos y queremos filtrar por categoría y precio.*/

// Simulación de la lista de productos (el "Array")
let productos = [
    { nombre: "Zapatillas Deportivas", categoria: "zapatillas", precio: 75 },
    { nombre: "Camiseta Algodón", categoria: "ropa", precio: 20 },
    { nombre: "Zapatillas Casual", categoria: "zapatillas", precio: 60 },
    { nombre: "Pantalón Vaquero", categoria: "ropa", precio: 50 },
    { nombre: "Zapatillas Running", categoria: "zapatillas", precio: 120 },
    { nombre: "Calcetines", categoria: "accesorios", precio: 10 }
];

console.log(productos[0])

/*
*/
console.log("--- FILTRADO DE PRODUCTOS ---");

// Usamos prompt para simular la entrada del usuario (la categoría que busca)
let categoriaBuscada = prompt("¿Qué categoría de producto buscas? (ej. zapatillas, ropa)");
// Convertimos a minúsculas para facilitar la comparación
categoriaBuscada = categoriaBuscada.toLowerCase();

// Usamos prompt para simular el precio máximo
let precioMaximo = parseFloat(prompt("¿Cuál es el precio máximo que quieres pagar?"));

let productosFiltrados = []; // Aquí guardaremos los productos que cumplan la condición

// El Ciclo: Recorremos cada producto en nuestra lista
for (let i = 0; i < productos.length; i++) {
    let productoActual = productos[i]
    // El Condicional: Verificamos si el producto cumple con los criterios
    if (productoActual.categoria === categoriaBuscada && productoActual.precio <= precioMaximo) {
        productosFiltrados.push(productoActual)
    }
}

console.log("\nResultados del filtro:");
if (productosFiltrados.length > 0) {
    // Otro Ciclo para mostrar los resultados
    for (let i = 0; i < productosFiltrados.length; i++) {
        console.log(`- ${productosFiltrados[i].nombre} (${productosFiltrados[i].categoria}): $${productosFiltrados[i].precio}`);
    }
} else {
    console.log("No se encontraron productos con esos criterios.");
}

/* 
=============================================================================
RESUMEN DE CONCEPTOS CLAVE:
=============================================================================

OPERADORES PARA CONDICIONES:
- Comparación: ==, ===, !=, !==, >, >=, <, <=
- Lógicos: && (AND), || (OR), ! (NOT)

CONDICIONALES:
- if: ejecuta si verdadero
- else: ejecuta si if es falso  
- else if: condiciones adicionales
- ternario: condición ? verdadero : falso
- switch: múltiples casos con break

CICLOS:
- while: mientras condición verdadera
- do-while: ejecuta mínimo una vez
- for: cantidad definida (inicio; condición; incremento)
- break: sale del ciclo
- continue: salta iteración

BUENAS PRÁCTICAS:
- Usar === en lugar de == para comparaciones estrictas
- Incrementar contador en while para evitar bucles infinitos  
- Usar break en switch para evitar fall-through
- Combinar operadores lógicos para condiciones complejas
=============================================================================
*/




