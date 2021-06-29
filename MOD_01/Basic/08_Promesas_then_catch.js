//son funciones especiales 
/* 
PROMESAS 
*/

function promesa(){
    return new Promise((resolve, reject) => {

   
        if (bandera) {
            setTimeout(() => {
                resolve("Peticion Resuelta");
        }, 3000);
  
}else{
    setTimeout(() => {
    reject("La Operacion Fallo");
}, 2000);
 }
})
}



//       promesa(true)
//       //se usa then para escribir la respuesta correcta
//       .then((resultado) => {
//           console.log(resultado);
//       })  
//       // se usa catch para la correccion del error
// .catch((error) => {
//     console.log("Error", error);
// }) 
    
var segundaPromesa = () => Promise((resolve, reject) => {
    if (bandera) {
        setTimeout(() => {
            resolve("Peticion Resuelta");
    }, 3000);

}else{
setTimeout(() => {
reject("La Operacion Fallo");
}, 2000);
}
})

segundaPromesa(true)
.then((respuesta) =>  {
    console.log(respuesta);

})
.catch((error) => {
    console.log(error);
})


promesa(true) // peticion de clientes
.then((respuesta) => {  //respuesta de lista clientes
console.log(respuesta);
return segundaPromesa(true) //Compras del cliente
})
.then((respuesta) => {
    console.log(respuesta); //RESPUESTAS DE LA SEGUNDA PROMESA
})
.catch((error) => {
    console.log(error);
})