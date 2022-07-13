// Grade

/* 
    - A : >= 90
    - B : >= 80 && <= 89
    - C : >= 70 && <= 79
    - D : >= 60 && <= 69
    - E : <= 59
*/

function checkGrade(value) {
  if (value >= 90) {
    console.log("A");
  } else if (value >= 80 && value <= 89) {
    console.log("B");
  } else if (value >= 70 && value <= 79) {
    console.log("C");
  } else if (value >= 60 && value <= 69) {
    console.log("D");
  } else {
    console.log("E");
  }
}

checkGrade(93); // A
checkGrade(89); // B
checkGrade(83); // B
checkGrade(79); // C
checkGrade(76); // C
checkGrade(69); // D
checkGrade(64); // D
checkGrade(59); // E
checkGrade(34); // E
