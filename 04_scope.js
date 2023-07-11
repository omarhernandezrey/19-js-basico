var miNombre = "Omar"; // Declaración de la variable miNombre y asignación del valor "Omar"

function nombre() { // Declaración de la función nombre
  var miApellido = "Hernandez"; // Declaración de la variable miApellido y asignación del valor "Hernandez"
  console.log(miNombre + " " + miApellido); // Imprime en la consola la concatenación de miNombre y miApellido
}

nombre(); // Llamada a la función nombre
// Esto imprimirá "Omar Hernandez" en la consola

miNombre; // Acceso a la variable miNombre
// Esto devolverá el valor "Omar"

miApellido; // Intento de acceso a la variable miApellido
// Esto causará un error ya que miApellido solo está definido dentro del alcance de la función nombre y no es accesible fuera de ella.