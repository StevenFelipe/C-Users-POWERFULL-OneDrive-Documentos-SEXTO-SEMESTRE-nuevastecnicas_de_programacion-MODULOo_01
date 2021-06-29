

// async - await


function promesa() {
    return new Promise((resolve, reject) => {


        if (bandera) {
            setTimeout(() => {
                resolve("Peticion Resuelta");
            }, 3000);

        } else {
            setTimeout(() => {
                reject("La Operacion Fallo");
            }, 2000);
        }
    })
}

//SIMULACION FUNCIONES IIF

(async () => {
try{
    var respuesta = await promesa(true);
    console.log(respuesta);
    

}catch (error){
    console.log(error);
}
 })()