// 50 Bilangan Ganjil

/* 
    - buat array kosong, untuk menampung 50 bilangan ganjil
    - lakukan looping dari 1 hingga 100, untuk menemukan bilangan ganjil
    - jika bukan kelipatan 2, maka bilangan ganjil
*/

let bilGanjil = [];

for (let i = 1; i <= 100; i++) {
  if (i % 2 != 0) {
    bilGanjil.push(i);
  }
}

console.log(bilGanjil);
