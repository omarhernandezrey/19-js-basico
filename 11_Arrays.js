//Ejemplo 1

var frutas = ["Manzana", "PLatano", "Cereza", "Fresa"]; // Creamos un array llamado 'frutas' que contiene cuatro elementos.

console.log(frutas); // Imprime el array completo en la consola.

console.log(frutas.length); // Imprime la longitud del array, que es 4.

console.log(frutas[0]); // Imprime el primer elemento del array, "Manzana".

console.log(frutas[2]); // Imprime el tercer elemento del array, "Cerza".

//Ejemplo 2

var frutas = ["Manzana", "PLatano", "Cereza", "Fresa"]; // Creamos un array llamado 'frutas' con cuatro elementos.

var masFrutas = frutas.push("Uvas", "Arándanos"); // Agregamos dos elementos "Uvas" y "Arándanos" al final del array. La variable 'masFrutas' almacena la nueva longitud del array.

frutas // Imprime el contenido del array con los nuevos elementos agregados.

var ultimo = frutas.pop('Arándanos'); // Elimina el último elemento del array, que es "Arándanos", y lo asigna a la variable 'ultimo'.

frutas // Imprime el contenido del array después de eliminar el último elemento.

var nuevaLongitud = frutas.unshift("Manguito"); // Agregamos el elemento "Manguito" al inicio del array y almacenamos la nueva longitud en la variable 'nuevaLongitud'.

frutas // Imprime el contenido del array después de agregar "Manguito" al inicio.

var borrarFruta = frutas.shift('Manguito'); // Elimina el primer elemento del array y lo asigna a la variable 'borrarFruta'.

frutas // Imprime el contenido del array después de eliminar el primer elemento.

//Ejemplo 3

frutas // Imprime el contenido del array frutas.

var posición = frutas.indexOf("Cereza"); // Obtiene la posición del elemento "Cereza" en el array y lo almacena en la variable 'posicion'.

posición // Imprime el valor de la variable 'posición', que es la posición del elemento "Cereza" en el array

frutas[2]; // Acceso correcto al elemento en la posición 2 del array, que es "Cereza". Se imprime el valor "Cereza".