// Rating Film

/* 
    Dewasa : >= 21
    Remaja : >= 13
    Bimbingan Orang Tua : >= 9
    Semua Usia : < 9
*/

function filmRating(usia) {
  if (usia >= 21) {
    console.log("Dewasa");
  } else if (usia >= 13) {
    console.log("Remaja");
  } else if (usia >= 9) {
    console.log("Bimbingan Orang Tua");
  } else {
    console.log("Semua Usia");
  }
}

filmRating(32); // Dewasa
filmRating(16); // Remaja
filmRating(10); // Bimbingan Orang Tua
filmRating(5); // Semua Usia
