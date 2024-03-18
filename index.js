// Variables
let a = 1;
a += 5;
console.log(a)
//Constantes
const b = 10;
console.log(b)

// Strings and strings templates
console.log("Hola")
console.log('Hola')
a -= 1;
console.log(`Hola ${a}`)

//                    TIPOS DE DATOS

// Number
console.log(typeof a)

// Arrays
let array = ['Hola', true, 3, [1, 2, 3]];
console.log(array)
let array2 = Array.of('A', 'B', 'C')
console.log(array2)
let array3 = Array(10).fill('L', 0, 5)
console.log(array3)
let array4 = new Array(5, 1, 5)
array4.push(3, 3, 3, 'l', "L") // Introducir nuevos elementos en un array.
console.log(array4)
array4.pop()
console.log(array4) // Eliminar el ultimo elemento de un array.

// Functions
function a_function(el, i) {
    console.log(el, i)
}
a_function(a, b)
