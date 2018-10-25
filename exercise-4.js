var tanggal=30;
var bulan=12;
var tahun=2300;

if ((tanggal < 1 || tanggal > 31) || (tahun > 2200 || tahun < 1900) || (bulan < 1 || bulan > 12)) {
    console.log('masukkan tanggal / bulan / tahun dengan benar');

}
//  else if (tahun > 2200 || tahun < 1900) {
//   console.log('masukkan tahun dengan benar');
// }

  else {

switch(bulan) {
  case 1 :

    bulan = 'januari'; 

    break;

  case 2 : 

    bulan = 'february'; 

    break;
    case 3 : 

    bulan = 'maret'; 

    break;
    case 4 : 

    bulan = 'april'; 

    break;
    case 5 : 

    bulan = 'mei'; 

    break;
    case 6 : 

    bulan = 'juni'; 

    break;
    case 7 : 

    bulan = 'juli'; 

    break;
    case 8 : 

    bulan = 'agustus'; 

    break;
    case 9 : 

    bulan = 'september'; 

    break;
    case 10 : 

    bulan = 'oktober'; 

    break;
    case 11 : 

    bulan = 'november'; 

    break;
    case 12 : 

    bulan = 'desember'; 

    break;


  default:  

  
    console.log('bulan salah');


    break;

}



console.log(tanggal+' '+bulan+' '+tahun);
  }
