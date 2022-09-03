//Listas, array o arreglo

const lista = [1, 'Hola', true, undefined, null];
const lista2 = new Array(2, 'Hola', true, undefined, null);
const lista3 = new Array(3);

console.log(lista);
console.log(lista2);
console.log(lista3);

//Objetos
const movil = {
  altura: 10,
  anchura: 5,
  marca: 'sony',
  isWhite: true,
  contactos: ['Benja', 'Marguis'],
  tarjeta: {
    marca: 'Expiria',
    almacenamiento: 32,
  },
};

console.log(movil.tarjeta.almacenamiento);

//Fechas

//Librerias de apoto para fechas Moment.js

const ahora = new Date();
console.log(ahora);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anyo = ahora.getFullYear();

console.log(dia, mes, anyo);
