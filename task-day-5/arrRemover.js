// Array Remover

/* 
    - Terdapat array fruits, berisi list buah
    - menghapus "Jambu" pada array
*/

const fruits = ["Jeruk", "Pepaya", "Jambu", "Anggur", "Melon"];
console.log(fruits);

// hapus menggunakan index value "Jambu"
/* 
    temukan index element pada array,
    jika tidak langsung return array fruits
    jika ditemukan, hapus berdasarkan index
*/
function removeEl(element) {
  let index = fruits.indexOf(element);
  if (index != -1) {
    fruits.splice(index, 1);
  }
  return fruits;
}

// console.log(removeEl("Jambu"));

// menggunakan method filter()
let filteredArr = fruits.filter(el => el !== "Jambu");
console.log(filteredArr);