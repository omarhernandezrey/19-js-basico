// Ejemplo 1: Función constructora
// Definimos una función constructora llamada 'auto'.
function auto(marca, modelo, annio) {
    this.marca = marca; // Propiedad 'marca' con el valor recibido como parámetro.
    this.modelo = modelo; // Propiedad 'modelo' con el valor recibido como parámetro.
    this.annio = annio; // Propiedad 'annio' con el valor recibido como parámetro.
}

// Creamos un nuevo objeto 'autoNuevo' utilizando la función constructora 'auto'.
var autoNuevo = new auto("Tesla", "Model 3", 2020);

// Creamos otros objetos 'autoNuevo2' y 'autoNuevo3' utilizando la función constructora 'auto'.
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Toyota", "Corolla", 2020);

// Ejemplo 2: Crear objetos automáticamente con un bucle
// Creamos un array vacío llamado 'autos'.
var autos = [];

// Utilizamos un bucle 'for' para crear 5 objetos de tipo 'auto' de forma más automática.
for (var i = 0; i < 5; i++) {
    // Creamos un objeto 'autoNuevo' utilizando la función constructora 'auto'.
    var autoNuevo = new auto(`Marca ${i}`, `Modelo ${i}`, 2021 - i);

    // Agregamos cada objeto 'autoNuevo' al array 'autos'.
    autos.push(autoNuevo);
}

// Imprimimos el array 'autos' que contiene los objetos creados automáticamente.
console.log(autos);
