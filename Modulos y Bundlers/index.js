/* MÓDULOS
Un Módulo es un pedazo de código que cumple una tarea específica y que indica sobre que piezas de código depende (dependencias, npm). 

Librerias de módulos y dependencias https://www.npmjs.com/
Gestor de paquetes de nodejs: npm

El "package.json" es un archivo que se crea automáticamente cuando hacemos "npm init", que contiene un objeto con las propiedades y dependencias que necesitamos para que funcione nuestro proyecto. Se modifica sólo cada vez que le agregamos una nueva librería.

"npm install" nos instala en la carpeta "node.modules" las dependencias que nosotros le indicamos en el archivo "package.json".

Antes se usaban las immediately invoked function expressions (IIFE) para crear módulos, ahora se usan los módulos. https://www.tutorialsteacher.com/javascript/immediately-invoked-function-expression-iife

CommonJS es el nombre que se le da a la sintaxis de módulos que se usa en NodeJS. Al trabajar con esta sintaxis importamos las librerías que necesitamos con "require" y exportamos con "exports.propiedad".
*/ 

/* Creo un módulo */
function hola() {
    console.log('hola');
}

/* Exporto el módulo */
module.exports = {
    hola
};

/* Importo el módulo indicando la ruta del archivo para poder utilizarlo*/
const {
    hola
} = require('./index.js');
