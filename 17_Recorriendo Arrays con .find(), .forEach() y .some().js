var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audífonos", costo: 1700 },
];

//Método find();ayuda a encontrar algo dentro de los articulos
//En este caso, buscamos el objeto con un valor igual al que le pasamos
//como parámetro. Si no lo encuentra devuelve undefined y si lo encuentra
//devuelve ese elemento del array.
var encuentraArticulo = articulos.find(function(articulo) {
    return articulo.nombre === "Laptop";
});
console.log(encuentraArticulo);


//Método forEach(); ayuda a filtrar sobre el array sin codiciarlo y me regresa cosas
// Utilizamos el método 'forEach' para recorrer todos los elementos del array 'articulos'.
// En cada iteración, la función pasada como argumento al método 'forEach' imprime el nombre de cada artículo en la consola.
articulos.forEach(function(articulo) {
    console.log(articulo.nombre);
});


// Utilizamos el método 'some' para verificar si hay al menos un artículo con costo menor o igual a 700.
// La función pasada como argumento al método 'some' evalúa la condición para cada elemento del array.
// En este caso, si se encuentra al menos un artículo con costo menor o igual a 700, se devuelve 'true';
// de lo contrario, se devuelve 'false'.
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

articulosBaratos;

