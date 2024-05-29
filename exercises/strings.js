// Strings

// A)
var stringA = "Hola profes";
var stringAMayuscula = stringA.toUpperCase();
//console.log(stringAMayuscula);

// B)
var stringB = "Hola profes2";
var primerosCinco = stringB.substring(0, 5);
//console.log(primerosCinco);

// C)
var stringC = "Hola profes3";
var ultimosTres = stringC.substring(stringC.length - 3);
//console.log(ultimosTres);

// D)
var stringD = "Hola profes4";
var primeraMayuscula = stringD.substring(0, 1).toUpperCase() + stringD.substring(1).toLowerCase();
//console.log(primeraMayuscula);

// E)
var stringE = "Hola profes5";
var posicionEspacio = stringE.indexOf(' ');
//console.log(posicionEspacio);

// F)
var stringF = "Holaaaaa profesores";
var espacio = stringF.indexOf(' ');
var primeraPalabra = stringF.substring(0, espacio);
var segundaPalabra = stringF.substring(espacio + 1);

var primeraPalabraFormato = primeraPalabra.substring(0, 1).toUpperCase() + primeraPalabra.substring(1).toLowerCase();
var segundaPalabraFormato = segundaPalabra.substring(0, 1).toUpperCase() + segundaPalabra.substring(1).toLowerCase();

var resultadoFinal = primeraPalabraFormato + " " + segundaPalabraFormato;
//console.log(resultadoFinal);
