// if simple - ejecuta solo si la condicion es verdadera
let temperatura = 19;

if (temperatura > 20) {
    //codigo que se ejecuta si la condicion es verdadera
    console.log("Usa ropa ligera");
}

// if-else - tenemos dos caminos posibles
let nota = 9;
let resultado;

if (nota > 6) {
    resultado = "aprobado"
    if (nota < 9) {

        resultado += " menor a 8"
    }
} else {
    resultado = "reprobado"
}

console.log(resultado)
// console.log(mensaje)

// else-if - multiples condiciones
let puntuacion = 85;
let calificacion;

if (puntuacion >= 90) {
    calificacion = 'excelente'
} else if (puntuacion >= 80) {
    calificacion = 'muy bueno'
} else if (puntuacion >= 70) {
    calificacion = 'bueno'
} else if (puntuacion >= 60) {
    calificacion = 'regular'
} else {
    calificacion = 'insuficiente'
}
console.log(calificacion)

// operador ternario
// Sintaxis: condicion ? valor_si_verdadero : valor_si_falso
let esMayorEdad = 17;
let mayor = esMayorEdad >= 18 ? "mayor edad" : "menor edad"
console.log("mayor: " + mayor)
console.log(`mayor : ${mayor}`)

// switch - multiples casos
let diaSemana = 2;

switch (diaSemana) {
    case 1:
        console.log("lunes");
        break;
    case 2:
        console.log("martes");
        break;
    case 3:
        console.log("miercoles");
    default:
        console.log('otro dia');
}

console.log("sigo por aca!")

// FOR cantidad definida de repeticiones
// sintaxis : for (inicio;condicion;incremento){}
let total = 0;
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// recorremos un array 
let frutas = ["manzana", "banana", "naranja", "uva", 1, true, total]

console.log(frutas[6])
console.log(frutas.length)
for (let i = frutas.length - 1; i >= 0; i--) {
    console.log(frutas[i])

}

console.log("sigo por aca!")

let cuentaRegresiva = [];
cuentaRegresiva.push(3)
console.log(cuentaRegresiva[0])

// break
let primeroPositivos = [];
let valores = [1, 3, -2, 5, 7, -1, 9]

for(let i = 0; i < valores.length ; i++){
    if(valores[i] < 0){
        continue; // continua la ejecución
    }
    primeroPositivos.push(valores[i])
}

console.log(primeroPositivos)