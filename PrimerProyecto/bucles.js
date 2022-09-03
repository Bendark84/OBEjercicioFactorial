//Estructuras de control

//Bucles for y while

//for

// for(inicializacion; condicion; actualizacion){
//Aqui se ejecuta el bucle
// }

//i = i +1
//i += 1
//i++

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let lista = [1, 4, 6, 2, 3, 10];
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}

//for of
for (let valor of lista) {
  console.log(valor);
}

//forEach

lista.forEach((valor) => {
  console.log(valor);
});

//for in

let persona = {
  Nombre: 'Benja',
  Apellido: 'Roca',
  Edad: 37,
};

for (let propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}

//while
let i = 0;
let max = 10;

// while(condicion){

// }

while (i < max) {
  console.log(i);
  i++;
}

//Do while

i = 0;

do {
  i++;
} while (i < max);
{
}
