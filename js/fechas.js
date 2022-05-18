// Manejo de fechas JS
// Date

// Obtener la fecha actual

let fechaActual = new Date();
console.log(fechaActual);

// El constructor de Date también permite
// pasarle fechas diferentes a la actual

// 1ª Opción es mediante argumentos
// año, mes (indexado a cero), dia, hora, minutos, segundos, ms
// en ese orden y opcionales a partir de año

let fechaNacimiento = new Date(1973, 10, 18);
console.log(fechaNacimiento);

// 2ª Opción es mediante un 'string-date'
// string con este formato 'yyyy-MM-dd' (el mes indexado a 1)

let fechaExpedicion = new Date('2022-05-17');
console.log(fechaExpedicion);

// 3ª Opción es mediante milisegundos desde Epoch

let fechaAlAzar = new Date(454654646121);
console.log(fechaAlAzar);

// Métodos y propiedades de los objetos de la clase Date

console.log(fechaActual.getFullYear()); // Devuelve el año
console.log(fechaActual.getMonth()); // Devuelve el mes indexado a 0

let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

let mesActual = meses[fechaActual.getMonth()];
console.log(mesActual);

console.log(fechaActual.getDate()); // día del mes
console.log(fechaActual.getDay()); // día de la semana
console.log(fechaActual.getHours()); // horas
console.log(fechaActual.getMinutes()); // minutos
console.log(fechaActual.getSeconds()); // segundos
console.log(fechaActual.getMilliseconds()); // milisegundos

// Cálculo de fechas (emplea milisegundos)
// getTime() retorna los milisegundos desde Epoch

console.log(fechaActual.getTime());

let fechaEntrega = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);
console.log(fechaEntrega);