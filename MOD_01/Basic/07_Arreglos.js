
/*
CONCAT
*/
var numeros=[1, 2, 3, 4, 5];
var nuevoNumeros = numeros.concat([6, 7, 8, 9, 0]);

// console.log(numeros);
// console.log(nuevoNumeros);

/*
JOIN
*/
var nombre = ["S","T","E","V","E","N"]
//console.log(nombre.join("-"));

/*
SLICE
*/
//console.log(nombre.slice(2));

/*
INDEX OF
*/
//console.log(nombre.indexOf("V"))

/*
LAST INDEX OF
*/
//console.log(nombre.lastIndexOf("E"));

/*
Reverse
*/
console.log(nombre.lreverse());

/*
SORT
*/

var numerosDesordenados = [3,4,6,7,9,2,13,20]
//console.log(numerosDesordenados.sort());

/*
SHIFT
*/
//console.log(numerosDesordenados.shift());

/*
POP
*/
//console.log(numerosDesordenados.pop());

/*
PUSH
*/
numerosDesordenados.push(1012)
console.log(numerosDesordenados);

//CONSULTAR FUNCIONES DE ARREGLO

var pares = [2,4,6,8,10]
console.log(pares.map((elemento)=> elemento + 1));


///DEBER FUNCIONES DE ARREGLO

/*
1) INCLUDES
*/

const arr = [1, 2, 3];
console.log(arr.includes(2)); 

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
console.log(pets.includes('at'));

/*
2) REDUCE
*/
const arr = [1, 2, 3, 4, 5, 6];
const sum = arr.reduce((total, value)=> total + value, 0);
console.log(sum); 

/*
3) SOME
*/
 const arr =[1, 2, 3, 4, 5, 6];

 const largeNum = arr.some ( num => num > 4);
 console.log(LargeNum);

 const smallNum = arr.some(num => num <=0);
 console.log(smallNum);

 /*
4) EVERY
*/
const arr = [1, 2, 3, 4, 5, 6];

const greaterFour = arr.every(num => num > 4);
console.log(greaterFour);

const lessTen = arr.every(num => num < 10);
console.log(lessTen);

/*
5) FOREACH
*/
const arr = [1, 2, 3, 4, 5, 6];

arr.forEach(item=> {
    console.log(item);
});

/*
6) FILTER
*/
 const arr = [1, 2, 3, 4, 5, 6];

 const filtered = arr.filter(num => num > 3);
 console.log(filtered);


 console.log(arr);