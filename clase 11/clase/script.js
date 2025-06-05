// Funciones
// nos permiten agrupar tareas con un nombre

//Pasos
// 1 - Declaración
saludar()

function saludar() {
    console.log('hola,como estas?')
}

// 2 - Ejecución (llamar a la función)
saludar()

// Parametros
// son variables que viven solo dentro de la funcion

function saludarPersonalizado(nombre) {
    console.log(`Bienvenido ${nombre}`)
    console.log(`hola ${nombre}`)

}

saludarPersonalizado('Agustin');
saludarPersonalizado('Oscar');

// let nombre = prompt('cual es tu nombre?')
// saludarPersonalizado(nombre)

// parametros multiples

function tablaMultiplicar(tabla = 1, hasta = 10) {
    for (let i = 0; i <= hasta; i++) {
        console.log(tabla + " X " + i + " = " + (tabla * i));
    }
}

tablaMultiplicar(3, 5)
console.log('--------------------')
tablaMultiplicar(5)
console.log('--------------------')
tablaMultiplicar()

/////////////////////

// devolución de valores (return)
// generalmente buscamos realizar una tarea y que la funcion nos devuelva informacion
// se coloca al final de la funcion.Ésta termina la ejecucion de la funcion

function saludar2(nombre) {
    return `Hola ${nombre},bienvenido a talento Tech`
    console.log('Despues del return')
}


let resultado = saludar2('Miguel');
console.log(resultado)
console.log(saludar2('Fernando'))
// alert(resultado)

// funciones anonimas
// funciones que solamente vamos a declarar la estructura y la ejecutamos automaticamente
// solo declaramos los pasos
// esto nos permite pasar funciones como argumentos a otras funciones

const imprimirConsola = function (mensaje) {
    console.log(mensaje)
}

const imprimirAlert = mensaje => alert(mensaje);//funcion flecha

console.log('-------------------')

function saludar3(capturar, mostrar /*funcion*/, mostrar2, parametros) {
    let nombre = capturar()
    const mensaje = `Hola ${nombre}`
    mostrar(mensaje)
    //mostrar2(mensaje)
}

// saludar3('Valeria',imprimirConsola)
// saludar3('Rocio',imprimirAlert)
// saludar3('Fernando',imprimirConsola)
// saludar3('Valeria',imprimirConsola)
// saludar3('Valeria',imprimirConsola,imprimirAlert)

const capturar = () => prompt('ingresa tu nombre')
// saludar3(capturar,imprimirConsola)
// saludar3(capturar,imprimirAlert)
console.log(capturar)

///////////////////////////////////////////
// Array 
// const frutas = ["manzana", "banana", "naranja", "kiwi", "mandarina"];
// *** Propiedad length
// La propiedad length de un array te da el número de elementos en el array:
// console.log(frutas.length); // Imprime 3

let miArray = [];
console.log(typeof miArray)

miArray.push('Agustin')

console.log(miArray)

// Método forEach():
// El método forEach() se llama en el array y ejecuta una función proporcionada para cada elemento del array.
console.log('--------------------------------------------')
const numeros = [1, 2, 2, 4, 5, 5, 7, 8, 9, 9];

numeros.forEach(numero => console.log(numero))

let pares = [];

numeros.forEach(numero => {
    if (numero % 2 === 0) {
        pares.push(numero);
    }
})

console.log(pares)

// El método filter()
// Método map()