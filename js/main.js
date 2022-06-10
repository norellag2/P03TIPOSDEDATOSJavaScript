//Tipos de datos JS

//Tipos de datos primitivos

//-String o cadena de caracteres
//Sintaxis usan comillas (simples o dobles)
//En JS se usan secuencias de escape dentro de las cadenas (\)
let ciudad = 'Villa de \nMadrid' //salto de línea \n
console.log (ciudad);

//Para escapar las comillas (simples o dobles)
let calle ='Avenida de O\'Donell'; //ponemos la barra invertida y salta esa coma del nombre
console.log (calle);

//- Tipos number (todos los tipos numéricos)
//Sintaxis de número con . para los decimales
let resultado = 8.6;

//-Tipos boolean (para expresiones condicionales)
//Solo tienen dos posibles valores true o false

let esmayorEdad = false; 

//-Tipo-valor null
//null es asignado cuando queremos que una variable tenga un valor pero no sabemos cual es

let localidad = null;

//-Tipo-valor undefined
//es un valor asignado por el interprete cuando la variable aún no tiene ningún valor asignado

let marca;
console.log(marca);


//Tipos de datos compuestos

// Arrays o arreglos colecciones de variables que tienen algo en común
//Sintaxis []
let categorias = ['hombre', 'mujer', 'niño','niña'];

//Objetos (representación de conjuntos de datos en el programa)
// Sintaxis { propiedad: valor }
let jugador = {
    nombre: 'Cristiano',
    apellidos: 'Do Santos Aveiro',
    edad: 34,
    equipo: ['Real Madrid','Juventus','Manchester'],
}

//Disponemos de un operador typeof que retorna el tipo de dato de una variable
let email = 'pedro@pedro.com';
console.log(typeof email);

// Recordamos que js es un lenguaje de tipado débil y flexible (no se declara el tipo de dato y puede cambiar durante el programa)
email = 12; // aunque no sirve para nada no retorna error