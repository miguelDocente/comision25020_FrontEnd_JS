// --- Introducción a localStorage ---
// localStorage es un mecanismo de almacenamiento web que permite a las aplicaciones
// web almacenar datos de forma local en el navegador del usuario.
// Los datos permanecen almacenados incluso después de que el navegador se cierra.
// Se almacena como pares clave-valor, donde tanto la clave como el valor son strings.

// ----------------------------------------------------
// 1. ALMACENAR UN DATO SIMPLE (STRING) EN LOCALSTORAGE
// ----------------------------------------------------
// Usamos el método .setItem(clave, valor)
localStorage.setItem('nombreUsuario', 'Juan Perez');
console.log('Dato simple almacenado:', localStorage.getItem('nombreUsuario'));

// ----------------------------------------------------
// 2. ALMACENAR UN OBJETO O ARRAY EN LOCALSTORAGE (requiere JSON.stringify)
// ----------------------------------------------------
// localStorage solo almacena strings. Para guardar objetos o arrays,
// primero debemos convertirlos a un string JSON.

const miObjeto = {
    producto: 'Laptop Gamer',
    precio: 1200,
    enStock: true
};

const miArray = ['manzana', 'banana', 'cereza'];

// Convertir el objeto a string JSON antes de guardar
localStorage.setItem('configuracionProducto', JSON.stringify(miObjeto));
// Convertir el array a string JSON antes de guardar
localStorage.setItem('listaFrutas', JSON.stringify(miArray));

// ----------------------------------------------------
// 3. RECUPERAR UN DATO SIMPLE (STRING) DE LOCALSTORAGE
// ----------------------------------------------------
// Usamos el método .getItem(clave)
const nombreRecuperado = localStorage.getItem('nombreUsuario');
console.log('Dato simple recuperado:', nombreRecuperado); // Salida: Juan Perez

// ----------------------------------------------------
// 4. RECUPERAR UN OBJETO O ARRAY DE LOCALSTORAGE (requiere JSON.parse)
// ----------------------------------------------------
// Después de recuperar el string JSON, debemos convertirlo de nuevo a un
// objeto o array de JavaScript usando JSON.parse().
const objetoRecuperadoString = localStorage.getItem('configuracionProducto');
const objetoRecuperado = JSON.parse(objetoRecuperadoString);
console.log('Objeto recuperado (como objeto JS):', objetoRecuperado);
console.log('Accediendo a propiedad del objeto recuperado:', objetoRecuperado.precio);

const arrayRecuperadoString = localStorage.getItem('listaFrutas');
const arrayRecuperado = JSON.parse(arrayRecuperadoString);
console.log('Array recuperado (como array JS):', arrayRecuperado);
console.log('Accediendo a elemento del array recuperado:', arrayRecuperado[1]);

// Importante: Si la clave no existe, .getItem() devuelve null.
// Es buena práctica manejar esto para evitar errores con JSON.parse(null).
const datoInexistente = localStorage.getItem('claveNoExiste');
console.log('Dato inexistente (será null):', datoInexistente);

const objetoInexistente = JSON.parse(localStorage.getItem('otraClaveQueNoExiste')) || [];
console.log('Objeto inexistente con manejo de null:', objetoInexistente);

// ----------------------------------------------------
// 5. ELIMINAR UN DATO ESPECÍFICO DE LOCALSTORAGE
// ----------------------------------------------------
// Usamos el método .removeItem(clave)
localStorage.removeItem('nombreUsuario');
console.log('Después de eliminar "nombreUsuario":', localStorage.getItem('nombreUsuario'));

// ----------------------------------------------------
// 6. LIMPIAR TODO LOCALSTORAGE (eliminar todos los datos de un origen)
// ----------------------------------------------------
// Usamos el método .clear()
localStorage.clear();
console.log('Después de limpiar todo:', localStorage.getItem('configuracionProducto'));
console.log('Después de limpiar todo:', localStorage.getItem('listaFrutas'));




// .length: Devuelve el número de elementos almacenados
console.log('Número de elementos en localStorage:', localStorage.length);