
// nomor 1

function shoutOut() {
  return "Halo Function!";
}
console.log(shoutOut());


// nomor 2

function calculateMultiply(num1,num2) {
  return num1 * num2;

}
var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); 

// nomor 3
function processSentence(name,age,address,hobby) {
  return name + age + address + hobby;

}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log("nama saya" +' '+ name + ' ' + ", umur saya" +' '+ age +' ' + ", alamat saya" +' '+ address +' '+ ", hobby saya" +' '+ hobby); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"