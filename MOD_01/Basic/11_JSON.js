// es un modataelo de datos que nos sirve para comunicarnos 
// en el diseño rest de api y soap
//  en el modelo cliente servidor

const data = require('./data.json');

//console.log(data);

var modifiedData = data.map((person) => {
    person.fist_name = person.first_name.toUpperCase()
return person
})

var filterResult = modifiedData.filter((person) => person.id === 3)
//console.log(modifiedData)
console.log(filterResult)
