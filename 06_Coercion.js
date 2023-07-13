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

//Ejemplos de Coerción:

var a = 4 + "7"; //Convierte a 4 en un string y lo concatena con el "7", por esto regresa un string de valor "47"

4 * "7"; //Convierte al "7" en un número y realiza la operación, por esto devuelve 28

var a = 20;
var b = a + ""; //Aquí concatenamos para convertir la variable a string (coerción implícita)
console.log(b); 

var c = String(a); //Aquí obligamos a la variable a convertirse en string (coerción explícita)
console.log(c);

var d = Number(c); //Aquí obligamos a la variable a convertirse en número (coerción explícita)
console.log(d);