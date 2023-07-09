// Declaración de función (declarativa)
function miFunción() {
    return 3;
}

miFunción();
// Llamada a la función miFunción sin argumentos.
// Esto devolverá el valor 3.

// Expresión de función
var miFunción = function(a, b) {
    return a + b;
}

miFunción();
// Llamada a la función miFunción sin argumentos.
// Esta función toma dos parámetros, a y b, y devuelve la suma de ambos.
// Sin embargo, en este caso, la llamada dará un error, ya que la variable miFunción fue reasignada con una función anónima, pero no se le dio un nuevo valor antes de la llamada.
// Por lo tanto, miFunción no es una función en este punto y no puede ser llamada.

