var coding = 'I love coding';
var x = 'LOOPING PERTAMA';
var angka = 2;

var java = 'I will become fullstack developer';
var angka2 = 20;
var y = 'LOOPING KEDUA';

// NOMOR 1
console.log();
console.log(x);
while(angka <= 20) {
  console.log(angka + ' - ' + coding);
  angka = angka + 2;
}
 
  console.log(y);
  while(angka2 >= 2) {
  console.log(angka2 + ' - ' + java);
  angka2 = angka2 - 2;
}

// NOMOR 2
console.log();
console.log(x);
for(var angka3 = 1; angka3 <= 20; angka3++) {
  console.log(angka3 + ' - ' + coding);
}

console.log(y);
for(var angka4 = 20; angka4 >= 1; angka4--) {
  console.log(angka4 + ' - ' + java);

}



// NOMOR 3 BAGIAN NOMOR 1
console.log();
console.log('Perulangan 1 - 100 Penambahan counter 1'+ ' '+ ':');
for (var i = 1; i <= 100; i ++) {
  console.log(i);

}


//NOMOR 3 BAGIAN NOMOR 2
console.log('')
console.log('1 - 100 ganjil dan genap'+ ' '+ ':');
for (var i = 1; i <= 100; i ++) {
  
  if(i%2) {
    console.log(i + ' ' + 'ganjil');
  }
  else if(i + 2) {
    console.log(i +' ' + 'genap');
  }
}

// NOMOR 3 BAGIAN NOMOR 3 DAN 4
console.log('')
console.log('Penambahan counter 2'+ ' '+ ':');
for (var i = 1; i <= 100; i += 2) {
  if(i % 3 === 0){
    console.log(i +' '+ 'kelipatan 3');
  }
}

console.log('')
console.log('Penambahan counter 5'+ ' '+ ':');

for (var i = 1; i <= 100; i += 5) {
if(i % 6 === 0){
    console.log(i +' '+ 'kelipatan 6');
  }

 }

console.log('')
console.log('Penambahan counter 9'+ ' '+ ':');

for (var i = 1; i <= 100; i += 9) {
if(i % 10 === 0){
    console.log(i +' '+ 'kelipatan 10');
  }
}






 


