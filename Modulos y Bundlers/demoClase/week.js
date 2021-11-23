  
var names = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

var toni = 'toni'; // no se puede acceder desde el require de index.js por que no se exporta.
var mati = 'mati';

exports.aux = mati; // .aux es una propiedad del objeto exports que es una variable que se puede acceder desde cualquier lugar al importarla.
exports.diasdelasemana = names; //exporto la variable names que es un array de strings.
exports.name = function name (number) { return names[number]; }; // exporto la funcion name que recibe un numero y devuelve el string correspondiente.
exports.number = function number(name) { return names.indexOf(name); }; // indexOf devuelve el indice del elemento que se le pasa como parametro.