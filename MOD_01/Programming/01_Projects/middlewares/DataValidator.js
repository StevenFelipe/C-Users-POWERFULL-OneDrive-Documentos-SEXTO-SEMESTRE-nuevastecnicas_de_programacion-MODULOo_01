const{user} =require('../lib/Schema/User')


function DataValidator(check = "query"){
    return (request, response, next) => {
var data =request[check]

const {error, value} = schema.validate(data)
if (error){
    response.status(406).json({
        msg: error.details[0].message,
    })
}else{
    request[check] = value
    next()
}
    }
}




// function DataValidator(request, res, next) {
//     request.pruebaDeMiddleware = "Hola Mundo con middlewares"
//     next()
// }
module.exports.DataValidator = DataValidator;
