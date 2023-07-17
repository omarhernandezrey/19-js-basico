// Ejemplo 1: Condición verdadera
if (true) {
    console.log("Hola"); // Imprime "Hola" en la consola
}

// Ejemplo 2: Condición falsa con else
if (false) {
    console.log("Hola");
} else {
    console.log("Soy Falso!"); // Imprime "Soy Falso!" en la consola
}

// Ejemplo 3: Estructura if-else if-else
var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, será la primera votación"); // Imprime "Puedes votar, será la primera votación" en la consola
} else if (edad > 18) {
    console.log("Puedes votar de nuevo"); // No se ejecuta en este ejemplo
} else {
    console.log("No puedes votar todavía."); // No se ejecuta en este ejemplo
}

// Ejemplo 4: Estructura if-else if-else con múltiples condiciones
var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, será la primera votación"); // Imprime "Puedes votar, será la primera votación" en la consola
} else if (edad > 18) {
    console.log("Puedes votar de nuevo"); // No se ejecuta en este ejemplo
} else if (edad > 18) {
    console.log("Puedes votar de nuevo"); // No se ejecuta en este ejemplo
} else if (edad > 18) {
    console.log("Puedes votar de nuevo"); // No se ejecuta en este ejemplo
} else if (edad > 18) {
    console.log("Puedes votar de nuevo"); // No se ejecuta en este ejemplo
} else {
    console.log("No puedes votar todavía."); // No se ejecuta en este ejemplo
}

// Ejemplo 5: Operador ternario
// El operador ternario evalúa la condición (numero === 1).
// Si la condición es verdadera, se asigna el valor "Si soy un uno" a la variable resultado.
// Si la condición es falsa, se asigna el valor "No soy un uno" a la variable resultado.
var numero = 1;
var resultado = numero === 1 ? "Si soy un uno" : "No soy un uno";

console.log(resultado); // Imprime "Si soy un uno" en la consola
