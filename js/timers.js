// "Timers" en JS

// Primer timer para establecer un delay
// (retrasar la ejecución de un bloque de código)
// setTimeout recibe un primer argumento con
// función del código a ejecutar y un segundo
// argumento con los milisegundos a retrasar

setTimeout(() => {
    console.log('Hola Universo!');
}, 3000);
console.log('Hola Mundo!');

// Segundo timer para establecer la ejecución
// de un bloque de código cada cierto intervalo
// de tiempo
// setInterval recibe también una función como
// primer argumento y como segundo argumento
// los milisegundos de intervalo

// setInterval(() => {
//     console.log(Math.random());
// }, 2000);

// Ejemplo de uso en una cuenta atrás

let reloj = document.getElementById('reloj');
let contador = 10;
reloj.innerHTML = contador;

const timer = setInterval(() => {
    if (contador > 0) {
        --contador;
        reloj.innerHTML = contador;
    } else {
        clearInterval(timer); // Borra de memoria la ejecución del interval
    }
}, 1000)