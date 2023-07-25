//Ejemplo 1 Objeto 

// var objeto = {};
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2021,
};

//Ejemplo 2 ¿Como puedo acceder a algo especifico si tuviéramos 30 carros como traeríamos la marca o el año o el modelo de los 30 carros? 

miAuto.marca
// Toyota
miAuto.annio
// 2021

//Ejemplo 3 generar qur una de las propiedades del objeto sea una función y esta función pueda hacer cosas con otra de las propiedades de ese objeto

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2021,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

miAuto.detalleDelAuto();
// Auto Corolla 2021

//Ejemplo 4 como replicar como generar 30 objetos de mas automática y no tan manual con el método constructor 
// Ejemplo 4: Generar 30 objetos automáticamente con el método constructor

// Definimos una función constructora llamada Auto.
function Auto(marca, modelo, annio) {
    this.marca = marca; // Propiedad 'marca' con el valor recibido como parámetro.
    this.modelo = modelo; // Propiedad 'modelo' con el valor recibido como parámetro.
    this.annio = annio; // Propiedad 'annio' con el valor recibido como parámetro.
}

// Creamos un array vacío llamado 'autos'.
var autos = [];

// Utilizamos un bucle 'for' para crear 30 objetos de tipo Auto.
for (var i = 0; i < 30; i++) {
    // Creamos un objeto 'auto' utilizando la función constructora Auto.
    var auto = new Auto(`Marca ${i}`, `Modelo ${i}`, 2021 - i);

    // Agregamos cada objeto 'auto' al array 'autos'.
    autos.push(auto);
}

// Imprimimos el array 'autos' que contiene los 30 objetos creados.
console.log(autos);
