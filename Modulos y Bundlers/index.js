/* MÓDULOS

Un Módulo es un pedazo de código que cumple una tarea específica y que indica sobre que piezas de código depende (dependencias, npm). 

Librerias de módulos y dependencias https://www.npmjs.com/
Gestor de paquetes de nodejs: npm

El "package.json" es un archivo que se crea automáticamente cuando hacemos "npm init", que contiene un objeto con las propiedades y dependencias que necesitamos para que funcione nuestro proyecto. Se modifica sólo cada vez que le agregamos una nueva librería.

"npm install" nos instala en la carpeta "node.modules" las dependencias que nosotros le indicamos en el archivo "package.json".

Antes se usaban las immediately invoked function expressions (IIFE) para crear módulos, ahora se usan los módulos. https://www.tutorialsteacher.com/javascript/immediately-invoked-function-expression-iife */

/* Creo un módulo */
function hola() {
  console.log("hola");
}

/* Exporto el módulo */
module.exports = {
  hola,
};

/* Importo el módulo indicando la ruta del archivo para poder utilizarlo */
const { hola } = require("./index.js");

/* CommonJS es el nombre que se le da a la sintaxis de módulos que se usa en NodeJS. Al trabajar con esta sintaxis importamos las librerías que necesitamos con "require" y exportamos con "exports.propiedad". 

As í podemos encapsular código en un módulo y exportarlo para que lo puedan usar otros módulos.
*/

/* WeekDays.js - Archivo WeekDays.js como un módulo */
var names = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];
exports.name = function name(number) {
  return names[number];
};
exports.number = function number(name) {
  return names.indexOf(name);
};

/* index.js - Archivo index.js utiliza el módulo WeekDays.js */
var weekDays = require("./WeekDays.js");

console.log(weekDays.name(weekDays.number("Domingo"))); // Domingo

/* VER demoClase/week.js */

/* -------------------------------------------------------------- */

/* module.exports vs exports 
Ambos miran al mismo objeto, pero module.exports es una variable que se puede modificar trabajando con la referencia de la posición en memoria, mientras que exports es una constante que no se puede modificar.

Nota: Ya que module.exports puede modificarse y redefinirse, pisa el valor de exports, por lo que debemos elegir una de las dos. Se recomienda module.exports con el objeto entero para pasar muchas funciones. */

/* EXPORTS ejemplo: */
/* module1.js */
exports.a = function () {
  console.log("a");
};
exports.b = function () {
  console.log("b");
};

/* module2.js - Trae la función sin modificaciones */
var example = require("./module1.js");
example.a(); // "a"
example.b(); // "b

/* -------------------------------------------------------------- */

/* module1.js */
exports.a = function () {
  console.log("a");
};
exports.b = function () {
  console.log("b");
};
/* Le añado una función extra pero no la leerá por la sintaxis */
exports = function extra() {
  console.log("Extra function");
};

// module2.js
var example = require("./module1.js");
example.a(); // "a"
example.b(); // "b"
example.extra(); // TypeError: example.extra is not a function
example(); // TypeError: example is not a function

/* -------------------------------------------------------------- */

/* MODULE.EXPORTS ejemplo: */
// module1.js
module.exports.a = function () {
  console.log("a");
};
module.exports.b = function () {
  console.log("b");
};

// module2.js
var example = require("./module1.js");
example.a(); // "a"
example.b(); // "b"

/* -------------------------------------------------------------- */

/* module1.js */
module.exports.a = function () {
  console.log("a");
};
module.exports.b = function () {
  console.log("b");
};
/* Le añado una función extra pero va a sobreescribir las funciones anteriores por que modifica la posición de memoria */
module.exports = function extra() {
  console.log("Extra function");
};

/* module2.js - Se observa como sobreescribe la función*/
var example = require("./module1.js");
example.a(); // TypeError: example.a is not a function
example.b(); // TypeError: example.a is not a function
example.extra(); // TypeError: prueba.extra is not a function
example(); // "Extra function"

/* -------------------------------------------------------------- */

/* Llega ES6 y se incorpora una nueva sintaxis para crear módulos. */

/* WeekDays.js */
var names = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];
/* A cada función que quieras exportar coloca el 'export', pueden existir muchos export. */
export function name(number) {
  return names[number];
}
export function number(name) {
  return names.indexOf(name);
}
/* Solo puede existir una función 'export default'. Es la unica diferencia entre ambas opciones. */
export default function myDefault() {
  // otras cosas...
}

/* index.js - Se accede a la funcion por destructuring o acceder a todas con '*' */
import { name, number } from "./WeekDays.js"; // Tomo las propiedades como 'bracket notation', 'destructuring'.
// import * from "./WeekDays.js"; Ejemplo de como importar 'todo'.
// import myDefault from "./WeekDays.js" Ejemplo de como importar una función 'default'.

console.log(name(number("Domingo")));

/* Node no reconoce ES6 */

/* -------------------------------------------------------------- */

/* BUNDLERS

Resuelven la forma en la cual vamos a tener acceso a nuestros archivos y a nuestros elementos. Lo que hará es que todos los archivos que sean necesarios se carguen en memoria y sean procesados en una sola vez. Arranca sobre el primer archivo y recorre todos los archivos para convertirlos en uno solo 'bundle.js'. (Similar a LESS).

WEBPACK https://www.npmjs.com/package/webpack - Herramienta de desarrollo para JS. (dev)

Webpack es un empaquetador de módulos. Su propósito principal es agrupar archivos JavaScript para su uso en un navegador, pero también es capaz de transformar, agrupar o empaquetar casi cualquier recurso o activo.

Es como un mapa de todos los require y los exports. */

/* CONFIGURACIÓN 

npm init // crea un nuevo package.json

npm install --save-dev webpack

// package.json agrega lo siguiente al package.json
"scripts": {
 "start": "node server.js",
 "build": "webpack"
} 

crear archivo webpack.config.js y agregar lo siguiente:

// webpack.config.js
module.exports = {
    entry: './browser/app.js', // el punto de arranque de nuestro programa
    output: {
    path: __dirname + '/browser', // el path absoluto para
    // el directorio donde queremos que el output sea colocado
    filename: 'bundle.js' // el nombre del archivo que va a contener
    //nuestro output - podemos nombrarlo como queramos pero bundle.js es lo típico
    }
   }

Para crear el bundle.js escribe en consola 'npm run-script build' o 'npm run build'.
 */
