const name = 'Matias';
const age = 17  ;
const city = 'Armenia';
const descripcion = `Me llamo ${name},
 tengo ${age}) años y
 vivo en ${city}.`;

console.log(descripcion);

console.log(typeof name);
console.log(typeof age);
console.log(typeof city);

const anioActual = 2026;

console.log(anioActual - age);

const edadTexto = "19";  
console.log(edadTexto + 1); // Da 119 porque edadTexto es de tipo texto y el + en ese caso lo que hace es concatenar el 1.

console.log(Number(edadTexto) + 1); // Da 20 porque el Number lo que esta haciendo es convertir edadTexto que es una variable de tipo texto a numero, por lo que el usu si se puede sumar.S
