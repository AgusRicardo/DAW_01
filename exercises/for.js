// Bucles for

// A)
var palabras = ["manzana", "banana", "cereza", "durazno", "kiwi"];
for (var i = 0; i < palabras.length; i++) {
    alert(palabras[i]);
}

// B)
for (var i = 0; i < palabras.length; i++) {
  var palabraModificada = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
  alert(palabraModificada);
}

// C)
var sentence = "";
for (var i = 0; i < palabras.length; i++) {
    sentence += palabras[i] + " ";
}
alert(sentence.trim());

// C)
var numeros = [];
for (var i = 0; i < 10; i++) {
    numeros.push(i);
}
console.log(numeros);

