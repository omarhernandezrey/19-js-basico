// VARIABLES

// Ejemplo 1
console.log(miNombre);
// En esta línea se intenta imprimir el valor de la variable miNombre antes de su declaración e inicialización.
// Debido al hoisting, la declaración de la variable miNombre se eleva al principio del ámbito, pero su valor aún no ha sido asignado.
// Por lo tanto, en este punto, su valor es undefined y se imprimirá "undefined" en la consola.

var miNombre = "Omar";
// Se declara la variable miNombre y se le asigna el valor "Omar".

// Ejemplo 2
var miNombre = undefined;
console.log(miNombre);
// En esta línea se declara la variable miNombre y se le asigna el valor undefined.
// Luego, se imprime el valor actual de miNombre, que es undefined.

// Ejemplo 3
var miNombre = undefined;
console.log(miNombre);
// Al igual que en el ejemplo anterior, se declara la variable miNombre y se le asigna el valor undefined.
// Se imprime el valor actual de miNombre, que es undefined.

miNombre = "Omar";
// Se asigna el valor "Omar" a la variable miNombre.

// Ejemplo 4
var miNombre = undefined;
console.log(miNombre + "Soy ese hoisting");
// En esta línea se declara la variable miNombre y se le asigna el valor undefined.
// Luego, se imprime la concatenación de miNombre con la cadena "Soy ese hoisting".
// En este punto, el valor de miNombre es undefined, por lo que se imprimirá "undefinedSoy ese hoisting" en la consola.

miNombre = "Omar";
// Se asigna el valor "Omar" a la variable miNombre.

// FUNCIONES

// Ejemplo 1
hey();
// Se realiza una llamada a la función hey() antes de su declaración.
// Esto es posible debido al hoisting, que eleva la declaración de la función al principio del ámbito.

function hey() {
    console.log("Hola! " + miNombre);
    // Se imprime en la consola el mensaje "Hola! " seguido del valor de la variable miNombre.
    // En este punto, el valor de miNombre es undefined porque la asignación ocurre después de la llamada a la función.
}

var miNombre = "Omar";
// Se declara la variable miNombre y se le asigna el valor "Omar".
