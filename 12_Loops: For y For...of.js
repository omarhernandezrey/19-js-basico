//Ejemplo:1

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]; // Creamos un array llamado 'estudiantes' con cuatro elementos (nombres).

function saludarEstudiantes(estudiante) { // Declaramos una función llamada 'saludarEstudiantes' que recibe un parámetro 'estudiante'.
    console.log(`hola, ${estudiante}`); // Imprimimos un mensaje de saludo que incluye el nombre del estudiante recibido como parámetro.
}

for (var i = 0; i < estudiantes.length; i++) { // Iniciamos un bucle 'for' que recorrerá todos los elementos del array 'estudiantes'.
    saludarEstudiantes(estudiantes[i]); // En cada iteración del bucle, llamamos a la función 'saludarEstudiantes' pasando como argumento el elemento en la posición 'i' del array.
}


//Ejemplo:2

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]; // Creamos un array llamado 'estudiantes' con cuatro elementos (nombres).

function saludarEstudiantes(estudiante) { // Declaramos una función llamada 'saludarEstudiantes' que recibe un parámetro 'estudiante'.
    console.log(`hola, ${estudiante}`); // Imprimimos un mensaje de saludo que incluye el nombre del estudiante recibido como parámetro.
}

for (var estudiante of estudiantes) { // Iniciamos un bucle 'for...of' que recorrerá cada elemento del array 'estudiantes'.
    saludarEstudiantes(estudiante); // En cada iteración del bucle, llamamos a la función 'saludarEstudiantes' pasando como argumento el valor del elemento en la iteración actual.
}

//Mas Ejemplos:
// Ejemplo 1: Bucle 'for' para recorrer un array e imprimir cada elemento.
var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Ejemplo 2: Bucle 'for' para imprimir los números del 1 al 5.
for (var i = 1; i <= 5; i++) {
    console.log(i);
}

// Ejemplo 3: Bucle 'for' para calcular la suma de los números del 1 al 10.
var suma = 0;

for (var i = 1; i <= 10; i++) {
    suma += i;
}

console.log("La suma es: " + suma);

// Ejemplo 4: Bucle 'for...of' para recorrer un array e imprimir cada elemento.
var colores = ["Rojo", "Verde", "Azul", "Amarillo"];

for (var color of colores) {
    console.log(color);
}

// Ejemplo 5: Bucle 'for...of' para recorrer una cadena de texto e imprimir cada caracter.
var mensaje = "Hola, mundo!";

for (var letra of mensaje) {
    console.log(letra);
}
