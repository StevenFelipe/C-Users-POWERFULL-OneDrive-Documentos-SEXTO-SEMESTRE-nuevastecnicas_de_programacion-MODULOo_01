const { request, response } = require("express");
//Traemos el Paquete
const { Router } = require('express');
//Traer data
const data = require ('../data.json');
const {User} = require("../lib/Schema/User");
const {DataValidator } = require ("../middlewares/DataValidator");

//Inicializamos Router
const router = Router();
//Creacion de los EndPoints

router
    .get("/",  (request, response) => {
        response.send("hola panas con Express.js");
    })
    .get("/users", (request, response) => {
        response.json({
            msg: "Lista de Usuarios",
            body: data,
        })
    })
    .get("/Saludo", DataValidator("query", User),(request, response) => {
        const { query } = request;
        response.json({
            saludo: `Hola soy ${query.nombre} ${query.apellido}`,
        });
    })
    .get('/saludo/:nombre', (request, response) => {
        const { params } = request;
        response.json({
            nombre: params.nombre
        });
    });
//Exportamos las Rutas 
module.exports.RouterIndex = router;

