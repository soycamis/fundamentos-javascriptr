// Tipo de datos en Javascript.

// Primitivos:

// String
const myName = "soycamis";

// Number
const myAge = 20;

// Boolean
const isDeveloper = true;

// Null, aca este valor puede ocuparse caundo no existe ni la declaracion de la variable, ni el valor de la variable. Aun que tambien puede ser un valor asignado a una variable como en el ejemplo de abajo.
const myNull = null;

// Undefined, este valor se asigna cuando no se le asigna un valor a una variable.
const myUndefined = undefined;

// Symbol
const mySymbol = Symbol("soycamis");

// BigInt, este valor se asigna cuando se necesita un numero muy grande.
const myBigInt = 123456789012345678901234567890n;

// Object, puede contener diferentes tipos de datos, hasta funciones.
const myObject = {
    name: "soycamis",
    age: 20,
    isDeveloper: true,
    sayMyName: function() {
        return `Hola, soy ${this.name}`;
    }
};

// Array, puede contener diferentes tipos de datos.
const myArray = [1, 2, 3, 4, 5];

// Function
const myFunction = function() {} // Esta es manera tradicional de declarar una funcion.

// Arrow function
const myArrowFunction = () => {} // Esta es manera moderna de declarar una funcion.

// Ejemplo de una funcion que retorna un valor.
const myFunction2 = function() {
    return "Hola, soy una funcion";
}

