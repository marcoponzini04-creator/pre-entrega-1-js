const nombre = prompt("Cual es tu nombre?");
console.log(nombre);

const entradas = prompt("¿Cuantas entradas deseas comprar?");
const cantidad = parseInt(entradas);
const precioEntradas = prompt("¿Cual es el precio de las entradas?");
const precio = parseFloat(precioEntradas);
const total = cantidad * precio;
alert("El total a pagar es: " + total + " pesos por " + cantidad + " entradas. Gracias por tu compra, " + nombre + "!");