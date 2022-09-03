//Estructuras de Control

//Bifurcaciones
//If -Else

if (true) {
  console.log('Verdadero');
}

if (1) {
  console.log('Verdadero');
} else {
  console.log('Falso');
}

//apliacion de banco

let saldo = 100;
let efectivo = 20;

if (efectivo < saldo) {
  console.log('puede sacar dinero');
} else {
  console.log('No puedes sacar dinero ');
}

//If else + if else

let nota = 5;

if (nota === 5) {
  console.log('Sobresaliente');
} else if (nota === 4) {
  console.log('Buen trabajo');
} else if (nota === 3) {
  console.log('Bueno');
} else if (nota === 2) {
  console.log('Te falto poco para aprobar');
} else if (nota === 1) {
  console.log('No estudiastes');
} else {
  console.log('Introduce una nota entre 1 y 5');
}

//Switch

let nota1 = 6;

switch (nota1) {
  case 5:
    console.log('Sobresaliente');
    break;
  case 4:
    console.log('Buen trabajo');
    break;
  case 3:
    console.log('Bueno');
    break;
  case 2:
    console.log('Te falto poco para aprobar');
    break;
  case 1:
    console.log('No estudiastes');
    break;
  default:
    console.log('Introduce una nota entre 1 y 5');
    break;
}

//Comparaciones

//Igualdad == o === con dos es una igualdad debil con tres es una igualdad fuerte
// == compara el valor
//=== compara el valor y el tipo

let a = 5;
console.log(typeof a);
let b = '5';
console.log(typeof b);

if (a == b) {
  console.log('a es igual a b - Debil');
}

if (a === b) {
  console.log(' a es igual a b - Fuerte');
}

//Desigualdad
// != Diferente
// < > mayor y menor que o >= <=
