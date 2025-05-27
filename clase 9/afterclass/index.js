

console.log("=== BIENVENIDOS A JAVASCRIPT ===");

// ========================================
// 1. CONCEPTOS GENERALES Y SINTAXIS BÁSICA
// ========================================

/*
JavaScript es un lenguaje de programación que nos permite:
- Hacer páginas web interactivas
- Crear aplicaciones móviles
- Desarrollar servidores
- Y mucho más!

Sintaxis básica:
- Cada línea de código termina con punto y coma (;) - opcional pero recomendado
- Los comentarios se escriben con // para una línea o /* para varias líneas */
/*- JavaScript es sensible a mayúsculas y minúsculas
*/
// comentario de una linea
console.log("Hola, mundo!"); // Mi primer programa en JavaScript

// ========================================
// 2. VARIABLES: ¿QUÉ SON Y CÓMO DECLARARLAS?
// ========================================

/*
Una variable es como una "caja" donde guardamos información.
Imagina que tienes una caja etiquetada "edad" y dentro pones el número 25.

En JavaScript tenemos 3 formas de declarar variables:
- var (antigua, no recomendada)
- let (moderna, recomendada)
- const (para valores que no cambian)
*/

// Declarando variables con let
let miNombre;           // Variable declarada pero sin valor
let miEdad = 25;        // Variable declarada con valor inicial
let miCiudad = "Madrid"; // Variable con texto

console.log("Mi edad es:", miEdad);
console.log("Mi ciudad es:", miCiudad);

// Declarando constantes
const PI = 3.14159;     // Una constante no puede cambiar su valor
const PAIS = "España";  // Por convención, las constantes van en MAYÚSCULAS

console.log("El valor de PI es:", PI);

// ========================================
// 3. TIPOS DE DATOS EN JAVASCRIPT
// ========================================

/*
JavaScript tiene varios tipos de datos principales:
*/

// NÚMEROS (Numbers)
let entero = 42;           // Números enteros
let decimal = 3.14;        // Números decimales
let negativo = -10;        // Números negativos

console.log("Ejemplos de números:");
console.log("Entero:", entero);
console.log("Decimal:", decimal);
console.log("Negativo:", negativo);

// TEXTO (Strings)
let nombre = "Ana";      // Con comillas dobles
let apellido = 'García';   // Con comillas simples
let mensaje = `Hola ${nombre}`; // Con template literals (backticks)

console.log("Ejemplos de texto:");
console.log("Nombre:", nombre);
console.log("Apellido:", apellido);
console.log("Mensaje:", mensaje);

// BOOLEANOS (true/false)
let esEstudiante = true;
let esMayor = false;

console.log("Ejemplos de booleanos:");
console.log("¿Es estudiante?", esEstudiante);
console.log("¿Es mayor?", esMayor);

// VERIFICAR EL TIPO DE UNA VARIABLE
console.log("Tipos de datos:");
console.log("Tipo de 'entero':", typeof entero);
console.log("Tipo de 'nombre':", typeof nombre);
console.log("Tipo de 'esEstudiante':", typeof esEstudiante);

// ========================================
// 4. ASIGNACIÓN Y CAMBIO DEL VALOR
// ========================================

/*
Podemos cambiar el valor de las variables (pero NO de las constantes)
*/

let contador = 0;      // Valor inicial
console.log("Contador inicial:", contador);

contador = 5;          // Cambiamos el valor
console.log("Contador después del cambio:", contador);

contador = contador + 1; // Incrementamos el valor
console.log("Contador incrementado:", contador);

// Forma abreviada de incrementar
contador++;            // Equivale a: contador = contador + 1
console.log("Contador con ++:", contador);

// También podemos cambiar el tipo de dato
let variable = 10;     // Primero es un número
console.log("Variable como número:", variable, typeof variable);

variable = "Ahora soy texto"; // Ahora es texto
console.log("Variable como texto:", variable, typeof variable);

// ¡PERO LAS CONSTANTES NO SE PUEDEN CAMBIAR!
// const INMUTABLE = 100;
// INMUTABLE = 200; // ¡Esto daría ERROR!

// ========================================
// 5. OPERADORES ARITMÉTICOS
// ========================================

/*
Los operadores aritméticos nos permiten hacer cálculos matemáticos
*/

let a = 10;
let b = 3;

console.log("=== OPERADORES ARITMÉTICOS ===");
console.log("a =", a, "| b =", b);

// Operadores básicos
console.log("Suma (a + b):", a + b);           // 13
console.log("Resta (a - b):", a - b);          // 7
console.log("Multiplicación (a * b):", a * b); // 30
console.log("División (a / b):", a / b);       // 3.333...
console.log("Módulo (a % b):", a % b);         // 1 (resto de la división)
console.log("Potencia (a ** b):", a ** b);     // 1000 (10 elevado a 3)

// Operadores de asignación combinados
let numero = 10;
console.log("Número inicial:", numero);

numero += 5;  // Equivale a: numero = numero + 5
console.log("Después de += 5:", numero);

numero -= 3;  // Equivale a: numero = numero - 3
console.log("Después de -= 3:", numero);

numero *= 2;  // Equivale a: numero = numero * 2
console.log("Después de *= 2:", numero);

numero /= 4;  // Equivale a: numero = numero / 4
console.log("Después de /= 4:", numero);

// Incremento y decremento
let x = 5;
console.log("x inicial:", x);
console.log("x++ (post-incremento):", x++); // Muestra 5, luego x se convierte en 6
console.log("x después de x++:", x);
console.log("++x (pre-incremento):", ++x);  // x se convierte en 7, luego muestra 7

// ========================================
// 6. EJERCICIO PRÁCTICO
// ========================================

console.log("=== EJERCICIO PRÁCTICO ===");

/*
EJERCICIO: Calculadora de área de un rectángulo
Vamos a crear variables para almacenar las dimensiones de un rectángulo
y calcular su área y perímetro
*/

// Datos del rectángulo
let ancho = 8;
let alto = 5;

console.log("Rectángulo de", ancho, "x", alto);

// Cálculos
let area = ancho * alto;
let perimetro = 2 * (ancho + alto);

console.log("Área:", area, "unidades cuadradas");
console.log("Perímetro:", perimetro, "unidades");

// Modificamos las dimensiones
ancho += 2; // Aumentamos el ancho en 2
alto--;     // Disminuimos el alto en 1

console.log("Nuevas dimensiones:", ancho, "x", alto);

// Recalculamos
area = ancho * alto;
perimetro = 2 * (ancho + alto);

console.log("Nueva área:", area, "unidades cuadradas");
console.log("Nuevo perímetro:", perimetro, "unidades");

// ========================================
// 7. CONVERSIÓN A ENTERO Y FLOTANTE
// ========================================

console.log("=== CONVERSIÓN DE TIPOS ===");

/*
A veces necesitamos convertir texto a números o viceversa.
JavaScript nos proporciona funciones para esto.
*/

// Tenemos algunos datos como texto
let edadTexto = "25";
let alturaTexto = "1.75";
let numeroConEspacios = "  42  ";

console.log("Datos originales (como texto):");
console.log("Edad:", edadTexto, "- Tipo:", typeof edadTexto);
console.log("Altura:", alturaTexto, "- Tipo:", typeof alturaTexto);
console.log("Número con espacios:", numeroConEspacios, "- Tipo:", typeof numeroConEspacios);

// CONVERSIÓN A ENTERO con parseInt()
let edadNumero = parseInt(edadTexto);
let numeroLimpio = parseInt(numeroConEspacios);

console.log("Después de parseInt():");
console.log("Edad como número:", edadNumero, "- Tipo:", typeof edadNumero);
console.log("Número limpio:", numeroLimpio, "- Tipo:", typeof numeroLimpio);

// CONVERSIÓN A FLOTANTE con parseFloat()
let alturaNumero = parseFloat(alturaTexto);
let piTexto = "3.14"; "3.143"
let piNumero = parseFloat(piTexto);

console.log("Después de parseFloat():");
console.log("Altura como número:", alturaNumero, "- Tipo:", typeof alturaNumero);
console.log("PI como número:", piNumero, "- Tipo:", typeof piNumero);

// CONVERSIÓN AUTOMÁTICA con Number()
let edad2 = Number(edadTexto);
let altura2 = Number(alturaTexto);

console.log("Con Number():");
console.log("Edad:", edad2, "- Tipo:", typeof edad2);
console.log("Altura:", altura2, "- Tipo:", typeof altura2);

// ¿Qué pasa con texto que no es número?
let textoInvalido = "123abc";
let resultadoParseInt = parseInt(textoInvalido);
let resultadoNumber = Number(textoInvalido);

console.log("Conversiones de texto inválido:");
console.log("parseInt('abc123'):", resultadoParseInt); // NaN (Not a Number)
console.log("Number('abc123'):", resultadoNumber);     // NaN

// Verificar si algo es un número válido
console.log("¿Es 25 un número válido?", !isNaN(25));
console.log("¿Es 'abc' un número válido?", !isNaN('abc'));

// CONVERSIÓN DE NÚMERO A TEXTO
let numeroOriginal = 123.456;
let numeroComoTexto = numeroOriginal.toString();

console.log("Número original:", numeroOriginal, "- Tipo:", typeof numeroOriginal);
console.log("Como texto:", numeroComoTexto, "- Tipo:", typeof numeroComoTexto);

// ========================================
// 8. EJEMPLO INTEGRADOR
// ========================================

console.log("=== EJEMPLO INTEGRADOR ===");

/*
EJERCICIO FINAL: Calculadora de compras
Simularemos una compra donde el usuario introduce datos como texto
y nosotros los convertimos a números para hacer cálculos
*/

// Datos que vienen del usuario (como texto)
let precioProducto1 = "15.99";
let cantidadProducto1 = "3";
let precioProducto2 = "8.50";
let cantidadProducto2 = "2";
let descuentoPorcentaje = "10";

console.log("=== DATOS DE LA COMPRA ===");
console.log("Producto 1: €" + precioProducto1 + " x " + cantidadProducto1 + " unidades");
console.log("Producto 2: €" + precioProducto2 + " x " + cantidadProducto2 + " unidades");
console.log("Descuento: " + descuentoPorcentaje + "%");

// Convertimos todo a números
let precio1 = parseFloat(precioProducto1);
let cantidad1 = parseInt(cantidadProducto1);
let precio2 = parseFloat(precioProducto2);
let cantidad2 = parseInt(cantidadProducto2);
let descuento = parseInt(descuentoPorcentaje);

// Hacemos los cálculos
let subtotal1 = precio1 * cantidad1;
let subtotal2 = precio2 * cantidad2;
let subtotalGeneral = subtotal1 + subtotal2;
let montoDescuento = subtotalGeneral * (descuento / 100);
let totalFinal = subtotalGeneral - montoDescuento;

console.log("=== CÁLCULOS ===");
console.log("Subtotal producto 1: €" + subtotal1.toFixed(2));
console.log("Subtotal producto 2: €" + subtotal2.toFixed(2));
console.log("Subtotal general: €" + subtotalGeneral.toFixed(2));
console.log("Descuento (" + descuento + "%): -€" + montoDescuento.toFixed(2));
console.log("TOTAL A PAGAR: €" + totalFinal.toFixed(2));

// ========================================
// 9. RESUMEN DE LA CLASE
// ========================================

console.log("=== RESUMEN DE LA CLASE ===");
console.log("✅ Variables: let, const");
console.log("✅ Tipos de datos: números, texto, booleanos");
console.log("✅ Asignación y cambio de valores");
console.log("✅ Operadores aritméticos: +, -, *, /, %, **");
console.log("✅ Conversiones: parseInt(), parseFloat(), Number()");
console.log("¡Felicidades! Has completado tu primera clase de JavaScript 🎉");

// ========================================
// EJERCICIOS PARA PRACTICAR EN CASA
// ========================================

/*
EJERCICIOS PARA PRACTICAR:

1. Crear variables para tu información personal:
   - nombre, apellido, edad, ciudad
   - Mostrarlas en la consola

2. Calculadora simple:
   - Crear dos números
   - Hacer todas las operaciones matemáticas
   - Mostrar los resultados

3. Conversor de temperatura:
   - Convertir 25°C a Fahrenheit
   - Fórmula: (celsius * 9/5) + 32

4. Calculadora de propina:
   - Precio de la cuenta: "45.80"
   - Porcentaje de propina: "15"
   - Calcular la propina y el total

¡Practica estos ejercicios para reforzar lo aprendido!
*/

let nombreCompleto = prompt("ingresa tu nombre")
alert(nombreCompleto)