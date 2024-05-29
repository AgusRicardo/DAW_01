// Arrays

// A)
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Mes 5:", meses[4]); 
console.log("Mes 11:", meses[10]);

// B)
var mesesOrdenados = [...meses].sort();
console.log(mesesOrdenados);

// C)
meses.unshift("Inicio");
meses.push("Fin");
console.log(meses);

// D)
meses.shift();
meses.pop();
console.log(meses);

// E)
meses.reverse();
console.log(meses);

// F)
var mesesString = meses.join("-");
console.log(mesesString);

// G)
var mesesOriginal = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var mesesCopia = mesesOriginal.slice(4, 11);
console.log(mesesCopia);
