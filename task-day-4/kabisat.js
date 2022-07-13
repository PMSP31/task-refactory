// Kabisat

/* 
    - Jika tahun itu habis dibagi 400, maka Kabisat
    - Jika tahun itu tidak habis dibagi 400, tetapi habis 100, maka Bukan Kabisat
    - Jika tahun itu tidak habis digabi 400, tidak habis dibagi 100, tetapi habis dibagi 4. maka Kabisat
    - Jika tahun itu tidak habis digabi 400, tidak habis dibagi 100, dan tidak habis dibagi 4. maka Bukan Kabisat
*/

function checkKabisat(tahun) {
  if ((tahun % 4 == 0 && tahun % 100 != 0) || tahun % 400 == 0) {
    console.log("Kabisat");
  } else {
    console.log("Bukan Kabisat");
  }
}

checkKabisat(1900); // Bukan Kabisat
checkKabisat(2000); // Kabisat
checkKabisat(2001); // Bukan Kabisat
checkKabisat(2016); // Kabisat
