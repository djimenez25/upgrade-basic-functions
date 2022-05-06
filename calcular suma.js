console.log("Archivo calcular suma funcionando OK");

// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let sum = 0;
  for (let i = 0; i < param.length; i++) {
      sum += param[i];
  }
  return sum;
}
console.log(sumAll(numbers))
