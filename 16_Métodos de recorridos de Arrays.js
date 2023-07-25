// 1. Método .filter
// Definimos un array llamado 'artículos' con objetos que contienen información sobre diversos artículos.
var artículos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Computadora", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audífonos", costo: 1700 }
];

// Utilizamos el método 'filter' para filtrar los elementos del array 'artículos'
// y obtener un nuevo array llamado 'articulosFiltrados' que contiene solo los elementos que cumplen la condición (artículos con costo menor o igual a 500).
var articulosFiltrados = artículos.filter(function(artículo) {
    return artículo.costo <= 500;
});

// Imprimimos el array 'articulosFiltrados' que contiene los artículos filtrados según la condición.
console.log(articulosFiltrados);

// 2. Método .map
// Utilizamos el método 'map' para obtener un nuevo array llamado 'nombreArticulos' que contiene solamente los nombres de los artículos.
var nombreArticulos = artículos.map(function(articulo) {
    return articulo.nombre;
});

// Imprimimos el array 'nombreArticulos' que contiene los nombres de los artículos extraídos del array original.
console.log(nombreArticulos);
