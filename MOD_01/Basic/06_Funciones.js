//FUNCIONES DECLARATIVAS

function saludar(){
    return "Hola soy Ninety Eight de la Banda Varias Aceras";
}

function saludar2(){
    console.log("Hola soy NINETY EIGHT")
}
//FUNCIONES CON PARAMETROS

function saludarConparametros(nombre, apellido){
return `Hola soy ${nombre} ${apellido}`

}
//console.log(saludarConParametros("Steven", "Tipantuña"));

//FUNCIONES CON PARAMETROS POR DEFECTO
function saludoConProfesion(nombre="Persona", profesion="Analista de Sistemas"){
    return `Hola ${nombre} mi Profesion es ${profesion}`
}
console.log(saludoConProfesion("Seven", "Development"));


// var resultado =saludar()
// console.log(resultado);
// console.log(saludar());
// saludar2


/*
FUNCIONES EXPRESIVAS o FUNCIONES ANONIMAS
*/
var saludoConEdad = function(nombre, edad){
    return `Hola soy ${nombre}y tengo ${edad} año(s)`
}
//console.log(saludoConEdad("Steven", 23));


/* 
ARROW FUNCTIONS o FUNCIONES FLECHA
*/
var saludoConApellido =(nombre, apellido) => `Hola soy ${nombre} ${apellido}`

var suma=(num1, num2) => num1+num2

//console.log(saludoConApellido("Steven","Tipantuña")); 
console.log(suma(2, 3));

/*
FUNCIONES CON PARAMETROS DE OTRAS FUNCIONES

*/

function saludoConFunciones(nombre, cb){
    return cb(nombre)
}
varmiSaludo=saludoConFunciones("Steven", function(nombre){
    return `Hola soy: ${nombre}`
})
// console.log(miSaludo);
// setTimeout(()=>{
// console.log("Hola Mundo");
// },3000);