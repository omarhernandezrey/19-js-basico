//COERCION IMPLÍCITA 
//Ejemplo:1
4 + "7";
// En esta expresión se realiza una suma entre el número 4 y la cadena "7".
// Debido a la regla de coerción en JavaScript, cuando se encuentra una operación de concatenación (suma entre un número y una cadena), se convierte el número en una cadena y se realiza la concatenación.
// En este caso, el número 4 se convierte en la cadena "4" y luego se concatena con la cadena "7".
// El resultado de esta expresión es la cadena "47".

var a = 4 + "7";
// Aquí se asigna el resultado de la expresión 4 + "7" a la variable a.
// Como mencionamos anteriormente, esta expresión da como resultado la cadena "47".
// Por lo tanto, la variable a tendrá el valor de "47".

typeof a;
// La función typeof se utiliza para obtener el tipo de dato de una variable o expresión.
// En este caso, se está obteniendo el tipo de dato de la variable a.
// Dado que a contiene la cadena "47", el resultado de typeof a será "string", que indica que a es una cadena de texto.

//Ejemplo: 2

4 * "7";
// En esta expresión se realiza una multiplicación entre el número 4 y la cadena "7".
// Debido a la regla de coerción en JavaScript, cuando se encuentra una operación aritmética (como la multiplicación) entre un número y una cadena que representa un número válido, se realiza la conversión implícita de la cadena a un número y se realiza la operación.
// En este caso, la cadena "7" se convierte en el número 7 y se realiza la multiplicación 4 * 7.
// El resultado de esta expresión es el número 28.

var b = 4 * "7";
// Aquí se asigna el resultado de la expresión 4 * "7" a la variable b.
// Como mencionamos anteriormente, esta expresión da como resultado el número 28.
// Por lo tanto, la variable b tendrá el valor de 28.

typeof b;
// La función typeof se utiliza para obtener el tipo de dato de una variable o expresión.
// En este caso, se está obteniendo el tipo de dato de la variable b.
// Dado que b contiene el número 28, el resultado de typeof b será "number", que indica que b es un número.

// COERCION EXPLICITA

//Ejemplos de Coerción explicita:

var a = 20;
var b = a + "";
// En esta línea, se realiza una concatenación entre la variable a y una cadena vacía ("").
// Esto causa una coerción implícita del número a en una cadena, ya que el operador + se comporta como concatenación cuando uno de los operandos es una cadena.
// El resultado es una cadena que contiene el valor de a convertido a texto.

console.log(b);
// Imprime el valor de b en la consola, que es "20".
// Como resultado de la concatenación, b es una cadena.

typeof b;
// La función typeof se utiliza para obtener el tipo de dato de una variable o expresión.
// En este caso, se está obteniendo el tipo de dato de la variable b.
// Dado que b contiene la cadena "20", el resultado de typeof b será "string", que indica que b es una cadena de texto.

var c = String(a);
// En esta línea, se utiliza la función String() para realizar una coerción explícita del número a en una cadena.
// La función String() convierte cualquier valor en su representación de cadena.

console.log(c);
// Imprime el valor de c en la consola, que también es "20".
// Debido a la coerción explícita, c es una cadena.

typeof c;
// Obtiene el tipo de dato de c, que es una cadena de texto ("string").

typeof a;
// Obtiene el tipo de dato de a, que es un número ("number").

var d = Number(c);
// En esta línea, se utiliza la función Number() para realizar una coerción explícita de la cadena c en un número.
// Si la cadena representa un número válido, la función Number() devuelve ese número.

typeof d;
// Obtiene el tipo de dato de d, que es un número ("number").
