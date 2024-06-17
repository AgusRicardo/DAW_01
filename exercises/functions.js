// Funciones

// A)
function suma(a, b) {
  return a + b;
}

var resultado = suma(5, 3);
console.log(resultado);

// B)
function suma(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
      //alert("Uno de los parametros no es un numero");
      return NaN;
  }
  return a + b;
}

resultado = suma(5, "3");
console.log("El resultado de la suma con validación es: " + resultado);

// C)
function validateInteger(num) {
  return Number.isInteger(num);
}

console.log(validateInteger(5)); 
console.log(validateInteger(5.5));

// D)
function suma(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
      //alert("Uno de los parametros no es un numero");
      return NaN;
  }
  if (!validateInteger(a)) {
      //alert("El primer numero no es un entero, se convertira a entero");
      a = Math.round(a);
  }
  if (!validateInteger(b)) {
      //alert("El segundo numero no es un entero, se convertira a entero");
      b = Math.round(b);
  }
  return a + b;
}

resultado = suma(5.7, 3.3);
console.log("El resultado de la suma con validación de enteros es: " + resultado);

// E)
function validateInteger(num) {
  return Number.isInteger(num);
}

function validarYConvertirEntero(num) {
  if (!validateInteger(num)) {
      //alert("El numero " + num + " no es un entero, se convertira a entero");
      return Math.round(num);
  }
  return num;
}

function suma(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
      //alert("Uno de los parametros tiene error: no es un numero");
      return NaN;
  }
  a = validarYConvertirEntero(a);
  b = validarYConvertirEntero(b);
  return a + b;
}

resultado = suma(5.7, "3.3");
console.log("El resultado de la suma con validación separada es: " + resultado);
