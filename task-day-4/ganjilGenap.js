// Ganjil Genap

// jika kelipatan 2, maka genap.

function checkGanjilGenap(num) {
  return num % 2 == 0 ? "Genap" : "Ganjil";
}

console.log(checkGanjilGenap(43)); // Ganjil
console.log(checkGanjilGenap(1032)); // Genap
