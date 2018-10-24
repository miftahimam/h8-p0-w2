function xo(str) {
  var jumlahHurufX = 0;
  var jumlahHurufO = 0;

  for ( var i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
      jumlahHurufX = jumlahHurufX+1;
      
    }
    else if(str[i] === 'o') {
      jumlahHurufO =jumlahHurufO + 1;
    }
  }
  if(jumlahHurufX === jumlahHurufO) {
    return true;
  }
  else if(jumlahHurufX !== jumlahHurufO) {
    return false;
  }
}


// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

