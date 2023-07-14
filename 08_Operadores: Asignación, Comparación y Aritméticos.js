3 + 2;
// Operador aritmético de suma.
// Se realiza la suma entre los operandos 3 y 2.
// El resultado de esta operación es 5.

50 - 10;
// Operador aritmético de resta.
// Se realiza la resta entre los operandos 50 y 10.
// El resultado de esta operación es 40.

10 * 20;
// Operador aritmético de multiplicación.
// Se realiza la multiplicación entre los operandos 10 y 20.
// El resultado de esta operación es 200.

20 / 2;
// Operador aritmético de división.
// Se realiza la división entre los operandos 20 y 2.
// El resultado de esta operación es 10.

"Omar " + "Hernández";
// Operador de concatenación de cadenas.
// Se realiza la concatenación de las cadenas "Omar " y "Hernández".
// El resultado de esta operación es la cadena "Omar Hernández".

!false;
// Operador lógico NOT (negación).
// El operador ! niega el valor booleano del operando.
// En este caso, se niega el valor de false, por lo que el resultado es true.

!true;
// Operador lógico NOT (negación).
// En este caso, se niega el valor de true, por lo que el resultado es false.

3 == "";
// Operador de igualdad débil (==).
// Compara el valor de los operadores 3 y "".
// En este caso, el operador de igualdad débil convierte el operando "" en un número, lo cual resulta en 0.
// Luego compara 3 y 0, y el resultado es false, ya que los valores no son iguales.

3 == "3";
// Operador de igualdad débil (==).
// Compara el valor de los operandos 3 y "3".
// Como el operador de igualdad débil permite la conversión de tipos, se convierte el operando "3" en un número.
// Luego compara 3 y 3, y el resultado es true, ya que los valores son iguales.

3 === "3";
// Operador de igualdad estricta (===).
// Compara el valor y el tipo de los operandos 3 y "3".
// En este caso, los tipos de datos son diferentes (número y cadena), por lo que el resultado es false, incluso si los valores son iguales.

3 === 3;
// Operador de igualdad estricta (===).
// Compara el valor y el tipo de los operandos 3 y 3.
// Ambos operandos son números y tienen el mismo valor 3.
// Por lo tanto, el resultado de esta expresión es true, ya que los valores y los tipos son iguales.

3 == "4";
// Operador de igualdad débil (==).
// Compara el valor de los operandos 3 y "4".
// Como los valores son diferentes, el resultado es false.

3 == "2";
// Operador de igualdad débil (==).
// Compara el valor de los operandos 3 y "2".
// Como los valores son diferentes, el resultado es false.

5 < 3;
// Operador de menor que (<).
// Compara los valores de los operandos 5 y 3.
// En este caso, 5 no es menor que 3.
// El resultado de esta expresión es false.

5 > 3;
// Operador de mayor que (>).
// Compara los valores de los operandos 5 y 3.
// En este caso, 5 es mayor que 3.
// El resultado de esta expresión es true.

5 <= 6;
// Operador de menor o igual que (<=).
// Compara los valores de los operandos 5 y 6.
// En este caso, 5 es menor o igual que 6.
// El resultado de esta expresión es true.

5 >= 6;
// Operador de mayor o igual que (>=).
// Compara los valores de los operandos 5 y 6.
// En este caso, 5 no es mayor o igual que 6.
// El resultado de esta expresión es false.


a && b;
// Operador lógico AND (&&).
// Evalúa el operando a la izquierda (a) y si es falsy (falso), devuelve su valor.
// De lo contrario, evalúa el operando a la derecha (b) y devuelve su valor.
// Si ambos operandos son truthy (verdaderos), el resultado será el valor del segundo operando.
// Si alguno de los operandos es falsy, el resultado será el valor del primer operando.
// No se evalúa el operando a la derecha si el operando a la izquierda es falsy.
// Si ambos operandos son truthy, el resultado será el valor del segundo operando.

a || b;
// Operador lógico OR (||).
// Evalúa el operando a la izquierda (a) y si es truthy (verdadero), devuelve su valor.
// De lo contrario, evalúa el operando a la derecha (b) y devuelve su valor.
// Si alguno de los operandos es truthy, el resultado será el valor del primer operando.
// Si ambos operandos son falsy, el resultado será el valor del segundo operando.
// No se evalúa el operando a la derecha si el operando a la izquierda es truthy.
// Si ambos operandos son falsy, el resultado será el valor del segundo operando.

// Ejemplo 1:
var a = true;
var b = true;
var result = a && b;
// Se definen las variables a y b con el valor booleano true.
// Se utiliza el operador && para evaluar si ambos operandos son truthy.
// En este caso, tanto a como b son truthy, por lo que el resultado será true.
// El valor de result será true.

// Ejemplo 2:
var a = true;
var b = false;
var result = a && b;
// Se definen las variables a y b con diferentes valores booleanos.
// Se utiliza el operador && para evaluar si ambos operandos son truthy.
// En este caso, el operando b es falsy, por lo que no se evalúa el operando b.
// El resultado será false.
// El valor de result será false.

// Ejemplo 3:
var a = false;
var b = true;
var result = a && b;
// Se definen las variables a y b con diferentes valores booleanos.
// Se utiliza el operador && para evaluar si ambos operandos son truthy.
// En este caso, el operando a es falsy, por lo que no se evalúa el operando b.
// El resultado será false.
// El valor de result será false.

// Ejemplo 4:
var a = false;
var b = false;
var result = a && b;
// Se definen las variables a y b con el valor booleano false.
// Se utiliza el operador && para evaluar si ambos operandos son truthy.
// En este caso, el operando a es falsy, por lo que no se evalúa el operando b.
// El resultado será false.
// El valor de result será false.

// Ejemplo 1:
var a = true;
var b = true;
var result = a || b;
// Se definen las variables a y b con el valor booleano true.
// Se utiliza el operador || para evaluar si al menos uno de los operandos es truthy.
// En este caso, tanto a como b son truthy, por lo que el resultado será true.
// El valor de result será true.

// Ejemplo 2:
var a = true;
var b = false;
var result = a || b;
// Se definen las variables a y b con diferentes valores booleanos.
// Se utiliza el operador || para evaluar si al menos uno de los operandos es truthy.
// En este caso, el operando a es truthy, por lo que no se evalúa el operando b.
// El resultado será true.
// El valor de result será true.

// Ejemplo 3:
var a = false;
var b = true;
var result = a || b;
// Se definen las variables a y b con diferentes valores booleanos.
// Se utiliza el operador || para evaluar si al menos uno de los operandos es truthy.
// En este caso, el operando a es falsy, por lo que se evalúa el operando b.
// El resultado será true.
// El valor de result será true.

// Ejemplo 4:
var a = false;
var b = false;
var result = a || b;
// Se definen las variables a y b con el valor booleano false.
// Se utiliza el operador || para evaluar si al menos uno de los operandos es truthy.
// En este caso, tanto a como b son falsy, por lo que se evalúa el operando b.
// El resultado será false.
// El valor de result será false.


var edad = 40;
// Se declara la variable "edad" y se le asigna el valor 40.

edad++;
// Operador de incremento (++) postfix.
// Aumenta el valor de la variable "edad" en 1.
// Después de ejecutar esta línea, el valor de "edad" es 41.

edad;
// Devuelve el valor actual de la variable "edad", que es 41.

edad += 2;
// Operador de asignación compuesta (+=).
// Aumenta el valor de la variable "edad" en 2.
// Después de ejecutar esta línea, el valor de "edad" es 43.

edad;
// Devuelve el valor actual de la variable "edad", que es 43.

                                                            edad++                                                                  