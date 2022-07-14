// Loop with range

/* 
    - Buat function, yang menerima 2 parameter
    - parameter angka awal, dan parameter angka akhir
    - loop dari angka awal sampai angka akhir
*/

/* function loopWithRange(awal, akhir) {
  for (let i = awal; i <= akhir; i++) {
    console.log(i);
  }
} */

// variasi
// jika angka awal lebih kecil, looping penambahan/maju
// jika angka awal lebih besar, looping pengurangan/mundur

function loopWithRange(awal, akhir) {
  if (awal < akhir) {
    for (let i = awal; i <= akhir; i++) {
      console.log(i);
    }
  } else {
    for (let i = awal; i >= akhir; i--) {
      console.log(i);
    }
  }
}

loopWithRange(4, 8); // 4,5,6,7,8
console.log("========");
loopWithRange(8, 4); // 8,7,6,5,4
