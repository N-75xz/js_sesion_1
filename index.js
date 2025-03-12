/*
 * +========================================================+
 * |                                                        |
 * |  MDN: NUESTRA BÍBLIA PARA LAS COSAS QUE NO SALEN AQUÍ  |
 * |                                                        |
 * |  https://developer.mozilla.org/es/docs/Web/JavaScript  |
 * |                                                        |
 * +========================================================+
*/

var var1 = 10; //Forma antigua de declarar variables. No usar
const cons1 = "hola" //Declarar constantes
let b = true //(o false) //Declarar variables
let n = null; //se puede poner ; o no
let u; //undefined
let c = 'c' //char
let s = "string" //string
let i = 1 //int
let f = 1.1 //float
let d = 1.11 //double
d = 1
//Gracias al tipado dinámico le podemos poner cualquier cosa a nuestra variable y JS se lo come

let arr1 = ["a", 10, b, true ["otro", "array"], {a:10, b:4}] //array. le puedes poner lo que quieras que a JS le da igual

let obj1 = {
    name: "pepe",
    age: 100,
    hobbies: ["", ""],
    obj: {
        a: 1,
        b: 2
    }
} //objeto. puede contener lo que quieras. Importante que cada propiedad va seguida de : y se separan con ,. A esto se le llama JSON (JavaScript Object Notation)

console.log(arr1[1]) //imprime el segundo elemento del array (ya que como con casi todos los lenguajes los arrays empiezan en 0)

console.log(obj1.name) //imprime una propiedad de un objeto

console.log(obj1.obj.b) //se pueden concatenar propiedades de objetos a la hora de imprimirlas.

console.log(obj1["name"]) //también se puede acceder a las propiedades de los objetos tratandolos como arrays (por ejemplo util si el nombre de la propiedad tiene un espacio)

function suma(a,b) { //funcion
    return a+b;
}

const resta = function(a,b) { //también es una forma de declarar funciones
    return a-b;
}

const multi = (a, b) => a * b; //también en una sola linea, pero mejor que la implementación de la linea 18 porque has de escribir menos :D

const square = a => a * a; //Si solo hay un parametro se pueden quitar los parentesis (aunque alguna extension como prettier los pone igual ya que es más legible con parentesis)

const users = [ //array de objetos
    {
        name: "pepe",
        age: 100
    },
    {
        name: "juan",
        age: 50
    },
    {
        name: "maria",
        age: 30
    }
]

console.table(users) //imprime una tabla con los objetos del array

const bob = users[1].name //obtiene el nombre de la segunda persona del array ("juan")

const result = document.getElementById("result");

async function main() {
    const response = await fetch("https://pokeapi.co/api/vs/pokemon");
    if (!response.ok) {
        console.error("No se encuentra el pokemon");
        return;
    }
    const data = await response.json();

    console.log(data.results);

    data.results.forEach(element => {
        const newDiv = document.createElement("div");
        newDiv.innnerHTML = "**" + element.name + "**";
        result.appendChild(newDiv);
    });
}

main();