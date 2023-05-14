// Punto 1
// let numeros = [1,2,-45,7,-90,-12,-4,-87,1,23];
// let positivos = numeros.filter((valor)=> valor > 0)
// suma=0

// for (let i=0; i < positivos.length; i++){
//     suma += positivos[i]
// }

// console.log("Los positivos son: ", positivos);
// console.log("La suma de ellos es: ", suma);


// Punto 2
// const temperaturas = [25, 30, 28, 32, 29, 27];

// console.log("La temperatura máxima es: ", Math.max(...temperaturas),"° Farenheit")


// Punto 3
// const cantPersonas = prompt("Ingrese la cantidad de personas:");
// let sumaEdades = 0
// let cantidadMillenials = 0


// const añoActual = new Date().getFullYear();
// for (let i=0; i < cantPersonas; i++){
//     const añoNacimiento = parseInt (prompt(`Ingrese el año de nacimiento de la persona ${i+1}:`));
//     const edad= añoActual - añoNacimiento;
//     if ( añoNacimiento >= 1981 && añoNacimiento <= 1996){
//         sumaEdades += edad;
//         cantidadMillenials++;
//     }
// }

// const promedioEdadMillenials =  cantidadMillenials > 0 ? sumaEdades / cantidadMillenials: 0;
// console.log(`El promedio de la edad de los millenials es: `,promedioEdadMillenials);




//punto 4



// Ejercicio 5
var arreglo1 = [4 , 5, 1 ,3 ]
const arreglo2 = new Array(4).fill(10);

var sumaArreglos = [];

for (i = 0; i < arreglo1.length; i++){
    sumaArreglos[i] = arreglo1[i]+arreglo2[i];
}
console.log(sumaArreglos)


// ejercicio 5 forma 2
var array1 = [1,2,3,4]
var array2 = [1,2,3]
nuevoSuma =[]

array2.push(0)

 for (i = 0; i < array1.length; i++){
     nuevoSuma[i] = array1[i]+array2[i];
}

console.log("La suma de ambos arreglos es: ",nuevoSuma )
