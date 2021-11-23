// requiere es sintaxis de commonJS y se conecta con el archivo week.js
var a = require("./week.js"); // Siempre se asocia una variable a un require.

//var {aux, diasdelasemana, name, number} = require('-/week.js'); // se asocia a un require con destructuring ES6. Nota, el nombre de las propiedades de la variable a exportar debe coincidir con el nombre de las propiedades de la variable a importar.

console.log(a); // (a) trae un objeto con {aux, diasdelasemana, name, number;} de week.js

console.log(a.diasdelasemana) // [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
console.log(a.name(0)); // Domingo
console.log(a.name(1)); // Lunes
console.log(a.name(2)); // Martes
console.log(a.name(3)); // Miercoles
console.log(a.name(4)); // Jueves
console.log(a.name(5)); // Viernes
console.log(a.name(6)); // Sabado
console.log(a.name(7)); // undefined
console.log(a.number("Domingo")); // 0
console.log(a.number("Lunes")); // 1
console.log(a.number("Martes")); // 2
console.log(a.number("Miercoles")); // 3
console.log(a.number("Jueves")); // 4
console.log(a.number("Viernes")); // 5
console.log(a.number("Sabado")); // 6
console.log(a.number("Otro")); // -1

// nodemon index.js ejecuta las funciones de week.js en consola
