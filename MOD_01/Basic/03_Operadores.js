//Operador de asignacion
=

//Operador de comparacion

/*
==
===
*/
console.log(2 == 2);
console.log(2 === '2');
console.log(2 == '2');

/*
Operadores de ASIGNACION COMPUESTOS

+=  /X=X + Y 
-+ / x= x - y

*/

var numero = 3 
numero += 2;
console.log(numero);

// DESESTRUCTURAR OBJETOS
var persona = { nombre: "Steven", apellido: "Tipantuña",
 edad: 23,
viajes: {destino1: "New York", destino2: "Egipto"}};

var { nombre, apellido,  viajes:{ destino1 } } = persona;

console.log(persona);
console.log(nombre);
console.log(apellido);
console.log(destino1);