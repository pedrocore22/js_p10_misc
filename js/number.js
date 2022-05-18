// Varios para tipos number

// Clase propia de JS Math

// Redondear

let puntuacion = 2.5;

let puntuacionRedondeada = Math.round(puntuacion);
console.log(puntuacionRedondeada);

// Redondeo a la baja

puntuacion = 9.7;

puntuacionRedondeada = Math.floor(puntuacion);
console.log(puntuacionRedondeada);

// Redondeo al alza

puntuacion = 9.3;
puntuacionRedondeada = Math.ceil(puntuacion);
console.log(puntuacionRedondeada);

// Random devuelve un número al azar entre 0 y 0.999999999

let nombres = ['Carlos','Juan','María','Pilar'];

let nombreElegido = nombres[Math.floor(Math.random() * nombres.length)];
console.log(nombreElegido);

// Parseo de string a number

let resultado = '9.7';

let resultadoParseado = parseFloat(resultado);
console.log(typeof resultadoParseado);

resultadoParseado = parseInt(resultado); // Convierte a number entero
console.log(resultadoParseado);          // elimina la parte flotante (decimales)

resultadoParseado = Number(resultado); // Idem parseFloat
console.log(resultadoParseado);

resultadoParseado = resultado * 1; // Versión tricky o molona de  hackaton
console.log(resultadoParseado);

// Parsear de number a string

let resultado2 = 54.7;
let resultado2parseado = resultado2.toString();
console.log(typeof resultado2parseado);

resultado2parseado = resultado2 + '';
console.log(typeof resultado2parseado); // Versión tricky o molona de  hackaton