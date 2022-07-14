// Add to Array

/* 
    - terdapat array
    - tambahkan "Handuk" di awal array, "Celana" di akhir array
*/

const stuff = ['Meja', 'Buku', 'Topi', 'Baju', 'Kayu']

function addElement(awal, akhir){
    stuff.unshift(awal);
    stuff.push(akhir);

    return stuff;
}

console.log(addElement("Handuk", "Celana"));
// bisa tambah element baru lagi
console.log(addElement("Kursi", "Gelas"));