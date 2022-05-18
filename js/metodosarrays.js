// Métodos para arrays de objetos
// ECMAScript 6

let alumnos = [
    {nombre: 'María', apellidos: 'Zuil', puntuacion: 4.6},
    {nombre: 'Juan', apellidos: 'Pérez', puntuacion: 7},
    {nombre: 'Pilar', apellidos: 'Gómez', puntuacion: 9.6},
]

// Ciclo forEach son métodos que actuan sobre arrays
// Ejecutar una función por cada elemento del array

alumnos.forEach((elem, i) => {
    if (elem.puntuacion >= 5) {
        elem.apto = true;
    } else {
        elem.apto = false;
    }
})

console.log(alumnos);

// Ciclo Map son métodos que actuan sobre arrays
// Ejecutar una función que retorna un elemento
// a un nuevo array

let listaAlumnos = alumnos.map((elem, i) => {
    return `${i + 1}.- ${elem.nombre} ${elem.apellidos}`;
})

console.log(listaAlumnos);
