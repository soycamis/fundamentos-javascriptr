// Ttrabajar con strings en Javascript.
// Podemos trabajar los string de diferentes maneras, con comillas simples, dobles o template literals.

// Comillas simples
const myString = 'Hola, soy un string';

// Comillas dobles
const myString2 = "Y yo soy otro string";

// Recuerda usar solo un tipo de comillas para un string, no mezcles comillas simples y dobles.

// Template literals
// Template literals son strings que pueden contener variables, funciones, etc.

const myName = "soycamis";
const sayLastName = () => "Sosa"

const myString3 = `Hola, soy un string y puedo contener vatiables como ${myName} y funciones que retornan valores como ${sayLastName()}`;

console.log(myString);
console.log(myString2);
console.log(myString3);

// El uso de template literals es muy util cuando se necesita concatenar strings con variables o funciones.


// Otra forma de concatener string es usando el operador +, por ejemplo:
const myString4 = myString + " " + myString2;
console.log(myString4);

// Otra forma de concatener string es usando el metodo concat(), el cual puede recibiar varios parametros, ejemplo:
console.log(myString.concat(" ", myString2, " ", myString3));

// Los string tiene una propiedad con la cual podemos saber el numero de caractweres que contiene incluyendo los espacios
// Esta propiedad se llama length.
console.log(`El numero de caracteres y especios que contiene myString ${myString.length}`);

// Lista de propiedades y metodos actualmente soportados por los navegadores:

// length: Devuelve el numero de caracteres que contiene el string.
// charAt(index): Devuelve el caracter en la posicion indicada.
// concat(string): Concatena el string con el string indicado.
// indexOf(string): Devuelve la posicion de la primera ocurrencia del string indicado.
// lastIndexOf(string): Devuelve la posicion de la ultima ocurrencia del string indicado.
// replace(string): Reemplaza la primera ocurrencia del string indicado con el string indicado.
// slice(start, end): Devuelve una parte del string desde la posicion start hasta la posicion end.
// split(separator): Devuelve un array con las partes del string separadas por el separador indicado.
// toLowerCase(): Convierte el string a minusculas.
// toUpperCase(): Convierte el string a mayusculas.
// trim(): Elimina los espacios en blanco al inicio y al final del string.
// trimStart(): Elimina los espacios en blanco al inicio del string.
// trimEnd(): Elimina los espacios en blanco al final del string.
// includes(string): Devuelve true si el string contiene el string indicado.
// startsWith(string): Devuelve true si el string comienza con el string indicado.
// endsWith(string): Devuelve true si el string termina con el string indicado.
// repeat(number): Repite el string el numero de veces indicado.
// padStart(length, string): Rellena el string con el string indicado hasta que el string tenga el numero de caracteres indicado.
// padEnd(length, string): Rellena el string con el string indicado hasta que el string tenga el numero de caracteres indicado.
// charCodeAt(index): Devuelve el codigo unicode del caracter en la posicion indicada.
// fromCharCode(code): Devuelve el caracter con el codigo unicode indicado.
// codePointAt(index): Devuelve el codigo unicode del caracter en la posicion indicada.
// fromCodePoint(code): Devuelve el caracter con el codigo unicode indicado.
// normalize(): Normaliza el string.
// search(string): Devuelve la posicion de la primera ocurrencia del string indicado.
// match(string): Devuelve un array con las coincidencias del string indicado.
// replaceAll(string): Reemplaza todas las ocurrencias del string indicado con el string indicado.