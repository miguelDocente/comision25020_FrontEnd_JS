// fetch() es una función de JavaScript moderna que te permite hacer solicitudes de red, típicamente para obtener información (datos) de un servidor web en internet. Cuando usas fetch(), la operación es asíncrona. Esto significa que fetch() envía la solicitud y no espera a que la respuesta llegue para que el resto de tu código JavaScript siga ejecutándose. En lugar de detener todo, tu código puede hacer otras cosas mientras fetch() está trabajando en segundo plano.

// Una vez que fetch() ha completado su tarea, te devuelve una Promesa. Esta Promesa representa el eventual resultado de la solicitud, que puede ser exitoso (con la información que pediste) o fallido (si hubo un error, como un problema de conexión).

// Paso 1: Crea una función que sea 'async'
async function obtenerYMostrarProductos() {
    try {
        // Paso 2: Usa 'await' con fetch para esperar la respuesta del servidor.
        // La ejecución se detiene aquí hasta que la respuesta de la red llega.
        const response = await fetch('https://fakestoreapi.com/products');
        // console.log(response)

        // Paso 3: Usa 'await' de nuevo para esperar que la respuesta se convierta en JSON.
        // La ejecución se detiene aquí hasta que los datos están listos en formato JavaScript.
        const data = await response.json();

        // Paso 4: Ahora que 'data' ya tiene la información, puedes usarla.
        console.log(data);

    } catch (error) {
        // Si algo sale mal (ej. no hay internet, el servidor no responde),
        // este bloque 'catch' atrapará el error.
        console.error('Ocurrió un error al obtener los productos:', error);
    }
}

// Paso 5: Llama a la función para que se ejecute.
obtenerYMostrarProductos();