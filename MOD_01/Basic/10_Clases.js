/*
Clases
*/

//COMO SE PROGRAMABA ANTES:

function Rectangulo(base, altura) {

    this.base = base;
    this.altura = altura;
}
Rectangulo.prototype.calcularArea = function(){
    return this.base * this.altura
}

var rectangulo = new Rectangulo(6, 3);
console.log(rectangulo.calcularArea())
console.log(rectangulo.base)



//declaracion de clases 
class Rectangulo2{

}




// Clase Persona
// implementar getters, setter y realizar una implementacion.
// implementar metodos estaticos - Clase Punto, Function distancia
// Construir clase Persona y estudiante, extender Estudiante con Persona>