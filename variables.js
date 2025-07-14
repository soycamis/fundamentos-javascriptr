// Siempre usar const para declarar variables que no van a cambiar
// Siempre usar let para declarar variables que van a cambiar


// Buenas practicas para declarar constantes

const myName = "soycamis";
let myJob = "developer & pentester security web";

console.log(`Hola, mi nombre es ${myName} y mi trabajo es ${myJob}`);

// Una de las malas practicas al declarar variables ya sea con lety o const es que no tengan un nombre descriptivo,
// por ejemplo:

const a = 1;
const b = 2;
const c = 3;

console.log(a, b, c);

// Ese tipo de nombres no son descriptivos y no son facil de entender, por lo tanto, una buena practica es que el nombre de la variable sea descriptivo y que sea facil de entender.

// En Javascript, otra buena practica es declarar el nombre en formato camelCase, como lo hicimos en la parte superior:

// const myName = "soycamis";
// let myJob = "developer & pentester security web";