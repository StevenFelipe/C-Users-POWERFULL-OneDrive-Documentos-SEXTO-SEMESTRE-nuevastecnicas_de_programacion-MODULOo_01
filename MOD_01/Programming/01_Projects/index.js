const { response, request } = require('express');
const express =require('express'); 
// genera una aplicacion Express 
const app = express()
//Routes
const{RouterIndex} = require('./routes/indexx.js');

app.use("/", RouterIndex);

app.listen(3000, () => {
console.log("Servidor escuchando en: http://localhost:3000");
})

